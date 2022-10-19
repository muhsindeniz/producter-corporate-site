import React, { useState, useEffect, useContext } from 'react'
import classNames from 'classnames'
import styles from './Sitemap.module.css'
import Link from 'next/link'
import { GlobalSettingsContext } from '../../context/GlobalSettingsContext'

const menuList = [{ index: 0, name: "Value" },
{ index: 1, name: "Features" },
{ index: 2, name: "Integrations" },
{ index: 3, name: "Try Producter" },
{ index: 4, name: "Resources" }]

const SiteMap = (props) => {
    const { showPopup, setSitemapConfig, sitemapConfig, theValueRef, howItHelpsRef, integrationsRef, tryProducterRef, resourcesRef } = useContext(GlobalSettingsContext)
    const [current, setCurrent] = useState(sitemapConfig.active)

    useEffect(() => {
        if (current === 0 && theValueRef && theValueRef.current)
            theValueRef.current.scrollIntoView({ behavior: "smooth" })
        else if (current === 1 && howItHelpsRef && howItHelpsRef.current)
            howItHelpsRef.current.scrollIntoView({ behavior: "smooth" })
        else if (current === 2 && integrationsRef && integrationsRef.current)
            integrationsRef.current.scrollIntoView({ behavior: "smooth" })
        else if (current === 3 && tryProducterRef && tryProducterRef.current)
            tryProducterRef.current.scrollIntoView({ behavior: "smooth" })
        else if (current === 4 && resourcesRef && resourcesRef.current)
            resourcesRef.current.scrollIntoView({ behavior: "smooth" })
    }, [current])

    return (
        <div className={classNames(styles.main, (!sitemapConfig.visibility || showPopup.show) ? "d-none" : "")}>
            <div className={classNames(styles.dots)}>
                {menuList.map(menu => <div key={menu.index} className={styles.dotContent}>
                    <div className={classNames(styles.dot, sitemapConfig.active === menu.index ? styles.active : "")}></div>
                </div>)}
            </div>
            <div className={(classNames(styles.container))}>
                {menuList.map(menu =>
                    <div key={menu.index} className={classNames(styles.item, sitemapConfig.active === menu.index ? styles.active : "")} onClick={() => { setCurrent(menu.index); setSitemapConfig({ ...sitemapConfig, active: menu.index }) }}>
                        <div className={styles.dot} />
                        <span className={styles.title}>{menu.name}</span>
                    </div>)}
            </div>
        </div >
    )
}

export default SiteMap