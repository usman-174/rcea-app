import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Styles from './list.module.scss';
import { Spinner } from '../../spinner';
import { dateFormatter, errorToast, successToast } from '../../../utils';
import { DeleteTeacherModal } from './deleteTeacherModal/deleteTeacherModal';
import { getTeachers, searchTeachers, deleteTeacher } from '../../../store/teacher/teacherActions';
import { InputField } from '../../inputField';

function ListTeachersScreen() {
	const { selectedSchool } = useSelector((state) => state.school);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { loading, teacher } = useSelector((state) => state.teacher);
	const [modal, setModal] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [selectedTeacher, setSelectedTeacher] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		dispatch(getTeachers({ school_id: selectedSchool._id }));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleModalClose = () => {
		setModal('');
		setShowModal(false);
		setSelectedTeacher(null);
	};

	function deleteTeacherModalHandler(teacherName, teacherID) {
		setModal('deleteTeacherModal');
		setShowModal(true);
		setSelectedTeacher({
			id: teacherID,
			name: teacherName
		});
	}

	const handleSearch = (e) => {
		e.preventDefault();

		if (searchTerm) dispatch(searchTeachers({ query: searchTerm }));
		else{
		
			
			dispatch(getTeachers({school_id:selectedSchool._id}));}
	};

	const deleteTeacherHandler = () => {
		dispatch(deleteTeacher({ id: selectedTeacher.id }))
			.unwrap()
			.then(() => {
				successToast(`Successfully Deleted ${selectedTeacher.name}`);

				setTimeout(() => {
					dispatch(getTeachers({school_id:selectedSchool._id}));
				}, 1500);
			})
			.catch((error) => errorToast(`${error.message}, Please try again later`))
			.finally(() => handleModalClose());
	};

	return (
		<main>
			<Toaster />
			{
				modal === 'deleteTeacherModal'
				&& <DeleteTeacherModal
					teacher={selectedTeacher}
					showModal={showModal}
					closeModal={handleModalClose}
					deleteTeacher={deleteTeacherHandler} />
			}
			<div className="container my-4">
				<h2 className="pt-3 mb-4 pb-2">All Teachers</h2>
				<form className="mb-3" onSubmit={handleSearch}>
					<div className="w-50 d-flex align-items-center">
						<InputField type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" />
						<Button type="submit" className={Styles.searchButton}>
							Search
						</Button>
					</div>
				</form>
				{
					loading
						? <Spinner />
						: <div className="row">
							<div className="col-md-12">
								<div className="card">
									{
										teacher?.length > 0
											? <div className="table-responsive">
												<table className="table no-wrap user-table mb-0">
													<thead>
														<tr>
															<th scope="col" className="border-0 text-uppercase font-weight-normal pl-4">#</th>
															<th scope="col" className="border-0 text-uppercase font-weight-normal text-nowrap">Name</th>
															<th scope="col" className="border-0 text-uppercase font-weight-normal text-nowrap">Phone</th>
															<th scope="col" className="border-0 text-uppercase font-weight-normal text-nowrap">Address</th>
															<th scope="col" className="border-0 text-uppercase font-weight-normal text-nowrap">Posting Year</th>
															<th scope="col" className="border-0 text-uppercase font-weight-normal text-nowrap">Hire Date</th>
														</tr>
													</thead>
													<tbody>
														{
															teacher.map((teacher, index) => (
																<tr className={Styles.teacher} key={teacher._id}>
																	<td className="pl-4">{index + 1}</td>
																	<td className={`align-top text-nowrap ${Styles.name}`} onClick={() => navigate(`/data-portal/teachers/${teacher._id}`)}>
																		<h5 className="font-medium mb-0">{teacher.firstName} {teacher.lastName}</h5>
																	</td>
																	<td className="align-top text-nowrap">
																		<span className="text-muted">{teacher.phone}</span>
																	</td>
																	<td className="align-top text-nowrap">
																		<span className="text-muted">{teacher.address}</span>
																	</td>
																	<td className="align-top text-nowrap">
																		<span className="text-muted">{teacher.postingYear}</span>
																	</td>
																	<td className="align-top text-nowrap">
																		<span className="text-muted">{dateFormatter(teacher.hire_date)}</span>
																	</td>
																	<td className="align-top text-nowrap d-flex">
																		<button
																			type="button"
																			onClick={
																				() => deleteTeacherModalHandler(
																					`${teacher.firstName} ${teacher.lastName}`,
																					teacher._id
																				)
																			}
																			className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2">
																			<i className="fa fa-trash"></i>
																		</button>
																		<button
																			type="button"
																			onClick={() => navigate(`/data-portal/teachers/${teacher._id}/update`, { state: teacher })}
																			className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2">
																			<i className="fa fa-edit"></i>
																		</button>
																	</td>
																</tr>
															))
														}
													</tbody>
												</table>
											</div>
											: <p className="text-center my-5">No teachers added yet</p>
									}
								</div>
							</div>
						</div>
				}
			</div>
		</main>
	);
}

export { ListTeachersScreen };
