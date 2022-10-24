import React, { useState } from "react";
import * as styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import promo1 from "../../assets/img-promotion.png";
import promo2 from "../../assets/img-promotion-2.png";
import ModalReg from "../Modal/ModalReg";
import ModalSign from "../Modal/ModalSign";
import ModalPro from "../Modal/ModalPro";
import ModalLine from "../Modal/ModalLine";

const Navbar = () => {
  const [modalReg, SetModalReg] = useState(false)
  const [modalPro, SetModalPro] = useState(false)
  const [modalLine, SetModalLine] = useState(false)
  const [modalSign, SetModalSign] = useState(false)


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
  function handleModalLineOpen() {
    SetModalLine(true)
  }
  function handleModalLineClose() {
    SetModalLine(false)
  }
  function handleModalSignOpen() {
    SetModalSign(true)
  }
  function handleModalSignClose() {
    SetModalSign(false)
  }
  return (

    <div div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.headerBrand}>
          <a href="/" className={styles.navbar_brand}>
            <img src={logo} alt="logo" />
          </a>
          <ul className={styles.content_wrapper}>
            <li className={styles.content_loginBox}>
              <button onClick={handleModalSignOpen} className={styles.content_login}>
                <div className={styles.content_text}>สมัครสมาชิก</div>
              </button>
              {modalSign ? <ModalSign onCancel={handleModalSignClose} /> : null}
            </li>
            <li className={styles.content_item}>
              <button onClick={handleModalSignOpen} className={styles.content_link}>
                <div className={styles.content_img_wrapper}>
                  <div className={styles.content_text}>เข้าสู่ระบบ</div>
                </div>
              </button>
              {modalSign ? <ModalSign onCancel={handleModalSignClose} /> : null}
            </li>
            <li className={styles.content_item}>
              <button onClick={handleModalLineOpen} className={styles.content_link}>
                <div className={styles.content_img_wrapper}>
                  <div className={styles.content_text}>ติดต่อเรา</div>
                </div>
              </button>
              {modalLine ? <ModalLine onCancel={handleModalLineClose} /> : null}
            </li>
          </ul>
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

export default Navbar;
