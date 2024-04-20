import React, { useState } from 'react'
import Modal from './Modal'
import "./modal.css"

const ModalIndex = () => {
    const [show,setShow]=useState(false)
    const modalHandler =()=>{
        setShow(true)
    }
    const closeHandler=()=>{
        setShow(false)
    }
  return (
    <>
    <button className='modal-btn' onClick={()=>modalHandler()}>Show Modal</button>
        <Modal show={show} title="Modal Title" closeHandler={closeHandler}>
            I am  a Modal
        </Modal>
    </>
  
  )
}

export default ModalIndex