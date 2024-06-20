import React, { useRef } from 'react'
import styles from '@/pages/Modal/index.module.scss'

const ModalManager = () => {
  const modalRef = useRef<HTMLDivElement>(null)

  function handleModal(action:string){
    const modal =modalRef.current;
    if(modal && action === "open") {
      modal.classList.add(styles["show"])
    }else if(modal && action === "close"){
      modal.classList.remove(styles["show"])
    };
  }
  return (
    <React.Fragment>
        <div ref={modalRef} className={`${styles["modal-wrapper"]}`}>
            <div className={`${styles["modal-box"]}`}>
                <div className={styles.close} onClick={() => handleModal("close")}>X</div>                
                <h2>Hello World!</h2>
            </div>
        </div>
        <button onClick={() => handleModal("open")}>Open</button>
    </React.Fragment>
  )
}

export default ModalManager