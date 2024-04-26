import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signInUser } from "../../utils/firebase/firebase.utils";

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
      const data = await response.json();
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

export const signIn = createAsyncThunk(
  "user/signIn",
  async (signInData, thunkAPI) => {
    try {
      const { email, password } = signInData;
      const { user } = await signInUser(email, password);
      const userToken = await user.getIdToken();

      const response = await fetch(
        `http://localhost:8080/api/student?id=${userToken}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message | "Failed to sign in user");
      }
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userAccount: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userAccount = action.payload;
    },
    logOffUser: (state, action) => {
      state.userAccount = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userAccount = action.payload;
        console.log(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
        alert(action.payload.message);
      })
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userAccount = action.payload;
        console.log(action.payload);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
        alert(action.payload.message);
      });
  },
});

export const { setUser, logOffUser } = userSlice.actions;
export const selectUser = (state) => state.user.userAccount;

export default userSlice.reducer;
