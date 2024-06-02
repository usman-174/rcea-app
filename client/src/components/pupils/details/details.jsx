import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPupilDetails } from '../../../store/pupil/pupilActions';
import Styles from './details.module.scss';
import { Spinner } from '../../spinner';

function PupilDetailsScreen() {
	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading } = useSelector((state) => state.pupil);

	const [academicYear, setAcademicYear] = useState('');
	const [termNumber, setTermNumber] = useState('');
	const [school, setSchool] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');
	const [gradeNumber, setGradeNumber] = useState('');
	const [section, setSection] = useState('');
	const [gender, setGender] = useState('');
	const [nID, setNID] = useState('');
	const [responsibleFirstName, setResponsibleFirstName] = useState('');
	const [responsibleLastName, setResponsibleLastName] = useState('');
	const [address, setAddress] = useState('');
	const [homeNumber, setHomeNumber] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [admissionNumber, setAdmissionNumber] = useState('');
	const [dateOfAdmission, setDateOfAdmission] = useState('');
	const [whichSchool, setWhichSchool] = useState('');
	const [socialAid, setSocialAid] = useState('');
	const [optionalLanguage, setOptionalLanguage] = useState('');
	const [sen, setSen] = useState('');

	useEffect(() => {
		if (!params.id) {
			navigate('/pupils');
		} else {

			dispatch(getPupilDetails({ id: params.id })).then((data) => {
				console.log(data.payload);
				setAcademicYear(data.payload.academic_year);
				setTermNumber(data.payload.term);
				setSchool(data.payload.school);
				setFirstName(data.payload.student_firstname);
				setLastName(data.payload.student_lastname);
				setGradeNumber(data.payload.grade);
				setSection(data.payload.student_section);
				setDateOfBirth(
					new Date(data.payload.date_ofbirth).toLocaleDateString('en-GB', {
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					})
				);
				setGender(data.payload.student_gender);
				setNID(data.payload.student_nid);
				setResponsibleFirstName(data.payload.responsible_party_first_name);
				setResponsibleLastName(data.payload.responsible_party_last_name);
				setAddress(data.payload.address);
				setHomeNumber(data.payload.home_no);
				setMobileNumber(data.payload.mobile_no);
				setAdmissionNumber(data.payload.admission_number);
				setDateOfAdmission(data.payload.date_of_admission);
				setWhichSchool(data.payload.school_from_which_admitted);
				setSocialAid(data.payload.social_aid);
				setOptionalLanguage(data.payload.optional_language);
				setSen(data.payload.sen);
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main>
			<div className="container my-4">
				<h2 className="pt-3 mb-4 pb-2">{`${firstName} ${lastName}`}'s Details</h2>
				{
					loading
						? <Spinner />
						: <Row>
							<Col md={6}>
								<div className={Styles.detailCard}>
									<label>Academic Year</label>
									<p>{academicYear||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Term Number</label>
									<p>{termNumber||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>School</label>
									<p>{school||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>First Name</label>
									<p>{firstName||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Last Name</label>
									<p>{lastName||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Date of Birth</label>
									<p>{dateOfBirth||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Grade</label>
									<p>{gradeNumber||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Section</label>
									<p>{section||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Gender</label>
									<p>{gender||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>nID</label>
									<p>{nID||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Sen</label>
									<p>{sen||"N/A"}</p>
								</div>
							</Col>
							<Col md={6}>
								<div className={Styles.detailCard}>
									<label>Responsible Parent First Name</label>
									<p>{responsibleFirstName||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Responsible Parent Last Name</label>
									<p>{responsibleLastName||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Address</label>
									<p>{address||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Home Number</label>
									<p>{homeNumber||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Mobile Number</label>
									<p>+{mobileNumber||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Admission Number</label>
									<p>{admissionNumber||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Date of Admission</label>
									<p>{dateOfAdmission||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Which school</label>
									<p>{whichSchool||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Social Aid</label>
									<p>{socialAid||"N/A"}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Optional Language</label>
									<p>{optionalLanguage||"N/A"}</p>
								</div>
							</Col>
						</Row>
				}
			</div>
		</main>
	);
}

export { PupilDetailsScreen };
