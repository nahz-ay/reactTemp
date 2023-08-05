"use client"

import React from 'react';
import Modal from 'react-modal';
import styles from './videomodal.module.scss'; // Import the CSS module

const VideoModal = ({ isOpen, onClose, videoUrl,children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Modal"
      className={`${styles.modal} ${isOpen ? styles.open : styles.closed}`}
      overlayClassName={styles.overlay} 
    >
      <button onClick={onClose}>Close</button>
      <div>
        <video controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Modal>
  );
};

export default VideoModal;

