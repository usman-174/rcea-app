import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Styles from './schoolSelectScreen.module.scss';
import { selectSchool, getSchools } from '../../store/school/schoolActions';
import { Spinner } from '../spinner';

function SchoolSelectScreen() {
	const dispatch = useDispatch();
	const { loading, schoolInfo } = useSelector((state) => state.school);

	const handleSchoolSelection = (school) => {
		dispatch(selectSchool(school))
			.then(() => {
				window.location.href = '/academic-select';
			});
	};

	useEffect(() => {
		dispatch(getSchools());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main className={Styles.mainContainer}>
			<Container>
				<h1 className={Styles.title}>Select Your School</h1>
				{
					loading
						? <Spinner />
						: <Row className={Styles.schoolsList}>
							{schoolInfo?.map((school) => (
								<Col
									xs={12}
									md={6}
									lg={3}
									key={school._id}
									className={Styles.schoolCard}
									onClick={() => handleSchoolSelection(school)}>
									<img src="https://via.placeholder.com/150" alt="School Logo" />
									<h2>{school.name}</h2>
								</Col>
							))}
						</Row>
				}
			</Container>
		</main>
	);
}

export { SchoolSelectScreen };
