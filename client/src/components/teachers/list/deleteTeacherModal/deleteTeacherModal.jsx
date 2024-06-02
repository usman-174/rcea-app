import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteTeacherModal(props) {
	return (
		<Modal show={props.showModal} onHide={() => props.closeModal()}>
			<Modal.Body>
				<h6 className="my-4 font-weight-medium">Are you sure you want to delete <i>{props.teacher.name}?</i></h6>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => props.closeModal()}>
					Close
				</Button>
				<Button variant="primary" onClick={() => props.deleteTeacher()}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export { DeleteTeacherModal };
