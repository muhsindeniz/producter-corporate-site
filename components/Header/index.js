import React, { useState, useContext, useRef, useEffect } from 'react'
import styles from './header.module.css';
import Logo from '../../assets/media/banner/logo.svg';
import classNames from 'classnames';
import VideoBanner from '../../assets/media/banner/VideoBanner.png'
import { GlobalSettingsContext } from '../../context/GlobalSettingsContext';
import feedbackIcon from '../../assets/media/icons/feedbackIcon.svg'
import chatIcon from '../../assets/media/icons/chatIcon.svg'
import exploreIcon from '../../assets/media/icons/exploreIcon.svg'
import repeatIcon from '../../assets/media/icons/repeatIcon.svg'
import fileIcon from '../../assets/media/icons/fileIcon.svg'
import Link from 'next/link';
import WaitListPopup from '../../components/WaitListPopup/WaitListPopup'
import BG from '../../assets/media/banner/HomeBackground.png'
import { useRouter } from 'next/router';
import styled from 'styled-components';


const backgroundColors = {
    home: "radial-gradient(50% 50% at 50% 50%, #2d70fd 0%, #001747 100%);",
    feedbackModule: "linear-gradient(180deg, #2D70FD 0%, #001747 100%);"
}

const Header = (props) => {
    const { page, customHeight, count, feedbackRef, taskRef, roadMapRef, shareRef, createRef, children } = props;
    let { mobile, setShowPopup, showPopup } = useContext(GlobalSettingsContext)
    let [openMenu, setOpenMenu] = useState(false)
    const [activeIndex, setActiveIndex] = useState(4);
    const [subMenuActiveIndex, setMenuHandleOnClick] = useState(1);
    const [editOpen, setEditOpen] = useState(false)
    const [activeMenuItem, setActiveMenuItem] = useState(false)
    const [size, setSize] = useState(0)
    const [horizontalDividerCount, setHorizontalDividerCount] = useState([])
    const [sidesPadding, setSidesPadding] = useState(0)
    const router = useRouter()


    const ContainerDiv = styled.div`
    width: 100%;
    height:${customHeight || "auto"};
    background: url(${BG.src}),
        ${backgroundColors[page]};
    background-position: inherit;
    background-size: inherit;
    background-repeat: repeat;
    padding: ${openMenu ? "0px" : "0px 120px 78px 120px"};
    color: #fff;
    position: relative;
    z-index: 99;

    @media only screen and (max-width: 768px) {
        padding: ${openMenu ? "0px" : "0 24px 32px 24px"};
    }

    @media only screen and (min-width: 769px) and (max-width: 1025px) {
        padding: 0 !important;
    }
`
    useEffect(() => {

        let getSize = () => {
            setSize(window.innerWidth)
        }
        getSize()
        window.addEventListener("resize", getSize)
        return () => {
            window.removeEventListener('resize', getSize)
            window.removeEventListener('load', getSize)
        }
    }, [])

    useEffect(() => {
        handleHorizontalDivider(size % 30, size % 60)
    }, [size])

    const handleHorizontalDivider = async (remainder, sidePadding) => {
        if (sidePadding === 0)
            setHorizontalDividerCount(Array.from({ length: (size / 60) }, () => Math.floor(Math.random())))
        else {
            setHorizontalDividerCount(Array.from({ length: ((size - remainder) / 60) }, () => Math.floor(Math.random())))
            setSidesPadding(sidePadding / 2)
        }
    }

    const activeIndexHandler = (current) => {
        if (current === 0 && feedbackRef && feedbackRef.current) {
            feedbackRef.current.scrollIntoView({ behavior: "smooth" })
        }
        else if (current === 1 && taskRef && taskRef.current) {
            taskRef.current.scrollIntoView({ behavior: "smooth" })
        }
        else if (current === 2 && roadMapRef && roadMapRef.current) {
            roadMapRef.current.scrollIntoView({ behavior: "smooth" })
        }
        else if (current === 3 && shareRef && shareRef.current) {
            shareRef.current.scrollIntoView({ behavior: "smooth" })
        }
        else if (current === 4 && createRef && createRef.current) {
            createRef.current.scrollIntoView({ behavior: "smooth" })
        }
        setActiveIndex(4)
    }

    const handleOnClick = index => {
        setActiveIndex(index);
    };

    let menuItem = ['Product', 'Value', 'Pricing', 'Portal'];
    let SubMenu = [
        {
            parent: "Product",
            children: [
                {
                    title: "Feedback Management",
                    Icon: feedbackIcon.src
                },
                {
                    title: "Task Management",
                    Icon: chatIcon.src
                },
                {
                    title: "Roadmap",
                    Icon: exploreIcon.src
                },
                {
                    title: "Changelog",
                    Icon: repeatIcon.src
                },
                {
                    title: "Documentation",
                    Icon: fileIcon.src
                }
            ]
        },
        {
            parent: "Value",
            children: null
        },
        {
            parent: "Portal",
            children: null
        },
        {
            parent: "Space",
            children: [
                {
                    title: "Feedback Management",
                    Icon: feedbackIcon.src
                },
                {
                    title: "Task Management",
                    Icon: chatIcon.src
                },
                {
                    title: "Roadmap",
                    Icon: exploreIcon.src
                },
                {
                    title: "Changelog",
                    Icon: repeatIcon.src
                },
                {
                    title: "Documentation",
                    Icon: fileIcon.src
                }
            ]
        }
    ]

    let playVideo = (item) => {
        setEditOpen(!editOpen)
    }

    let stopVideo = () => {
        setEditOpen(false)
    }

    return (
        <ContainerDiv>

            {
                showPopup.show && <WaitListPopup setShowPopup={setShowPopup} />
            }
            <div className="divider-horizantal-container">
                {Array.from({ length: count ? count : size < 800 ? 26 : 30 }, () => Math.floor(Math.random())).map((c, i) => <div key={i} className="divider-horizantal"></div>)}
            </div>
            <div className="divider-vertical-container">
                {horizontalDividerCount && horizontalDividerCount.map((c, i) => <div key={i} style={{ paddingLeft: (sidesPadding && i === 0) ? sidesPadding : "" }} className="divider-vertical"></div>)}
            </div>
            <nav className="navbar navbar-expand-lg navbar-light cursor-pointer">
                <Link className="navbar-brand" href="/">
                    <div className={styles.logoContainer}>
                        <img src={Logo.src} width={178} />
                    </div>
                </Link>
                <button onClick={() => { setOpenMenu(true); document.body.style.overflow = "hidden" }} className="navbar-toggler" type="button" data-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={classNames("collapse navbar-collapse", openMenu ? "show" : "")}>
                    <ul className="navbar-nav mt-lg-0 d-lg-flex d-sm-none">
                        {
                            menuItem.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => (index === 0 || index === 3) && handleOnClick(index)}
                                    className={activeIndex === index ? "nav-item active" : classNames("nav-item", (index === 1) ? "navbar-item-passive" : "")}
                                >
                                    {index === 3 ?
                                        <Link passHref href={"https://be.producter.co/portal "}>
                                            <a target="_blank" className={classNames("nav-link", (index === 1) ? "nav-link-passive" : "")}>{item}</a>
                                        </Link>
                                        :
                                        <Link passHref href='/pricing'>
                                            <a onClick={(e) => { e.preventDefault(); router.push("/pricing"); }}
                                                className={classNames("nav-link", (index === 1) ? "nav-link-passive" : "")}>{item}</a>
                                        </Link>

                                    }
                                </li>
                            ))
                        }


                        <div className={styles.subMenuContainer} style={{ display: activeIndex === 0 ? "block" : "none" }}>
                            <div style={{ cursor: "pointer", position: "fixed", width: "100%", height: "100vh", zIndex: 1, top: 0, left: 0 }}
                                onClick={() => { setActiveIndex(4); setEditOpen(false); stopVideo() }}>
                            </div>
                            <div className={styles.menuContent}>
                                <div className="row m-0">
                                    <div className="col-sm-12 col-lg-6" style={{ borderRight: "solid 2px #ffffff10", padding: "24px", width: "310px" }}>

                                        <div className={classNames(styles.tabListContainer, styles.chat)} onClick={() => { setMenuHandleOnClick(1); activeIndexHandler(0); stopVideo(); }}>
                                            <div className={styles.icon}>
                                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.87027 14.0373C6.75162 14.008 6.62621 14.0202 6.51689 14.0749L3.5202 15.5732C3.15945 15.7536 2.74458 15.4546 2.80162 15.0553L3.17244 12.4596C3.19649 12.2912 3.13239 12.1231 3.00798 12.0071C1.75632 10.8408 1 9.3244 1 7.66667C1 3.98477 4.73096 1 9.33333 1C13.9357 1 17.6667 3.98477 17.6667 7.66667C17.6667 11.3486 13.9357 14.3333 9.33333 14.3333C8.4759 14.3333 7.64872 14.2297 6.87027 14.0373Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>

                                            <div className={styles.content}>
                                                <div className={styles.title}>
                                                    Feedback Management
                                                </div>
                                                <div className={styles.description}>
                                                    Collect feedback from all channels
                                                </div>
                                            </div>
                                        </div>

                                        <div className={classNames(styles.tabListContainer, styles.task)} onClick={() => { setMenuHandleOnClick(2); activeIndexHandler(1); stopVideo(); }}>
                                            <div className={styles.icon}>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_27_93)">
                                                        <path d="M9.52438 5.71436H12.0641H14.6037M9.52438 12.0636H12.0641H14.6037" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M3.17474 5.82974L4.36522 6.98414L6.98427 4.44446" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M3.17474 12.179L4.36522 13.3334L6.98427 10.7937" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.1438 0.634766H2.63591C1.53134 0.634766 0.63591 1.5302 0.63591 2.63477V15.1427C0.63591 16.2473 1.53134 17.1427 2.63591 17.1427H15.1438C16.2484 17.1427 17.1438 16.2473 17.1438 15.1427V2.63477C17.1438 1.5302 16.2484 0.634766 15.1438 0.634766Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_27_93">
                                                            <rect width="17.7778" height="17.7778" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>

                                            <div className={styles.content}>
                                                <div className={styles.title}>
                                                    Task Management
                                                </div>
                                                <div className={styles.description}>
                                                    Collect feedback from all channels
                                                </div>
                                            </div>
                                        </div>

                                        <div className={classNames(styles.tabListContainer, styles.roadmap)} onClick={() => { setMenuHandleOnClick(3); activeIndexHandler(2); stopVideo(); }}>
                                            <div className={styles.icon}>
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.179 10.9021C11.1282 11.0291 11.0276 11.1298 10.9005 11.1806L6.29035 13.025C5.88217 13.1883 5.47709 12.7833 5.6404 12.3751L7.48486 7.76491C7.53568 7.63789 7.63633 7.53723 7.76335 7.48641L12.3735 5.64195C12.7817 5.47865 13.1868 5.88373 13.0235 6.29191L11.179 10.9021Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M9.33333 17.6667C13.9357 17.6667 17.6667 13.9357 17.6667 9.33333C17.6667 4.73096 13.9357 1 9.33333 1C4.73096 1 1 4.73096 1 9.33333C1 13.9357 4.73096 17.6667 9.33333 17.6667Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>

                                            </div>

                                            <div className={styles.content}>
                                                <div className={styles.title}>
                                                    Roadmap
                                                </div>
                                                <div className={styles.description}>
                                                    Collect feedback from all channels
                                                </div>
                                            </div>
                                        </div>

                                        <div className={classNames(styles.tabListContainer, styles.changelog)} onClick={() => { setMenuHandleOnClick(4); activeIndexHandler(3); stopVideo(); }}>
                                            <div className={styles.icon}>
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 10.0622V8.3623C1 5.60088 3.23857 3.3623 6 3.3623H16.8333" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15.1639 1L17.6639 3.5L15.1639 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M17.6644 8.37646V10.0764C17.6644 12.8379 15.4258 15.0764 12.6644 15.0764H1.83105" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M3.5 17.6621L1 15.1621L3.5 12.6621" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>

                                            </div>

                                            <div className={styles.content}>
                                                <div className={styles.title}>
                                                    Changelog
                                                </div>
                                                <div className={styles.description}>
                                                    Collect feedback from all channels
                                                </div>
                                            </div>
                                        </div>

                                        <div className={classNames(styles.tabListContainer, styles.documentation)} onClick={() => { setMenuHandleOnClick(5); activeIndexHandler(4); stopVideo(); }}>
                                            <div className={styles.icon}>
                                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 10.0622V8.3623C1 5.60088 3.23857 3.3623 6 3.3623H16.8333" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15.1639 1L17.6639 3.5L15.1639 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M17.6644 8.37646V10.0764C17.6644 12.8379 15.4258 15.0764 12.6644 15.0764H1.83105" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M3.5 17.6621L1 15.1621L3.5 12.6621" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>

                                            </div>

                                            <div className={styles.content}>
                                                <div className={styles.title}>
                                                    Documentation
                                                </div>
                                                <div className={styles.description}>
                                                    Collect feedback from all channels
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-12 col-lg-6 position-relative" style={{ padding: "24px", width: "350px" }}>

                                        <div className={styles.active}>
                                            <div className={styles.tabsVideoContainer}>
                                                {
                                                    !editOpen && <div><button className={styles.playPauseButton} onClick={() => playVideo(1)}></button></div>
                                                }
                                                {editOpen &&
                                                    <iframe
                                                        width="302"
                                                        height="169"
                                                        src="https://www.youtube.com/embed/cg1ondHwoxQ?autoplay=1"
                                                        title="YouTube video player" frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen />
                                                }
                                            </div>

                                            <div className={styles.tabsItemContent}>
                                                <h6 className={styles.tabsItemTitle}>What is Producter?</h6>

                                                <p className={styles.tabsItemDescription}>
                                                    Collect feedback from your customers and teammates and communicate product decisions in one place.
                                                </p>
                                            </div>

                                            <div className={styles.tabsItemFooter}>
                                                <Link href="https://app.producter.co/">
                                                    <a target="_blank" className={styles.footerBlueButton}>
                                                        Sign up
                                                    </a>
                                                </Link>
                                                <Link href="https://meetings-eu1.hubspot.com/rifat" passHref>
                                                    <a target="_blank" className={styles.footerBookButton}>
                                                        <svg style={{ marginRight: "4px" }} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.125 5.5415C2.125 4.43693 3.02043 3.5415 4.125 3.5415H12.875C13.9796 3.5415 14.875 4.43693 14.875 5.5415V12.8748C14.875 13.9794 13.9796 14.8748 12.875 14.8748H4.125C3.02043 14.8748 2.125 13.9794 2.125 12.8748V5.5415Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M14.875 6.375H2.125" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.95834 3.54167V2.125" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M12.0417 3.54167V2.125" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        Book a demo
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </ul>

                    <div className={styles.userSignContainer}>
                        <button target="_blank" className={styles.signIn_button} onClick={() => router.push('/login')}>Login</button>
                        <Link href="https://app.producter.co/">
                            <a target="_blank" className={styles.start_button}>Sign up</a>
                        </Link>
                    </div>

                    <div className="mobileHeaderSubMenuContainer">
                        <div className={styles.mobileMenuHeader}>
                            <span>
                                <img src={Logo.src} width="178px" />
                            </span>
                            <span>
                                <button onClick={() => { setOpenMenu(false); document.body.style.overflow = "scroll" }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.34253 12.657L12.6562 1.34326M1.34253 1.34326L12.6562 12.657L1.34253 1.34326Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </span>
                        </div>

                        <div className={styles.mobileMenuContent}>
                            <ul className="subMenuList">
                                {
                                    SubMenu.map((menu, index) => (
                                        <li key={index} className={styles.menuText}>
                                            {menu.children ?
                                                <>
                                                    <a href={`#${menu.parent}`} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">{menu.parent}</a>
                                                    <ul className="collapse list-unstyled" id={`${menu.parent}`}>
                                                        {
                                                            menu.children.map((item, key) =>
                                                            (
                                                                <li key={key} className={key == 0 ? "headerSubMenuFirstItem" : "border-0"} onClick={(a, i) => { setActiveMenuItem(`${item.title + menu.parent}`); setOpenMenu(false); document.body.style.overflow = "scroll"; setMenuHandleOnClick(key + 1); activeIndexHandler(key); }}>
                                                                    <span className='d-flex align-items-center'>
                                                                        <img style={{ opacity: activeMenuItem === `${item.title + menu.parent}` ? "1" : ".6" }} src={item.Icon} />
                                                                        <div className="mobileMenuDots">
                                                                            <span style={{ color: activeMenuItem === `${item.title + menu.parent}` ? "#ffffff" : "#ffffff60" }}>{item.title}</span>
                                                                            <span className={activeMenuItem === `${item.title + menu.parent}` ? "activeSubDot" : ""}></span>
                                                                        </div>

                                                                    </span>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </>
                                                : <div className={styles.singleText} >
                                                    <Link passHref href={"https://be.producter.co/portal "}>
                                                        <a target="_blank">
                                                            {menu.parent}
                                                        </a>
                                                    </Link>
                                                </div>
                                            }

                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                </div>

            </nav>

            {children}
        </ContainerDiv >
    )
}

export default Header