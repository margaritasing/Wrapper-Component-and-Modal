import React from 'react';
import Modal from './components/Modal';
import useModal from './hooks/useModal';

function App() {
  const [isOpenLoginModal, openLoginModal ,closeLoginModal ] = useModal();

  return (
    <div>
      <button onClick={openLoginModal}>
        Open Login Modal
      </button>  

      <Modal
        isOpen={isOpenLoginModal} 
        closeModal={closeLoginModal}
        title="Bien hecho..!"
        subTitle={"La tarea fue realizada"}
        isSuccess={false}
      >
        </Modal>

      
    </div>
  );
}

export default App;
