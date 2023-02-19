import { useState } from 'react'

const useModal = (initialValue = false) => {

  const [isOpenModal, setIsOpenModal] = useState(initialValue);

  const [ success , setSuccess ] = useState(false)

  const openModal = () => {
    setIsOpenModal(true);
  }
  
  const closeModal = () => {
    setIsOpenModal(false);
  }

  const isSuccess = () => {
    setSuccess(true)
}

    return [isOpenModal, openModal ,closeModal, isSuccess ];
}

export default useModal
