import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ isOpen, closeModal, title, subTitle, children, isSuccess }) => {

   

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
 


    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
           {
            isSuccess ? 
             <div className="modal__dialog" onClick={handleModalDialogClick}>
                <h1>{ title }</h1> 
                <h3>{subTitle}</h3>
                {children}
                <div>
                <button className='buton-modal' onClick={closeModal}>
                    <i class="fas fa-check"></i>
                </button>
                </div>
            </div>
            :
            <div className="modal__dialog__error" onClick={handleModalDialogClick}>
                <h1>{ title }</h1> 
                <h3>{subTitle}</h3>
                {children}
                <div>
                <button className='buton-modal-error' onClick={closeModal}>
                    <i class="fas fa-times"></i>
                </button>
                </div>
            </div>
           }
        </div>
    )
}

export default Modal
