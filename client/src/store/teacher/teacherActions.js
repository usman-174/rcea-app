/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../utils/axiosConfig';

export const getTeachers = createAsyncThunk('teacher/all', async ({ school_id }, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.get('/teacher/allbysection/'+school_id);
		return await response.data;
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});

export const searchTeachers = createAsyncThunk('teacher/search', async ({ query }, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.post('/teacher/search', {
			name: query
		});

		return await response.data;
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});

export const getTeacherDetails = createAsyncThunk('teacher/details', async ({ id }, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.get(`/teacher/${id}`);
		return await response.data;
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});

export const createTeacher = createAsyncThunk('teacher/create', async ({
	address, gender, postingYear, qualifications, grade, firstName, lastName, phone, hire_date, school_id, nationalID
}, {
	rejectWithValue
}) => {
	try {
		const response = await axiosConfig.post('/teacher/create', {
			address, firstName, lastName, phone, hire_date, gender, postingYear, qualifications, grade, school_id, nationalID
		});

		return await response.data.data;
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});

export const updateTeacher = createAsyncThunk('teacher/update', async ({
	id, address, gender, postingYear, qualifications, grade, firstName, lastName, phone, hire_date, nationalID
}, {
	rejectWithValue
}) => {
	try {
		const response = axiosConfig.post(`/teacher/${id}`, {
			address, gender, postingYear, qualifications, grade, firstName, lastName, phone, hire_date, nationalID
		});

		return await response.data.data;
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});

export const deleteTeacher = createAsyncThunk('teacher/delete', async ({ id }, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.delete(`/teacher/delete/${id}`);
		return await response.data;
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});
