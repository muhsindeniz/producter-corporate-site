import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import style from './TeamWorld.module.css';
import packageTabIcon from '../../../assets/media/icons/packageTabIcon.svg'

const TeamWorld = () => {

    let [data, setData] = useState(null)

    const tabsData = [
        {
            id: 0,
            status: true,
            title: 'Is my credit card information needed to sign up for Producter?',
            description: 'If you know me, you probably already know that this is my personal favorite. Signup your SaaS to every single SaaS directory and gather reviews. You will get free exposure on well websites and social proof in form of embeddable testimonial widgets that you can use on your landing pages. Learn how to utilize social proof and increase your MRR...',
        },
        {
            id: 1,
            status: false,
            title: 'What if I need more content locales, users, or stages?',
            description: 'If you know me, you probably already know that this is my personal favorite. Signup your SaaS to every single SaaS directory and gather reviews. You will get free exposure on well websites and social proof in form of embeddable testimonial widgets that you can use on your landing pages. Learn how to utilize social proof and increase your MRR...',
        },
        {
            id: 2,
            status: false,
            title: 'How do I purchase more API Operations and Asset Traffic?',
            description: 'If you know me, you probably already know that this is my personal favorite. Signup your SaaS to every single SaaS directory and gather reviews. You will get free exposure on well websites and social proof in form of embeddable testimonial widgets that you can use on your landing pages. Learn how to utilize social proof and increase your MRR...',
        },
        {
            id: 3,
            status: false,
            title: 'Do you charge extra API Operations and Asset Traffic immediately?',
            description: 'If you know me, you probably already know that this is my personal favorite. Signup your SaaS to every single SaaS directory and gather reviews. You will get free exposure on well websites and social proof in form of embeddable testimonial widgets that you can use on your landing pages. Learn how to utilize social proof and increase your MRR...',
        },
        {
            id: 4,
            status: false,
            title: 'Do you charge extra API Operations and Asset Traffic immediately?',
            description: 'If you know me, you probably already know that this is my personal favorite. Signup your SaaS to every single SaaS directory and gather reviews. You will get free exposure on well websites and social proof in form of embeddable testimonial widgets that you can use on your landing pages. Learn how to utilize social proof and increase your MRR...',
        }
    ]

    useEffect(() => {
        setData(tabsData)
    }, [])

    let handleActive = (id) => {
        setData(data.map(item => {
            if (item.id === id) {
                item.status = !item.status;
            } else {
                item.status = false;
            }
            return item;
        }))
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.mainTitle}>Loved by teams around the world</div>
                <div className={style.description}>Customer-centric teams love Producter’s fast <br /> and, easy-to-use experience.</div>
            </div>
            <div className={style.tabContainer}>
                <div className="accordion" id="accordionExample">
                    {
                        data && data.map((item, index) => (
                            <div key={index} className={style.card}>
                                <div className={classNames(`headingOne${item.id}`, style.cardHead)} id={`headingOne${item.id}`} onClick={() => handleActive(item.id)}>
                                    <button className={classNames('btn m-0 p-0', style.cardHeadButton)} type="button" data-toggle="collapse" data-target={`#collapseOne${item.id}`} aria-expanded="true" aria-controls={`collapseOne${item.id}`}>
                                        <div>
                                            {item.title}
                                        </div>

                                        <div>
                                            <img style={{transform: item.status ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'ease .3s all', width: "24px", height: "24px"}} src={packageTabIcon.src} />
                                        </div>
                                    </button>
                                </div>

                                <div id={`collapseOne${item.id}`} className={classNames(`collapse ${item.id === 0 ? 'show' : ''}`, style.cardContent)} aria-labelledby={`headingOne${item.id}`} data-parent="#accordionExample">
                                    <div className="card-body">
                                        {
                                            item.description
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamWorld