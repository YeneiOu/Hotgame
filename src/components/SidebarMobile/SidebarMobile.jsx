import React, { useEffect, useState } from "react";
import styles from "./SidebarMobile.module.css";
import { data } from "../Sidebar/DataSidebar";
import line from "../../assets/contact-line.png";
import { NavLink } from "react-router-dom";

const SidebarMobile = () => {
  const [fix, setFix] = useState(false);

  function setFixSidebar() {
    if (window.scrollY >= 400) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixSidebar);
  return (
    <div
      className={`${fix ? styles.sidebar_container_fixed : styles.sidebar_container
        }`}
    >
      <div className={styles.sidebar_mobile_wrapper}>
        <div className={styles.nav_sidebar_mobile}>
          <ul className={styles.listItem_sidebar_mobile}>
            {/* icon sidebar */}
            {data.map(({ image, alt, textThai, link, index }) => {
              return (
                <li className={styles.item_sidebar_mobile} key={index}>
                  <button
                    type="button"
                    className={styles.button_sidebar_mobile}
                  >
                    <NavLink
                      to={link}
                      className={styles.button_inner_sidebar_mobile}
                    >
                      <img src={image} alt={alt} />
                      <div className={styles.icon_text_sidebar_mobile}>
                        <div className={styles.icon_MobileText_sidebar}>
                          {textThai}
                        </div>
                      </div>
                    </NavLink>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className={styles.contact_sidebar_mobile}>
            <div className={styles.contact_wrapper_mobile}>
              <a href="/contact" className={styles.contact_link_mobile}>
                <img src={line} alt="contact" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
