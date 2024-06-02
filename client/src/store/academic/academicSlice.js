import { createSlice } from '@reduxjs/toolkit';
import { selectAcademics } from './academicActions';

const academicTermYearSlice = createSlice({
	name: 'academicTermYear',
	initialState: {
		selectedTerm: localStorage.getItem('academicTerm') ? JSON.parse(localStorage.getItem('academicTerm')).term : null,
		selectedYear: localStorage.getItem('academicYear') ? JSON.parse(localStorage.getItem('academicYear')).year : null,
	},
	reducers: {},
	extraReducers: {
		[selectAcademics.fulfilled]: (state, action) => {
			state.selectedTerm = action.payload.selectedTerm;
			state.selectedYear = action.payload.selectedYear;
			

		},
	}
});

export default academicTermYearSlice.reducer;
