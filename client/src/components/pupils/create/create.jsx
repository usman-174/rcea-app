/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Row, Col, Placeholder } from 'react-bootstrap';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { createPupil } from '../../../store/pupil/pupilActions';
import { errorToast, successToast } from '../../../utils/index';
import Styles from './create.module.scss';
import { InputField } from '../../inputField';
import { getSchools } from '../../../store/school/schoolActions';
import { grades, sections } from '../../../utils/globals';

function CreatePupilsScreen() {
	const [erros, setErrors] = useState({});
	const errMsges = Object.values(erros).filter(Boolean);
	const dispatch = useDispatch();
	const { selectedSchool } = useSelector((state) => state.school);
	const { selectedTerm, selectedYear } = useSelector((state) => state.academics);

	const [fields, setFields] = useState({
		firstName: '',
		lastName: '',
		dateOfBirth: '',
		gradeNumber: '',

		gender: 'Male',
		nID: '',
		primaryResponsible: {
			firstName: '',
			lastName: '',
			nationalID: '',
			relationship: '',
			phone: '',
			address: ''
		},
		secondaryResponsible: {
			firstName: '',
			lastName: '',
			nationalID: '',
			relationship: '',
			phone: '',
			address: ''
		},
		medical: '',
		address: '',
		homeNumber: '',
		mobileNumber: '',
		admissionNumber: '',
		dateOfAdmission: '',
		whichSchool: '',
		socialAid: '',
		optionalLanguage: '',
		sen: '',
		selectedSection: null
	});

	const inputProps = (label, type, required = true, name, placeholder) => ({
		name,
		label,
		type,
		required,
		erros, setErrors,
		onChange: handleInputChange,
		value: fields[name],
		placeholder,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFields((prevFields) => ({
			...prevFields,
			[name]: value
		}));
	};

	const handleResponsibleChange = (e, type) => {
		const { name, value } = e.target;
		setFields((prevFields) => ({
			...prevFields,
			[type]: {
				...prevFields[type],
				[name]: value
			}
		}));
	};

	const handleSectionChange = (selectedOption) => {
		setFields((prevFields) => ({
			...prevFields,
			selectedSection: selectedOption
		}));
	};

	const pupilCreate = (e) => {



		e.preventDefault();
		if (errMsges.length) {
			errorToast('Please fill in all required fields');
			return;
		}

		dispatch(createPupil({
			academicYear: selectedYear,
			termNumber: selectedTerm,
			school_id: `${selectedSchool._id}`,
			...fields
		}))
			.unwrap()
			.then(() => {
				successToast('Pupil created successfully');
			})
			.catch(() => errorToast("Error creating pupil, please try again later"));
	};
	const handleGradeChange = (selectedOption) => {
		setFields((prevFields) => ({
			...prevFields,
			gradeNumber: selectedOption.value,
		}));
	};

	useEffect(() => {
		dispatch(getSchools());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main className={Styles.mainContainer}>
			<Toaster />
			<div className="container my-4">
				<h2 className="pt-3 mb-4 pb-2">Create Pupil</h2>
				<form onSubmit={pupilCreate}>
					<Row>
						<Col sm={12}>
							{/* Show error msges */}
							{errMsges.length > 0 && (
								<div className="alert alert-danger">
									{errMsges.map((msg, index) => (
										<p key={index}>{msg}</p>
									))}
								</div>
							)}
						</Col>
					</Row>
					<Row>

						<Col sm={12} lg={6}>
							<InputField {...inputProps('First Name', 'text', true, 'firstName')} onChange={handleInputChange} value={fields.firstName} />
							<label className='mt-3'>Select Section</label>
							<Select
								className="basic-single"
								onChange={handleSectionChange}
								isSearchable={false}
								name="section"
								options={sections}
								value={fields.selectedSection}
							/>
							<label className="mt-3">Grade Number</label>
							<Select
								className="basic-single"
								onChange={handleGradeChange}
								isSearchable={false}
								name="gradeNumber"
								options={grades}
								value={grades.find(
									(option) => option.value === fields.gradeNumber
								)}
							/>
							<InputField  {...inputProps("Phone Number", "text", true, "mobileNumber", "e.g., 5000 0000 or 8344 444")} isPhoneNumber />
							<InputField {...inputProps('Admission Number', 'number', true, 'admissionNumber')} />
							<InputField {...inputProps('Social Aid', 'text', true, 'socialAid')} />
							<InputField {...inputProps('School from which Admitted', 'text', true, 'whichSchool')} />
							<InputField {...inputProps('Add medical conditions (Optional)', 'text', false, 'medical')} />
							<InputField {...inputProps('Optional Language', 'text', true, 'optionalLanguage')} />
						</Col>
						<Col sm={12} lg={6}>
							<InputField {...inputProps('Last Name', 'text', true, 'lastName')} />
							<div className="mt-4 mb-3" onChange={(e) => setFields((prevFields) => ({ ...prevFields, gender: e.target.value }))}>
								<label>Gender *</label><br />
								<input type="radio" value="Male" name="gender" defaultChecked /> Male <span className="mr-2"></span>
								<input type="radio" value="Female" name="gender" /> Female <span className="mr-2"></span>
								<input type="radio" value="Other" name="gender" /> Other <span className="mr-2"></span>
							</div>
							<InputField {...inputProps('nID', 'text', true, 'nID')} value={fields.nID} />
							<InputField {...inputProps('Date of Birth', 'date', true, 'dateOfBirth')} value={fields.dateOfBirth} />
							<InputField {...inputProps('Address', 'text', true, 'address')} value={fields.address} />
							<InputField {...inputProps('Home Number', 'number', true, 'homeNumber')} value={fields.homeNumber} />
							<InputField {...inputProps('Date of Admission', 'date', true, 'dateOfAdmission')} value={fields.dateOfAdmission} />
							<InputField {...inputProps('SEN', 'text', true, 'sen')} value={fields.sen} />
						</Col>
						<Col sm={12}>
							<h5 className='mt-4'>Primary Responsible Party</h5>
							<Row>
								<Col sm={12} lg={6}>
									<InputField {...inputProps('First Name', 'text', true, 'firstName')} onChange={(e) => handleResponsibleChange(e, 'primaryResponsible')} value={fields.primaryResponsible.firstName} />
									<InputField {...inputProps('National ID', 'text', true, 'nationalID')} onChange={(e) => handleResponsibleChange(e, 'primaryResponsible')} value={fields.primaryResponsible.nationalID} />
									<InputField {...inputProps('Telephone Number', 'number', true, 'phone')} onChange={(e) => handleResponsibleChange(e, 'primaryResponsible')} value={fields.primaryResponsible.phone} />
								</Col>
								<Col sm={12} lg={6}>
									<InputField {...inputProps('Last Name', 'text', true, 'lastName')} onChange={(e) => handleResponsibleChange(e, 'primaryResponsible')} value={fields.primaryResponsible.lastName} />
									<InputField {...inputProps('Relationship to pupil', 'text', true, 'relationship')} onChange={(e) => handleResponsibleChange(e, 'primaryResponsible')} value={fields.primaryResponsible.relationship} />
									<InputField {...inputProps('Address', 'text', true, 'address')} onChange={(e) => handleResponsibleChange(e, 'primaryResponsible')} value={fields.primaryResponsible.address} />
								</Col>
							</Row>
						</Col>
						<Col sm={12}>
							<h5 className='mt-4'>Secondary Responsible Party</h5>
							<Row>
								<Col sm={12} lg={6}>
									<InputField {...inputProps('First Name', 'text', true, 'firstName')} onChange={(e) => handleResponsibleChange(e, 'secondaryResponsible')} value={fields.secondaryResponsible.firstName} />
									<InputField {...inputProps('National ID', 'text', true, 'nationalID')} onChange={(e) => handleResponsibleChange(e, 'secondaryResponsible')} value={fields.secondaryResponsible.nationalID} />
									<InputField {...inputProps('Telephone Number', 'number', true, 'phone')} onChange={(e) => handleResponsibleChange(e, 'secondaryResponsible')} value={fields.secondaryResponsible.phone} />
								</Col>
								<Col sm={12} lg={6}>
									<InputField {...inputProps('Last Name', 'text', true, 'lastName')} onChange={(e) => handleResponsibleChange(e, 'secondaryResponsible')} value={fields.secondaryResponsible.lastName} />
									<InputField {...inputProps('Relationship to pupil', 'text', true, 'relationship')} onChange={(e) => handleResponsibleChange(e, 'secondaryResponsible')} value={fields.secondaryResponsible.relationship} />
									<InputField {...inputProps('Address', 'text', true, 'address')} onChange={(e) => handleResponsibleChange(e, 'secondaryResponsible')} value={fields.secondaryResponsible.address} />
								</Col>
							</Row>
						</Col>
					</Row>

					<div className="text-center mt-5 d-flex items-center justify-content-end">
						<button type="submit" className={`px-5 ${Styles.submitButton}`}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</main>
	);
}

export { CreatePupilsScreen };
