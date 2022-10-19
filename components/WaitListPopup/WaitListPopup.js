import React, { useRef, useState, useContext } from 'react'
import style from './waitListPopup.module.css';
import classNames from 'classnames';
import logo from '../../assets/media/teamCompany/whiteLogo.svg';
import { db } from "../../hooks/firebase";
import { GlobalSettingsContext } from '../../context/GlobalSettingsContext';
import Link from 'next/link';
import moment from 'moment';
import { toast } from 'react-toastify';

const WaitListPopup = (props) => {
    const { showPopup } = useContext(GlobalSettingsContext)
    const [editOpen, setEditOpen] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [loading, setLoading] = useState(false)
    let [waitlist, setWaitlist] = useState({ email: showPopup.email || "", name: "", surname: "", role: "", id: (showPopup.id || null) })

    const { setShowPopup } = props;

    let playVideo = (item) => {
        setEditOpen(!editOpen)
    }

    const onSubmit = (e) => {
        setLoading(true)
        if (waitlist.email.length < 1 || waitlist.name.length < 1 || waitlist.surname.length < 1 || !waitlist.role || waitlist.role.length < 1) {
            toast.error("Please fill all fields")
            return false
        }
        e.preventDefault()
        if (!waitlist.id) {
            db.collection("users").add({
                email: waitlist.email,
                name: waitlist.name,
                surname: waitlist.surname,
                role: waitlist.role,
                dateCreated: moment().format("YYYY-MM-DD HH:mm:ss")
            }).then(() => {
                setLoading(false)
                setShowMessage(true)
                setWaitlist({ email: "", name: "", surname: "", role: "" })
            });
        }
        else {
            db.collection("users").doc(waitlist.id).update({
                email: waitlist.email,
                name: waitlist.name,
                surname: waitlist.surname,
                role: waitlist.role,
                updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
            }).then(() => {
                setLoading(false)
                setShowMessage(true)
                setWaitlist({ email: "", name: "", surname: "", role: "" })
            });
        }
    }

    return (
        <div className={style.container}>
            <div className={style.card_container}>
                <div className={style.closeButton} onClick={() => { setShowPopup({ show: false }); document.body.style.overflow = "scroll" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M6.34247 17.6565L17.6562 6.34277M6.34247 6.34277L17.6562 17.6565L6.34247 6.34277Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </div>
                {!showMessage && <div className={classNames(style.waitListFormContainer, style.waitListForm)}>
                    <div className={classNames(style.title, "d-sm-none d-lg-block")}>943 people are already on the waitlist ⚡</div>
                    <div className={classNames(style.title, "d-sm-block d-lg-none")}>943 people are</div>
                    <div className={classNames(style.title, "d-sm-block d-lg-none")}>already on the waitlist ⚡</div>
                    <div className={classNames(style.waitList_description, "d-sm-none d-lg-block")}>
                        We will let you know our beta version is ready.
                    </div>
                    <div className={classNames(style.waitList_description, "d-sm-block d-lg-none")}>
                        Leave us your email and we will let you know once the beta version is ready.
                    </div>
                    <hr className={style.haederSubLine} />

                    <div className={style.formContainer}>
                        <div className={style.formControl}>
                            <div className={style.formIcon}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.1" cx="32" cy="32" r="32" fill="white" />
                                    <path d="M31.9957 36.2324C26.2451 36.2324 21.3331 37.1391 21.3331 40.7658C21.3331 44.3938 26.2144 45.3324 31.9957 45.3324C37.7464 45.3324 42.6584 44.4271 42.6584 40.7991C42.6584 37.1711 37.7784 36.2324 31.9957 36.2324Z" fill="white" />
                                    <path opacity="0.4" d="M31.9957 32.778C35.9131 32.778 39.0517 29.638 39.0517 25.722C39.0517 21.806 35.9131 18.666 31.9957 18.666C28.0797 18.666 24.9397 21.806 24.9397 25.722C24.9397 29.638 28.0797 32.778 31.9957 32.778Z" fill="white" />
                                </svg>
                            </div>

                            <div className={classNames(style.formInput, "waitListInputs")}>
                                <div className={style.name}>
                                    <input placeholder='Name' value={waitlist?.name} autoComplete="none" required onChange={(e) => setWaitlist({ ...waitlist, name: e.target.value })} />
                                </div>
                                <div className={style.surname}>
                                    <input placeholder='Surname' value={waitlist?.surname} autoComplete="none" required onChange={(e) => setWaitlist({ ...waitlist, surname: e.target.value })} />
                                </div>
                            </div>
                        </div>

                        <div className={classNames(style.formControl, "waitListInputs")}>
                            <div className={style.formIcon}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.1" cx="32" cy="32" r="32" fill="white" />
                                    <path opacity="0.4" d="M45.3332 37.2537C45.3332 40.9737 42.3465 43.987 38.6265 44.0003H38.6132H25.3999C21.6932 44.0003 18.6665 41.0003 18.6665 37.2803V37.267C18.6665 37.267 18.6745 31.3657 18.6852 28.3977C18.6865 27.8403 19.3265 27.5283 19.7625 27.875C22.9305 30.3883 28.5959 34.971 28.6665 35.031C29.6132 35.7897 30.8132 36.2177 32.0399 36.2177C33.2665 36.2177 34.4665 35.7897 35.4132 35.0163C35.4839 34.9697 41.0225 30.5243 44.2385 27.9697C44.6759 27.6217 45.3185 27.9337 45.3199 28.4897C45.3332 31.435 45.3332 37.2537 45.3332 37.2537Z" fill="white" />
                                    <path d="M44.6347 23.5644C43.48 21.3884 41.208 19.999 38.7067 19.999H25.4C22.8987 19.999 20.6267 21.3884 19.472 23.5644C19.2133 24.051 19.336 24.6577 19.7667 25.0017L29.6667 32.9204C30.36 33.4804 31.2 33.759 32.04 33.759C32.0453 33.759 32.0493 33.759 32.0533 33.759C32.0573 33.759 32.0627 33.759 32.0667 33.759C32.9067 33.759 33.7467 33.4804 34.44 32.9204L44.34 25.0017C44.7707 24.6577 44.8933 24.051 44.6347 23.5644Z" fill="white" />
                                </svg>
                            </div>

                            <div className={classNames(style.formInput, style.emailCheck, "waitListEmail")}>
                                <input className={style.email} value={waitlist?.email || ""} type="email" id="email" autoComplete="none" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" placeholder="Email" required onChange={(e) => setWaitlist({ ...waitlist, email: e.target.value })}></input>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M14.3403 0H5.67031C2.28031 0 0.000305176 2.38 0.000305176 5.92V14.09C0.000305176 17.62 2.28031 20 5.67031 20H14.3403C17.7303 20 20.0003 17.62 20.0003 14.09V5.92C20.0003 2.38 17.7303 0 14.3403 0" />
                                    <path d="M8.81341 13.2485C8.58941 13.2485 8.36541 13.1635 8.19441 12.9925L5.82141 10.6195C5.47941 10.2775 5.47941 9.72345 5.82141 9.38245C6.16341 9.04045 6.71641 9.03945 7.05841 9.38145L8.81341 11.1365L12.9414 7.00845C13.2834 6.66645 13.8364 6.66645 14.1784 7.00845C14.5204 7.35045 14.5204 7.90445 14.1784 8.24645L9.43241 12.9925C9.26141 13.1635 9.03741 13.2485 8.81341 13.2485" fill="white" />
                                </svg>
                            </div>
                        </div>

                        <div className={classNames(style.formControl, "waitListInputs")}>
                            <div className={style.formIcon}>
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.1" cx="32" cy="32" r="32" fill="white" />
                                    <path opacity="0.4" d="M18.6669 30.7715C18.7336 33.8888 18.9203 39.2208 18.9469 39.8088C19.0416 41.0662 19.5229 42.3368 20.2723 43.2328C21.3149 44.4902 22.5989 45.0515 24.3896 45.0515C26.8643 45.0648 29.5923 45.0648 32.2416 45.0648C34.9016 45.0648 37.4829 45.0648 39.6629 45.0515C41.4283 45.0515 42.7523 44.4755 43.7816 43.2328C44.5309 42.3368 45.0123 41.0528 45.0803 39.8088C45.1069 39.3142 45.2403 33.5262 45.3203 30.7715H18.6669Z" fill="white" />
                                    <path d="M30.9939 36.5117V38.2371C30.9939 38.7891 31.4419 39.2371 31.9939 39.2371C32.5459 39.2371 32.9939 38.7891 32.9939 38.2371V36.5117C32.9939 35.9597 32.5459 35.5117 31.9939 35.5117C31.4419 35.5117 30.9939 35.9597 30.9939 36.5117Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M29.6151 35.4083C29.4817 35.8923 29.0164 36.2017 28.5124 36.135C25.1111 35.6603 21.8604 34.4537 19.1164 32.6417C18.8351 32.4577 18.6671 32.143 18.6671 31.807V27.1857C18.6671 24.3857 20.9497 22.1083 23.7564 22.1083H26.3791C26.6297 20.1723 28.2697 18.667 30.2724 18.667H33.7151C35.7164 18.667 37.3577 20.1723 37.6084 22.1083H40.2444C43.0431 22.1083 45.3204 24.3857 45.3204 27.1857V31.807C45.3204 32.143 45.1511 32.4563 44.8724 32.6417C42.1231 34.4617 38.8591 35.6737 35.4351 36.147C35.3884 36.1537 35.3431 36.1563 35.2977 36.1563C34.8457 36.1563 34.4417 35.851 34.3284 35.403C34.0591 34.3417 33.0951 33.599 31.9871 33.599C30.8644 33.599 29.9111 34.3257 29.6151 35.4083ZM33.7151 20.667H30.2724C29.3751 20.667 28.6257 21.2803 28.4017 22.1083H35.5844C35.3604 21.2803 34.6111 20.667 33.7151 20.667Z" fill="white" />
                                </svg>
                            </div>
                            <div className={style.formInput}>
                                <select className={style.roleSelectInput} value={waitlist.role} placeholder="Select your role" required onChange={(e) => setWaitlist({ ...waitlist, role: e.target.value })}>
                                    <option value="">Select your role</option>
                                    <option>Product Manager / Product Owner</option>
                                    <option>CEO, General Manager, Head Positions</option>
                                    <option>Entrepreneur</option>
                                    <option>Business Manager</option>
                                    <option>Designer</option>
                                    <option>Software Developer (All platforms)</option>
                                    <option>Sales Manager</option>
                                    <option>Marketing Manager</option>
                                    <option>Customer Support Specialist</option>
                                    <option>User / Customer</option>
                                    <option>Director / Partner / Investor</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className='d-flex justify-content-end'>
                            <button disabled={loading} className={style.joinButton} onClick={onSubmit}>Join Producter Beta</button>
                        </div>
                    </div>
                </div>}

                {showMessage && <div className={classNames(style.waitListFormContainer, style.waitListForm)}>
                    <div className={classNames(style.title)}>Thank you! ⭐️️</div>

                    <div className={classNames(style.waitList_description)}>
                        Check your inbox. We’ll invite you soon.
                    </div>
                    <hr className={style.haederSubLine} />
                    <div className={style.messageContainer}>
                        <span className={style.message}>We added your email address to our waitlist. Stay tuned! </span>
                        <div className={style.messageButtonContainer}>
                            <Link href="https://twitter.com/intent/user?screen_name=producter">
                                <a target="_blank" className={style.messageButton}>
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.28982 16C13.8373 16 17.9648 9.84491 17.9648 4.50777C17.9648 4.3329 17.9612 4.15892 17.953 3.98561C18.7541 3.41554 19.4507 2.70395 20 1.89429C19.2648 2.21582 18.4737 2.43234 17.6436 2.52997C18.4907 2.02998 19.1413 1.23867 19.4482 0.295562C18.6552 0.758386 17.7771 1.0947 16.8427 1.27607C16.0936 0.491037 15.0272 0 13.8473 0C11.581 0 9.7433 1.80898 9.7433 4.03868C9.7433 4.35574 9.77946 4.66384 9.84953 4.95963C6.4395 4.79102 3.41549 3.18356 1.3919 0.739802C1.03909 1.33652 0.835959 2.0302 0.835959 2.76978C0.835959 4.17101 1.56046 5.40812 2.6621 6.13202C1.98901 6.11165 1.35664 5.92938 0.803658 5.62666C0.802748 5.64345 0.802748 5.66047 0.802748 5.67816C0.802748 7.63447 2.21739 9.26767 4.09472 9.6378C3.7501 9.73027 3.38751 9.77998 3.01309 9.77998C2.74877 9.77998 2.49173 9.75401 2.24173 9.70721C2.76401 11.3118 4.27897 12.4797 6.07509 12.5126C4.67045 13.5961 2.90117 14.2416 0.978811 14.2416C0.647839 14.2416 0.32119 14.223 0 14.1857C1.81591 15.3312 3.97211 16 6.28982 16Z" fill="white" />
                                    </svg>
                                    <span>Tweet</span>
                                </a>
                            </Link>
                            <Link href="https://www.linkedin.com/company/producter/">
                                <a target="_blank" className={style.messageButton}>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.09924 1.8647C4.09924 2.90126 3.30796 3.73068 2.03743 3.73068H2.01415C0.790843 3.73068 0 2.90126 0 1.8647C0 0.806208 0.814929 0 2.06145 0C3.30796 0 4.07559 0.806208 4.09924 1.8647ZM3.85878 5.2041V15.9996H0.214988V5.2041H3.85878ZM16.9999 15.9992L17 9.80937C17 6.49347 15.2025 4.9502 12.8047 4.9502C10.8701 4.9502 10.0039 5.99801 9.52029 6.73307V5.20398H5.87607C5.92409 6.21697 5.87607 15.9994 5.87607 15.9994H9.52029V9.97036C9.52029 9.64772 9.54394 9.32587 9.64029 9.09487C9.90363 8.45031 10.5032 7.78296 11.5099 7.78296C12.829 7.78296 13.3563 8.77288 13.3563 10.2236V15.9992H16.9999Z" fill="white" />
                                    </svg>
                                    <span>Share</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>}
                <div className={classNames(style.waitListFormContainer)}>
                    <div className={style.logo}>
                        <img src={logo.src} width="100%" />
                    </div>

                    <div className={style.tabsVideoContainer}>
                        {
                            !editOpen && <div><button className={style.playPauseButton} onClick={() => playVideo(1)}></button></div>
                        }
                        {editOpen &&
                            <iframe
                                width="381"
                                height="214"
                                src="https://www.youtube.com/embed/cg1ondHwoxQ?autoplay=1"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                        }
                    </div>

                    <h6 className={style.whatIsProducterTitle}>What is Producter?</h6>

                    <p className={style.waitList_desc}>
                        Collect feedback from your customers and teammates and communicate product decisions in one place.
                    </p>
                    <Link href="https://meetings-eu1.hubspot.com/rifat" passHref>
                        <a className={style.bookDemoButton} target="_blank">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 9H3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 5V3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 5V3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Book a demo</a>
                    </Link>
                </div>


            </div>
        </div >
    )
}

export default WaitListPopup