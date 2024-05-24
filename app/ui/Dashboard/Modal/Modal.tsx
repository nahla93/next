import React from 'react';
import style from './Modal.module.css';

interface ModalProps {
    showModal: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ showModal, handleClose, children }) => {
    return (
        <div className={style.modal} style={{ display: showModal ? 'block' : 'none' }}>
            <div className={style.modalContent}>
                <span className={style.close} onClick={handleClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
