import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import styles from './FeedbackWorkspace.module.css'

const FeedbackWorkspace = () => {
    return (
        <div className={styles.container}>
            <div className={classNames(styles.row)}>
                <div className={styles.descContainer}>
                    <p className={styles.topTitle}>BETTER FEEDBACK MANAGEMENT</p>
                    <p className={styles.title}>Try Producter today</p>
                    <p><b className={styles.bottomDesc}>Listen to your customers and understand their <br />     needs</b><span className={styles.bottomDescLight}> — without switching tabs in your browser.</span></p>
                </div>
                <div className={styles.joinContainer}>
                    <div className={styles.joinEmail}>
                        <div className={classNames('d-flex justify-content-center', styles.nameSurnameContainer)}>
                            <input className={styles.name} type="text" placeholder='Name' />
                            <input className={styles.surname} type="text" placeholder='Surname' />
                        </div>
                        <div className='w-100'>
                            <input type="email" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" className={classNames(styles.emailInput)} placeholder="Email" />
                        </div>
                        <button className={styles.calenderButton}>Create Your Workspace</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackWorkspace