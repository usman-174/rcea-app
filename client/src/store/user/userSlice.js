import { createSlice } from '@reduxjs/toolkit';
import {
	registerUser, loginUser, logout, getUserDetails
} from './userActions';

const authToken = localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')) : null;
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
	loading: false,
	userInfo,
	authToken,
	error: null,
	success: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {
		// register user
		[registerUser.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[registerUser.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = payload; // registration successful
		},
		[registerUser.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},

		// Login User
		[loginUser.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[loginUser.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.userInfo = payload.UserData;
			// state.authToken = payload.access_token;
		},
		[loginUser.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},

		// Logout User
		[logout.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[logout.fulfilled]: (state) => {
			state.loading = false;
			state.success = true;
			state.authToken = null;
			state.error = null;
			state.userInfo = null;
			localStorage.setItem('userToken', null);
			localStorage.setItem('userInfo', null)
		},
		[logout.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},

		[getUserDetails.pending]: (state) => {
			state.loading = true;
		},
		[getUserDetails.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.userInfo = payload.user;
		},
		[getUserDetails.rejected]: (state) => {
			state.loading = false;
		},
	},
});
export default userSlice.reducer;
