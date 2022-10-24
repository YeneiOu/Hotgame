import React from "react";
import hot2 from "../../assets/hotv2.png";
import styles from "./Trending.module.css";
import key from "../../assets/key.png";

import { BsFillPlayFill } from "react-icons/bs";
import { trendingData } from "./TrendingData";
import { gameData } from "./RecentlyData";
import { hotSlotData } from "./HotSlotData";
const Trending = () => {
  return (
    <>
      <div className={styles.trending_container}>
        <h1 className={styles.trending_title}>recently game</h1>
        <div className={styles.trending_content_box}>
          <ul className={styles.trending_content_grid}>
            {gameData.map(({ id, image_game, link }) => {
              return (
                <li className={styles.trending_content_card} key={id}>
                  <div className={styles.trending_content_card_item}>
                    {/* image wrapper */}
                    <div className={styles.trending_content_card_wrapper}>
                      {/* key */}
                      {/* <div className={styles.trending_content_image}>
                        <img src={img_icon} alt="key" />
                      </div> */}
                      <img
                        src={image_game}
                        alt="game"
                        className={styles.trending_content_cover_image}
                      />
                      {/* Overlay */}
                      <div className={styles.trending_content_image_overlay}>
                        <div
                          className={
                            styles.trending_content_image_overlay_inner
                          }
                        >
                          <div
                            className={
                              styles.trending_content_image_overlay_item
                            }
                          >
                            <a
                              href={link}
                              className={
                                styles.trending_content_image_overlay_link
                              }
                            >
                              {/* Icon */}
                              <BsFillPlayFill
                                className={styles.trending_content_icon}
                              />
                              <span className={styles.trending_text_btn}>
                                เข้าเล่น
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.trending_container}>
        <h1 className={styles.trending_title}>Hot casino</h1>
        <div className={styles.trending_content_box}>
          <ul className={styles.trending_content_grid_two}>
            {trendingData.map(({ id, image, img_icon, link }) => {
              return (
                <li className={styles.trending_content_card} key={id}>
                  <div className={styles.trending_content_card_item}>
                    {/* image wrapper */}
                    <div className={styles.trending_content_card_wrapper}>
                      {/* key */}
                      <div className={styles.trending_content_image}>
                        <img src={img_icon} alt="key" />
                      </div>
                      <img
                        src={image}
                        alt="game"
                        className={styles.trending_content_cover_image}
                      />
                      {/* Overlay */}
                      <div className={styles.trending_content_image_overlay}>
                        <div
                          className={
                            styles.trending_content_image_overlay_inner
                          }
                        >
                          <div
                            className={
                              styles.trending_content_image_overlay_item
                            }
                          >
                            <a
                              href={link}
                              className={
                                styles.trending_content_image_overlay_link
                              }
                            >
                              {/* Icon */}
                              <BsFillPlayFill
                                className={styles.trending_content_icon}
                              />
                              <span className={styles.trending_text_btn}>
                                เข้าเล่น
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.trending_container}>
        <h1 className={styles.trending_title}>Hot Slot</h1>
        <div className={styles.trending_content_box}>
          <ul className={styles.trending_content_grid_three}>
            {hotSlotData.map(({ id, image_hot, link }) => {
              return (
                <li className={styles.trending_content_card} key={id}>
                  <div className={styles.trending_content_card_item}>
                    {/* image wrapper */}
                    <div className={styles.trending_content_card_wrapper}>
                      {/* key */}
                      {/* <div className={styles.trending_content_image}>
                        <img src={img_icon} alt="key" />
                      </div> */}
                      <img
                        src={image_hot}
                        alt="game"
                        className={styles.trending_content_cover_image}
                      />
                      {/* Overlay */}
                      <div className={styles.trending_content_image_overlay}>
                        <div
                          className={
                            styles.trending_content_image_overlay_inner
                          }
                        >
                          <div
                            className={
                              styles.trending_content_image_overlay_item
                            }
                          >
                            <a
                              href={link}
                              className={
                                styles.trending_content_image_overlay_link_three
                              }
                            >
                              {/* Icon */}
                              <BsFillPlayFill
                                className={styles.trending_content_icon}
                              />
                              <span className={styles.trending_text_btn}>
                                เข้าเล่น
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Trending;
