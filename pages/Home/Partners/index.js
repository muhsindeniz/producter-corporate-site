import React, { useState } from 'react'
import Link from 'next/link'
import styles from './partners.module.css'
import logo1 from '../../../assets/media/partners/logo1.svg'
import logo2 from '../../../assets/media/partners/logo2.svg'
import logo3 from '../../../assets/media/partners/logo3.svg'
import logo4 from '../../../assets/media/partners/logo4.svg'
import logo5 from '../../../assets/media/partners/logo5.svg'
import logo6 from '../../../assets/media/partners/logo6.svg'
import logo7 from '../../../assets/media/partners/logo7.svg'
import logo8 from '../../../assets/media/partners/logo8.svg'
import logo9 from '../../../assets/media/partners/logo9.svg'
import logo10 from '../../../assets/media/partners/logo10.svg'
import logo11 from '../../../assets/media/partners/logo11.svg'
import logo12 from '../../../assets/media/partners/logo12.svg'
import logo13 from '../../../assets/media/partners/logo13.svg'
import logo14 from '../../../assets/media/partners/logo14.svg'
import logo15 from '../../../assets/media/partners/logo15.svg'
import logo16 from '../../../assets/media/partners/logo16.svg'
import logo17 from '../../../assets/media/partners/logo17.svg'
import logo18 from '../../../assets/media/partners/logo18.svg'
import logo19 from '../../../assets/media/partners/logo19.svg'
import logo20 from '../../../assets/media/partners/logo20.svg'
import logo21 from '../../../assets/media/partners/logo21.svg'
import logo22 from '../../../assets/media/partners/logo22.svg'
import logo23 from '../../../assets/media/partners/logo23.svg'

const Partners = () => {
    const [firstRowIcons] = useState([
        { logo: logo1.src, link: 'https://be.producter.co/portal/' },
        { logo: logo2.src, link: 'https://be.producter.co/portal/' },
        { logo: logo3.src, link: 'https://be.producter.co/portal/' },
        { logo: logo4.src, link: 'https://be.producter.co/portal/' },
        { logo: logo5.src, link: 'https://be.producter.co/portal/' },
        { logo: logo6.src, link: 'https://be.producter.co/portal/' },
        { logo: logo7.src, link: 'https://be.producter.co/portal/' },
        { logo: logo8.src, link: 'https://be.producter.co/portal/' },
        { logo: logo9.src, link: 'https://be.producter.co/portal/' },
        { logo: logo10.src, link: 'https://be.producter.co/portal/' },
        { logo: logo11.src, link: 'https://be.producter.co/portal/' },
        { logo: logo12.src, link: 'https://be.producter.co/portal/' }
    ])
    const [secondRowIcons] = useState([
        { logo: logo13.src, link: 'https://be.producter.co/portal/' },
        { logo: logo14.src, link: 'https://be.producter.co/portal/' },
        { logo: logo15.src, link: 'https://be.producter.co/portal/' },
        { logo: logo16.src, link: 'https://be.producter.co/portal/' },
        { logo: logo17.src, link: 'https://be.producter.co/portal/' },
        { logo: logo18.src, link: 'https://be.producter.co/portal/' },
        { logo: logo19.src, link: 'https://be.producter.co/portal/' },
        { logo: logo20.src, link: 'https://be.producter.co/portal/' },
        { logo: logo21.src, link: 'https://be.producter.co/portal/' },
        { logo: logo22.src, link: 'https://be.producter.co/portal/' },
        { logo: logo23.src, link: 'https://be.producter.co/portal/' },
    ])
    return (
        <div className={styles.container}>
            <div className={styles.firstRow}>
                {firstRowIcons.map((r, i) => <Link href={r.link} key={i}>
                    <a target="_blank" alt="logo" data-title="Make it happen!" className={styles.card}>
                        <img src={r.logo}></img>
                        <span className={styles.tooltipToptext}>Make it happen!</span>
                    </a>
                </Link>)}
            </div>

            <div className={styles.secondRow}>
                {secondRowIcons.map((r, i) => <Link href={r.link} key={i}>
                    <a target="_blank" alt="logo" data-title="Make it happen!" className={styles.card}>
                        <img src={r.logo}></img>
                        <span className={styles.tooltiptext}>Make it happen!</span>
                    </a>
                </Link>)}
            </div>
        </div >
    )
}

export default Partners