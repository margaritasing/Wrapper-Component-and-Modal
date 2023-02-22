import React from 'react'
import './Modal.css'

const Modal = ({ isOpen, 
    closeModal, 
    title, 
    subTitle, 
    subTitleTwo, 
    children,  
    isSuccess }) => {

   

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

 


    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>           
             <div className="modal__dialog" onClick={handleModalDialogClick}>
                {
                    isSuccess 
                    ?
                    <button className='button-modal' onClick={closeModal}>
                        <i class="fas fa-check"></i>
                    </button>
                    :
                    <button className='button-modal-error' onClick={closeModal}>
                         <i class="fas fa-times"></i>
                     </button>

                }                
                <h1>{ title }</h1> 
                <h3>{subTitle}</h3>
                <button className='button-ok' onClick={closeModal}>
                    OK
                </button>
                <hr/>
                <h3>{subTitleTwo}</h3>
                {children}              
            </div>           
        </div>
    )
}

export default Modal
