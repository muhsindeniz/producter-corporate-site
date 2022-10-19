import React, { useEffect, useState } from 'react'
import style from './FeatureComparisonTable.module.css';
import startupIcon from '../../assets/media/icons/checkTickStartup.svg';
import growthIcon from '../../assets/media/icons/checkTickGrowty.svg';
import premiumIcon from '../../assets/media/icons/checkTickPremium.svg';
import enterpriseIcon from '../../assets/media/icons/checkTickEnterprice.svg';
import packageTabIcon from '../../assets/media/icons/packageTabIcon.svg';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
const { motion, AnimatePresence } = require("framer-motion");

const FeatureComparisonTable = (props) => {

    let { RowData, HeaderData } = props;
    const [scrollPosition, setScrollPosition] = useState(0);
    const [expanded, setExpanded] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <section className={style.tableContainer}>
            <div className={classNames(style.tableHeader, (scrollPosition > 2950 && scrollPosition < 7980) ? style.fixHeader : '')}>
                <span className={style.tableHeaderMainTitle}>{HeaderData.mainTitle}</span>
                {
                    HeaderData && HeaderData.column && HeaderData.column.map((item, index) => (
                        <div key={index} className={style.tableHeaderColumnTitle} style={{ color: item.theme }}>
                            <span className={style.HeaderColumnIcon}>{item?.icon}</span>
                            {item?.title}
                        </div>
                    ))
                }
            </div>

            <div className={style.tableBody}>

                {
                    RowData && RowData.map((item) => (
                        <Accordion key={item.id} item={item} i={item.id} expanded={expanded} setExpanded={setExpanded} />
                    ))
                }
            </div>
        </section>
    )
}

const Accordion = ({ item, i, expanded, setExpanded }) => {


    return (
        <>

            <motion.header initial={false} onClick={() => setExpanded(expanded => expanded.includes(i) ? expanded.filter(e => e !== i) : [...expanded, i])} className={style.bodyTitle}>
                {item?.title}
                <motion.img animate={{ rotate: expanded.includes(i) ? 180 : 0 }} transition={{ duration: 0.5 }} className={style.packageArrowIcon} src={packageTabIcon.src} />
                <span className={style.subDescription}>{item?.subTitle}</span>
            </motion.header>
            <AnimatePresence initial={false}>
                {expanded.includes(i) && (
                    <motion.section
                        key='content'
                        initial='collapsed'
                        animate='open'
                        exit='collapsed'
                        variants={{
                            open: { opacity: 1, height: 'auto', x: 0 },
                            collapsed: { opacity: 0, height: 0, x: 0 }
                        }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        {
                            item?.content && item.content.map((content, index) => (
                                <motion.div key={content.title} className={style.bodyRow}>
                                    <div className={style.bodyColumn}>{content.title}</div>
                                    <div className={style.bodyColumn}>
                                        <div className={style.cell}>
                                            {content.startup ? <img src={startupIcon.src} /> : ""}
                                        </div>
                                    </div>
                                    <div className={style.bodyColumn}>
                                        <div className={style.cell}>
                                            {content.growth ? <img src={growthIcon.src} /> : ""}
                                        </div>
                                    </div>
                                    <div className={style.bodyColumn}>
                                        <div className={style.cell}>
                                            {content.premium ? <img src={premiumIcon.src} /> : ""}
                                        </div>
                                    </div>
                                    <div className={style.bodyColumn}>
                                        {content.entreprise ? <img src={enterpriseIcon.src} /> : ""}
                                    </div>
                                </motion.div>
                            ))
                        }
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    )
}


export default FeatureComparisonTable