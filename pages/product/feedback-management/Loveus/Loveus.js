import React from 'react'
import styles from './Loveus.module.css'
import Avatar from '../../../../assets/media/product/feedback-management/avatar-1.png'
import classNames from 'classnames'
const Loveus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.header}>Why customers love us</div>
        <div className={styles.quotesIcon}>
          <svg width="147" height="124" viewBox="0 0 147 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2" clipPath="url(#clip0_1411_2042)">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.644684 104.633C22.5654 93.8741 33.5256 81.2322 33.5256 66.7072C24.1824 65.6312 16.4563 61.8207 10.3473 55.2755C4.23819 48.7303 1.18372 41.1541 1.18372 32.5466C1.18372 23.4013 4.14836 15.6906 10.0777 9.41431C16.0071 3.13808 23.4637 0 32.4476 0C42.5095 0 51.2238 4.0795 58.5906 12.2386C65.9574 20.3977 69.6408 30.3051 69.6408 41.961C69.6408 76.9286 50.0561 104.275 10.8863 124L0.644684 104.633ZM78.0039 104.633C100.104 93.8741 111.154 81.2322 111.154 66.7072C101.631 65.6312 93.8156 61.8207 87.7065 55.2755C81.5974 48.7303 78.543 41.1541 78.543 32.5466C78.543 23.4013 81.5525 15.6906 87.5717 9.41431C93.591 3.13808 101.092 0 110.076 0C120.138 0 128.808 4.0795 136.085 12.2386C143.362 20.3977 147 30.3051 147 41.961C147 76.9286 127.505 104.275 88.515 124L78.0039 104.633Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1411_2042">
                <rect width="147" height="124" fill="white" transform="translate(147 124) rotate(-180)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={styles.cardSection}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <span className={styles.cardHeader}>Rising star in product feedback</span>
              <span className={styles.cardDesc}>“Producter is a rising star in product feedback. It’s very easy to integrate and use. Provides all we need. We get direct and valuable feedback from users.”</span>
            </div>
            <div className={styles.avatarSection}>
              <img src={Avatar.src} alt='avatar1'></img>
              <div className={styles.avatarContainer}>
                <span className={styles.avatarName}>Dirk Schmedding</span>
                <span className={styles.avatarPosition}>CPO, Contentpepper</span>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={classNames(styles.card, styles.secondCard)}>
              <span className={styles.cardHeader}>Simple and clean tool</span>
              <span className={styles.cardDesc}>“I like being able to provide my customers with transparency into what features are being considered lets them know that their requests are not falling on deaf ears.”</span>
            </div>
            <div className={styles.avatarSection}>
              <img src={Avatar.src} alt='avatar2'></img>
              <div className={styles.avatarContainer}>
                <span className={styles.avatarName}>Kevin Kramer</span>
                <span className={styles.avatarPosition}>Product Manager, Align</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loveus