import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../utils/axiosConfig";

export const getSchools = createAsyncThunk(
  "school/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.get("/school/all");
      return await response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const selectSchool = createAsyncThunk(
  "schoolSelection/selectSchool",
  async (school) => {
    localStorage.setItem("selectedSchool", JSON.stringify(school));

    return school;
  }
);
