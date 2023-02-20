import React from 'react';
import Modal from './components/Modal';
import useModal from './hooks/useModal';

function App() {
  const [isOpenLoginModal, openLoginModal ,closeLoginModal ] = useModal();
  const [isOpenLoginModalError, openLoginModalError ,closeLoginModalError ] = useModal();

  return (
    <div>
      <button onClick={openLoginModal}>
        Open Login Modal
      </button>  
      <button onClick={openLoginModalError}>
        Open Login Modal Error
      </button> 

      <Modal
        isOpen={isOpenLoginModal} 
        closeModal={closeLoginModal}
        title="Bien hecho..!"
        subTitle={"La tarea fue realizada"}
        subTitleTwo={"La tarea esta muy bien"}
        isSuccess={true}
      >
        </Modal>

        <Modal
        isOpen={isOpenLoginModalError} 
        closeModal={closeLoginModalError}
        title="Ooop..!"
        subTitle={"Hubo un error"}
        subTitleTwo={"El email debe tener formato valido"}
        isSuccess={false}
      >
        </Modal>
        
        <form>
          <input type='text' placeholder='Nombre'  />
          
        </form>

      
    </div>
  );
}

export default App;
