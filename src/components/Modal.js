// src/components/Modal.js
import React from "react";
import "./Modal.css"; // Import CSS for modal styling

const Modal = ({ isOpen, onClose, color, onColorChange }) => {
  if (!isOpen) return null; // Don't render anything if modal is not open

  return (
    <div className="modal-content">
      <div className="modal-header">
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times close-icon"></i>{" "}
          {/* Added close-icon class */}
        </button>
      </div>
      <input type="color" value={color} onChange={onColorChange} />
    </div>
  );
};

export default Modal;
