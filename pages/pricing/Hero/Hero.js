import React, { useContext, useEffect, useState } from 'react';
import styles from './Hero.module.css';
import classNames from 'classnames';

const Hero = () => {

    let [customerEditor, setCustomerEditor] = useState(20)
    let [customerSelectTime, setCustomerSelectTime] = useState('year')
    let [totalPrice, setTotalPrice] = useState(400)

    let changeCustomerEditor = (value) => {
        if (value === 'increase') {
            setCustomerEditor(customerEditor + 1)
            console.log(customerEditor)
        } else {
            if (customerEditor > 1) {
                setCustomerEditor(customerEditor - 1)
            }
        }
    }

    useEffect(() => {
        if (customerSelectTime === 'year') {
            setTotalPrice(customerEditor * 12 * 19)
        } else {
            setTotalPrice(customerEditor * 24 * 1)
        }
    }, [customerEditor, customerSelectTime])

    return (
        <>
            <article className={styles.container}>
                <section className={styles.managementContainer}>
                    <h1 className={styles.managementToolTopTitle}>producter PRICING</h1>
                    <div className={styles.title}>Review Our <br /> Pricing Plans</div>
                    <div className={styles.subDescription}>Join 1,000+ customers now. $20/editor monthly.
                        <br />Free up to 5 users. No credit card needed.</div>


                    <div className={styles.creditContainer}>
                        <div className={styles.calculatorContainer}>
                            <div className={styles.editors}>
                                <div className={classNames(styles.increaseButtons, 'd-lg-none d-md-block')}>
                                    <button onClick={() => changeCustomerEditor('decrease')}>
                                        <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6663 1H1.33301" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={'d-flex align-items-center'}>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.75">
                                            <path d="M1.16699 21C1.16699 18.375 4.66699 18.375 6.41699 16.625C7.29199 15.75 4.66699 15.75 4.66699 11.375C4.66699 8.45863 5.83337 7 8.16699 7C10.5006 7 11.667 8.45863 11.667 11.375C11.667 15.75 9.04199 15.75 9.91699 16.625C9.91699 16.625 12.6927 17.4547 14.0003 18.6667C14.8357 19.4409 15.7503 21 15.7503 21M14.9241 18.3478C15.4984 18.1396 15.9691 17.9472 16.3361 17.7704C16.9786 17.461 17.5984 17.1103 18.0837 16.625C18.9587 15.75 16.3337 15.75 16.3337 11.375C16.3337 8.45863 17.5 7 19.8337 7C22.1673 7 23.3337 8.45863 23.3337 11.375C23.3337 15.75 20.7087 15.75 21.5837 16.625C23.3337 18.375 26.8337 18.375 26.8337 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 18.6665C14.4273 18.5223 14.7352 18.416 14.9238 18.3477" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                    <span className={styles.editorsText}>
                                        {customerEditor || 20} Editors
                                    </span>
                                </div>
                                <div className={classNames(styles.increaseButtons, 'd-lg-none d-md-block')}>
                                    <button onClick={() => changeCustomerEditor('increase')}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99967 1.3335V14.6668M14.6663 8.00016H1.33301H14.6663Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={classNames(styles.increaseButtons, 'd-lg-flex d-md-none d-sm-none')}>
                                <button onClick={() => changeCustomerEditor('increase')}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99967 1.3335V14.6668M14.6663 8.00016H1.33301H14.6663Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button onClick={() => changeCustomerEditor('decrease')}>
                                    <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6663 1H1.33301" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className={styles.times}>
                                <button onClick={() => setCustomerSelectTime('year')} className={classNames(styles.orderTimes, customerSelectTime === 'year' ? styles.active : '')}>Yearly</button>
                                <button onClick={() => setCustomerSelectTime('month')} className={classNames(styles.orderTimes, customerSelectTime === 'month' ? styles.active : '')}>Monthly</button>
                            </div>
                        </div>

                        <button className={styles.payButton}>${totalPrice}</button>
                    </div>


                </section>
            </article>
        </>
    )
}

export default Hero