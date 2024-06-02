/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
	Alert, Button, Container, Tab, Tabs
} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import { Toaster } from 'react-hot-toast';
import AxiosConfig from '../../utils/axiosConfig';
import { Spinner } from '../spinner';
import { errorToast, successToast } from '../../utils';
import Styles from './eot.module.scss';
import { useSelector } from 'react-redux';

export const EotScreen = () => {
const { selectedSchool } = useSelector((state) => state.school);
  const [selectOpen, setSelectOpen] = useState(false);
	const navigate = useNavigate();
	const grades = [
		{
			value: 1,
			label: 1,
		},
		{
			value: 2,
			label: 2,
		},
		{
			value: 3,
			label: 3
		},
		{
			value: 4,
			label: 4,
		},
		{
			value: 5,
			label: 5,
		},
		{
			value: 6,
			label: 6,
		}
	];
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
	const subjects = [
		{
			value: 'english',
			label: 'english',
		},
		{
			value: 'french',
			label: 'french',
		},
		{
			value: 'maths',
			label: 'maths',
		},
		{
			value: 'ssee',
			label: 'ssee',
		},
		{
			value: 'science',
			label: 'science',
		},
		{
			value: 'history',
			label: 'history',
		},
		{
			value: 'creole',
			label: 'creole',
		}
	];
	const [pupils, setPupils] = useState([]);
	const [eotPupils, setEOTPupils] = useState([]);
	const [loading, setLoading] = useState(false);
	const [markings, setMarkings] = useState([]);
	const [fields, setFields] = useState({});
	const [selectedSubject, setSelectedSubject] = useState(null);
	const [selectedGrade, setSelectedGrade] = useState(null);
	const [selectedSection, setSelectedSection] = useState(null);
	const [error, setError] = useState('');

	const handleSubmit = () => {
		if (!selectedGrade || !selectedSection || !selectedSubject) {
			setError('Please select grade and section');

			return;
		}

		setLoading(true);
		setError('');

		const finalData = Object.keys(fields).map((pupilId) => {
			const pupilMarks = {};

			Object.keys(fields[pupilId]).forEach((fieldName) => {
				const [_, __, questionNumber] = fieldName.split('_'); // extract question number from input field name
				pupilMarks[`Q${questionNumber}`] = fields[pupilId][fieldName];
			});

			return {
				pupil_id: pupilId,
				subject: selectedSubject.value,
				marks: pupilMarks,
			};
		});

		AxiosConfig.post('/eotSch/create', finalData)
			.then(() => {
				successToast('EOT Assessment Created successfully');
				setTimeout(() => window.location.reload(), 1400);
			})
			.catch((err) => {
				if (err.response?.data?.error.startsWith('E11000')) {
					errorToast('Data already exists');

					return;
				}

				errorToast('An error happened. try again');
			})
			.finally(() => setLoading(false));
	};

	const handleInputChange = (event, pupilID, totalMarksCriteria) => {
		const { name, value } = event.target;

		const enteredValue = Number(value);

		if (enteredValue > totalMarksCriteria) {
			return;
		}

		setFields((prevFields) => ({
			...prevFields,
			[pupilID]: {
				...prevFields[pupilID],
				[name]: value,
			},
		}));
	};

	useEffect(() => {
		const fetchStudentData = async () => {
			setLoading(true);

			try {
				const response = await AxiosConfig.post('/pupil/getbysectiongrade', {
					student_section: selectedSection.value,
					grade: selectedGrade.value,
					school_id: selectedSchool._id
				});

				setPupils(response.data);
			} catch (err) {
				setError(err.message || err.response.data.message);
			} finally {
				setLoading(false);
			}
		};

		const fetchMarkingScheme = async () => {
			try {
				const response = await AxiosConfig.post('/markingcsch/all', {
					student_section: selectedSection.value,
					grade: selectedGrade.value,
					subject: selectedSubject.value,
					school_id : selectedSchool._id,
				});
				setMarkings(response?.data[0]?.rows || []);
			} catch (err) {
				setError(err.message || err.response.data.message);
			} finally {
				setLoading(false);
			}
		};

		const fetchEotPupils = async () => {
			try {
				const response = await AxiosConfig.post('/eotSch/all', {
					grade: selectedGrade.value,
					subject: selectedSubject.value,
					student_section: selectedSection.value,
				});

				setEOTPupils(response.data);
			} catch (err) {
				console.log('error');
			}
		};

		if (selectedGrade && selectedSection && selectedSubject) {
			fetchStudentData();
			fetchEotPupils();
			fetchMarkingScheme();
		}
	}, [selectedGrade, selectedSection, selectedSubject,selectedSchool._id]);

	return (
		<div>
			<Toaster />
			<Container>
				<h2 className="pt-5 mb-4 pb-2">End Of Term Assessment</h2>
				{error && <Alert key="danger" variant="danger">{error}</Alert>}
				<Tabs
					defaultActiveKey="create"
					id="uncontrolled-tab-example"
					className="mb-3"
				>
					<Tab eventKey="create" title="Create">
						<div className="d-flex align-items-center">
							<div className='w-25'>
								<h3>Select Grade</h3>
								<Select
									value={selectedGrade}
									className="basic-single mr-4"
									onChange={(e) => setSelectedGrade(e)}
									name="grade"
									onMenuClose={()=>setSelectOpen(false)}
              onMenuOpen={()=>setSelectOpen(true)}
              isSearchable={false}
									options={grades} />
							</div>
							<div className='w-25'>
								<h3>Select Section</h3>
								<Select
									value={selectedSection}
									className="basic-single mr-4"
									onChange={(e) => setSelectedSection(e)}
									onMenuClose={()=>setSelectOpen(false)}
              onMenuOpen={()=>setSelectOpen(true)}
              isSearchable={false}
									name="section"
									options={sections} />
							</div>
							<div className='w-25'>
								<h3>Select Subject</h3>
								<Select
									value={selectedSubject}
									className="basic-single"
									onChange={(e) => setSelectedSubject(e)}
									onMenuClose={()=>setSelectOpen(false)}
              onMenuOpen={()=>setSelectOpen(true)}
              isSearchable={false}
									name="subject"
									options={subjects} />
							</div>
						</div>
						{
							loading
								? <Spinner />
								: <form className='mt-5' onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-md-12">
											<div className="card">
												<div className="table-responsive-xl">
													<table className="table no-wrap user-table mb-0">
														<thead>
															<tr>
																<th scope="col" className="align-top border-0 text-uppercase font-weight-normal pl-4 text-nowrap">Student ID</th>
																{
																	pupils.length > 0 && <th scope="col" className="align-top border-0 text-uppercase font-weight-normal pl-4 text-nowrap">Student Name</th>
																}
																{
																	pupils.length > 0 && markings.length > 0 && markings.map((marking, index) => (
																		<th scope="col" key={index} className="align-top border-0 text-capitalize font-weight-normal text-nowrap">
																			Q{marking.questionNumber} ({marking.numberOfMarks}* marks)
																		</th>
																	))
																}
															</tr>
														</thead>
														<tbody>
															{
																pupils.length > 0 && markings.length > 0
																	? pupils.map((pupil) => (
																		<tr key={pupil._id}>
																			<td className="pl-4 align-top text-nowrap">{pupil.student__nid}</td>
																			<td className="align-top text-nowrap">
																				<span className="text-muted">{`${pupil.student_firstname} ${pupil.student_lastname}`}</span>
																			</td>
																			{
																				markings.map((marking, index) => (
																					<td className="align-top text-nowrap" key={`${pupil._id}${marking.itemNumber}`}>
																						<input
																							required
																							type="number"
																							className="w-100 pl-1"
																							name={`pupil_${pupil._id}_${marking.questionNumber}`}
																							value={fields[pupil._id] ? fields[pupil._id][`pupil_${pupil._id}_${marking.questionNumber}`] : ''}
																							readOnly={fields[pupil._id] && fields[pupil._id][`pupil_${pupil._id}_${marking.questionNumber}`] >= pupil.totalMathsMarks}
																							onChange={
																								(e) => handleInputChange(e, pupil._id, Number(marking.numberOfMarks))
																							} />
																					</td>
																				))
																			}
																		</tr>
																	)) : <tr className='text-left mt-4'><td>Please create pupil or marking scheme for this grade and section</td></tr>
															}
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
									<div className="text-center mt-5">
										<Button className='primaryButton' type="submit">Submit</Button>
									</div>
								</form>
						}
					</Tab>
					<Tab eventKey="list" title="List">
						<div className="d-flex align-items-center">
							<div className='w-25'>
								<h3>Select Grade</h3>
								<Select
									value={selectedGrade}
									className="basic-single mr-4"
									onChange={(e) => setSelectedGrade(e)}
									name="grade"
									onMenuClose={()=>setSelectOpen(false)}
              onMenuOpen={()=>setSelectOpen(true)}
              isSearchable={false}
									options={grades} />
							</div>
							<div className='w-25'>
								<h3>Select Section</h3>
								<Select
									value={selectedSection}
									className="basic-single mr-4"
									onChange={(e) => setSelectedSection(e)}
									onMenuClose={()=>setSelectOpen(false)}
              onMenuOpen={()=>setSelectOpen(true)}
              isSearchable={false}
									name="section"
									options={sections} />
							</div>
							<div className='w-25'>
								<h3>Select Subject</h3>
								<Select
									value={selectedSubject}
									className="basic-single"
									onChange={(e) => setSelectedSubject(e)}
									onMenuClose={()=>setSelectOpen(false)}
              onMenuOpen={()=>setSelectOpen(true)}
              isSearchable={false}
									name="subject"
									options={subjects} />
							</div>
						</div>
						<div className="row mt-5">
							<div className="col-md-12">
								<div className="card">
									<div className="table-responsive-xl">
										<table className="table no-wrap user-table mb-0">
											<thead>
												<tr>
													<th scope="col" className="align-top border-0 text-uppercase font-weight-normal pl-4 text-nowrap">Student NID</th>
													<th scope="col" className="align-top border-0 text-uppercase font-weight-normal text-nowrap">Student Name</th>
													{
														eotPupils.length > 0 && Object.keys(eotPupils[0].marks).map((p, index) => (
															<th scope="col" key={index} className="align-top border-0 text-uppercase font-weight-normal text-nowrap">
																{p}
															</th>
														))
													}
												</tr>
											</thead>
											<tbody>
												{
													eotPupils.length > 0
														? eotPupils.map((pupil, index) => (
															<tr key={pupil.pupil_id._id}>
																<td className="pl-4 align-top text-nowrap">{pupil.pupil_id.student__nid}</td>
																<td className="align-top text-nowrap">
																	<span className="text-muted">{`${pupil.pupil_id.student_firstname} ${pupil.pupil_id.student_lastname}`}</span>
																</td>
																{
																	Object.keys(pupil.marks).map((p, index) => (
																		<td className="align-top text-nowrap" key={`${pupil.pupil_id.id}marks${index}`}>
																			<span className="text-muted">{pupil.marks[p] || '-'}</span>
																		</td>
																	))
																}
															</tr>
														))
														: <tr className='text-left mt-4'><td>No pupils Found</td></tr>
												}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</Tab>
				</Tabs>
			</Container>
		</div>
	);
};
