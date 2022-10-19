import classNames from 'classnames';
import React, { useContext } from 'react'
import style from './CustomerTeams.module.css';
import { GlobalSettingsContext } from '../../../context/GlobalSettingsContext';
import Link from 'next/link';

const CustomerTeams = () => {

    const { mobile } = useContext(GlobalSettingsContext);

    return (
        <>
            <div className={style.container}>

                <div className={style.divider}></div>
                <div className={style.titleContainer}>
                    <h4>Loved by teams around the world</h4>
                    <h6>Customer-centric teams love Producter’s fast
                        <br />and, easy-to-use experience.</h6>
                </div>
            </div>

            <div className={style.experienceContainer}>
                <div className={style.experienceFlex}>
                    <div className={style.experienceItem}>
                        <div className={style.serviceIcon}>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M40.6471 12.6333C40.6471 18.556 45.4554 23.3572 51.3867 23.3572C52.0399 23.354 52.6913 23.2913 53.333 23.1699V44.4304C53.333 53.3748 48.057 58.6665 39.0995 58.6665H19.59C10.609 58.6665 5.33301 53.3748 5.33301 44.4304V24.9494C5.33301 16.005 10.609 10.6665 19.59 10.6665H40.8347C40.7087 11.3145 40.6458 11.9732 40.6471 12.6333ZM35.0663 39.7241L42.6872 29.8899V29.8431C43.3396 28.9664 43.1731 27.7302 42.312 27.0567C41.8952 26.735 41.3656 26.5957 40.8441 26.6707C40.3227 26.7457 39.8539 27.0286 39.545 27.4548L33.12 35.7202L25.8039 29.9602C25.3862 29.6348 24.8549 29.4911 24.3298 29.5616C23.8048 29.6321 23.3303 29.9108 23.0135 30.3348L15.1347 40.4967C14.8577 40.8419 14.7086 41.272 14.7126 41.7143C14.6669 42.6082 15.2313 43.4202 16.086 43.69C16.9407 43.9598 17.87 43.6193 18.3472 42.8616L24.9363 34.3387L32.2524 40.0753C32.6685 40.4108 33.2034 40.5629 33.7341 40.4966C34.2648 40.4304 34.7457 40.1515 35.0663 39.7241Z" fill="#2D70FD" />
                                <circle opacity="0.4" cx="51.9997" cy="11.9999" r="6.66667" fill="#2D70FD" />
                            </svg>
                        </div>
                        <h5 className={classNames(style.serviceMainTitle, style.free)}>Startup</h5>
                        <div className={classNames(style.serviceTitle, style.free)}>Free</div>

                        <div className={style.serviceTopPropertyContainer}>
                            <div className={style.serviceTopPropertyItem}>Up to <b>5</b> editors</div>
                            <div className={style.serviceTopPropertyItem}>Up to <b>5</b> viewers </div>
                            <div className={style.serviceTopPropertyItem}><b>5 GB</b> storage</div>
                        </div>

                        <div className={style.perPropertyContainer}>
                            <div className={classNames(style.perPropertyHeader, style.free)}>Free Forever</div>
                            <div className={style.perPropertyContent}>
                                <div>
                                    <div className={classNames(style.perPropertyTitle, style.free)}>Everything for <b>New Start</b></div>
                                    <ul className={classNames(style.productPropertyList, style.free)}>
                                        <li className={style.productPropertyItem}>Limited features</li>
                                        <li className={style.productPropertyItem}>Community Support</li>
                                        <li className={style.productPropertyItem}>Workspace Limit</li>
                                        <li className={style.productPropertyItem}>Slack, Github, Jira</li>
                                    </ul>
                                </div>
                                <Link passHref href="https://app.producter.co/">
                                    <a target="_blank">
                                        <button className={classNames(style.productButton, style.free)}>Sign up for free</button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.experienceItem}>
                        <div className={style.serviceIcon}>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M31.4027 58.2332C25.3146 54.4728 19.6552 50.0388 14.5279 45.0123C10.9082 41.4234 8.14379 37.0412 6.44593 32.2007C3.41224 22.7606 6.94364 11.9719 16.8031 8.76906C22.0071 7.13475 27.667 8.13801 32.019 11.4662C36.3725 8.14173 42.0305 7.1388 47.2348 8.76906C57.0943 11.9719 60.6494 22.7606 57.6157 32.2007C55.9316 37.0367 53.1837 41.4184 49.5811 45.0123C44.4492 50.0333 38.7903 54.4668 32.7063 58.2332L32.0427 58.6667L31.4027 58.2332Z" fill="#00D8A7" />
                                <path d="M32.0288 58.6666L31.4023 58.2331C25.3067 54.473 19.6393 50.0391 14.5037 45.0122C10.8669 41.4283 8.08603 37.0457 6.37439 32.2006C3.36441 22.7605 6.89581 11.9719 16.7553 8.76898C21.9593 7.13467 27.6938 8.1387 32.0288 11.4948V58.6666Z" fill="#00D8A7" />
                                <path d="M48.6139 26.6646C48.0782 26.6301 47.5793 26.3624 47.2342 25.9242C46.889 25.486 46.7279 24.9157 46.7885 24.3471C46.8464 22.4741 45.7807 20.7693 44.1373 20.1061C43.0952 19.8216 42.4641 18.693 42.7248 17.58C42.9721 16.4848 43.9976 15.8039 45.0283 16.0504C45.1584 16.072 45.2837 16.1191 45.3977 16.1895C48.6929 17.4575 50.8264 20.8704 50.6566 24.602C50.6512 25.1676 50.4307 25.7066 50.0455 26.0955C49.6604 26.4844 49.1437 26.6898 48.6139 26.6646Z" fill="#00D8A7" />
                            </svg>
                        </div>
                        <h5 className={classNames(style.serviceMainTitle, style.growty)}>Growth</h5>
                        <div className={classNames(style.serviceTitle, style.growty)}>
                            $19
                            <div className={style.mostPopular}>MOST POPULAR</div>
                        </div>
                        <div className={style.serviceTopPropertyContainer}>
                            <div className={style.serviceTopPropertyItem}><b>Unlimited</b> editors</div>
                            <div className={style.serviceTopPropertyItem}><b>Unlimited</b> viewers</div>
                            <div className={style.serviceTopPropertyItem}><b>Unlimited</b> storage</div>
                        </div>

                        <div className={style.perPropertyContainer}>
                            <div className={classNames(style.perPropertyHeader, style.growty)}>$24 per editor (monthly)</div>
                            <div className={style.perPropertyContent}>
                                <div>
                                    <div className={classNames(style.perPropertyTitle, style.growty)}>Everything in <b>Startup</b></div>
                                    <ul className={classNames(style.productPropertyList, style.growty)}>
                                        <li className={style.productPropertyItem}><b>Unlimited</b> features</li>
                                        <li className={style.productPropertyItem}>Intercom - Email Support</li>
                                        <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                        <li className={style.productPropertyItem}>All Integrations</li>
                                        <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                    </ul>
                                </div>
                                <Link passHref href="https://app.producter.co/">
                                    <a target="_blank">
                                        <button className={classNames(style.productButton, style.growty)}>Start free trial</button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.experienceItem}>
                        <div className={style.serviceIcon}>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M34.6031 8.30305L40.5404 20.2345C40.9778 21.0989 41.8127 21.6992 42.7756 21.8326L56.1118 23.7749C56.8906 23.8843 57.5974 24.2952 58.0748 24.9222C58.5469 25.5412 58.7497 26.3256 58.635 27.0966C58.5416 27.7369 58.2402 28.3292 57.7788 28.7828L48.1154 38.1502C47.4086 38.8039 47.0885 39.7724 47.2592 40.7195L49.6384 53.8889C49.8918 55.479 48.8382 56.9785 47.2592 57.28C46.6084 57.384 45.9416 57.2746 45.3548 56.9758L33.4589 50.778C32.576 50.3324 31.5332 50.3324 30.6503 50.778L18.7544 56.9758C17.2928 57.7522 15.4817 57.2239 14.6682 55.7832C14.3668 55.2096 14.2601 54.5559 14.3588 53.9183L16.738 40.7462C16.9087 39.8017 16.5859 38.8279 15.8818 38.1742L6.21839 28.8121C5.06881 27.7022 5.03413 25.8747 6.14104 24.7247C6.16504 24.7007 6.19171 24.674 6.21839 24.6474C6.67715 24.1805 7.27995 23.8843 7.93075 23.8069L21.2669 21.8619C22.2272 21.7259 23.062 21.1309 23.5021 20.2611L29.226 8.30305C29.7354 7.27853 30.7917 6.64087 31.9386 6.66755H32.296C33.2909 6.78761 34.1577 7.40393 34.6031 8.30305Z" fill="#FDBE3C" />
                                <path d="M31.9784 50.4457C31.4618 50.4617 30.9586 50.6005 30.506 50.8487L18.6683 57.0325C17.2198 57.7237 15.4865 57.1873 14.6744 55.8021C14.3736 55.2363 14.2644 54.5878 14.3656 53.9526L16.7299 40.8085C16.8897 39.853 16.5702 38.8816 15.8752 38.209L6.20751 28.8494C5.05995 27.7258 5.03865 25.8816 6.16224 24.7313C6.17822 24.7153 6.19153 24.702 6.20751 24.6886C6.66547 24.2349 7.25655 23.936 7.8929 23.8426L21.2403 21.8783C22.2068 21.7555 23.0455 21.1524 23.4715 20.277L29.2732 8.1684C29.8244 7.1916 30.8814 6.60979 31.9997 6.67117C31.9784 7.46382 31.9784 49.9066 31.9784 50.4457Z" fill="#FDBE3C" />
                            </svg>
                        </div>
                        <h5 className={classNames(style.serviceMainTitle, style.premium)}>Premium</h5>
                        <div className={classNames(style.serviceTitle, style.premium)}>$39</div>

                        <div className={style.serviceTopPropertyContainer}>
                            <div className={classNames(style.serviceTopPropertyItem, style.premium)}><span>200+</span> editors</div>
                            <div className={style.serviceTopPropertyItem}><b>Unlimited</b> viewers</div>
                            <div className={style.serviceTopPropertyItem}><b>Unlimited</b> storage</div>
                        </div>

                        <div className={style.perPropertyContainer}>
                            <div className={classNames(style.perPropertyHeader, style.premium)}>$49 per editor (monthly)</div>
                            <div className={style.perPropertyContent}>
                                <div>
                                    <div className={classNames(style.perPropertyTitle, style.premium)}>Everything in <b>Growth</b></div>
                                    <ul className={classNames(style.productPropertyList, style.premium)}>
                                        <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                        <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                        <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                        <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                        <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                        <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                    </ul>
                                </div>
                                <Link passHref href="https://app.producter.co/">
                                    <a target="_blank">
                                        <button className={classNames(style.productButton, style.premium)}>Start free trial</button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>





                <div className={classNames(style.experienceItem, style.experienceItemMobile)}>
                    <div className={style.serviceIcon}>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M5.33105 29.5427C5.46439 35.7774 5.83772 46.4414 5.89105 47.6174C6.08039 50.1321 7.04305 52.6734 8.54172 54.4654C10.6271 56.9801 13.1951 58.1027 16.7764 58.1027C21.7257 58.1294 27.1817 58.1294 32.4804 58.1294C37.8004 58.1294 42.9631 58.1294 47.3231 58.1027C50.8537 58.1027 53.5017 56.9507 55.5604 54.4654C57.0591 52.6734 58.0217 50.1054 58.1577 47.6174C58.2111 46.6281 58.4777 35.0521 58.6377 29.5427H5.33105Z" fill="#FF9C54" />
                            <path d="M29.9883 41.0244V44.4751C29.9883 45.5791 30.8843 46.4751 31.9883 46.4751C33.0923 46.4751 33.9883 45.5791 33.9883 44.4751V41.0244C33.9883 39.9204 33.0923 39.0244 31.9883 39.0244C30.8843 39.0244 29.9883 39.9204 29.9883 41.0244Z" fill="#FF9C54" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M27.2241 38.817C26.9575 39.785 26.0268 40.4037 25.0188 40.2703C18.2161 39.321 11.7148 36.9077 6.22679 33.2837C5.66413 32.9157 5.32812 32.2863 5.32812 31.6143V22.3717C5.32812 16.7717 9.89346 12.217 15.5068 12.217H20.7521C21.2535 8.34502 24.5335 5.33435 28.5388 5.33435H35.4241C39.4268 5.33435 42.7095 8.34502 43.2108 12.217H48.4828C54.0801 12.217 58.6348 16.7717 58.6348 22.3717V31.6143C58.6348 32.2863 58.2961 32.913 57.7388 33.2837C52.2401 36.9237 45.7121 39.3477 38.8641 40.2943C38.7708 40.3077 38.6801 40.313 38.5895 40.313C37.6855 40.313 36.8775 39.7023 36.6508 38.8063C36.1121 36.6837 34.1841 35.1983 31.9681 35.1983C29.7228 35.1983 27.8161 36.6517 27.2241 38.817ZM35.4197 9.33435H28.5344C26.7397 9.33435 25.241 10.561 24.793 12.217H39.1584C38.7104 10.561 37.2117 9.33435 35.4197 9.33435Z" fill="#FF9C54" />
                        </svg>
                    </div>
                    <h5 className={classNames(style.serviceMainTitle, style.contact)}>ENTERPRISE</h5>
                    <div className={classNames(style.serviceTitle, style.contact)}>Contact us</div>

                    <div className={style.serviceTopPropertyContainer}>
                        <div className={style.serviceTopPropertyItem}>200+ editors</div>
                        <div className={style.serviceTopPropertyItem}><b>Unlimited</b> viewers</div>
                        <div className={style.serviceTopPropertyItem}><b>Unlimited</b> storage</div>
                    </div>

                    <div className={style.perPropertyContainer}>
                        <div className={classNames(style.perPropertyHeader, style.contact)}>$49 per editor (monthly)</div>
                        <div className={style.perPropertyContent}>
                            <div>
                                <div className={classNames(style.perPropertyTitle, style.contact)}>Everything in <b>Growth</b></div>
                                <ul className={classNames(style.productPropertyList, style.contact)}>
                                    <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                    <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                    <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                    <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                    <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                    <li className={style.productPropertyItem}><b>10</b> Lorem ispum doler</li>
                                </ul>
                            </div>
                            <button className={classNames(style.productButton, style.contact)}>Book a demoo</button>
                        </div>
                    </div>
                </div>


                <div className={classNames(style.enterpriseDemo, style.experienceItemDesktop)}>
                    <div className={style.enterpriseHeader}>
                        <div>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M4 22.157C4.1 26.833 4.38 34.831 4.42 35.713C4.562 37.599 5.284 39.505 6.408 40.849C7.972 42.735 9.898 43.577 12.584 43.577C16.296 43.597 20.388 43.597 24.362 43.597C28.352 43.597 32.224 43.597 35.494 43.577C38.142 43.577 40.128 42.713 41.672 40.849C42.796 39.505 43.518 37.579 43.62 35.713C43.66 34.971 43.86 26.289 43.98 22.157H4Z" fill="#FF9C54" />
                                <path d="M22.4902 30.7683V33.3563C22.4902 34.1843 23.1622 34.8563 23.9902 34.8563C24.8182 34.8563 25.4902 34.1843 25.4902 33.3563V30.7683C25.4902 29.9403 24.8182 29.2683 23.9902 29.2683C23.1622 29.2683 22.4902 29.9403 22.4902 30.7683Z" fill="#FF9C54" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.422 29.1127C20.222 29.8387 19.524 30.3027 18.768 30.2027C13.666 29.4907 8.79 27.6807 4.674 24.9627C4.252 24.6867 4 24.2147 4 23.7107V16.7787C4 12.5787 7.424 9.16273 11.634 9.16273H15.568C15.944 6.25873 18.404 4.00073 21.408 4.00073H26.572C29.574 4.00073 32.036 6.25873 32.412 9.16273H36.366C40.564 9.16273 43.98 12.5787 43.98 16.7787V23.7107C43.98 24.2147 43.726 24.6847 43.308 24.9627C39.184 27.6927 34.288 29.5107 29.152 30.2207C29.082 30.2307 29.014 30.2347 28.946 30.2347C28.268 30.2347 27.662 29.7767 27.492 29.1047C27.088 27.5127 25.642 26.3987 23.98 26.3987C22.296 26.3987 20.866 27.4887 20.422 29.1127ZM26.572 7.00073H21.408C20.062 7.00073 18.938 7.92073 18.602 9.16273H29.376C29.04 7.92073 27.916 7.00073 26.572 7.00073Z" fill="#FF9C54" />
                            </svg>
                        </div>
                        <div className={style.enterpriseTitle}>
                            Enterprise
                        </div>
                    </div>

                    <div className={style.enterpriseBookDemo}>
                        <div className={style.contactProperty}>
                            <div>
                                <div className={style.contactPropertyItem}>
                                    <div className={style.contactPropertyItemIcon}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2" d="M15.774 -0.000244141H6.237C2.508 -0.000244141 0 2.61776 0 6.51176V15.4988C0 19.3818 2.508 21.9998 6.237 21.9998H15.774C19.503 21.9998 22 19.3818 22 15.4988V6.51176C22 2.61776 19.503 -0.000244141 15.774 -0.000244141Z" fill="#FF9C54" />
                                            <path d="M9.69249 14.5727C9.44609 14.5727 9.19969 14.4792 9.01159 14.2911L6.40129 11.6808C6.02509 11.3046 6.02509 10.6952 6.40129 10.3201C6.77749 9.94386 7.38579 9.94276 7.76199 10.319L9.69249 12.2495L14.2333 7.70866C14.6095 7.33246 15.2178 7.33246 15.594 7.70866C15.9702 8.08486 15.9702 8.69426 15.594 9.07046L10.3734 14.2911C10.1853 14.4792 9.93889 14.5727 9.69249 14.5727Z" fill="#FF9C54" />
                                        </svg>
                                    </div>
                                    <div>
                                        Everything in <span>Premium</span>
                                    </div>
                                </div>
                                <div className={style.contactPropertyItem}>
                                    <div className={style.contactPropertyItemIcon}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2" d="M15.774 -0.000244141H6.237C2.508 -0.000244141 0 2.61776 0 6.51176V15.4988C0 19.3818 2.508 21.9998 6.237 21.9998H15.774C19.503 21.9998 22 19.3818 22 15.4988V6.51176C22 2.61776 19.503 -0.000244141 15.774 -0.000244141Z" fill="#FF9C54" />
                                            <path d="M9.69249 14.5727C9.44609 14.5727 9.19969 14.4792 9.01159 14.2911L6.40129 11.6808C6.02509 11.3046 6.02509 10.6952 6.40129 10.3201C6.77749 9.94386 7.38579 9.94276 7.76199 10.319L9.69249 12.2495L14.2333 7.70866C14.6095 7.33246 15.2178 7.33246 15.594 7.70866C15.9702 8.08486 15.9702 8.69426 15.594 9.07046L10.3734 14.2911C10.1853 14.4792 9.93889 14.5727 9.69249 14.5727Z" fill="#FF9C54" />
                                        </svg>
                                    </div>
                                    <div>
                                        99% Uptime Guarantee
                                    </div>
                                </div>
                                <div className={style.contactPropertyItem}>
                                    <div className={style.contactPropertyItemIcon}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2" d="M15.774 -0.000244141H6.237C2.508 -0.000244141 0 2.61776 0 6.51176V15.4988C0 19.3818 2.508 21.9998 6.237 21.9998H15.774C19.503 21.9998 22 19.3818 22 15.4988V6.51176C22 2.61776 19.503 -0.000244141 15.774 -0.000244141Z" fill="#FF9C54" />
                                            <path d="M9.69249 14.5727C9.44609 14.5727 9.19969 14.4792 9.01159 14.2911L6.40129 11.6808C6.02509 11.3046 6.02509 10.6952 6.40129 10.3201C6.77749 9.94386 7.38579 9.94276 7.76199 10.319L9.69249 12.2495L14.2333 7.70866C14.6095 7.33246 15.2178 7.33246 15.594 7.70866C15.9702 8.08486 15.9702 8.69426 15.594 9.07046L10.3734 14.2911C10.1853 14.4792 9.93889 14.5727 9.69249 14.5727Z" fill="#FF9C54" />
                                        </svg>
                                    </div>
                                    <div>
                                        Remove Branding
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={style.contactPropertyItem}>
                                    <div className={style.contactPropertyItemIcon}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2" d="M15.774 -0.000244141H6.237C2.508 -0.000244141 0 2.61776 0 6.51176V15.4988C0 19.3818 2.508 21.9998 6.237 21.9998H15.774C19.503 21.9998 22 19.3818 22 15.4988V6.51176C22 2.61776 19.503 -0.000244141 15.774 -0.000244141Z" fill="#FF9C54" />
                                            <path d="M9.69249 14.5727C9.44609 14.5727 9.19969 14.4792 9.01159 14.2911L6.40129 11.6808C6.02509 11.3046 6.02509 10.6952 6.40129 10.3201C6.77749 9.94386 7.38579 9.94276 7.76199 10.319L9.69249 12.2495L14.2333 7.70866C14.6095 7.33246 15.2178 7.33246 15.594 7.70866C15.9702 8.08486 15.9702 8.69426 15.594 9.07046L10.3734 14.2911C10.1853 14.4792 9.93889 14.5727 9.69249 14.5727Z" fill="#FF9C54" />
                                        </svg>
                                    </div>
                                    <div>
                                        7/24 Support
                                    </div>
                                </div>
                                <div className={style.contactPropertyItem}>
                                    <div className={style.contactPropertyItemIcon}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2" d="M15.774 -0.000244141H6.237C2.508 -0.000244141 0 2.61776 0 6.51176V15.4988C0 19.3818 2.508 21.9998 6.237 21.9998H15.774C19.503 21.9998 22 19.3818 22 15.4988V6.51176C22 2.61776 19.503 -0.000244141 15.774 -0.000244141Z" fill="#FF9C54" />
                                            <path d="M9.69249 14.5727C9.44609 14.5727 9.19969 14.4792 9.01159 14.2911L6.40129 11.6808C6.02509 11.3046 6.02509 10.6952 6.40129 10.3201C6.77749 9.94386 7.38579 9.94276 7.76199 10.319L9.69249 12.2495L14.2333 7.70866C14.6095 7.33246 15.2178 7.33246 15.594 7.70866C15.9702 8.08486 15.9702 8.69426 15.594 9.07046L10.3734 14.2911C10.1853 14.4792 9.93889 14.5727 9.69249 14.5727Z" fill="#FF9C54" />
                                        </svg>
                                    </div>
                                    <div>
                                        Single Sign-On
                                    </div>
                                </div>
                                <div className={style.contactPropertyItem}>
                                    <div className={style.contactPropertyItemIcon}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2" d="M15.774 -0.000244141H6.237C2.508 -0.000244141 0 2.61776 0 6.51176V15.4988C0 19.3818 2.508 21.9998 6.237 21.9998H15.774C19.503 21.9998 22 19.3818 22 15.4988V6.51176C22 2.61776 19.503 -0.000244141 15.774 -0.000244141Z" fill="#FF9C54" />
                                            <path d="M9.69249 14.5727C9.44609 14.5727 9.19969 14.4792 9.01159 14.2911L6.40129 11.6808C6.02509 11.3046 6.02509 10.6952 6.40129 10.3201C6.77749 9.94386 7.38579 9.94276 7.76199 10.319L9.69249 12.2495L14.2333 7.70866C14.6095 7.33246 15.2178 7.33246 15.594 7.70866C15.9702 8.08486 15.9702 8.69426 15.594 9.07046L10.3734 14.2911C10.1853 14.4792 9.93889 14.5727 9.69249 14.5727Z" fill="#FF9C54" />
                                        </svg>
                                    </div>
                                    <div>
                                        Audit Log
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.contactPropertyBookaDemo}>
                            <Link passHref href='https://meetings-eu1.hubspot.com/rifat'>
                                <a target="_blank">
                                    <button className={style.contackButton}>Book a demo</button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerTeams