import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../utils/axiosConfig";

export const registerUser = createAsyncThunk(
  "user/register",
  async (
    { firstname, lastname, username, email, password, role },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosConfig.post("/auth/register", {
        firstname,
        lastname,
        username,
        email,
        password,
        role,
      });

      return await response.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.post("/auth/login", {
        email,
        password,
        localStorage,
      });
      localStorage.setItem("token", response.data.access_token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async ({ localStorage }, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.post("/auth/logout");
      localStorage.removeItem("token");
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      // const { user } = getState();

      // // configure authorization header with user's token
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${user.userToken}`,
      //   },
      // };
      const { data } = await axiosConfig.get("/auth/me",{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return data;
    } catch (error) {
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);
