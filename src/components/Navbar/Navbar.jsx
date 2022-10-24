import React from "react";
import * as styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import promo1 from "../../assets/img-promotion.png";
import promo2 from "../../assets/img-promotion-2.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.headerBrand}>
          <a href="/" className={styles.navbar_brand}>
            <img src={logo} alt="logo" />
          </a>
          <ul className={styles.content_wrapper}>
            <li className={styles.content_loginBox}>
              <a href="/promotion" className={styles.content_login}>
                <div className={styles.content_text}>โปรโมชั่น</div>
              </a>
            </li>
            <li className={styles.content_item}>
              <a href="/promotion" className={styles.content_link}>
                <div className={styles.content_img_wrapper}>
                  <div className={styles.content_text}>สิทธิพิเศษ </div>
                </div>
              </a>
            </li>
            <li className={styles.content_item}>
              <a href="/promotion" className={styles.content_link}>
                <div className={styles.content_img_wrapper}>
                  <div className={styles.content_text}>ติดต่อเรา </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

      </div>
      <div className={styles.headerContent}>
        <div className={styles.content_container}>
          <div className={styles.content_promotion}>
            <div className={styles.content_promotion_post}>
              <a href="/" className={styles.content_promotion_link}>
                <div className={styles.content_promotion_img}>
                  <img src={promo1} alt="1" />
                </div>
                <span className={styles.content_promotion_text}>สิทธิพิเศษ</span>
              </a>

            </div>
          </div>
          <div className={styles.content_promotion_two}>
            <div className={styles.content_promotion_post}>
              <a href="/" className={styles.content_promotion_link}>
                <div className={styles.content_promotion_img}>
                  <img src={promo2} alt="2" />
                </div>
                <span className={styles.content_promotion_text}>โปรโมชั่น</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
