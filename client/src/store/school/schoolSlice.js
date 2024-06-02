import { createSlice } from "@reduxjs/toolkit";
import { getSchools, selectSchool } from "./schoolActions";

const initialState = {
  loading: false,
  selectedSchool: localStorage.getItem("selectedSchool")
    ? JSON.parse(localStorage.getItem("selectedSchool"))
    : null,
  schoolInfo: null,
  error: null,
  success: false,
};

const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {},
  extraReducers: {
    [selectSchool.fulfilled]: (state, action) => {
      state.selectedSchool = action.payload.school;
    },
    [getSchools.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getSchools.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.schoolInfo = payload;
    },
    [getSchools.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default schoolSlice.reducer;
