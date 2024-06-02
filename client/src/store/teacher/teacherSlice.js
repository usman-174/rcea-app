import { createSlice } from '@reduxjs/toolkit';
import {
	createTeacher,
	deleteTeacher,
	getTeacherDetails,
	getTeachers,
	searchTeachers,
	updateTeacher
} from './teacherActions';

const initialState = {
	loading: false,
	teacher: null,
	error: null,
	success: false,
};

const teacherSlice = createSlice({
	name: 'teacher',
	initialState,
	reducers: {},
	extraReducers: {
		[getTeachers.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[getTeachers.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.teacher = payload;
		},
		[getTeachers.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[searchTeachers.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[searchTeachers.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.teacher = payload;
		},
		[searchTeachers.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[getTeacherDetails.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[getTeacherDetails.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.teacher = payload;
		},
		[getTeacherDetails.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[createTeacher.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[createTeacher.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.teacher = payload;
		},
		[createTeacher.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[updateTeacher.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[updateTeacher.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.teacher = payload;
		},
		[updateTeacher.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		[deleteTeacher.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[deleteTeacher.fulfilled]: (state) => {
			state.loading = false;
			state.success = true;
		},
		[deleteTeacher.rejected]: (state, { payload }) => {
			state.loading = false;
			state.success = false;
			state.error = payload;
		}
	},
});

export default teacherSlice.reducer;
