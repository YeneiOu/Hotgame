import React from "react";
import styles from "./Sidebar.module.css";
import registerBtn from "../../assets/sidebar-register.png";
import { data } from "./DataSidebar";
import line from "../../assets/contact-line.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.main_sidebar_container}>
      <div className={styles.menu_sidebar}>
        <div className={styles.nav_sidebar}>
          <ul className={styles.listItem_sidebar}>
            {/* <li className={styles.item_sidebar}>
              <button type="button" className={styles.register_button_sidebar}>
                <img src={registerBtn} alt="registerBtn" />
                <span className={styles.register_text_sidebar}>
                  สมัครสมาชิก
                </span>
              </button>
            </li> */}
            {/* icon sidebar */}
            {data.map(({ image, alt, text, title, textThai, index, link }) => {
              return (
                <li className={styles.item_sidebar} key={index}>
                  <button
                    to={link}
                    type="button"
                    className={styles.list_button_sidebar}
                  >
                    <NavLink to={link} className={styles.button_inner_sidebar}>
                      <img
                        src={image}
                        alt={alt}
                        className={styles.image_icon_sidebar}
                      />
                      <div className={styles.icon_text_sidebar}>
                        <div className={styles.icon_textTitle_sidebar}>
                          {title}
                        </div>
                        <div className={styles.icon_thaiText_sidebar}>
                          {text}
                        </div>
                        <div className={styles.icon_textMobile_sidebar}>
                          {textThai}
                        </div>
                      </div>
                    </NavLink>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className={styles.contact_sidebar}>
            <div className={styles.contact_wrapper}>
              <a href="/contact" className={styles.contact_link}>
                <img src={line} alt="contact" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
