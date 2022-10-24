import React from "react";
import { FiRss } from "react-icons/fi";
import styles from "./MainContent.module.css";
import { dataSlide } from "./ContentSlide";
import Slider from "react-slick";

import SidebarMobile from "../SidebarMobile/SidebarMobile";
import NavPage from "../NavPage/NavPage";
import ContentBox from "../ContentBox/ContentBox";

const MainContent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    centerPadding: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.main_content_container}>
      <div className={styles.content_image_wrapper}>
        <div className={styles.content_marquee}>
          <div className={styles.marquee_container}>
            <div className={styles.icon_wrapper}>
              <FiRss className={styles.icon_style} />
            </div>
            <div className={styles.marquee_track}>
              <p className={styles.marquee_text}>
                ฉลองครบรอบ 15 ปี SANDWIN ยินดีต้อนรับสมาชิกทุกท่าน
              </p>
            </div>
          </div>
        </div>
        {/* section */}
        <section className={styles.container_top}>
          <div className={styles.container_wrapper}>
            <div className={styles.seo_heading}>
              <h1 className={styles.heading_title}>SUMO88 คาสิโนออนไลน์</h1>
            </div>
            <div className={styles.banner_wrapper}>
              <Slider {...settings}>
                {dataSlide.map(({ image, index, alt, link }) => {
                  return (
                    <div className={styles.image_container} key={index}>
                      <a href={link} className={styles.image_link}>
                        <img
                          src={image}
                          alt={alt}
                          className={styles.image_banner}
                        />
                      </a>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className={styles.content_marquee_sec}>
              <div className={styles.marquee_container_sec}>
                <div className={styles.icon_wrapper}>
                  <FiRss className={styles.icon_style} />
                </div>
                <div className={styles.marquee_track}>
                  <p className={styles.marquee_text}>
                    ฉลองครบรอบ 15 ปี SANDWIN ยินดีต้อนรับสมาชิกทุกท่าน
                  </p>
                </div>
              </div>
            </div>
            {/* Route Section */}
            <div className={styles.router_section}>
              <div>
                <h2 className={styles.router_title}>
                  คาสิโนออนไลน์เต็มรูปแบบ ตื่นตาตื่นใจไปกับทุกการเดิมพัน
                </h2>
              </div>
              <div className={styles.router_wrapper}>
                <NavPage />
              </div>
            </div>

            {/* main 991px */}
            <div className={styles.mobile_content}>
              <div className={styles.mobile_content_left}>
                <SidebarMobile />
              </div>
              <div className={styles.mobile_content_right}>
                <h2 className={styles.router_title_sec}>
                  คาสิโนออนไลน์เต็มรูปแบบ ตื่นตาตื่นใจไปกับทุกการเดิมพัน
                </h2>
                <ContentBox />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;

// const NavPages = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/*" element={<MainPage />} />
//         <Route path="/trending" element={<Trending />} />
//         <Route path="/sidebarRoute" element={<SidebarRoute />} />
//       </Routes>
//     </div>
//   );
// };
