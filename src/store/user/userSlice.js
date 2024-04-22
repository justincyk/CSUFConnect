import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userAccount: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logoffUser: (state, action) => {
      state.user = null;
    },
  },
  selectors: {
    selectUser: (state) => state.userAccount,
  },
});

export const { setUser, logoffUser } = userSlice.actions;
export const { selectUser } = userSlice.selectors;

export default userSlice.reducer;
