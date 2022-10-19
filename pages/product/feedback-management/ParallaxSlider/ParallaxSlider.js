import React, { useEffect, useRef, useState } from 'react'
import styles from './Parallax.module.css';
import { InView, useInView } from 'react-intersection-observer';
import CollectFeedbackIcon from '../../../../assets/media/product/feedback-management/collect-feedback.png'
import Image1 from '../../../../assets/media/product/feedback-management/image1.png'
import Image2 from '../../../../assets/media/product/feedback-management/image2.png'
import Image3 from '../../../../assets/media/product/feedback-management/image3.png'
import Image4 from '../../../../assets/media/product/feedback-management/image4.png'
import classNames from 'classnames';

const ParallaxSlider = () => {

    const [scrollPosition, setScrollPosition] = useState()
    const { ref: productUsed, inView: productUsedStatus } = useInView();
    const { ref: productUsers, inView: productUsersStatus } = useInView();
    const { ref: productRetain, inView: productRetainStatus } = useInView();
    const image1 = useRef();

    useEffect(() => {
        let getScroll = () => {
            setScrollPosition(window.scrollY)
        }
        getScroll()
        window.addEventListener("scroll", getScroll)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.cardList}>
                <section className={styles.productFeaturesSection}>
                    <div className={styles.cardContainer}>
                        <div className={styles.productFeaturesContent}>
                            <article className={styles.productFeaturesItem}>
                                <header>
                                    <div className={styles.header}>
                                        <div className={classNames(styles.icon, styles.greenBgColor)}>
                                            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.53677 14.5373C7.41812 14.508 7.29271 14.5202 7.18339 14.5749L4.18671 16.0732C3.82596 16.2536 3.41109 15.9546 3.46813 15.5553L3.83894 12.9596C3.86299 12.7912 3.7989 12.6231 3.67448 12.5071C2.42283 11.3408 1.6665 9.8244 1.6665 8.16667C1.6665 4.48477 5.39746 1.5 9.99984 1.5C14.6022 1.5 18.3332 4.48477 18.3332 8.16667C18.3332 11.8486 14.6022 14.8333 9.99984 14.8333C9.14241 14.8333 8.31522 14.7297 7.53677 14.5373Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className={styles.title}>Collect Feedback</span>
                                    </div>
                                    <div className={classNames(styles.quesTextContainer, styles.greenColor)}>
                                        <span>Collect and centralize feedback</span>
                                    </div>
                                </header>
                                <div className={styles.description}>
                                    <p>Collect feedback from different channels and find the gem in the crowd easily.</p>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <div className={styles.productFeaturesContent}>
                            <article className={styles.productFeaturesItem}>
                                <header>
                                    <div className={styles.header}>
                                        <div className={classNames(styles.icon, styles.blueBgColor)}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.83333 17.5001H14.1667M5 1.66675H15V9.16675C15 11.9282 12.7614 14.1667 10 14.1667C7.23858 14.1667 5 11.9282 5 9.16675V1.66675Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 14.1667V17.5001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M4.99984 4.16675V9.16675H4.1665C2.78579 9.16675 1.6665 8.04746 1.6665 6.66675C1.6665 5.28604 2.78579 4.16675 4.1665 4.16675H4.99984ZM14.9998 9.16675V4.16675H15.8332C17.2139 4.16675 18.3332 5.28604 18.3332 6.66675C18.3332 8.04746 17.2139 9.16675 15.8332 9.16675H14.9998Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className={styles.title}>FIND VALUABLE FEEDBACK</span>
                                    </div>
                                    <div className={classNames(styles.quesTextContainer, styles.blueColor)}>
                                        <span>Prioritize the most valuable feedback</span>
                                    </div>
                                </header>
                                <div className={styles.description}>
                                    <p>Understand and build what your users really need rather than making assumptions.</p>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <div className={styles.productFeaturesContent}>
                            <article className={styles.productFeaturesItem}>
                                <header>
                                    <div className={styles.header}>
                                        <div className={classNames(styles.icon, styles.orangeBgColor)}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 7.2C16 8.64444 16 10.0889 16 11.5333C16 12.8632 16.3924 13.8529 17.1772 14.5025C17.3444 14.6409 17.2525 15 17.0355 15L2.96455 15C2.7475 15 2.65561 14.6409 2.8228 14.5025C3.6076 13.8529 4 12.8632 4 11.5333C4 10.0889 4 8.64444 4 7.2C4 4.32812 6.68629 2 10 2C13.3137 2 16 4.32812 16 7.2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7 15C7 16.6569 8.34315 18 10 18C11.6569 18 13 16.6569 13 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className={styles.title}>NOTIFY YOUR USERS</span>
                                    </div>
                                    <div className={classNames(styles.quesTextContainer, styles.orangeColor)}>
                                        <span>Close the customer feedback loop</span>
                                    </div>
                                </header>
                                <div className={styles.description}>
                                    <p>Connect important feedback with a task and notify your users once the new feature is arrived.</p>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <div className={styles.productFeaturesContent}>
                            <article className={styles.productFeaturesItem}>
                                <header>
                                    <div className={styles.header}>
                                        <div className={classNames(styles.icon, styles.yellowBgColor)}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 17.0002L9 11.0002L13 15.0002L20.405 7.59521" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M20.4048 7.59454L20.9993 7" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M21 10V7H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className={styles.title}>PRODUCT SUCCESS</span>
                                    </div>
                                    <div className={classNames(styles.quesTextContainer, styles.yellowColor)}>
                                        <span>Team up with your users to success</span>
                                    </div>
                                </header>
                                <div className={styles.description}>
                                    <p>Product success follows the moment you understand the underlying need of the user.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>


                <div className={classNames(styles.images, scrollPosition > 2950 ? styles.active : "")}>

                    <img className={classNames(styles.image, scrollPosition > 1350 && scrollPosition < 1500 ? styles.showImage : "")} style={{ display: scrollPosition < 1500 ? "initial" : "none" }} src={Image1.src}></img>
                    <img className={classNames(styles.image, scrollPosition > 1499 && scrollPosition < 2020 ? styles.showImage : "")} style={{ display: scrollPosition > 1499 && scrollPosition < 2020 ? "initial" : "none" }} src={Image2.src}></img>
                    <img className={classNames(styles.image, scrollPosition > 2019 && scrollPosition < 2550 ? styles.showImage : "")} style={{ display: scrollPosition > 2019 && scrollPosition < 2550 ? "initial" : "none" }} src={Image3.src}></img>
                    <img className={classNames(styles.image, scrollPosition < 2951 ? scrollPosition > 2549 ? styles.showImage : "" : styles.showImageCenter)} style={{ display: scrollPosition > 2549 ? "initial" : "none" }} src={Image4.src}></img>

                </div>
            </div>
        </div>
    )


}

export default ParallaxSlider