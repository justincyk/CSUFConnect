import { configureStore } from "@reduxjs/toolkit";

import eventReducer from "./event/eventSlice";
import userReducer from "./user/userSlice";

export default configureStore({
  reducer: {
    event: eventReducer,
    user: userReducer,
  },
});
