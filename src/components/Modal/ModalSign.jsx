import React from 'react'
import styles from './Modal.module.css'

import { IoClose } from 'react-icons/io5'



const ModalSign = (props) => {
    function closeHandler() {
        props.onCancel();
    }
    return (
        <div div className={styles.modal_container} >
            <div className={styles.modal_dialog_sign}>
                <IoClose onClick={closeHandler} className={styles.modal_close_icon_sign} />


            </div>
        </div >
    )
}

export default ModalSign