/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPupilDetails, createEOT } from '../../../store/pupil/pupilActions';
import { InputField } from '../../inputField';
import { Spinner } from '../../spinner';
import Styles from './endOfTerm.module.scss';

export const EndOfTerm = () => {
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.pupil);

	const [assessmentType, setAssessmentType] = useState('End of Term');
	const [numberOfMarks, setNumberOfMarks] = useState({});
	const [academicYear, setAcademicYear] = useState('');
	const [termNumber, setTermNumber] = useState('');
	const [school, setSchool] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [gradeNumber, setGradeNumber] = useState('');
	const [section, setSection] = useState('');
	const [gender, setGender] = useState('');
	const [nID, setNID] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [admissionNumber, setAdmissionNumber] = useState('');
	const inputProps = (type) => ({
		type,
		required: true,
		className: 'mt-n4'
	});

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(createEOT({
			COHORT: academicYear,
			ACADEMIC_YEAR: academicYear,
			ASSESSMENT_TYPE: assessmentType,
			TERM: termNumber,
			SCHOOL: school,
			FIRST_NAME: firstName,
			LAST_NAME: lastName,
			GRADE: gradeNumber,
			SECTION: section,
			GENDER: gender,
			NATIONAL_ID: nID,
			ADMISSION_NO: admissionNumber,
			Q_1: numberOfMarks[1] || 0,
			Q_2: numberOfMarks[2] || 0,
			Q_3: numberOfMarks[3] || 0,
			Q_4: numberOfMarks[4] || 0,
			Q_5: numberOfMarks[5] || 0,
			Q_6: numberOfMarks[6] || 0,
			Q_7: numberOfMarks[7] || 0,
			Q_8: numberOfMarks[8] || 0,
			Q_9: numberOfMarks[9] || 0,
			Q_10: numberOfMarks[10] || 0,
			Q_11: numberOfMarks[11] || 0,
			Q_12: numberOfMarks[12] || 0,
			Q_13: numberOfMarks[13] || 0,
			Q_14: numberOfMarks[14] || 0,
			Q_15: numberOfMarks[15] || 0,
			Q_16: numberOfMarks[16] || 0,
			Q_17: numberOfMarks[17] || 0,
			Q_18: numberOfMarks[18] || 0,
			Q_19: numberOfMarks[19] || 0,
			Q_20: numberOfMarks[20] || 0,
			Q_21: numberOfMarks[21] || 0,
			Q_22: numberOfMarks[22] || 0,
			Q_23: numberOfMarks[23] || 0,
			Q_24: numberOfMarks[24] || 0,
			Q_25: numberOfMarks[25] || 0,
			Q_26: numberOfMarks[26] || 0,
			Q_27: numberOfMarks[27] || 0,
			Q_28: numberOfMarks[28] || 0,
			Q_29: numberOfMarks[29] || 0,
			Q_30: numberOfMarks[30] || 0,
			Q_31: numberOfMarks[31] || 0,
			Q_32: numberOfMarks[32] || 0,
			Q_33: numberOfMarks[33] || 0,
			Q_34: numberOfMarks[34] || 0,
			Q_35: numberOfMarks[35] || 0,
			Q_36: numberOfMarks[36] || 0,
			Q_37: numberOfMarks[37] || 0,
			Q_38: numberOfMarks[38] || 0,
			Q_39: numberOfMarks[39] || 0,
			Q_40: numberOfMarks[40] || 0
		})).then((data) => {
			console.log(data);
		});
	};

	useEffect(() => {
		if (!params.id) {
			navigate('/pupils');
		} else {
			dispatch(getPupilDetails({ id: params.id })).then((data) => {
				setAcademicYear(data.payload.ACADEMIC_YEAR);
				setTermNumber(data.payload.TERM);
				setSchool(data.payload.SCHOOL);
				setFirstName(data.payload.STUDENT_FIRST_NAME);
				setLastName(data.payload.STUDENT_LAST_NAME);
				setGradeNumber(data.payload.GRADE);
				setSection(data.payload.STUDENT_SECTION);
				setGender(data.payload.STUDENT_GENDER);
				setNID(data.payload.STUDENT_NID);
				setMobileNumber(data.payload.MOBILE_NO);
				setAdmissionNumber(data.payload.ADMISSION_NUMBER);
			});
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main>
			<div className="container my-4">
				<h1 className="text-left mb-5">Enter End Of Term Assessment Data for #Pupil {params.id}</h1>
				{
					loading
						? <Spinner />
						: <Row>
							<Col md={6}>
								<div className={Styles.detailCard}>
									<label>Assessment Type</label>
									<p>{assessmentType}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Academic Year</label>
									<p>{academicYear}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Term Number</label>
									<p>{termNumber}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>School</label>
									<p>{school}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>First Name</label>
									<p>{firstName}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Last Name</label>
									<p>{lastName}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Grade</label>
									<p>{gradeNumber}</p>
								</div>
							</Col>
							<Col md={6}>
								<div className={Styles.detailCard}>
									<label>Mobile Number</label>
									<p>+{mobileNumber}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Admission Number</label>
									<p>{admissionNumber}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Section</label>
									<p>{section}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Gender</label>
									<p>{gender}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>National ID</label>
									<p>{nID}</p>
								</div>
							</Col>
						</Row>
				}
				<div className="row">
					<form className="col-md-12" onSubmit={submitHandler}>
						<div className="card">
							<div className="table-responsive">
								<table className="table no-wrap user-table mb-0">
									<thead>
										<tr>
											<th scope="col" className="border-0 text-uppercase font-medium text-nowrap">Task</th>
											<th scope="col" className="border-0 text-uppercase font-medium text-nowrap">Question No</th>
											<th scope="col" className="border-0 text-uppercase font-medium text-nowrap">Part</th>
											<th scope="col" className="border-0 text-uppercase font-medium text-nowrap">Number Of Marks</th>
										</tr>
									</thead>
									<tbody>
										{
											[...Array(40)].map((pupil, index) => (
												<tr className={Styles.pupil} key={index + 1}>
													<td className="align-top text-nowrap">
														<span className="text-muted">{index + 1}</span>
													</td>
													<td className="align-top text-nowrap">
														<span className="text-muted">{index + 1}</span>
													</td>
													<td className="align-top text-nowrap">
														<span className="text-muted">{'(a)'}</span>
													</td>
													<td className="align-top text-nowrap">
														<span className="text-muted">
															<InputField
																{...inputProps('number')}
																onChange={(e) => setNumberOfMarks({
																	...numberOfMarks,
																	[index + 1]: e.target.value
																})}
															/>
														</span>
													</td>
												</tr>
											))
										}
									</tbody>
								</table>
							</div>
						</div>
						<div className="text-center my-4">
							<button type="submit" className="btn px-5 btn-primary">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};
