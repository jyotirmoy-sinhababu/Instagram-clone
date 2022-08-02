import ReactDOM from 'react-dom';
import React from 'react';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal-design'>{children}</div>,
    document.getElementById('portal')
  );
};

export default Modal;
