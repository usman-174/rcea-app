import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeletePupilModal(props) {
	return (
		<Modal show={props.showModal} onHide={() => props.closeModal()}>
			<Modal.Body>
				<p className="lead font-weight-bold">Are you sure you want to delete <i>{props.pupil.name}</i></p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => props.closeModal()}>
                    Close
				</Button>
				<Button variant="primary" onClick={() => props.deletePupil()}>
                    Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export { DeletePupilModal };
