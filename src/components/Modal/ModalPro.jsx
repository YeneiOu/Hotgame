import React from 'react'
import styles from './Modal.module.css'
import promo2 from "../../assets/img-promotion-2.png";
import banner1 from "../../assets/slide-1.jpg";
import banner2 from "../../assets/slide-2.jpeg";
import banner3 from "../../assets/slide-3.jpeg";
import { IoClose } from 'react-icons/io5'

const ModalPro = (props) => {

    function closeHandler() {
        props.onCancel();
    }
    return (
        <div className={styles.modal_container}>
            <div className={styles.modal_dialog}>
                <IoClose onClick={closeHandler} className={styles.modal_close_icon} />
                <div className={styles.modal_content_left}>
                    <div className={styles.modal_content_left_box}>
                        <div className={styles.modal_content_title}>
                            <div className={styles.modal_content_text}>
                                โปรโมชั่น
                            </div>
                            <div className={styles.modal_content_img}>
                                <img src={promo2} alt="promo" />
                            </div>

                        </div>
                        <div className={styles.modal_content_image}>
                            <img src={banner1} alt="" />
                            <img src={banner2} alt="" />
                            <img src={banner3} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.modal_content_right}>
                    <div className={styles.modal_content_right_box}>
                        <img src={banner1} alt="" />
                        <div className={styles.modal_content_right_text}>
                            <p className={styles.modal_content_text_box}> เงื่อนไข</p>
                            <ul className={styles.modal_content_text_list}>
                                <li>1.โปรโมชั่นใช้สำหรับเล่นคาสิโนเท่านั้น</li>
                                <li>2.โปรโมชั่นใช้สำหรับเล่นคาสิโนเท่านั้น</li>
                                <li>3.โปรโมชั่นใช้สำหรับเล่นคาสิโนเท่านั้น</li>
                                <li>4.โปรโมชั่นใช้สำหรับเล่นคาสิโนเท่านั้น</li>
                                <li>5.โปรโมชั่นใช้สำหรับเล่นคาสิโนเท่านั้น</li>
                                <li>ตัวอย่างเทิร์นโอเวอร์</li>
                                <li>เงินฝาก 1000 รับโบนัส 200 ยอดเทิร์นโอเวอร์คือ (1000+200)x18 = 21600</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ModalPro