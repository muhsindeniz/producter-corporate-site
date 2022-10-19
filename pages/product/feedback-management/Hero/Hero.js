import React, { useContext, useState } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';
import ConnectFeedBack from '../../../../assets/media/feedback-detail/connect-feedback.jpg'
import classNames from 'classnames';
import { GlobalSettingsContext } from '../../../../context/GlobalSettingsContext';

const WaitList = () => {

  let [activeTabId, setActiveTab] = useState(0)
  let { mobile } = useContext(GlobalSettingsContext)

  let feedBackData = [
    {
      id: 0,
      icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M17.1875 23.0594C17.1875 23.7476 17.7529 24.3047 18.4513 24.3047L24.5562 24.6479C25.4462 24.6479 26.1668 23.9364 26.1668 23.0594C26.1668 22.1825 25.4462 21.4725 24.5562 21.4725L18.4513 21.8142C17.7529 21.8142 17.1875 22.3713 17.1875 23.0594Z" fill="#2D70FD" />
        <path d="M4.89793 21.3597C4.89793 21.3597 4.53052 21.717 4.37057 21.9386C4.12352 22.26 4 22.6564 4 23.0512C4 23.4943 4.13936 23.9063 4.40225 24.2418C4.46401 24.3027 4.69681 24.5617 4.91377 24.7755C6.18227 26.1174 9.49368 28.313 11.2278 28.984C11.4907 29.0901 12.1558 29.3195 12.5121 29.3335C12.851 29.3335 13.1773 29.2586 13.4861 29.1057C13.8725 28.8919 14.1829 28.5564 14.3523 28.16C14.4616 27.8854 14.631 27.0631 14.631 27.0475C14.8021 26.1471 14.8939 24.6834 14.8939 23.0668C14.8939 21.5266 14.8021 20.1238 14.6627 19.2094C14.6469 19.1938 14.4774 18.1733 14.2906 17.8222C13.9501 17.1824 13.2849 16.7845 12.5739 16.7845H12.5121C12.0481 16.8001 11.0726 17.198 11.0726 17.212C9.43192 17.883 6.19811 19.9724 4.89793 21.3597Z" fill="#2D70FD" />
        <path opacity="0.4" d="M14.813 8.94077C14.813 8.25262 14.2476 7.69555 13.5492 7.69555L7.4441 7.35381C6.55407 7.35381 5.8335 8.06381 5.8335 8.94077C5.8335 9.81774 6.55407 10.5293 7.4441 10.5293L13.5492 10.186C14.2476 10.186 14.813 9.62893 14.813 8.94077Z" fill="#2D70FD" />
        <path d="M18.5139 2.89462C18.1274 3.1084 17.8186 3.4439 17.6476 3.84025C17.5383 4.11489 17.3688 4.9388 17.3688 4.95284C17.1978 5.85321 17.106 7.3169 17.106 8.93351C17.106 10.4737 17.1978 11.8765 17.3372 12.7909C17.353 12.8065 17.524 13.827 17.7093 14.1781C18.0498 14.8195 18.715 15.2158 19.4276 15.2158H19.4894C19.9534 15.2002 20.9274 14.8039 20.9274 14.7883C22.5681 14.1173 25.8035 12.0294 27.1022 10.6406C27.1022 10.6406 27.4696 10.2833 27.628 10.0617C27.8766 9.74181 28.0001 9.34546 28.0001 8.94755C28.0001 8.50595 27.8608 8.09555 27.5979 7.7585C27.5361 7.69764 27.3033 7.43861 27.0879 7.22483C25.8178 5.88442 22.5063 3.68733 20.7738 3.0179C20.5109 2.91023 19.8441 2.68085 19.4894 2.6668C19.1489 2.6668 18.8227 2.7417 18.5139 2.89462Z" fill="#2D70FD" />
      </svg>,
      title: 'Connect feedback with a task',
      description: 'Identify valuable feedback and connect with a task in a few clicks.',
      content: ConnectFeedBack.src
    },
    {
      id: 1,
      icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.6927 17.8604C25.7187 16.7231 25.2761 15.7374 25.2761 14.0629V13.4935C25.2761 11.3114 24.7739 9.90542 23.6819 8.49946C21.999 6.31599 19.1658 5 16.3923 5H16.2744C13.5591 5 10.8148 6.25556 9.10266 8.3504C7.95111 9.78456 7.39057 11.251 7.39057 13.4935V14.0629C7.39057 15.7374 6.97712 16.7231 5.97398 17.8604C5.23588 18.6984 5 19.7753 5 20.9409C5 22.1079 5.38297 23.213 6.15155 24.1114C7.15469 25.1884 8.57127 25.8759 10.0183 25.9954C12.1134 26.2344 14.2085 26.3244 16.334 26.3244C18.4582 26.3244 20.5533 26.174 22.6497 25.9954C24.0954 25.8759 25.512 25.1884 26.5151 24.1114C27.2824 23.213 27.6667 22.1079 27.6667 20.9409C27.6667 19.7753 27.4308 18.6984 26.6927 17.8604Z" fill="#2D70FD" />
        <path opacity="0.4" d="M18.6779 25.6375C18.0113 25.4952 13.9497 25.4952 13.2832 25.6375C12.7134 25.7691 12.0972 26.0753 12.0972 26.7467C12.1303 27.3872 12.5053 27.9526 13.0248 28.3111L13.0234 28.3125C13.6953 28.8362 14.4838 29.1692 15.3093 29.2887C15.7493 29.3491 16.1972 29.3465 16.653 29.2887C17.4773 29.1692 18.2657 28.8362 18.9376 28.3125L18.9363 28.3111C19.4557 27.9526 19.8307 27.3872 19.8639 26.7467C19.8639 26.0753 19.2477 25.7691 18.6779 25.6375Z" fill="#2D70FD" />
      </svg>,
      title: "Inform your users automatically",
      description: "Keep your users up-to-date with automated email notifications.",
      content: ConnectFeedBack.src
    },
    {
      id: 2,
      icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4656 19.8103C7.18054 19.8103 2.6665 20.6267 2.6665 23.8898C2.6665 27.1555 7.15184 28 12.4656 28C17.7507 28 22.2647 27.1836 22.2647 23.9205C22.2647 20.6548 17.7794 19.8103 12.4656 19.8103" fill="#2D70FD" />
        <path opacity="0.4" d="M12.4655 16.6998C16.065 16.6998 18.9495 13.8749 18.9495 10.3499C18.9495 6.82487 16.065 4 12.4655 4C8.8673 4 5.98145 6.82487 5.98145 10.3499C5.98145 13.8749 8.8673 16.6998 12.4655 16.6998" fill="#2D70FD" />
        <path opacity="0.4" d="M21.5645 10.465C21.5645 12.2601 21.014 13.9351 20.0486 15.3264C19.9481 15.4695 20.0368 15.6624 20.2116 15.6931C20.4543 15.7327 20.7035 15.757 20.9579 15.7621C23.4889 15.8272 25.7602 14.2315 26.3878 11.8282C27.318 8.26232 24.5887 5.06055 21.1118 5.06055C20.7348 5.06055 20.3734 5.09888 20.0212 5.16915C19.9729 5.17937 19.9207 5.20237 19.8946 5.24325C19.8607 5.29563 19.8855 5.36335 19.9194 5.40807C20.9644 6.84286 21.5645 8.5894 21.5645 10.465" fill="#2D70FD" />
        <path d="M29.0386 20.2257C28.5755 19.2586 27.4574 18.5955 25.7561 18.2697C24.9538 18.078 22.7803 17.8059 20.7594 17.8442C20.7294 17.8481 20.7124 17.8685 20.7098 17.8813C20.7059 17.9017 20.715 17.9324 20.7542 17.9541C21.6883 18.4064 25.2982 20.374 24.8442 24.5237C24.8246 24.7052 24.9721 24.8585 25.156 24.8329C26.0445 24.709 28.3302 24.2273 29.0386 22.7299C29.4313 21.9378 29.4313 21.0179 29.0386 20.2257" fill="#2D70FD" />
      </svg>,
      title: "Give your users a place to engage",
      description: "Collect valuable feedback by providing your users a dedicated feedback board.",
      content: ConnectFeedBack.src
    }
  ]

  return (
    <>
      <article className={styles.container}>
        <section className={styles.managementContainer}>
          <h1 className={styles.managementToolTopTitle}>FEEDBACK management tool</h1>
          <div className={styles.title}>Cut the noice. Focus on<br />the valuable feedback.</div>
          <div className={styles.subDescription}>Collect feedback from your customers
            <br />and turn the valuable ones into a task.</div>
          <div className={styles.joinButtonContainer}>
            <Link href="https://app.producter.co/">
              <a target="_blank" className={styles.joinButton}>Sign up for free</a>
            </Link>
            {/* <div className={styles.joinArrowSpring}>
              <svg width="125" height="121" viewBox="0 0 125 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6" clipPath="url(#clip0_1464_580)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M53.5326 82.9264C40.9475 83.4566 27.9052 81.6835 17.7837 74.9223C14.0667 72.4383 11.1836 69.1415 8.2032 65.798C7.94128 65.504 7.962 65.0891 8.24989 64.8741C8.53649 64.6584 8.98388 64.7208 9.24452 65.0141C12.1343 68.2564 14.9159 71.4654 18.5177 73.8712C28.486 80.5312 41.3635 82.1694 53.7503 81.5883C53.7656 81.4883 53.7797 81.3876 53.7938 81.2869C54.1023 79.0729 56.0353 76.6748 58.7523 74.539C62.6952 71.4376 68.259 68.848 72.4187 68.0259C74.3374 67.6458 75.9843 67.6545 77.0931 68.0833C78.0173 68.4397 78.6361 69.0575 78.875 69.961C79.0704 70.7063 78.9917 71.4727 78.6654 72.2401C78.2294 73.2639 77.3387 74.3048 76.1312 75.304C71.6634 79.0015 62.8224 82.2092 58.7985 82.5742C57.5379 82.6886 56.2684 82.7827 54.9897 82.854C54.8853 83.4819 54.7877 84.0826 54.7528 84.668C54.7016 85.5273 54.7863 86.3464 55.2476 87.161C56.0982 88.6648 57.5689 89.6625 59.2627 90.3431C61.974 91.4343 65.251 91.7176 67.7469 91.7847C81.785 92.1628 92.6742 85.2778 101.106 76.9747C109.635 68.5782 115.655 58.7177 119.843 53.2584C120.059 52.978 120.498 52.9385 120.821 53.1716C121.145 53.4033 121.233 53.8209 121.018 54.1019C116.806 59.5909 110.746 69.4972 102.175 77.9375C93.5073 86.4713 82.2834 93.4946 67.8532 93.1064C65.1981 93.0335 61.7115 92.7105 58.8254 91.5505C56.7858 90.7287 55.0423 89.4929 54.0181 87.6826C53.4209 86.6271 53.2798 85.567 53.3455 84.458C53.375 83.9607 53.4474 83.4506 53.5326 82.9264ZM55.2038 81.5101C55.5182 79.5456 57.3164 77.4791 59.7221 75.5879C63.5109 72.6077 68.8486 70.1106 72.8454 69.3195C74.1848 69.0552 75.36 68.9783 76.2513 69.1728C76.8958 69.3125 77.3648 69.6023 77.508 70.1477C77.6729 70.7752 77.5096 71.4146 77.1395 72.0606C76.7141 72.8054 76.0155 73.5486 75.137 74.2744C70.8522 77.8204 62.3773 80.9092 58.5195 81.2586C57.4216 81.3575 56.315 81.4418 55.2038 81.5101Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.99986 64.6127C8.92866 64.9755 8.9588 65.4821 9.01007 66.0213C9.1243 67.2416 9.42452 68.6104 9.54167 69.2622C9.6201 69.7081 9.2921 70.1007 8.80683 70.1371C8.32155 70.1735 7.86488 69.8401 7.78474 69.3936C7.64308 68.5975 7.2467 66.7829 7.19391 65.383C7.16692 64.6637 7.24201 64.039 7.42428 63.6368C7.6053 63.2432 7.89351 63.0406 8.23136 62.9467C8.5867 62.8481 9.06428 62.8898 9.63551 63.1221C10.2629 63.3776 11.1007 63.8944 12.0704 64.3324C12.8835 64.7003 13.8038 65.0184 14.7701 64.9621C15.2566 64.9329 15.7094 65.2715 15.7794 65.7188C15.8502 66.1641 15.5143 66.5514 15.0286 66.5786C13.2155 66.6866 11.5076 65.875 10.1804 65.1747C9.7852 64.9657 9.28338 64.737 8.99986 64.6127Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1464_580">
                    <rect width="95.5246" height="84.4365" fill="white" transform="matrix(-0.87259 -0.488453 -0.488453 0.87259 125 47)" />
                  </clipPath>
                </defs>
              </svg>
              <Link href="https://app.producter.co/">
                <a className={styles.springText} target="_blank">
                  <span>We’re in Public Beta!</span>
                </a>
              </Link>
            </div> */}
          </div>
        </section>

<div className='d-flex align-items-center justify-content-center'>
        <section className={styles.bannerContainer}>
          <span className={styles.moduleName}>Feedback Management Module</span>
          <div className={styles.moduleDesc}>Producter simplifies customer feedback management for product teams.</div>

          <div className={styles.feedbackContainer}>
            <div className={styles.feedTabsContainer}>
              {
                feedBackData && feedBackData.map((data, index) => (
                  <div key={index} className={styles.feedbackDescContainer}>
                    <div className={classNames(styles.feedbackDesc, activeTabId === index ? styles.active : "")} onClick={() => setActiveTab(index)}>
                      <div className={styles.feedIcon}>
                        {
                          data.icon
                        }
                      </div>
                      {
                        mobile ?
                          <div className={styles.feedContent}>
                            <div className={classNames(styles.feedTitle, activeTabId === index ? styles.active : "")}>{data.title}</div>
                            <div className={styles.feedDescription}>
                              {
                                activeTabId === index ? data.description : ""
                              }
                            </div>
                          </div>
                          :
                          <div className={styles.feedContent}>
                            <div className={classNames(styles.feedTitle, activeTabId === index ? styles.active : "")}>{data.title}</div>
                            <div className={styles.feedDescription}>
                              {data.description}
                            </div>
                          </div>
                      }


                    </div>
                  </div>
                ))
              }
            </div>

            <div className={styles.feedbackImageContainer}>
              {
                feedBackData && feedBackData.map((data, index) => (
                  <img key={index} src={data.content} className={activeTabId === index ? "d-block" : "d-none"} alt="feedback"></img>
                ))
              }
            </div>
          </div>

        </section>
        </div>
      </article>
    </>
  )
}

export default WaitList