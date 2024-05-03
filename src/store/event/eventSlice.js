import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { createSelector } from "reselect";

import { putPhoto, getPhoto } from "../../utils/aws/aws.utils";

import { CategoryEnum } from "../../components/event-creation/categoryEnum";

export const createEvent = createAsyncThunk(
  "event/createEvent",
  async (formData, thunkAPI) => {
    try {
      const formDataWithoutImage = { ...formData, eventImage: null };
      const response = await fetch("http://localhost:8080/api/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithoutImage),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create event");
      }
      // return response.json();
      const data = await response.json();

      if (formData.eventImage != null) {
        const imageName =
          "event" + data.id + "." + formData.eventImage.type.split("/")[1];

        const imageResponse = await fetch(putPhoto(imageName), {
          method: "PUT",
          body: formData.eventImage,
          mode: "cors",
          headers: {
            "Content-Type": formData.eventImage.type,
          },
        });
        if (!imageResponse.ok) {
          const errorData = await imageResponse.json();
          console.log(errorData.message);
          throw new Error(errorData.message || "Failed to save image onto AWS");
        }

        const saveImageURLResponse = await fetch(
          `http://localhost:8080/api/event/${data.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: getPhoto(imageName),
          }
        );

        if (!saveImageURLResponse.ok) {
          const errorData = await saveImageURLResponse.json();
          console.log(errorData.message);
          throw new Error(
            errorData.message || "Failed to save image URL onto Spring Boot"
          );
        }

        const eventWithImageData = await saveImageURLResponse.json();

        return eventWithImageData;
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

export const getEvents = createAsyncThunk(
  "event/getEvents",
  async (formData, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:8080/api/event/all");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create event");
      }
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createEvent.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
        console.error("Error creating event: ", state.error);
      })
      .addCase(getEvents.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.events = action.payload;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
        console.error("Error creating event: ", action.error);
      });
  },
});

export const selectEventStatus = (state) => state.event.status;
export const selectEvents = (state) => state.event.events;
export const selectOrganizedEvents = createSelector(
  [selectEvents],
  (eventsArray) => {
    const organizedEvents = Object.values(CategoryEnum).reduce(
      (acc, categoryName) => {
        const categoryEvents = eventsArray.filter(
          (event) => event.category === categoryName
        );
        acc[categoryName] = categoryEvents;
        return acc;
      },
      {}
    );

    return organizedEvents;
  }
);

export const selectEventById = (eventId) => (state) => {
  const event = state.event.events.find((event) => event.id == eventId);
  return event;
};

export const selectEventDetails = createSelector([selectEvents], (events) => {
  return events.map((event) => ({
    id: event.id,
    name: event.name,
    category: event.category,
  }));
});

export default eventSlice.reducer;
