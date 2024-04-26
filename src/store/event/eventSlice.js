import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createEvent = createAsyncThunk(
  "event/createEvent",
  async (formData, thunkAPI) => {
    try {
      console.log(formData);
      const response = await fetch("http://localhost:8080/api/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create event");
      }
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: [],
  },
  reducers: {},
  selectors: {
    selectEvents: (state) => state.events,
    selectNumberOfEvents: (state) => state.events.length,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEvent.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userAccount = console.log("Event created: ", action.payload);
        state.userAccount = action.payload;
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
        console.error("Error creating event: ", action.error.message);
      });
  },
});

export const { selectEvents, selectNumberOfEvents } = eventSlice.selectors;

export default eventSlice.reducer;
