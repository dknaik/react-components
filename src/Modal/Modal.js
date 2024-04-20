import React from 'react'
import "./modal.css"
const Modal = ({show, closeHandler, title, children}) => {
console.log("children",children)
  return (
    <>
    <div className='modal-overlay' onClick={closeHandler}></div>
    {

    show && <div className={`modal-wrapper ${show?" active":""}`}>
        <div className='modal-header'>
            <div className='modal-title'>{title}</div>
            <span className='modal-close' onClick={closeHandler}>
            &#x2715;    
            </span>
        </div>
        <div className='modal-body'>{children}</div>
    </div> }
    </>
  )
}

export default Modal