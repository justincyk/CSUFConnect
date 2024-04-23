import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userData, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:8080/api/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message | "Failed to create user");
      }
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userAccount: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userAccount = action.payload;
    },
    logoffUser: (state, action) => {
      state.userAccount = null;
    },
  },
  selectors: {
    selectUser: (state) => state.userAccount,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userAccount = console.log("User created: ", action.payload);
        state.userAccount = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
        console.error("Error creating user: ", action.error.message);
      });
  },
});

export const { setUser, logoffUser } = userSlice.actions;
export const { selectUser } = userSlice.selectors;

export default userSlice.reducer;
