/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../utils/axiosConfig';

export const getPupils = createAsyncThunk('pupil/all', async ({ schoolID }, { rejectWithValue }) => {
	try {
	
		const response = await axiosConfig.get(`/pupil/all/${schoolID}`);
		return await response.data;
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});

export const searchPupils = createAsyncThunk('pupil/search', async ({ query }, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.post('/pupil/search', {
			name: query
		});
		return await response.data;
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});

export const getPupilDetails = createAsyncThunk('pupil/details', async ({ id }, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.get(`/pupil/${id}`);
		return await response.data;
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});

export const createPupil = createAsyncThunk('pupil/create', async ({
	academicYear,
	termNumber,
	school_id,
	firstName,
	lastName,
	date_of_birth,
	gradeNumber,
	section,
	gender,
	nID,
	primaryResponsible,
	secondaryResponsible,
	medical,
	address,
	homeNumber,
	mobileNumber,
	admissionNumber,
	dateOfAdmission,
	whichSchool,
	socialAid,
	optionalLanguage,
	sen
}, {
	rejectWithValue
}) => {
	try {
		const response = await axiosConfig.post('/pupil/create', {
			academic_year: academicYear,
			term: termNumber,
			school_id,
			student_last_name: lastName,
			student_first_name: firstName,
			date_of_birth,
			grade: gradeNumber,
			student_section: section,
			student_gender: gender,
			student_NID: nID,
			primaryResponsible: primaryResponsible,
			secondaryResponsible: secondaryResponsible,
			address,
			medical,
			home_no: homeNumber,
			mobile_no: mobileNumber,
			admission_number: admissionNumber,
			date_of_admission: dateOfAdmission,
			school_from_which_admitted: whichSchool,
			social_aid: socialAid,
			optional_language: optionalLanguage,
			sen,
		});

		return await response.data.data;
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});

export const createEOT = createAsyncThunk('/eot/create', async ({
	COHORT,
	ACADEMIC_YEAR,
	ASSESSMENT_TYPE,
	TERM,
	SCHOOL,
	FIRST_NAME,
	LAST_NAME,
	GRADE,
	SECTION,
	GENDER,
	NATIONAL_ID,
	ADMISSION_NO,
	Q_1,
	Q_2,
	Q_3,
	Q_4,
	Q_5,
	Q_6,
	Q_7,
	Q_8,
	Q_9,
	Q_10,
	Q_11,
	Q_12,
	Q_13,
	Q_14,
	Q_15,
	Q_16,
	Q_17,
	Q_18,
	Q_19,
	Q_20,
	Q_21,
	Q_22,
	Q_23,
	Q_24,
	Q_25,
	Q_26,
	Q_27,
	Q_28,
	Q_29,
	Q_30,
	Q_31,
	Q_32,
	Q_33,
	Q_34,
	Q_35,
	Q_36,
	Q_37,
	Q_38,
	Q_39,
	Q_40
}, {
	rejectWithValue
}) => {
	try {
		const response = await axiosConfig.post('/eot/create', {
			COHORT,
			ACADEMIC_YEAR,
			ASSESSMENT_TYPE,
			TERM,
			SCHOOL,
			FIRST_NAME,
			LAST_NAME,
			GRADE,
			SECTION,
			GENDER,
			NATIONAL_ID,
			ADMISSION_NO,
			Q_1,
			Q_2,
			Q_3,
			Q_4,
			Q_5,
			Q_6,
			Q_7,
			Q_8,
			Q_9,
			Q_10,
			Q_11,
			Q_12,
			Q_13,
			Q_14,
			Q_15,
			Q_16,
			Q_17,
			Q_18,
			Q_19,
			Q_20,
			Q_21,
			Q_22,
			Q_23,
			Q_24,
			Q_25,
			Q_26,
			Q_27,
			Q_28,
			Q_29,
			Q_30,
			Q_31,
			Q_32,
			Q_33,
			Q_34,
			Q_35,
			Q_36,
			Q_37,
			Q_38,
			Q_39,
			Q_40
		});

		return await response.data.data;
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});

export const submitPupilAssessment = createAsyncThunk('pupil/assessment/create', async ({
	academic_year,
	assessment_type,
	term,
	school,
	student_first_name,
	student_last_name,
	grade,
	student_section,
	student_gender,
	student_NID,
	mobile_no,
	admission_number,
	q1,
	q2,
	q3,
	q4,
	q5,
	q6,
	q7,
	q8,
	q9,
	q10,
	q11,
	q12,
	q13,
	q14,
	q15,
	q16,
	q17,
	q18,
	q19,
	q20,
	q21,
	q22,
	q23,
	q24,
	q25,
	q26,
	q27,
	q28,
	q29,
	q30
}, {
	rejectWithValue
}) => {
	try {
		const response = await axiosConfig.post('/pupil/assessment/create', {
			academic_year,
			assessment_type,
			term,
			school,
			student_first_name,
			student_last_name,
			grade,
			student_section,
			student_gender,
			student_NID,
			mobile_no,
			admission_number,
			q1,
			q2,
			q3,
			q4,
			q5,
			q6,
			q7,
			q8,
			q9,
			q10,
			q11,
			q12,
			q13,
			q14,
			q15,
			q16,
			q17,
			q18,
			q19,
			q20,
			q21,
			q22,
			q23,
			q24,
			q25,
			q26,
			q27,
			q28,
			q29,
			q30
		});

		return await response.data.data;
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});

export const updatePupil = createAsyncThunk('pupil/update', async ({
	id,
	academicYear,
	termNumber,
	school,
	firstName,
	lastName,
	day_of_birth,
	month_of_birth,
	year_of_birth,
	gradeNumber,
	section,
	gender,
	medical,
	nID,
	primaryResponsible,
	secondaryResponsible,
	address,
	homeNumber,
	mobileNumber,
	admissionNumber,
	dateOfAdmission,
	whichSchool,
	socialAid,
	optionalLanguage,
	sen
}, {
	rejectWithValue
}) => {
	try {
		const response = await axiosConfig.post(`/pupil/${id}`, {
			student_id: nID,
			academic_year: academicYear,
			term: termNumber,
			school,
			student_last_name: lastName,
			student_first_name: firstName,
			day_of_birth,
			month_of_birth,
			year_of_birth,
			grade: gradeNumber,
			student_section: section,
			student_gender: gender,
			student_NID: nID,
			primaryResponsible: primaryResponsible,
			secondaryResponsible: secondaryResponsible,
			address,
			medical,
			home_no: homeNumber,
			mobile_no: mobileNumber,
			admission_number: admissionNumber,
			date_of_admission: dateOfAdmission,
			school_from_which_admitted: whichSchool,
			social_aid: socialAid,
			optional_language: optionalLanguage,
			SEN: sen,
		});
			
		return await response.data.data;
	} catch (error) {
		console.log(error.message);
		return rejectWithValue( error.response.data.message||error.message);
	}
});

export const deletePupil = createAsyncThunk('pupil/delete', async ({ id }, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.delete(`/pupil/${id}`);
		return await response.data;
	} catch (error) {
		return rejectWithValue(error.response.data.message);
	}
});
