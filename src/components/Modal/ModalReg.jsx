import React from 'react'
import styles from './Modal.module.css'
import promo1 from "../../assets/img-promotion.png";
import { IoClose } from 'react-icons/io5'
const ModalReg = (props) => {
    function closeHandler() {
        props.onCancel();
    }
    return (

        <div div className={styles.modal_container} >
            <div className={styles.modal_dialog}>
                <IoClose onClick={closeHandler} className={styles.modal_close_icon} />
                <div className={styles.modal_content_left}>
                    <div className={styles.modal_content_left_box}>
                        <div className={styles.modal_content_title}>
                            <div className={styles.modal_content_text}>
                                สิทธิพิเศษ
                            </div>
                            <div className={styles.modal_content_img}>
                                <img src={promo1} alt="promo" />
                            </div>

                        </div>
                        <div className={styles.modal_content_come}>
                            เร็วๆนี้
                        </div>
                    </div>
                </div>
                <div className={styles.modal_content_right}>
                    <div className={styles.modal_content_right_box}>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ModalReg