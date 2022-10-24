import React from 'react'
import styles from './GameBill.module.css'
import withdraw from '../../assets/withdraw.png'
import withdraw_d from '../../assets/withdraw-inout.png'

import Slider from "react-slick";
import { billData } from './GameBillData'
const GameBill = () => {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        centerPadding: 50,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={styles.live_feed_container}>
            <div className={styles.live_feed_wrapper}>
                <div className={styles.live_feed_withdraw}>
                    <div className={styles.live_transaction_wrapper}>
                        <div className={styles.live_transaction_title}>
                            {/* Mobile view */}
                            <div className={styles.live_transaction_title_mobile}>
                                <div className={styles.withdraw_title_mobile_view}>
                                    <img src={withdraw} alt="withdraw" />
                                    <span className={styles.withdraw_title_mobile_view_text}>
                                        บิลถอนล่าสุด
                                    </span>
                                </div>
                            </div>
                            {/* Desktop view */}
                            <div className={styles.live_transaction_title_desktop}>
                                <img src={withdraw_d} alt="withdraw" />

                            </div>
                        </div>
                        <div className={styles.live_transaction_content}>
                            <div className={styles.live_transaction_container}>
                                <Slider {...settings}>
                                    {billData.map(({ id, phone, time, icon, coin, amount }) => {
                                        return (
                                            <div className={styles.live_transaction_slick_row} key={id}>
                                                <div className={styles.live_transaction_box}>
                                                    {/* box profile */}
                                                    <div className={styles.live_transaction_box_profile}>
                                                        <div className={styles.box_profile_img_wrapper}>
                                                            <img src={icon} alt="" />
                                                        </div>
                                                        <div className={styles.box_profile_detail_wrapper}>
                                                            <div className={styles.profile_number}>{phone} <span>XXXXX</span></div>
                                                            <div className={styles.detail_wrapper}>
                                                                <span className={styles.detail_wrapper_text}>
                                                                    <span className={styles.detail_wrapper_text}>เวลาถอน </span> {time} นาที
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* volume box */}
                                                    <div className={styles.live_transaction_box_volume}>
                                                        <img src={coin} alt="coin" />
                                                        <span className={styles.live_transaction_amount}>
                                                            {amount}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameBill