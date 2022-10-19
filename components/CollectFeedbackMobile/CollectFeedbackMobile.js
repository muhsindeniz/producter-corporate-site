import React, { useEffect, useState } from 'react'
import styles from './FeedbackMobile.module.css'
import VolumeOff from '../../assets/media/icons/VolumeOff.svg'
import VolumeOn from '../../assets/media/icons/volume-up.svg'
import classNames from 'classnames'
import logo from '../../assets/media/animationObject/logo.png'
import feedTooltip from '../../assets/media/animationObject/feedTooltip.png'
import taskTooltip from '../../assets/media/animationObject/taskTooltip.png'
import roadmapTooltip from '../../assets/media/animationObject/roadmapTooltip.png'
import updateMail from '../../assets/media/animationObject/updateMail.png'
import productIconList from '../../assets/media/animationObject/producterIconList.svg'

const CollectFeedbackMobile = () => {

  let [soundStatus, setSoundStatus] = useState(false);
  let [userActive, setUserActive] = useState(1)
  let [teamsActive, setTeamsActive] = useState(2)
  let [productActive, setProductActive] = useState(3)

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Listen to the voice of your users from idea to launch</h4>

      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          Collect product feedback and take actions aligned with your strategy — and, be
          <i> customer</i> -driven.
        </div>
        <div className={styles.soundTrack} onClick={() => setSoundStatus(!soundStatus)}>
          {
            soundStatus ? <img src={VolumeOn.src} /> : <img src={VolumeOff.src} />
          }
        </div>
      </div>


      <div className={styles.louncContainer}>

        <div className={styles.roadContainer}>

          <div className={classNames(styles.feedTooltipAnimation)}>
            <img src={feedTooltip.src} />
          </div>

          <div className={classNames(styles.allTeamsTooltipAnimation)}>
            <img src={taskTooltip.src} />
          </div>

          <div className={classNames(styles.roadMapTooltipAnimation)}>
            <img src={roadmapTooltip.src} />
          </div>

        </div>

        <div className={styles.usersCard}>
          <div className={styles.cardUserHeader}>
            YOUR USERS
          </div>
          <div className={styles.CardTabsContainer}>
            <div className={classNames(styles.requestFeature, styles.card, userActive === 1 ? styles.activeCard : "")} onClick={() => { setUserActive(1) }}>
              <svg className={styles.defaulticon} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00777 16.6356C7.88921 16.6059 7.76377 16.6182 7.65445 16.6729L3.85378 18.5732C3.49303 18.7536 3.07816 18.4546 3.1352 18.0553L3.61489 14.6975C3.63894 14.5291 3.57498 14.3608 3.44986 14.2456C1.92398 12.8412 1.00024 11.0069 1.00024 9C1.00024 4.58172 5.4774 1 11.0002 1C16.5231 1 21.0002 4.58172 21.0002 9C21.0002 13.4183 16.5231 17 11.0002 17C9.95781 17 8.95262 16.8724 8.00777 16.6356Z" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg className={styles.plus} width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M12.0004 4V20M20.0004 12H4.00037H20.0004Z" stroke="#00D8A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>

              <div className={styles.requestFeatureText}>
                <div>Feature</div>
                <div>Request</div>
              </div>
            </div>

            <div className={classNames(styles.requestFeature, styles.card, userActive === 2 ? styles.activeCard : "")} onClick={() => { setUserActive(2) }}>
              <svg className={styles.defaulticon} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00777 16.6356C7.88921 16.6059 7.76377 16.6182 7.65445 16.6729L3.85378 18.5732C3.49303 18.7536 3.07816 18.4546 3.1352 18.0553L3.61489 14.6975C3.63894 14.5291 3.57498 14.3608 3.44986 14.2456C1.92398 12.8412 1.00024 11.0069 1.00024 9C1.00024 4.58172 5.4774 1 11.0002 1C16.5231 1 21.0002 4.58172 21.0002 9C21.0002 13.4183 16.5231 17 11.0002 17C9.95781 17 8.95262 16.8724 8.00777 16.6356Z" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <svg className={styles.plus} width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M12.0004 4V20M20.0004 12H4.00037H20.0004Z" stroke="#00D8A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <div className={styles.requestFeatureText}>
                <div>Bug</div>
                <div>Report</div>
              </div>
            </div>

            <div className={classNames(styles.requestFeature, styles.card, userActive === 3 ? styles.activeCard : "")} onClick={() => { setUserActive(3) }}>
              <svg className={styles.defaulticon} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00777 16.6356C7.88921 16.6059 7.76377 16.6182 7.65445 16.6729L3.85378 18.5732C3.49303 18.7536 3.07816 18.4546 3.1352 18.0553L3.61489 14.6975C3.63894 14.5291 3.57498 14.3608 3.44986 14.2456C1.92398 12.8412 1.00024 11.0069 1.00024 9C1.00024 4.58172 5.4774 1 11.0002 1C16.5231 1 21.0002 4.58172 21.0002 9C21.0002 13.4183 16.5231 17 11.0002 17C9.95781 17 8.95262 16.8724 8.00777 16.6356Z" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg className={styles.plus} width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M12.0004 4V20M20.0004 12H4.00037H20.0004Z" stroke="#00D8A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <div className={styles.requestFeatureText}>
                <div>Product</div>
                <div>Idea</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.teamCard}>
          <div className={styles.cardTeamsHeader}>
            ALL TEAMS
          </div>
          <div className={styles.CardTabsContainer}>
            <div className={classNames(styles.requestFeature, styles.teamsCard, teamsActive === 1 ? styles.teamsActiveCard : "")} onClick={() => setTeamsActive(1)}>
              <svg className={styles.defaulticon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_337_398)">
                  <path d="M6 16.8H12H18" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.40002 9.81813L10.65 12L15.6 7.19995" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.8001 1.19995H5.20007C2.99093 1.19995 1.20007 2.99082 1.20007 5.19995V18.7999C1.20007 21.0091 2.99094 22.7999 5.20008 22.7999H18.8001C21.0092 22.7999 22.8001 21.0091 22.8001 18.7999V5.19995C22.8001 2.99081 21.0092 1.19995 18.8001 1.19995Z" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_337_398">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <svg className={styles.plus} width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M12.0004 4V20M20.0004 12H4.00037H20.0004Z" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <div className={styles.requestFeatureText}>
                <div>Product</div>
                <div>Tasks</div>
              </div>
            </div>

            <div className={classNames(styles.requestFeature, styles.teamsCard, teamsActive === 2 ? styles.teamsActiveCard : "")} onClick={() => setTeamsActive(2)}>
              <svg className={styles.defaulticon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_337_398)">
                  <path d="M6 16.8H12H18" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.40002 9.81813L10.65 12L15.6 7.19995" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.8001 1.19995H5.20007C2.99093 1.19995 1.20007 2.99082 1.20007 5.19995V18.7999C1.20007 21.0091 2.99094 22.7999 5.20008 22.7999H18.8001C21.0092 22.7999 22.8001 21.0091 22.8001 18.7999V5.19995C22.8001 2.99081 21.0092 1.19995 18.8001 1.19995Z" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_337_398">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg className={styles.plus} width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M12.0004 4V20M20.0004 12H4.00037H20.0004Z" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <div className={styles.requestFeatureText}>
                <div>Dev</div>
                <div>Tasks</div>
              </div>
            </div>

            <div className={classNames(styles.requestFeature, styles.teamsCard, teamsActive === 3 ? styles.teamsActiveCard : "")} onClick={() => setTeamsActive(3)}>
              <svg className={styles.defaulticon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_337_398)">
                  <path d="M6 16.8H12H18" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.40002 9.81813L10.65 12L15.6 7.19995" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.8001 1.19995H5.20007C2.99093 1.19995 1.20007 2.99082 1.20007 5.19995V18.7999C1.20007 21.0091 2.99094 22.7999 5.20008 22.7999H18.8001C21.0092 22.7999 22.8001 21.0091 22.8001 18.7999V5.19995C22.8001 2.99081 21.0092 1.19995 18.8001 1.19995Z" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_337_398">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg className={styles.plus} width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M12.0004 4V20M20.0004 12H4.00037H20.0004Z" stroke="#FFD166" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <div className={styles.requestFeatureText}>
                <div>Growth</div>
                <div>Tasks</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.productCard}>
          <div className={styles.cardProductHeader}>
            PRODUCT STRATEGY
          </div>
          <div className={styles.CardTabsContainer}>
            <div className={classNames(styles.requestFeature, styles.strategy, productActive === 1 ? styles.activeProductCard : "")} onClick={() => setProductActive(1)}>
              <svg className={styles.defaulticon} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1202 13.121L6.04922 15.9501L8.87822 8.87905L15.9492 6.05005L13.1202 13.121Z" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <svg className={styles.plus} width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M12.0004 4V20M20.0004 12H4.00037H20.0004Z" stroke="#7B61FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <div className={styles.requestFeatureText}>
                <div>Personas</div>
                <div>& Ideas</div>
              </div>
            </div>

            <div className={classNames(styles.requestFeature, styles.strategy, productActive === 2 ? styles.activeProductCard : "")} onClick={() => setProductActive(2)}>
              <svg className={styles.defaulticon} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1202 13.121L6.04922 15.9501L8.87822 8.87905L15.9492 6.05005L13.1202 13.121Z" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <svg className={styles.plus} width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M12.0004 4V20M20.0004 12H4.00037H20.0004Z" stroke="#7B61FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <div className={styles.requestFeatureText}>
                <div>Product</div>
                <div>Roadmap</div>
              </div>
            </div>

            <div className={classNames(styles.requestFeature, styles.strategy, productActive === 3 ? styles.activeProductCard : "")} onClick={() => setProductActive(3)}>
              <svg className={styles.defaulticon} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1202 13.121L6.04922 15.9501L8.87822 8.87905L15.9492 6.05005L13.1202 13.121Z" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#8C97AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <svg className={styles.plus} width="22" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M12.0004 4V20M20.0004 12H4.00037H20.0004Z" stroke="#7B61FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <div className={styles.requestFeatureText}>
                <div>Product</div>
                <div>Vision</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.producterGroup}>
          <div className="sonar-wrapper">
            <div className="sonar-emitter">
              <div className={styles.border1}></div>
              <div className={styles.border2}></div>
              <div className={styles.border3}></div>
              <div className={classNames(styles.sonarWave, styles.sonarWave1)}></div>
              <div className={classNames(styles.sonarWave, styles.sonarWave2)}></div>
              <div className={classNames(styles.sonarWave, styles.sonarWave3)}></div>
              <div className={classNames(styles.sonarWave, styles.sonarWave4)}></div>
              <div className={styles.logo}>
                <img src={logo.src} />
              </div>

              <div className={styles.roadMapContainer}>
                <img src={updateMail.src} />
              </div>

              <div className={styles.productIconList}>
                <img src={productIconList.src} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CollectFeedbackMobile