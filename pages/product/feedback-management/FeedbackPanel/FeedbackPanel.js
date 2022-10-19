import React, { useEffect, useState, useContext } from 'react'
import classNames from 'classnames';
import style from './FeedbackPanel.module.css';
import FeedbackListView from '../../../../assets/media/banner/FeedbackListView.png';
import { GlobalSettingsContext } from '../../../../context/GlobalSettingsContext';

const FeedbackPanel = () => {

    let feedBackData = [
        {
            id: 0,
            pane: 'Panel',
            image: FeedbackListView.src,
            status: true
        },
        {
            id: 1,
            pane: 'User Portal',
            image: FeedbackListView.src,
            status: false
        },
        {
            id: 2,
            pane: 'Widget',
            image: FeedbackListView.src,
            status: false
        },
        {
            id: 3,
            pane: 'Link',
            image: FeedbackListView.src,
            status: false
        }
    ]

    let [data, setData] = useState(null);
    let { mobile } = useContext(GlobalSettingsContext);

    useEffect(() => {
        setData(feedBackData);
    }, [])

    let activeTabs = (id) => {
        setData(data.map(item => {
            if (item.id === id) {
                item.status = true;
            } else {
                item.status = false;
            }
            return item;
        }))
    }

    return (
        <div className={style.container}>
            <div className={classNames(style.cardContainer, 'row m-0')}>

                {
                    mobile && <div className='col'>
                        {
                            data && data.map((item, index) => {
                                if (item.status) {
                                    return <img key={index} src={item.image} className={style.bannerTop} />
                                }
                            })
                        }
                    </div>
                }

                <div className='col-sm-12 col-lg-7 p-0'>
                    <h4 className={style.title}>User Feedback Panel</h4>
                    <p className={style.description}>
                        Centralize product feedback coming from email, Slack, Zendesk or any other tool in one place.
                    </p>
                </div>
                <div className='col-sm-12 col-lg-5 h-100 p-0'>
                    <div className={style.tabContainer}>
                        <ul className={style.feedbackPanelTabsContainer}>
                            {
                                data && data.map((item, index) => (
                                    <li key={index} onClick={() => activeTabs(item.id)} className={classNames(style.tabPane, item.status ? style.active : '')}>{item.pane || '-'}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {
                    !mobile && <div className='col'>
                        {
                            data && data.map((item, index) => {
                                if (item.status) {
                                    return <img key={index} src={item.image} className={style.banner} />
                                }
                            })
                        }
                    </div>
                }

            </div>
        </div>
    )
}

export default FeedbackPanel