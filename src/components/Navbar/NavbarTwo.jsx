import React, { useState } from "react";
import * as styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import promo1 from "../../assets/img-promotion.png";
import promo2 from "../../assets/img-promotion-2.png";
import ModalReg from "../Modal/ModalReg";
import ModalPro from "../Modal/ModalPro";
import Money from '../../assets/sidebar-6.png'
import { Modal } from "react-bootstrap";
import ModalSuccess from "../Modal/ModalSucces";


const NavbarTwo = () => {
    const [modalReg, SetModalReg] = useState(false)
    const [modalPro, SetModalPro] = useState(false)


    function handleModalRegOpen() {
        SetModalReg(true)
    }
    function handleModalProOpen() {
        SetModalPro(true)
    }
    function handleModalRegClose() {
        SetModalReg(false)
    }
    function handleModalProClose() {
        SetModalPro(false)
    }

    return (

        <div div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.headerBrand}>
                    <a href="/" className={styles.navbar_brand}>
                        <img src={logo} alt="logo" />
                    </a>
                    <div className={styles.content_wrapper}>
                        <div className={styles.content_text_wrapper}>
                            <p>*Username*</p>
                            <div className={styles.content_text_box}>
                                <p className={styles.content_text_box_text}>198435.00</p>
                            </div>

                        </div>
                        <img src={Money} alt="" className={styles.image_content_box} />
                        <div className={styles.content_text_button}>
                            <button className={styles.content_link_two}>
                                <div className={styles.content_text}>ฝากเงิน</div>
                            </button>
                            <button className={styles.content_link_two}>
                                <div className={styles.content_text}>ถอนเงิน</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.headerContent}>
                <div className={styles.content_container}>
                    <div className={styles.content_promotion}>
                        <div className={styles.content_promotion_post}>
                            <button onClick={handleModalRegOpen} className={styles.content_promotion_link}>
                                <div className={styles.content_promotion_img}>
                                    <img src={promo1} alt="1" />
                                </div>
                                <span className={styles.content_promotion_text}>สิทธิพิเศษ</span>
                            </button>
                            {modalReg ? <ModalReg onCancel={handleModalRegClose} /> : null}

                        </div>
                    </div>
                    <div className={styles.content_promotion_two}>
                        <div className={styles.content_promotion_post}>
                            <button onClick={handleModalProOpen} className={styles.content_promotion_link}>
                                <div className={styles.content_promotion_img}>
                                    <img src={promo2} alt="2" />
                                </div>
                                <span className={styles.content_promotion_text}>โปรโมชั่น</span>
                            </button>
                            {modalPro ? <ModalPro onCancel={handleModalProClose} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NavbarTwo;
