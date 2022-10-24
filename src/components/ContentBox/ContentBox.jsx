import React from "react";
import NavPage from "../NavPage/NavPage";
import styles from "./ContentBox.module.css";


const ContentBox = () => {
  return (
    <div className={styles.content_box}>
      <div className={styles.content_category}>
        <div className={styles.content_container}>
          <NavPage />
        </div>
      </div>
      {/* game bills */}
    </div>
  );
};

export default ContentBox;
