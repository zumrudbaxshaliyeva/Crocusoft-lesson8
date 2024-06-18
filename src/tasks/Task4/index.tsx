import React, { useRef } from 'react'
import './index.scss'

const Index: React.FC = () => {

    const modalRef = useRef<HTMLDivElement>(null)

    function handleOpen() {
        if (modalRef.current) {
            modalRef.current.classList.add('modal')
        }
    }

    function handleClose() {
        if (modalRef.current) {
            modalRef.current.classList.remove('modal')
        }
    }

    return (
        <>
            <div className="container">
                <div ref={modalRef} className='wrapper'></div>
                <div className="btns">
                    <button onClick={handleOpen}>Open the modal</button>
                    <button onClick={handleClose}>Close the modal</button>
                </div>
            </div >
        </>
    )
}

export default Index
