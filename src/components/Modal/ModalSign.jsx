import React, { useState } from 'react'
import styles from './Modal.module.css'
import logo from '../../assets/sidebar-3.png'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { IoClose } from 'react-icons/io5'
import { BsPhoneVibrate } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import ModalSuccess from './ModalSucces';
import NavbarTwo from '../Navbar/NavbarTwo';


const ModalSign = (props) => {
    const [value, setValue] = React.useState(0);
    const [modalSuccess, SetModalSuccess] = useState(false)

    function handleModalSuccessClose() {
        SetModalSuccess(true)
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [isSubmit, setIsSubmit] = useState(false)

    function onSubMitHandle() {
        setIsSubmit(true)
    }

    function closeHandler() {
        props.onCancel();
    }
    return (
        <div div className={styles.modal_container} >
            <div className={styles.modal_dialog_sign}>
                <IoClose onClick={closeHandler} className={styles.modal_close_icon_sign} />
                <div className={styles.modal_sign_box}>

                    <Tabs>
                        <TabList className={styles.tabList}>
                            <Tab className={styles.tabList_item}>สมัครสมาชิก</Tab>
                            <Tab className={styles.tabList_item_1}>เข้าสู่ระบบ</Tab>
                        </TabList>

                        <TabPanel className={styles.modal_TabPanel}>
                            <div className={styles.modal_top}>
                                <div className={styles.modal_inner}>
                                    <div className={styles.modal_bar}>
                                        <div className={styles.modal_bar_box}>
                                            <div className={`${styles.modal_pro_box} ${styles.active} `} ></div>
                                            <div className={styles.modal_pro_box}></div>
                                            <div className={styles.modal_pro_box}></div>
                                            <div className={styles.modal_pro_box}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form >
                                <img src={logo} alt="" />
                                <div className={styles.form_input}>
                                    <input type="text" className={styles.modal_form_tel} placeholder="เบอร์โทรศัพท์" />
                                    <BsPhoneVibrate className={styles.modal_form_icon} />
                                </div>
                                <div className={styles.box_button}>
                                    <button className={styles.button_tel}>ยืนยัน</button>
                                </div>

                            </form>
                            <div className={styles._bottom_form}>
                                <div className={styles.admin_contact}>
                                    <div className={styles.link_component}>
                                        <label htmlFor="text" className={styles.text_message}>พบปัญหา </label>
                                        <a href="/" className={styles.link_message}> ติดต่อฝ่ายบริการลูกค้า</a>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className={styles.modal_TabPanel}>
                            <div className={styles.login_box}>
                                <form styles={styles.form_login}>
                                    <div className={styles.form_input}>
                                        <input type="text" className={styles.modal_form_login} placeholder="เบอร์โทรศัพท์" />

                                    </div>
                                    <div className={styles.form_input}>
                                        <input type="text" className={styles.modal_form_login} placeholder="รหัสผ่าน" />

                                    </div>
                                    <a href="/" className={styles.link_forgot_login}>ลืมรหัสผ่าน</a>
                                    <div className={styles.box_button}>
                                        <Link type="submit" to='/login' className={styles.button_tel}>เข้าสู่ระบบ</Link>


                                    </div>
                                </form>
                                <div className={styles._bottom_form}>
                                    <div className={styles.admin_contact}>
                                        <div className={styles.link_component}>
                                            <label htmlFor="text" className={styles.text_message}>พบปัญหา </label>
                                            <a href="/" className={styles.link_message}> ติดต่อฝ่ายบริการลูกค้า</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div >
        </div >
    )
}

export default ModalSign

