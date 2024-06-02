import { createAsyncThunk } from '@reduxjs/toolkit';

export const selectAcademics = createAsyncThunk(
	'academics/select',
	async ({ term, year },) => {
		const storedAcademicTerm = JSON.parse(localStorage.getItem('academicTerm'));
		const storedAcademicYear = JSON.parse(localStorage.getItem('academicYear'));

		const selectedYear = storedAcademicYear ? storedAcademicYear.year : year;
		const selectedTerm = storedAcademicTerm ? storedAcademicTerm.term : term;

		localStorage.setItem('academicTerm', JSON.stringify({ term }));
		localStorage.setItem('academicYear', JSON.stringify({ year }));

		return { selectedTerm, selectedYear };
	}
);
