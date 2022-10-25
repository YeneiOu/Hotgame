import React from 'react'
import styles from './Modal.module.css'
import check from '../../assets/Check.png'
import { IoClose } from 'react-icons/io5'
import { style } from '@mui/system';

const ModalSuccess = (props) => {
    function closeHandler() {
        props.onCancel();
    }
    return (

        <div div className={styles.modal_container} >
            <div className={styles.modal_dialog_sign}>
                <IoClose onClick={closeHandler} className={styles.modal_close_icon_sign} />
                <div className={style.modal_success}>
                    <img src={check} alt="" />
                    <h1 className={styles.modal_success_text}>เข้าสู่ระบบสำเร็จ</h1>
                </div>
            </div>
        </div >

    )
}

export default ModalSuccess