import React, { useState } from 'react'
import styles from './footer.module.css';
import Logo from '../../assets/media/banner/logo.svg';
import DotImage from '../../assets/media/footer/dot.png';
import ArrrowLeft from '../../assets/media/footer/arrow-left.svg';
import ArrowRight from '../../assets/media/footer/arrow-right.svg';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { db } from '../../hooks/firebase'
import moment from 'moment';

const FooterPage = (props) => {
  const { feedbackRef, taskRef, roadMapRef, shareRef, createRef } = props
  let history = useRouter()
  let [activeTab, setActiveTab] = useState("navigation")
  const [loading, setLoading] = useState(false)
  let [waitlist, setWaitlist] = useState({ email: "", name: "", surname: "", role: "" })

  const onSubmit = (e) => {
    setLoading(true)
    if (waitlist.email.length < 1 || waitlist.name.length < 1 || waitlist.surname.length < 1 || !waitlist.role || waitlist.role.length < 1) {
      toast.error("Please fill all fields")
      return false
    }
    e.preventDefault()
    db.collection("users").add({
      email: waitlist.email,
      name: waitlist.name,
      surname: waitlist.surname,
      role: waitlist.role,
      dateCreated: moment().format("YYYY-MM-DD HH:mm:ss")
    }).then(() => {
      setLoading(false)
      setWaitlist({ email: "", name: "", surname: "", role: "" })
    });
  }
  return (
    <footer className={styles.container}>
      <div className={styles.tabs}>
        <div className={classNames(styles.navigationTab, activeTab === "navigation" ? styles.activeTab : "")} onClick={() => { setActiveTab("navigation") }}>
          <span className={styles.tabsTitle}>Navigation</span>
        </div>
        <div className={classNames(styles.waitListTab, activeTab === "waitList" ? styles.activeTab : "")} onClick={() => { setActiveTab("waitList") }}>
          <span className={styles.tabsTitle}>Join the waitlist</span>
        </div>
      </div>
      {activeTab === "navigation" && <div className={styles.main}>
        <div className={styles.navigator}>
          <div className={styles.leftArrow} onClick={() => history.push("/")}>
            <img src={ArrowRight.src} />
            <span>Home</span>
          </div>
          <div className={styles.rigthArrow} onClick={() => history.push("/")}>
            <img src={ArrrowLeft.src} />
            <span>Collect Feedback</span>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.menu}>
          <div className='row justify-content-center w-100 '>
            <div className='col-lg-3 col-sm-12 p-0'>
              <div className={styles.logo}>
                <img className={styles.LogoImage} src={Logo.src} width={178} />
                <div className={styles.socialListMobile}>
                  <ul className={styles.mobileSocial}>
                    <li>
                      <Link href="https://twitter.com/producter">
                        <a target="_blank">
                          <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.0063 2.11613C21.1879 2.475 20.3159 2.71288 19.4068 2.82838C20.3421 2.27013 21.0559 1.39287 21.3915 0.3355C20.5195 0.85525 19.5567 1.22238 18.5307 1.42725C17.7027 0.545875 16.5226 0 15.2352 0C12.7375 0 10.7267 2.02675 10.7267 4.51137C10.7267 4.86888 10.757 5.21263 10.8312 5.53988C7.08053 5.357 3.7617 3.55988 1.53219 0.82225C1.14295 1.49738 0.914637 2.27012 0.914637 3.102C0.914637 4.664 1.71924 6.04862 2.91859 6.85025C2.19375 6.8365 1.48267 6.62613 0.880252 6.29475C0.880252 6.3085 0.880252 6.32638 0.880252 6.34425C0.880252 8.536 2.44407 10.3565 4.49479 10.7759C4.12756 10.8763 3.72732 10.9244 3.31195 10.9244C3.02312 10.9244 2.73153 10.9079 2.45783 10.8474C3.04237 12.6335 4.7011 13.9466 6.67341 13.9893C5.13847 15.1896 3.18954 15.9129 1.07968 15.9129C0.709703 15.9129 0.354852 15.8964 0 15.851C1.99845 17.1394 4.36687 17.875 6.92098 17.875C15.2229 17.875 19.7617 11 19.7617 5.04075C19.7617 4.84137 19.7548 4.64887 19.7451 4.45775C20.6405 3.8225 21.3929 3.02913 22.0063 2.11613Z" fill="white" />
                          </svg>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/producterhq/">
                        <a target="_blank">
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.875 0H15.125C18.9214 0 22 3.07774 22 6.87303V15.1207C22 18.916 18.9214 21.9937 15.125 21.9937H6.875C3.07862 21.9937 0 18.916 0 15.1207V6.87303C0 3.07774 3.07862 0 6.875 0ZM15.125 19.9324C17.7787 19.9324 19.9375 17.7743 19.9375 15.1213V6.87362C19.9375 4.22063 17.7787 2.0625 15.125 2.0625H6.875C4.22125 2.0625 2.0625 4.22063 2.0625 6.87362V15.1213C2.0625 17.7743 4.22125 19.9324 6.875 19.9324H15.125Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.50037 10.9965C5.50037 7.95997 7.96299 5.49805 11.0004 5.49805C14.0377 5.49805 16.5004 7.95997 16.5004 10.9965C16.5004 14.033 14.0377 16.4949 11.0004 16.4949C7.96299 16.4949 5.50037 14.033 5.50037 10.9965ZM7.56287 10.9971C7.56287 12.8913 9.10562 14.4336 11.0004 14.4336C12.8951 14.4336 14.4379 12.8913 14.4379 10.9971C14.4379 9.10148 12.8951 7.56055 11.0004 7.56055C9.10562 7.56055 7.56287 9.10148 7.56287 10.9971Z" fill="white" />
                            <circle cx="16.9128" cy="5.08639" r="0.732875" fill="white" />
                          </svg>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://join.slack.com/t/producterhq/shared_invite/zt-ua0o22a8-vfVxL9jp4I9RyLliTuqzcA">
                        <a target="_blank">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.20195 12.6381C4.20195 13.7944 3.25732 14.7391 2.10097 14.7391C0.944624 14.7391 0 13.7944 0 12.6381C0 11.4817 0.944624 10.5371 2.10097 10.5371H4.20195V12.6381Z" fill="white" />
                            <path d="M5.26001 12.6381C5.26001 11.4817 6.20463 10.5371 7.36098 10.5371C8.51733 10.5371 9.46196 11.4817 9.46196 12.6381V17.8987C9.46196 19.055 8.51733 19.9996 7.36098 19.9996C6.20463 19.9996 5.26001 19.055 5.26001 17.8987V12.6381Z" fill="white" />
                            <path d="M7.36098 4.20195C6.20463 4.20195 5.26001 3.25732 5.26001 2.10097C5.26001 0.944624 6.20463 0 7.36098 0C8.51733 0 9.46196 0.944624 9.46196 2.10097V4.20195H7.36098Z" fill="white" />
                            <path d="M7.36155 5.25977C8.5179 5.25977 9.46253 6.20439 9.46253 7.36074C9.46253 8.51709 8.5179 9.46171 7.36155 9.46171H2.10097C0.944624 9.46171 0 8.51709 0 7.36074C0 6.20439 0.944624 5.25977 2.10097 5.25977H7.36155Z" fill="white" />
                            <path d="M15.7983 7.36074C15.7983 6.20439 16.743 5.25977 17.8993 5.25977C19.0557 5.25977 20.0003 6.20439 20.0003 7.36074C20.0003 8.51709 19.0557 9.46171 17.8993 9.46171H15.7983V7.36074Z" fill="white" />
                            <path d="M14.7391 7.36155C14.7391 8.5179 13.7944 9.46253 12.6381 9.46253C11.4817 9.46253 10.5371 8.5179 10.5371 7.36155V2.10097C10.5371 0.944624 11.4817 0 12.6381 0C13.7944 0 14.7391 0.944624 14.7391 2.10097V7.36155Z" fill="white" />
                            <path d="M12.6381 15.7988C13.7944 15.7988 14.7391 16.7435 14.7391 17.8998C14.7391 19.0562 13.7944 20.0008 12.6381 20.0008C11.4817 20.0008 10.5371 19.0562 10.5371 17.8998V15.7988H12.6381Z" fill="white" />
                            <path d="M12.6381 14.7391C11.4817 14.7391 10.5371 13.7944 10.5371 12.6381C10.5371 11.4817 11.4817 10.5371 12.6381 10.5371H17.8987C19.055 10.5371 19.9996 11.4817 19.9996 12.6381C19.9996 13.7944 19.055 14.7391 17.8987 14.7391H12.6381Z" fill="white" />
                          </svg>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/company/producter">
                        <a target="_blank">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.82264 2.21991C4.82264 3.45393 3.89172 4.44135 2.39698 4.44135H2.36959C0.930404 4.44135 0 3.45393 0 2.21991C0 0.959785 0.958741 0 2.42523 0C3.89172 0 4.79482 0.959785 4.82264 2.21991ZM4.53974 6.19531V19.0472H0.25293V6.19531H4.53974ZM19.9992 19.0473L19.9994 11.6784C19.9994 7.73081 17.8846 5.89355 15.0637 5.89355C12.7876 5.89355 11.7686 7.14097 11.1997 8.01605V6.19568H6.91235C6.96886 7.40164 6.91235 19.0476 6.91235 19.0476H11.1997V11.87C11.1997 11.4859 11.2275 11.1028 11.3408 10.8278C11.6507 10.0604 12.3561 9.26594 13.5404 9.26594C15.0923 9.26594 15.7126 10.4444 15.7126 12.1715V19.0473H19.9992Z" fill="white" />
                          </svg>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-6'>
              <div className={styles.list}>
                <span>Company</span>
                <ul>
                  <li>Value</li>
                  <li>
                    <Link href="https://producters.notion.site/Producter-Careers-1898440a4fb745c09072b55ab6846f4b">
                      <a className={styles.listItem} alt="card" target="_blank">Career</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://be.producter.co/portal/roadmap">
                      <a className={styles.listItem} alt="card" target="_blank">Roadmap</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a className={styles.listItem} alt="card">Pricing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='mailto:hello@producter.co' alt="mail">
                      <span className={styles.listItem} alt="card">Support</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-6'>
              <div className={styles.list}>
                <span>Product</span>
                <ul>
                  <li onClick={() => { if (feedbackRef && feedbackRef.current) feedbackRef.current.scrollIntoView({ behavior: "smooth" }) }}>Feedback</li>
                  <li onClick={() => { if (taskRef && taskRef.current) taskRef.current.scrollIntoView({ behavior: "smooth" }) }}>Task</li>
                  <li onClick={() => { if (roadMapRef && roadMapRef.current) roadMapRef.current.scrollIntoView({ behavior: "smooth" }) }}>Roadmap</li>
                  <li onClick={() => { if (shareRef && shareRef.current) shareRef.current.scrollIntoView({ behavior: "smooth" }) }}>Changelog</li>
                  <li onClick={() => { if (createRef && createRef.current) createRef.current.scrollIntoView({ behavior: "smooth" }) }}>Documentation</li>
                  <li>User Portal</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-6'>
              <div className={styles.list}>
                <span>Resources</span>
                <ul>
                  <li>
                    <Link href="http://blog.producter.co">
                      <a className={styles.listItem} alt="card" target="_blank">Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="http://blog.producter.co">
                      <a className={styles.listItem} alt="card" target="_blank">Glossary</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://join.slack.com/t/producterhq/shared_invite/zt-ua0o22a8-vfVxL9jp4I9RyLliTuqzcA">
                      <a className={styles.listItem} alt="card" target="_blank">Community</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.notion.so/producters/Producter-Guide-142a8fdd93b74c1282b081def3379d77">
                      <a className={styles.listItem} alt="card" target="_blank">Guideline</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://prodfest.co/">
                      <a className={styles.listItem} alt="card" target="_blank">Events</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-6'>
              <div className={styles.list}>
                <span>Featured</span>
                <ul className={styles.listGroup}>
                  <li>
                    <Link href="https://productool.co/">
                      <a target="_blank">Productool</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="http://explore.producter.co/notion-pack-for-product-managers">
                      <a target="_blank">Notion Pack</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="http://explore.producter.co/product-management-curated">
                      <a target="_blank">PM Curated</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="http://explore.producter.co/product-documentation-notion-templates">
                      <a target="_blank">PM Templates</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="http://explore.producter.co/en/feedback-management-ebook">
                      <a target="_blank">Feedback Ebook</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-1'>
              <div className={styles.socialList}>
                <span>Social</span>
                <ul>
                  <li>
                    <Link href="https://twitter.com/producter">
                      <a target="_blank">
                        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.0063 2.11613C21.1879 2.475 20.3159 2.71288 19.4068 2.82838C20.3421 2.27013 21.0559 1.39287 21.3915 0.3355C20.5195 0.85525 19.5567 1.22238 18.5307 1.42725C17.7027 0.545875 16.5226 0 15.2352 0C12.7375 0 10.7267 2.02675 10.7267 4.51137C10.7267 4.86888 10.757 5.21263 10.8312 5.53988C7.08053 5.357 3.7617 3.55988 1.53219 0.82225C1.14295 1.49738 0.914637 2.27012 0.914637 3.102C0.914637 4.664 1.71924 6.04862 2.91859 6.85025C2.19375 6.8365 1.48267 6.62613 0.880252 6.29475C0.880252 6.3085 0.880252 6.32638 0.880252 6.34425C0.880252 8.536 2.44407 10.3565 4.49479 10.7759C4.12756 10.8763 3.72732 10.9244 3.31195 10.9244C3.02312 10.9244 2.73153 10.9079 2.45783 10.8474C3.04237 12.6335 4.7011 13.9466 6.67341 13.9893C5.13847 15.1896 3.18954 15.9129 1.07968 15.9129C0.709703 15.9129 0.354852 15.8964 0 15.851C1.99845 17.1394 4.36687 17.875 6.92098 17.875C15.2229 17.875 19.7617 11 19.7617 5.04075C19.7617 4.84137 19.7548 4.64887 19.7451 4.45775C20.6405 3.8225 21.3929 3.02913 22.0063 2.11613Z" fill="white" />
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/producterhq/">
                      <a target="_blank">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.875 0H15.125C18.9214 0 22 3.07774 22 6.87303V15.1207C22 18.916 18.9214 21.9937 15.125 21.9937H6.875C3.07862 21.9937 0 18.916 0 15.1207V6.87303C0 3.07774 3.07862 0 6.875 0ZM15.125 19.9324C17.7787 19.9324 19.9375 17.7743 19.9375 15.1213V6.87362C19.9375 4.22063 17.7787 2.0625 15.125 2.0625H6.875C4.22125 2.0625 2.0625 4.22063 2.0625 6.87362V15.1213C2.0625 17.7743 4.22125 19.9324 6.875 19.9324H15.125Z" fill="white" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.50037 10.9965C5.50037 7.95997 7.96299 5.49805 11.0004 5.49805C14.0377 5.49805 16.5004 7.95997 16.5004 10.9965C16.5004 14.033 14.0377 16.4949 11.0004 16.4949C7.96299 16.4949 5.50037 14.033 5.50037 10.9965ZM7.56287 10.9971C7.56287 12.8913 9.10562 14.4336 11.0004 14.4336C12.8951 14.4336 14.4379 12.8913 14.4379 10.9971C14.4379 9.10148 12.8951 7.56055 11.0004 7.56055C9.10562 7.56055 7.56287 9.10148 7.56287 10.9971Z" fill="white" />
                          <circle cx="16.9128" cy="5.08639" r="0.732875" fill="white" />
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://join.slack.com/t/producterhq/shared_invite/zt-19sy3xt9c-YbuOr1UZG9_V_p7_GLaVMg">
                      <a target="_blank">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.20195 12.6381C4.20195 13.7944 3.25732 14.7391 2.10097 14.7391C0.944624 14.7391 0 13.7944 0 12.6381C0 11.4817 0.944624 10.5371 2.10097 10.5371H4.20195V12.6381Z" fill="white" />
                          <path d="M5.26001 12.6381C5.26001 11.4817 6.20463 10.5371 7.36098 10.5371C8.51733 10.5371 9.46196 11.4817 9.46196 12.6381V17.8987C9.46196 19.055 8.51733 19.9996 7.36098 19.9996C6.20463 19.9996 5.26001 19.055 5.26001 17.8987V12.6381Z" fill="white" />
                          <path d="M7.36098 4.20195C6.20463 4.20195 5.26001 3.25732 5.26001 2.10097C5.26001 0.944624 6.20463 0 7.36098 0C8.51733 0 9.46196 0.944624 9.46196 2.10097V4.20195H7.36098Z" fill="white" />
                          <path d="M7.36155 5.25977C8.5179 5.25977 9.46253 6.20439 9.46253 7.36074C9.46253 8.51709 8.5179 9.46171 7.36155 9.46171H2.10097C0.944624 9.46171 0 8.51709 0 7.36074C0 6.20439 0.944624 5.25977 2.10097 5.25977H7.36155Z" fill="white" />
                          <path d="M15.7983 7.36074C15.7983 6.20439 16.743 5.25977 17.8993 5.25977C19.0557 5.25977 20.0003 6.20439 20.0003 7.36074C20.0003 8.51709 19.0557 9.46171 17.8993 9.46171H15.7983V7.36074Z" fill="white" />
                          <path d="M14.7391 7.36155C14.7391 8.5179 13.7944 9.46253 12.6381 9.46253C11.4817 9.46253 10.5371 8.5179 10.5371 7.36155V2.10097C10.5371 0.944624 11.4817 0 12.6381 0C13.7944 0 14.7391 0.944624 14.7391 2.10097V7.36155Z" fill="white" />
                          <path d="M12.6381 15.7988C13.7944 15.7988 14.7391 16.7435 14.7391 17.8998C14.7391 19.0562 13.7944 20.0008 12.6381 20.0008C11.4817 20.0008 10.5371 19.0562 10.5371 17.8998V15.7988H12.6381Z" fill="white" />
                          <path d="M12.6381 14.7391C11.4817 14.7391 10.5371 13.7944 10.5371 12.6381C10.5371 11.4817 11.4817 10.5371 12.6381 10.5371H17.8987C19.055 10.5371 19.9996 11.4817 19.9996 12.6381C19.9996 13.7944 19.055 14.7391 17.8987 14.7391H12.6381Z" fill="white" />
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/producter">
                      <a target="_blank">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.82264 2.21991C4.82264 3.45393 3.89172 4.44135 2.39698 4.44135H2.36959C0.930404 4.44135 0 3.45393 0 2.21991C0 0.959785 0.958741 0 2.42523 0C3.89172 0 4.79482 0.959785 4.82264 2.21991ZM4.53974 6.19531V19.0472H0.25293V6.19531H4.53974ZM19.9992 19.0473L19.9994 11.6784C19.9994 7.73081 17.8846 5.89355 15.0637 5.89355C12.7876 5.89355 11.7686 7.14097 11.1997 8.01605V6.19568H6.91235C6.96886 7.40164 6.91235 19.0476 6.91235 19.0476H11.1997V11.87C11.1997 11.4859 11.2275 11.1028 11.3408 10.8278C11.6507 10.0604 12.3561 9.26594 13.5404 9.26594C15.0923 9.26594 15.7126 10.4444 15.7126 12.1715V19.0473H19.9992Z" fill="white" />
                        </svg>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.menuBottom}>
          <Link href='https://producter.instatus.com/' passHref>
            <a target="_blank" className={styles.menuBottomLeft} alt="instatus">
              <div className={styles.dot} />
              All systems operational</a>
          </Link>
          <div><Link href='mailto:hello@producter.co' alt="mail"><span className={styles.mailto}>hello@producter.co</span></Link></div>
        </div>

      </div>}
      {activeTab === "waitList" && <div className={styles.waitlistMain}>
        <span className={styles.waitlistheader}><strong>3467+</strong> people are already on the waitlist ⚡</span>
        <span className={styles.waitlisttitle}>Leave us your email and we will let you know once the beta version is ready.</span>
        <div className={styles.divider} />
        <div className={styles.waitlistContainer}>
          <div className={classNames(styles.formContainer, "waitListInputs")}>
            <div className={styles.halInputContainer}>
              <input className={styles.waitlistHalfInput} value={waitlist.name} placeholder="Name" required onChange={(e) => setWaitlist({ ...waitlist, name: e.target.value })}></input>
              <input className={styles.waitlistHalfInput} value={waitlist.surname} placeholder="Surname" required onChange={(e) => setWaitlist({ ...waitlist, surname: e.target.value })}></input>
            </div>
            <div>
              <input type="email" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" value={waitlist?.email || ""} id="email" className={styles.waitlistInput} placeholder="Email" required onChange={(e) => { setWaitlist({ ...waitlist, email: e.target.value }) }}></input>
            </div>
            <div>
              <select className={styles.roleSelectInput} value={waitlist.role} placeholder="Select your role" required onChange={(e) => setWaitlist({ ...waitlist, role: e.target.value })}>
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
            <div>
              <button disabled={loading} className={styles.waitlistButton} onClick={onSubmit} >Join the Waitlist</button>
            </div>
            <div className="w-100 text-center">
              <span className={styles.waitlistFooterTitle}>Share us on <strong>Twitter</strong> if you want to get ahead of the list.</span>
            </div>
          </div>
        </div>
      </div>}
      <div className={styles.bottomDivider}></div>
      <div className={styles.policies}>
        <div className="d-flex justify-content-around">
          <span onClick={() => history.push('/Legal')}>Terms of Use</span>
          <span onClick={() => history.push('/Legal')}>Privacy Policy</span>
          <span onClick={() => history.push('/Legal')}>GDPR</span>
        </div>
        <div>
          <span>© 2022 Producter, Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default FooterPage;