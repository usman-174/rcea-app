/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getPupilDetails, updatePupil } from '../../../store/pupil/pupilActions';
import { errorToast, successToast } from '../../../utils/index';
import Styles from './update.module.scss';
import { InputField } from '../../inputField';
import { Spinner } from '../../spinner';
import { grades } from '../../../utils/globals';
import Select from 'react-select';

function UpdatePupilsScreen() {
	const { loading, error } = useSelector((state) => state.pupil);
	const params = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [academicYear, setAcademicYear] = useState('');
	const [termNumber, setTermNumber] = useState('');
	const [school, setSchool] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [gradeNumber, setGradeNumber] = useState('');
	const [section, setSection] = useState('');
	const [gender, setGender] = useState('Male');
	const [nID, setNID] = useState('');
	const [primaryResponsible, setPrimaryResponsible] = useState({
		firstName: '',
		lastName: '',
		nationalID: '',
		relationship: '',
		phone: '',
		address: ''
	});
	const [secondaryResponsible, setSecondaryResponsible] = useState({
		firstName: '',
		lastName: '',
		nationalID: '',
		relationship: '',
		phone: '',
		address: ''
	});
	const [address, setAddress] = useState('');
	const [homeNumber, setHomeNumber] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [admissionNumber, setAdmissionNumber] = useState('');
	const [dateOfAdmission, setDateOfAdmission] = useState('');
	const [whichSchool, setWhichSchool] = useState('');
	const [socialAid, setSocialAid] = useState('');
	const [medical, setMedical] = useState('');
	const [optionalLanguage, setOptionalLanguage] = useState('');
	const [sen, setSen] = useState('');

	useEffect(() => {
		if (!location.state) {
			navigate('/pupils');
		} else {
			dispatch(getPupilDetails({ id: params.id }))
				.then((data) => {
					setAcademicYear(data.payload.academic_year);
					setTermNumber(data.payload.term);
					setSchool(data.payload.school);
					setFirstName(data.payload.student_firstname);
					setLastName(data.payload.student_lastname);
					setGradeNumber(Number(data.payload.grade));
					setSection(data.payload.student_section);
					setDateOfBirth(new Date(data.payload.date_ofbirth).toISOString().split('T')[0]);

					setDateOfAdmission(new Date(data.payload.date_of__admission).toISOString().split('T')[0]);
					if (data?.payload?.primaryResponsible) {

						setPrimaryResponsible({
							firstName: data.payload.primaryResponsible.firstName,
							lastName: data.payload.primaryResponsible.lastName,
							nationalID: data.payload.primaryResponsible.nationalID,
							relationship: data.payload.primaryResponsible.relationship,
							phone: data.payload.primaryResponsible.phone,
							address: data.payload.primaryResponsible.address
						});
					}
					if (data?.payload?.secondaryResponsible) {

						setSecondaryResponsible({
							firstName: data.payload.secondaryResponsible.firstName,
							lastName: data.payload.secondaryResponsible.lastName,
							nationalID: data.payload.secondaryResponsible.nationalID,
							relationship: data.payload.secondaryResponsible.relationship,
							phone: data.payload.secondaryResponsible.phone,
							address: data.payload.secondaryResponsible.address
						});
					}
					setGender(data.payload.student_gender);
					setNID(data.payload.student__nid);
					setMedical(data.payload.medical || '');
					setAddress(data.payload.adress);
					setHomeNumber(data.payload.home_no);
					setMobileNumber(data.payload.mobile_no);
					setAdmissionNumber(data.payload.admission_no);
					setDateOfAdmission(new Date(data.payload.date_of__admission).toISOString().split('T')[0]);
					setWhichSchool(data.payload.school_from_which_admitted);
					setSocialAid(data.payload.social_aid);
					setOptionalLanguage(data.payload.optional_language);
					setSen(data.payload.sen);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handlePrimaryResponsibleData = (e) => {
		setPrimaryResponsible({
			...primaryResponsible,
			[e.target.name]: e.target.value
		})
	}

	const handleSecondaryResponsibleData = (e) => {
		setSecondaryResponsible({
			...secondaryResponsible,
			[e.target.name]: e.target.value
		})
	}

	const inputProps = (label, type, required = true, name) => ({
		label,
		type,
		required,
		name
	});

	const pupilUpdate = (e) => {
		e.preventDefault();

		dispatch(updatePupil({
			id: params.id,
			academicYear,
			termNumber,
			school,
			firstName,
			lastName,
			day_of_birth: dateOfBirth.split('-')[2],
			month_of_birth: dateOfBirth.split('-')[1],
			year_of_birth: dateOfBirth.split('-')[0],
			gradeNumber,
			section,
			gender,
			nID,
			primaryResponsible,
			secondaryResponsible,
			address,
			homeNumber,
			mobileNumber,
			medical,
			admissionNumber,
			dateOfAdmission,
			whichSchool,
			socialAid,
			optionalLanguage,
			sen
		}))
			.unwrap()
			.then(() => {
				e.target.reset();

				successToast('Pupils updated successfully');
			})
			.catch((e) => {
				console.log(e.message);
				errorToast("Error creating pupil, please try again later")
			});
	};
	const handleGradeChange = (selectedOption) => {
		setGradeNumber(selectedOption.value);
	};

	return (
		<main className={Styles.mainContainer}>
			<Toaster />
			<div className="container my-4">
				<h2 className="pt-3 mb-4 pb-2">Update Pupil</h2>
				{
					loading
						? <Spinner />
						: <>
							{
								!error
									? <form onSubmit={pupilUpdate}>
										<Row>
											<Col sm={12} lg={6}>
												<InputField {...inputProps('Academic Year', 'text')} value={academicYear || ''} onChange={(e) => setAcademicYear(e.target.value)} />
												<InputField {...inputProps('Term Number', 'number')} value={termNumber || ''} onChange={(e) => setTermNumber(e.target.value)} />
											</Col>
											<Col sm={12} lg={6}>
												<InputField {...inputProps('School', 'text')} value={school || ''} onChange={(e) => setSchool(e.target.value)} />
												<InputField {...inputProps('First Name', 'text')} value={firstName || ''} onChange={(e) => setFirstName(e.target.value)} />
											</Col>
											<Col sm={12} lg={6}>
												<InputField {...inputProps('Last Name', 'text')} value={lastName || ''} onChange={(e) => setLastName(e.target.value)} />
												<InputField {...inputProps('Date of Birth', 'date')} value={dateOfBirth || ''} onChange={(e) => setDateOfBirth(e.target.value)} />
											</Col>
											<Col sm={12} lg={6}>

												<label className="mt-3">Grade Number</label>
												<Select
													className="basic-single"
													onChange={handleGradeChange}
													isSearchable={false}
													name="gradeNumber"
													options={grades}
													value={grades.find(
														(option) => option.value === gradeNumber
													)}
												/>

												<InputField {...inputProps('Section', 'text')} value={section || ''} onChange={(e) => setSection(e.target.value)} />
											</Col>
											<Col sm={12} lg={6}>
												<div className="mt-4 mb-3" onChange={(e) => {
													// console.log(e.target.value)
													setGender(e.target.value)
												}}>
													<label>Gender *</label><br />
													<input type="radio" value="Male" name="gender" defaultChecked={gender === 'Male'} /> Male <span className="mr-2"></span>
													<input type="radio" value="Female" name="gender" defaultChecked={gender === 'Female'} /> Female <span className="mr-2"></span>
													<input type="radio" value="Other" name="gender" defaultChecked={gender === 'Other'} /> Other <span className="mr-2"></span>
												</div>
												<InputField {...inputProps('nID', 'text')} value={nID || ''} onChange={(e) => setNID(e.target.value)} />
											</Col>
											<Col sm={12} lg={6}>
												<InputField {...inputProps('Address', 'text')} value={address || ''} onChange={(e) => setAddress(e.target.value)} />
												<InputField {...inputProps('Home Number', 'number')} value={homeNumber || ''} onChange={(e) => setHomeNumber(e.target.value)} />
											</Col>
											<Col sm={12} lg={6}>
												<InputField {...inputProps('Mobile Number', 'number')} value={mobileNumber || ''} onChange={(e) => setMobileNumber(e.target.value)} />
												<InputField {...inputProps('Admission Number', 'number')} value={admissionNumber || ''} onChange={(e) => setAdmissionNumber(e.target.value)} />
											</Col>
											<Col sm={12} lg={6}>
												<InputField {...inputProps('Date of Admission', 'date')} value={dateOfAdmission || ''} onChange={(e) => setDateOfAdmission(e.target.value)} />
												<InputField {...inputProps('School from which Admitted', 'text')} value={whichSchool || ''} onChange={(e) => setWhichSchool(e.target.value)} />
											</Col>
											<Col sm={12} lg={6}>
												<InputField {...inputProps('Social Aid', 'text')} value={socialAid || ''} onChange={(e) => setSocialAid(e.target.value)} />
												<InputField {...inputProps('Optional Language', 'text')} value={optionalLanguage || ''} onChange={(e) => setOptionalLanguage(e.target.value)} />
											</Col>
											<Col sm={12} lg={6}>
												<InputField {...inputProps('Sen', 'text')} value={sen || ''} onChange={(e) => setSen(e.target.value)} />
												<InputField {...inputProps('Add medical conditions (Optional)', 'text', false)} value={medical || ''} onChange={(e) => setMedical(e.target.value)} />
											</Col>
											<Col sm={12}>
												<h5 className='mt-4'>Primary Responsible Party</h5>
												<Row>
													<Col sm={12} lg={6}>
														<InputField {...inputProps('First Name', 'text', true, 'firstName')} value={primaryResponsible.firstName || ''} onChange={handlePrimaryResponsibleData} />
														<InputField {...inputProps('National ID', 'text', true, 'nationalID')} value={primaryResponsible.nationalID || ''} onChange={handlePrimaryResponsibleData} />
														<InputField {...inputProps('Telephone Number', 'number', true, 'phone')} value={primaryResponsible.phone || ''} onChange={handlePrimaryResponsibleData} />
													</Col>
													<Col sm={12} lg={6}>
														<InputField {...inputProps('Last Name', 'text', true, 'lastName')} value={primaryResponsible.lastName || ''} onChange={handlePrimaryResponsibleData} />
														<InputField {...inputProps('Relationship to pupil', 'text', true, 'relationship')} value={primaryResponsible.relationship || ''} onChange={handlePrimaryResponsibleData} />
														<InputField {...inputProps('Address', 'text', true, 'address')} value={primaryResponsible.address || ''} onChange={handlePrimaryResponsibleData} />
													</Col>
												</Row>
											</Col>
											<Col sm={12}>
												<h5 className='mt-4'>Secondary Responsible Party</h5>
												<Row>
													<Col sm={12} lg={6}>
														<InputField {...inputProps('First Name', 'text', true, 'firstName')} value={secondaryResponsible.firstName || ''} onChange={handleSecondaryResponsibleData} />
														<InputField {...inputProps('National ID', 'text', true, 'nationalID')} value={secondaryResponsible.nationalID || ''} onChange={handleSecondaryResponsibleData} />
														<InputField {...inputProps('Telephone Number', 'number', true, 'phone')} value={secondaryResponsible.phone || ''} onChange={handleSecondaryResponsibleData} />
													</Col>
													<Col sm={12} lg={6}>
														<InputField {...inputProps('Last Name', 'text', true, 'lastName')} value={secondaryResponsible.lastName || ''} onChange={handleSecondaryResponsibleData} />
														<InputField {...inputProps('Relationship to pupil', 'text', true, 'relationship')} value={secondaryResponsible.relationship || ''} onChange={handleSecondaryResponsibleData} />
														<InputField {...inputProps('Address', 'text', true, 'address')} value={secondaryResponsible.address || ''} onChange={handleSecondaryResponsibleData} />
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
									: <div>An error occured while fetching Data</div>
							}
						</>
				}
			</div>
		</main>
	);
}

export { UpdatePupilsScreen };
