import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getTeacherDetails, updateTeacher } from '../../../store/teacher/teacherActions';
import { successToast } from '../../../utils/index';
import Styles from './update.module.scss';
import { InputField } from '../../inputField';
import { Spinner } from '../../spinner';
import CreatableSelect from 'react-select/creatable';

export const qualifications = [
	{ value: "School Certificate/GCE O levels", label: "School Certificate/GCE O levels" },
	{ value: "Higher School Certificate/ GCE A levels", label: "Higher School Certificate/ GCE A levels" },
	{ value: "Teacher Certificate", label: "Teacher Certificate" },
	{ value: "Advanced Certificate of Education", label: "Advanced Certificate of Education" },
	{ value: "Teacher’s Diploma (Primary)", label: "Teacher’s Diploma (Primary)" },
	{ value: "Diploma in Education Management", label: "Diploma in Education Management" },
	{ value: "Other Deploma", label: "Other Deploma (Please specify)", isDisabled: true },
	{ value: "Bachelor of Education", label: "Bachelor of Education" },
	{ value: "Other Degree", label: "Other Degree (Please specify)", isDisabled: true }
];

const grades = [
	{ value: 'Primary school educator (GP)', label: 'Primary school educator (GP)' },
	{ value: 'Primary school educator (Creole Specialisation)', label: 'Primary school educator (Creole Specialisation)' },
	{ value: 'Primary school educator (HEP)', label: 'Primary school educator (HEP)' },
	{ value: 'Support Teacher', label: 'Support Teacher' },
	{ value: 'ICT support Officer', label: 'ICT support Officer' },
	{ value: 'Supply Teacher', label: 'Supply Teacher' },
	{ value: 'Educator (SEN)', label: 'Educator (SEN)' },
	{ value: 'Other (Please write)', label: 'Other (Please write)', isDisabled: true }
];

function UpdateTeacherScreen() {
	const { loading, error } = useSelector((state) => state.teacher);
	const params = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [fields, setFields] = useState({
		address: '',
		firstName: '',
		lastName: '',
		phone: '',
		hire_date: '',
		gender: 'Male',
		postingYear: '',
		qualifications: [],
		grade: null,
		nationalID: '',
		appointmentDate: '',
		remarks: ''
	});

	useEffect(() => {
		if (!location.state) {
			navigate('/teacher');
		} else {
			dispatch(getTeacherDetails({ id: params.id }))
				.then((data) => {
					console.log("payload", data.payload);
					
					setFields({
						address: data.payload.address,
						firstName: data.payload.firstName,
						lastName: data.payload.lastName,
						phone: data.payload.phone,
						hire_date: new Date(data.payload.hire_date).toISOString().split('T')[0],
						nationalID: data.payload.nationalID,
						postingYear: data.payload.postingYear,
						qualifications: data.payload.qualifications || [],
						grade: data.payload.grade,
						appointmentDate: new Date(data.payload.appointmentDate).toISOString().split('T')[0],
						remarks: data.payload.remarks,
					});
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const inputProps = (label, type, required = true, name, placeholder) => ({
		label,
		name,
		type,
		required,
		onChange: handleInputChange,
		value: fields[name] || '',
		placeholder
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		if (name === 'postingYear') {
			const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
			setFields({ ...fields, [name]: numericValue.slice(0, 4) }); // Limit to 4 digits
		} else {
			setFields({ ...fields, [name]: value });
		}
	};

	const handleQualificationsChange = (selectedOptions) => {
		setFields({ ...fields, qualifications: selectedOptions });
	};

	const handleGradeChange = (selectedOption) => {
		setFields({ ...fields, grade: selectedOption.value });
	};

	const teacherUpdate = (e) => {
		e.preventDefault();

		dispatch(updateTeacher({ ...fields, id: params.id }))
			.then(() => {
				e.target.reset();
				successToast('Teacher updated successfully');
			});
	};

	return (
		<main className={Styles.mainContainer}>
			<Toaster />
			<div className="container my-4">
				<h2 className="pt-3 mb-4 pb-2">Update Teacher</h2>
				{
					loading
						? <Spinner />
						: <>
							{
								!error
									? <form onSubmit={teacherUpdate}>
										<Row>
											<Col sm={12} lg={6}>
												<InputField {...inputProps('Address', 'text', true, 'address', 'Enter the address')} />
												<InputField {...inputProps('National ID', 'text', true, 'nationalID', 'Enter the national ID')} />
												<InputField {...inputProps('Phone Number', 'text', true, 'phone', 'e.g., 5000 0000 or 8344 444')} isPhoneNumber />
												<InputField {...inputProps('Hire Date', 'date', true, 'hire_date', 'Select the hire date')} />
												<InputField {...inputProps('Year of Posting', 'text', true, 'postingYear', 'Enter the year of posting')} />
												<InputField {...inputProps('Appointment Date', 'date', true, 'appointmentDate', 'Select the appointment date')} />
											</Col>
											<Col sm={12} lg={6}>
												<InputField {...inputProps('First Name', 'text', true, 'firstName', 'Enter the first name')} />
												<InputField {...inputProps('Last Name', 'text', true, 'lastName', 'Enter the last name')} />
												<div className="mt-2">
													<label>Qualifications *</label><br />
													<CreatableSelect isMulti options={qualifications} value={fields.qualifications} onChange={handleQualificationsChange} />
												</div>
												<div className="mt-2">
													<label>Grade *</label><br />
													<CreatableSelect options={grades} value={fields.grade ? { value: fields.grade, label: fields.grade } : null} onChange={handleGradeChange} />
												</div>
												<InputField {...inputProps('Remarks', 'text', false, 'remarks', 'Enter remarks')} />
											</Col>
										</Row>
										<div className="text-center mt-5 d-flex items-center justify-content-end">
											<button type="submit" className={`px-5 ${Styles.submitButton}`}>
												Submit
											</button>
										</div>
									</form>
									: <div>An error occurred while fetching Data</div>
							}
						</>
				}
			</div>
		</main>
	);
}

export { UpdateTeacherScreen };
