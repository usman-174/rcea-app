import { createSlice } from '@reduxjs/toolkit';
import {
	getPupilDetails,
	createPupil,
	updatePupil,
	deletePupil,
	getPupils,
	searchPupils,
	createEOT
} from './pupilActions';

const initialState = {
	loading: false,
	pupilInfo: null,
	error: null,
	success: false,
};

const pupilSlice = createSlice({
	name: 'pupil',
	initialState,
	reducers: {},
	extraReducers: {
		// All Pupils
		[getPupils.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[getPupils.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.pupilInfo = payload;
		},
		[getPupils.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		// Search Pupils
		[searchPupils.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[searchPupils.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.pupilInfo = payload;
		},
		[searchPupils.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		// Pupil Details
		[getPupilDetails.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[getPupilDetails.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.pupilInfo = payload;
		},
		[getPupilDetails.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		// Pupil create
		[createPupil.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[createPupil.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.pupilInfo = payload;
		},
		[createPupil.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		// Pupil EOT create
		[createEOT.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[createEOT.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.pupilInfo = payload;
		},
		[createEOT.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		// Pupil update
		[updatePupil.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[updatePupil.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.pupilInfo = payload;
		},
		[updatePupil.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		// Pupil Delete
		[deletePupil.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[deletePupil.fulfilled]: (state) => {
			state.loading = false;
			state.success = true;
		},
		[deletePupil.rejected]: (state, { payload }) => {
			state.loading = false;
			state.success = false;
			state.error = payload;
		}
	},
});

export default pupilSlice.reducer;
