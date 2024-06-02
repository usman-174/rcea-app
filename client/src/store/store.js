import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import pupilReducer from './pupil/pupilSlice';
import schoolReducer from './school/schoolSlice';
import academicsReducer from './academic/academicSlice';
import teacherReducer from './teacher/teacherSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		pupil: pupilReducer,
		teacher: teacherReducer,
		school: schoolReducer,
		academics: academicsReducer,
	}
});
