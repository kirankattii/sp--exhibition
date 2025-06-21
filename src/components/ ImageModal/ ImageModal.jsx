import React from "react";
import styles from "./ImageModal.module.css";

const ImageModal = ({ img, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <img src={img} alt="Full View" className={styles.fullImage} />
    </div>
  );
};

export default ImageModal;
