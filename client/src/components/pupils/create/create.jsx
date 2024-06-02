/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { createPupil } from '../../../store/pupil/pupilActions';
import { errorToast, successToast } from '../../../utils/index';
import Styles from './create.module.scss';
import { InputField } from '../../inputField';
import { getSchools } from '../../../store/school/schoolActions';

const sections = [
	{
		value: 'red',
		label: 'red',
	},
	{
		value: 'blue',
		label: 'blue',
	},
	{
		value: 'yellow',
		label: 'yellow',
	},
	{
		value: 'green',
		label: 'green',
	},
	{
		value: 'orange',
		label: 'orange',
	},
	{
		value: 'pink',
		label: 'pink',
	}
];

function CreatePupilsScreen() {
	const dispatch = useDispatch();
	const { selectedSchool } = useSelector((state) => state.school);
  const [selectOpen, setSelectOpen] = useState(false);
	const { selectedTerm, selectedYear } = useSelector((state) => state.academics);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [gradeNumber, setGradeNumber] = useState('');
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
	const [medical, setMedical] = useState('');
	const [address, setAddress] = useState('');
	const [homeNumber, setHomeNumber] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [admissionNumber, setAdmissionNumber] = useState('');
	const [dateOfAdmission, setDateOfAdmission] = useState('');
	const [whichSchool, setWhichSchool] = useState('');
	const [socialAid, setSocialAid] = useState('');
	const [optionalLanguage, setOptionalLanguage] = useState('');
	const [sen, setSen] = useState('');
	const [selectedSection, setSelectedSection] = useState(null);

	const inputProps = (label, type, required = true, name) => ({
		label,
		type,
		required,
		name
	});

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

	const pupilCreate = (e) => {
		e.preventDefault();

		dispatch(createPupil({
			academicYear: selectedYear,
			termNumber: selectedTerm,
			school_id: `${selectedSchool._id}`,
			firstName,
			lastName,
			date_of_birth: dateOfBirth,
			gradeNumber,
			section: selectedSection.value,
			gender,
			nID,
			address,
			homeNumber,
			mobileNumber,
			admissionNumber,
			dateOfAdmission,
			whichSchool,
			socialAid,
			medical,
			optionalLanguage,
			primaryResponsible,
			secondaryResponsible,
			sen
		}))
			.unwrap()
			.then(() => {
				// e.target.reset();
				successToast('Pupil created successfully');
			})
			.catch(() => errorToast("Error creating pupil, please try again later"));
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
						<Col sm={12} lg={6}>
							<InputField {...inputProps('First Name', 'text')} onChange={(e) => setFirstName(e.target.value)} />
							<label className='mt-3'>Select Section</label>
							<Select
								className="basic-single"
								onChange={(e) => setSelectedSection(e)}
								onMenuClose={()=>setSelectOpen(false)}
              onMenuOpen={()=>setSelectOpen(true)}
              isSearchable={false}
								name="section"
								options={sections} />
							<InputField {...inputProps('Grade Number', 'number')} onChange={(e) => setGradeNumber(e.target.value)} />
							<InputField {...inputProps('Mobile Number', 'number')} onChange={(e) => setMobileNumber(e.target.value)} />
							<InputField {...inputProps('Admission Number', 'number')} onChange={(e) => setAdmissionNumber(e.target.value)} />
							<InputField {...inputProps('Social Aid', 'text')} onChange={(e) => setSocialAid(e.target.value)} />
							<InputField {...inputProps('School from which Admitted', 'text')} onChange={(e) => setWhichSchool(e.target.value)} />
							<InputField {...inputProps('Add medical conditions (Optional)', 'text', false)} onChange={(e) => setMedical(e.target.value)} />
							<InputField {...inputProps('Optional Language', 'text')} onChange={(e) => setOptionalLanguage(e.target.value)} />
						</Col>
						<Col sm={12} lg={6}>
							<InputField {...inputProps('Last Name', 'text')} onChange={(e) => setLastName(e.target.value)} />
							<div className="mt-4 mb-3" onChange={(e) => setGender(e.target.value)}>
								<label>Gender *</label><br/>
								<input type="radio" value="Male" name="gender" defaultChecked /> Male <span className="mr-2"></span>
								<input type="radio" value="Female" name="gender" /> Female <span className="mr-2"></span>
								<input type="radio" value="Other" name="gender" /> Other <span className="mr-2"></span>
							</div>
							<InputField {...inputProps('nID', 'text')} onChange={(e) => setNID(e.target.value)} />
							<InputField {...inputProps('Date of Birth', 'date')} onChange={(e) => setDateOfBirth(e.target.value)} />
							<InputField {...inputProps('Address', 'text')} onChange={(e) => setAddress(e.target.value)} />
							<InputField {...inputProps('Home Number', 'number')} onChange={(e) => setHomeNumber(e.target.value)} />
							<InputField {...inputProps('Date of Admission', 'date')} onChange={(e) => setDateOfAdmission(e.target.value)} />
							<InputField {...inputProps('Sen', 'text')} onChange={(e) => setSen(e.target.value)} />
						</Col>
						<Col sm={12}>
							<h5 className='mt-4'>Primary Responsible Party</h5>
							<Row>
								<Col sm={12} lg={6}>
									<InputField {...inputProps('First Name', 'text', true, 'firstName')} onChange={handlePrimaryResponsibleData} />
									<InputField {...inputProps('National ID', 'text', true, 'nationalID')} onChange={handlePrimaryResponsibleData} />
									<InputField {...inputProps('Telephone Number', 'number', true, 'phone')} onChange={handlePrimaryResponsibleData} />
								</Col>
								<Col sm={12} lg={6}>
									<InputField {...inputProps('Last Name', 'text', true, 'lastName')} onChange={handlePrimaryResponsibleData} />
									<InputField {...inputProps('Relationship to pupil', 'text', true, 'relationship')} onChange={handlePrimaryResponsibleData} />
									<InputField {...inputProps('Address', 'text', true, 'address')} onChange={handlePrimaryResponsibleData} />
								</Col>
							</Row>
						</Col>
						<Col sm={12}>
							<h5 className='mt-4'>Secondary Responsible Party</h5>
							<Row>
								<Col sm={12} lg={6}>
									<InputField {...inputProps('First Name', 'text', true, 'firstName')} onChange={handleSecondaryResponsibleData} />
									<InputField {...inputProps('National ID', 'text', true, 'nationalID')} onChange={handleSecondaryResponsibleData} />
									<InputField {...inputProps('Telephone Number', 'number', true, 'phone')} onChange={handleSecondaryResponsibleData} />
								</Col>
								<Col sm={12} lg={6}>
									<InputField {...inputProps('Last Name', 'text', true, 'lastName')} onChange={handleSecondaryResponsibleData} />
									<InputField {...inputProps('Relationship to pupil', 'text', true, 'relationship')} onChange={handleSecondaryResponsibleData} />
									<InputField {...inputProps('Address', 'text', true, 'address')} onChange={handleSecondaryResponsibleData} />
								</Col>
							</Row>
						</Col>
					</Row>
					<div className="text-center mt-5 d-flex items-center justify-content-end">
						<button
							
							type="submit"
							className={`px-5 ${Styles.submitButton}`}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</main>
	);
}

export { CreatePupilsScreen };
