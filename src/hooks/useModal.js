import { useState } from 'react'

const useModal = (initialValue = false) => {

  const [isOpenModal, setIsOpenModal] = useState(initialValue);


  const openModal = () => {
    setIsOpenModal(true);
  }
  
  const closeModal = () => {
    setIsOpenModal(false);
  }

  const isSuccess = false

    return [isOpenModal, openModal ,closeModal, isSuccess ];
}

export default useModal
