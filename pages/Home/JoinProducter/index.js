import React, { useState, useContext } from 'react'
import classNames from "classnames"
import styles from "../JoinProducter/JoinProducter.module.css"
import ArrowSlime from "../../../assets/media/join/ArrowSlime.svg"
import Message from "../../../assets/media/join/Message.svg"
import Calendar from "../../../assets/media/join/calendar.svg"
import { GlobalSettingsContext } from '../../../context/GlobalSettingsContext'
import Link from 'next/link'

const JoinProducters = () => {
    const { setShowPopup, showPopup } = useContext(GlobalSettingsContext)
    const [email, setEmail] = useState("")
    return (
        <div className={styles.main}>
            <div className={styles.dividerFirst}></div>
            <div className={styles.dividerSecond}></div>
            <div className={styles.container}>
                <div className={styles.leftGroup}>
                    <div className={styles.titleGroup}>
                        <span className={styles.title}>The greatest cost is not knowing what to build</span>
                        <span className={styles.description}>Connect impactful feedback with actionable tasks. Let your users know you care about their feedback.</span>
                    </div>
                    <div className={styles.yourEmailContianer}>
                        <div className={styles.yourEmail}>
                            <span className={styles.yourEmailTitle}>Your Email</span>
                            <span className={styles.yourEmailDesc}>Leave us your email</span>
                        </div>
                        <img src={Message.src}></img>
                    </div>
                    <div className={styles.footerDesc}>
                        <div className="d-sm-none d-lg-flex">
                            <img src={Calendar.src}></img>
                            <Link href="https://meetings-eu1.hubspot.com/rifat" passHref>
                                <a target="_blank"><span>Book a Demo</span>
                                </a>
                            </Link>
                        </div>

                        <div className={classNames("d-none", styles.joinEmailWithPhone, styles.joinEmail)}>
                            <div className="d-flex justify-content-center position-relative joinProducter">
                                <input type="email" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" value={email} className={classNames("form-control input-lg", styles.emailInput)} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M14.3402 -0.000244141H5.67024C2.28024 -0.000244141 0.000244141 2.37976 0.000244141 5.91976V14.0898C0.000244141 17.6198 2.28024 19.9998 5.67024 19.9998H14.3402C17.7302 19.9998 20.0002 17.6198 20.0002 14.0898V5.91976C20.0002 2.37976 17.7302 -0.000244141 14.3402 -0.000244141Z" />
                                    <path d="M8.81332 13.2478C8.58932 13.2478 8.36532 13.1628 8.19432 12.9918L5.82132 10.6188C5.47932 10.2768 5.47932 9.72284 5.82132 9.38184C6.16332 9.03984 6.71632 9.03884 7.05832 9.38084L8.81332 11.1358L12.9413 7.00784C13.2833 6.66584 13.8363 6.66584 14.1783 7.00784C14.5203 7.34984 14.5203 7.90384 14.1783 8.24584L9.43232 12.9918C9.26132 13.1628 9.03732 13.2478 8.81332 13.2478Z" />
                                </svg>

                            </div>
                            <div className={styles.joinButtonContainer}>
                                <Link href="https://app.producter.co/">
                                    <a className={styles.joinButton} target="_blank">Create Workspace</a>
                                </Link>
                                <button className={styles.calenderButton}><img src={Calendar.src} width="24" height="24"></img></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightGroup}>
                <div className={styles.joinContainer}>
                    <div className={styles.joinIconsGroup}>
                        <img className={styles.slimeIcon} src={ArrowSlime.src}></img>
                        <span className={styles.jointTitle}>Join Beta Today</span>
                    </div>
                    <div className={styles.joinEmail}>
                        <div className="position-relative joinProducter">
                            <input type="email" value={email} pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" className={classNames("form-control input-lg", styles.emailInput)} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M14.3402 -0.000244141H5.67024C2.28024 -0.000244141 0.000244141 2.37976 0.000244141 5.91976V14.0898C0.000244141 17.6198 2.28024 19.9998 5.67024 19.9998H14.3402C17.7302 19.9998 20.0002 17.6198 20.0002 14.0898V5.91976C20.0002 2.37976 17.7302 -0.000244141 14.3402 -0.000244141Z" />
                                <path d="M8.81332 13.2478C8.58932 13.2478 8.36532 13.1628 8.19432 12.9918L5.82132 10.6188C5.47932 10.2768 5.47932 9.72284 5.82132 9.38184C6.16332 9.03984 6.71632 9.03884 7.05832 9.38084L8.81332 11.1358L12.9413 7.00784C13.2833 6.66584 13.8363 6.66584 14.1783 7.00784C14.5203 7.34984 14.5203 7.90384 14.1783 8.24584L9.43232 12.9918C9.26132 13.1628 9.03732 13.2478 8.81332 13.2478Z" />
                            </svg>

                        </div>
                    </div>
                    <div className={styles.joinButtonContainer}>
                        <Link href="https://app.producter.co/">
                            <a className={styles.joinButton} target="_blank">Create Workspace</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinProducters