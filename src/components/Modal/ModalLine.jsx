import React from 'react'
import styles from './Modal.module.css'
import promo1 from "../../assets/img-promotion.png";
import { IoClose } from 'react-icons/io5'
import icon from '../../assets/line.png'
import qr from '../../assets/qrcode.png'




const ModalLine = (props) => {
    function closeHandler() {
        props.onCancel();
    }
    return (
        <div div className={styles.modal_container} >
            <div className={styles.modal_dialog_line}>
                <IoClose onClick={closeHandler} className={styles.modal_close_icon_line} />
                <div className={styles.modal_image_box}>
                    <div className={styles.modal_line_img}>
                        <img src={icon} alt="" />
                    </div>
                    <div className={styles.modal_desc_img}>
                        <img src={qr} alt="" />
                    </div>
                </div>


            </div>
        </div >
    )
}

export default ModalLine