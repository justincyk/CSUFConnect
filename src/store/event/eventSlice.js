import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: [],
  },
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
  },
  selectors: {
    selectEvents: (state) => state.events,
    selectNumberOfEvents: (state) => state.events.length,
  },
});

export const { addEvent } = eventSlice.actions;
export const { selectEvents, selectNumberOfEvents } = eventSlice.selectors;

export default eventSlice.reducer;
