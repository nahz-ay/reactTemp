import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const VideoModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Open Video Modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-center"
        centered
      >
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/0SyF0Py-NdI"
            
            title="Embedded Video"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      
      </Modal>
    </div>
  );
};

export default VideoModal;
