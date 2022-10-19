import React, { useRef, useState, useContext, useEffect } from 'react'
import style from './signinPopup.module.css';
import { GlobalSettingsContext } from '../../context/GlobalSettingsContext';
import Link from 'next/link';
import BG from '../../assets/media/signIn/login-bg.png'
import { useRouter } from 'next/router';


const WaitListPopup = (props) => {
    const { showSignInPopup, setShowSignInPopup } = useContext(GlobalSettingsContext)

    const [workspace, setWorkspace] = useState("")
    const router = useRouter()

    return (<>
        <div className={style.container}>
            <div className={style.card_container}>
                <div className={style.closeButton} onClick={() => { router.push('/', undefined, { shallow: true }); document.body.style.overflow = "scroll" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M6.34247 17.6565L17.6562 6.34277M6.34247 6.34277L17.6562 17.6565L6.34247 6.34277Z" stroke="#405175" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </div>

                <div className={style.section}>
                    <div className={style.headerContainer}>
                        <div className={style.header}>Go to your login page</div>
                        <div className={style.description}>Type your workspace name below and go to your login page<br />
                            hint: it&apos;s usually your company name :)</div>

                        <div className={style.inputSection}>
                            <input value={workspace} placeholder='workspacename' className={style.inputContainer} onKeyDown={(e) => {
                                if (e.key === "Enter")
                                    window.open(`https://${workspace}.producter.co/login`, '_blank')
                            }} onChange={(e) => setWorkspace(e.target.value)}></input>
                            <div className={style.afterContainer}>
                                <div className={style.afterTitle}>.producter.co/login</div>

                                <Link passHref href={`https://${workspace}.producter.co/login`}>
                                    <a className={style.afterButton} target="_blank">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 18L21 12L15 6" stroke="#2D70FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 12H20" stroke="#2D70FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21 12H20" stroke="#2D70FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.footerTitle}>If you have questions, reach out to us at <Link href='mailto:hello@producter.co' alt="mail"><span className={style.mailto}>support@producter.co</span></Link></div>
                </div>

            </div>
        </div>
    </>
    )

}

export default WaitListPopup