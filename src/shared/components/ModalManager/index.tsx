import React, { useRef } from 'react'
import './ModalManager.models.scss'
const ModalManager: React.FC = () => {
    const modalRef = useRef<HTMLDivElement>(null)

    function openModal(){
        if(modalRef.current){
            modalRef.current.style.display = 'block'
        }
    }

    function closeModal(){
        if(modalRef.current){
            modalRef.current.style.display = 'none'
        }
    }   

    return (
        <div>
            <button onClick={openModal}>open modal</button>
            <button onClick={closeModal}>close modal</button>
            <div ref={modalRef} className='modal'>
                <div className='modal__content'>
                    <h3>Hello</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, similique.</p>
                    <button onClick={closeModal}>close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalManager
