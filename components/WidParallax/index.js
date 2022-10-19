import React, { useContext, useEffect, useState } from 'react'
import style from './WidParallax.module.css'
import { GlobalSettingsContext } from '../../context/GlobalSettingsContext'
import classNames from 'classnames'
import Link from 'next/link'

const WidParallax = (props) => {
    let { mobile, setShowPopup } = useContext(GlobalSettingsContext)
    let { data } = props;
    let [active, setActive] = useState(false)
    let [current, setCurrent] = useState(0)
    let [widgetData, setWidgetData] = useState(null)
    let [icons, setIcons] = useState(null)


    useEffect(() => {
        setWidgetData(data)
        setIcons(data.headerIcons.map(data => ({ big: data.big.src, small: data.small.src })))
    }, [data])

    let mobileControl = () => {
        if (mobile) {
            setActive(false)
        } else {
            setActive(!active)
        }
    }

    return (<>
        <div ref={data.ref}>
            <div className={style.containerLine}>
                <div className={style.widgetContainer}>
                    <div className={active ? "featureInner1 active" : "featureInner1 disabled"} onClick={() => mobileControl()}>
                        <img src={widgetData?.image?.src} alt="Product team features"
                            className="why-img feature-container-2-img" style={{ border: `solid ${mobile ? "12px" : "16px"} ${widgetData?.containerColor}20` }} />
                    </div>
                </div>
            </div>
            <div className={style.attiributeContainer}>
                <div className={active ? "featureInner2 active" : "featureInner2"}>
                    <div className={style.headerIcon}>
                        {
                            icons && icons.map((icon, key) => (
                                <img key={key} src={key === current ? icon.big : icon.small} width={key === current ? "72px" : "40px"} onClick={() => setCurrent(key)} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={style.descriptionContainer}>
                <div className={classNames(style.headContainer, active ? style.active : "")}>
                    <div style={{ color: widgetData?.containerColor }} className={style.title}>
                        {widgetData?.title[current]}
                    </div>

                    <div className={style.description}>
                        {widgetData?.description[current]}
                    </div>

                    <Link href="https://app.producter.co/">
                        <a target="_blank" style={{ borderColor: widgetData?.containerColor, color: widgetData?.containerColor, background: widgetData?.buttonColor }} className={classNames(style.moduleButton, style[`${widgetData?.buttonHoverColor}`])}>
                            {widgetData?.buttonText}
                        </a>
                    </Link>
                </div>
            </div>
            <div className={style.feedbackContainer}>
                <div className={classNames(style.feedbackMain, active ? style.active : "")}>
                    <div className={classNames(style.partnerCommetContainer)}>
                        {widgetData?.officerUserData.content}
                    </div>
                    <div className={style.userCardInfoContainer}>
                        <span className={style.userAvatar}><img src={widgetData?.officerUserData.profilePicture.src} width="32px" height="32px" /></span>
                        <span className={style.name}>{widgetData?.officerUserData.username}</span>
                        <span className={style.content}>{widgetData?.officerUserData.title}</span> <span className={style.contentBold}>{widgetData?.officerUserData.work}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default WidParallax