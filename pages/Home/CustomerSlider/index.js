import React, { useEffect, useRef, useState } from 'react'
import style from './CustomerSlider.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import classNames from 'classnames';

const CustomerSlider = () => {
    const headerRef = useRef(null);
    let [currentSlide, setCurrentSlide] = useState(0);
    let tabsName = [
        {
            header: "Product Manager",
            desc: "Align product outcomes with business goals by listening to the voice of your users.",
            left: 160,
            right: -240
        },
        {
            header: "Co-founder",
            desc: "Understand the market and create successful products by listening to user needs.",
            left: 140,
            right: -200
        },
        {
            header: "Developer",
            desc: "Understand the customer need behind valuable features you build.",
            left: 110,
            right: -140
        },
        {
            header: "Customer Success",
            desc: "Have a visible customer feedback process and resolve their tickets.",
            left: 270,
            right: -120
        },
        {
            header: "Sales",
            desc: "Contribute to the growth of sales by providing customer feedback.",
            left: 140,
            right: -120
        },
        {
            header: "Marketing",
            desc: "Communicate actively with product teams to ensure a successful launch.",
            left: 140,
            right: 0
        }
    ]

    const scroll = (scrollOffset, start, end) => {

        if (start)
            headerRef.current.scrollLeft = 0;
        else if (end)
            headerRef.current.scrollLeft = 1000;
        else if (headerRef.current) {
            headerRef.current.scrollLeft += scrollOffset;
        }
    };

    return (
        <div className={style.container}>
            <div className={style.sliderContainer}>
                <button className={style.leftArrow} onClick={() => { scroll(tabsName[currentSlide].right, false, currentSlide <= 0 ? true : false); setCurrentSlide(currentSlide => currentSlide <= 0 ? (tabsName.length - 1) : (currentSlide - 1)) }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 18L8 12L14 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </button>
                <button className={style.rightArrow} onClick={() => { scroll(tabsName[currentSlide].left, currentSlide >= (tabsName.length - 1) ? true : false, false); setCurrentSlide(currentSlide => currentSlide >= (tabsName.length - 1) ? 0 : (currentSlide + 1)) }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6L16 12L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </button>

                <div className={style.sliderSection}>
                    <div className={style.header} ref={headerRef}>
                        {tabsName.map((tab, index) => <div className={classNames(style.headerTitle, currentSlide === index ? style.active : "")} key={index} onClick={() => setCurrentSlide(index)}>{tab.header}</div>)}
                    </div>
                    <div className={style.slide}>
                        {tabsName.map((tab, index) => <div key={index} className={classNames(style.viewSlide, currentSlide === index ? style.activeDesc : "")}>{tab.desc}</div>)}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CustomerSlider