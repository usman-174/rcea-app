import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './details.module.scss';
import { Spinner } from '../../spinner';
import { getTeacherDetails } from '../../../store/teacher/teacherActions';
import { dateFormatter } from '../../../utils';

function TeacherDetailsScreen() {
	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading } = useSelector((state) => state.pupil);
	const [fields, setFields] = useState({
		address: '',
		firstName: '',
		lastName: '',
		phone: '',
		hire_date: '',
		qualifications: [],
		grade: '',
		postingYear: '',
		gender: ''
	});

	useEffect(() => {
		if (!params.id) {
			navigate('/data-portal');
		} else {
			dispatch(getTeacherDetails({ id: params.id })).then((data) => {
				setFields({
					address: data.payload.address,
					firstName: data.payload.firstName,
					lastName: data.payload.lastName,
					phone: data.payload.phone,
					hire_date: data.payload.hire_date,
					qualifications: data.payload.qualifications,
					gender: data.payload.gender,
					grade: data.payload.grade,
					postingYear: data.payload.postingYear,
				});
			});
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main>
			<div className="container my-4">
				<h2 className="pt-3 mb-4 pb-2">{`${fields.firstName} ${fields.lastName}`}'s Details</h2>
				{
					loading
						? <Spinner />
						: <Row>
							<Col md={6}>
								<div className={Styles.detailCard}>
									<label>First Name</label>
									<p>{fields.firstName}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Last Name</label>
									<p>{fields.lastName}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Address</label>
									<p>{fields.address}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Grade</label>
									<p>{fields.grade}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Posting Year</label>
									<p>{fields.postingYear}</p>
								</div>
							</Col>
							<Col md={6}>
								<div className={Styles.detailCard}>
									<label>Gender</label>
									<p>{fields.gender}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Hire Date</label>
									<p>{dateFormatter(fields.hire_date)}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Phone</label>
									<p>{fields.phone}</p>
								</div>
								<div className={Styles.detailCard}>
									<label>Qualifications</label>
									<ul>{
										fields.qualifications?.map((q, index) => (
											<li key={index}>{q.label}</li>
										))	
									}</ul>
								</div>
							</Col>
						</Row>
				}
			</div>
		</main>
	);
}

export { TeacherDetailsScreen };
