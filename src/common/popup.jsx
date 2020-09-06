import React from "react";
import { Button, Modal } from "react-bootstrap";

const Popup = ({ showPopup, handleClose }) => {
  return (
    <Modal show={showPopup}>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
