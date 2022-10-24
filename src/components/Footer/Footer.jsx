import React from 'react'
import styles from './Footer.module.css'
import banner_1 from '../../assets/footer-banner-1.png'
import banner_2 from '../../assets/footer-banner-2.png'
import banner_3 from '../../assets/footer-banner-3.png'
import { partnerData, paymentData } from './FooterData'

const Footer = () => {
    return (
        <footer >
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_describe_wrapper}>
                    <div className={styles.desc_content_wrapper}>
                        <div className={styles.desc_banner_icon}>
                            <img src={banner_1} alt="banner1" />
                            <img src={banner_2} alt="banner2" />
                            <img src={banner_3} alt="banner3" />
                        </div>
                    </div>
                </div>
                <div className={styles.footer_tag_wrapper}>
                    <div className={styles.footer_content_tag_wrapper}>
                        <div className={styles.footer_content_tag_title}>Tags</div>
                        <div className={styles.footer_content_tag_row}>
                            <div className={styles.footer_content_tag_item}>
                                <a href="/" className={styles.footer_link_btn}>บาคาร่า</a>
                                <a href="/" className={styles.footer_link_btn}>คาสิโนออนไลน์
                                </a>
                                <a href="/" className={styles.footer_link_btn}>บาคาร่าออนไลน์
                                </a>
                                <a href="/" className={styles.footer_link_btn}>casino
                                </a>
                                <a href="/" className={styles.footer_link_btn}>ป๊อกเด้ง
                                </a>
                                <a href="/" className={styles.footer_link_btn}>เสือ มังกร
                                </a>
                                <a href="/" className={styles.footer_link_btn}>ออนไลน์ คาสิโน
                                </a>
                                <a href="/" className={styles.footer_link_btn}>wm casino
                                </a>
                                <a href="/" className={styles.footer_link_btn}>sexy gaming
                                </a>
                                <a href="/" className={styles.footer_link_btn}>dg casino
                                </a>
                                <a href="/" className={styles.footer_link_btn}>allbet
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_provider_wrapper}>
                    <div className={styles.provider_content_wrapper}>
                        <div className={styles.provider_payment_wrapper}>
                            <div className={styles.provider_payment_title}>
                                Payment Accepted
                            </div>
                            <div className={styles.provider_payment_banner}>
                                {paymentData.map(({ id, image_pay, alt_pay }) => {
                                    return (
                                        <div className={styles.payment_image_wrapper} key={id}>
                                            <img src={image_pay} alt={alt_pay} />
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <div className={styles.provider_partnership_wrapper}>
                            <div className={styles.provider_partnership_title}>
                                Partnerships
                            </div>
                            <div className={styles.provider_partnership_banner}>
                                {partnerData.map(({ id, image_part, alt_part }) => {
                                    return (
                                        <div className={styles.partnership_image_wrapper} key={id}>
                                            <img src={image_part} alt={alt_part} />
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer