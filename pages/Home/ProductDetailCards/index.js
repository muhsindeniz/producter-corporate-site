import React, { useState } from 'react'
import styles from './ProductDetailCards.module.css'
import Folder from '../../../assets/media/cards/folder.png'
import Blog from '../../../assets/media/cards/blog.png'
import Changelog from '../../../assets/media/cards/changelog.png'
import Community from '../../../assets/media/cards/community.png'
import Roadmap from '../../../assets/media/cards/roadmap.png'
import Videos from '../../../assets/media/cards/videos.png'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import Link from 'next/link'

const ProductDetailCard = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return (
                '<span className="' + className + ' tabs"></span>'
            );
        }
    };


    return (
        <div className="w-100 d-flex align-items-center justify-content-center flex-column product-detail-card-container">
            <div className={styles.container}>
                <Link href="https://www.subscribepage.com/producter_resources" >
                    <a className={classNames(styles.card, styles.resources, "d-lg-flex", "d-sm-none")} alt="card" target="_blank">
                        <div className={styles.cardDetail}>
                            <span className={styles.cardHeader}>For PRODUCT SUCCESS</span>
                            <div className="d-flex">
                                <span className={styles.cardTitle}>Resources</span>
                                <span className={styles.arrowIcon}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 36L42 24L30 12" stroke="#2d70fd" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 24H40" stroke="#2d70fd" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M42 24H40" stroke="#2d70fd" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className={styles.cardImage}>
                            <img src={Folder.src} ></img>
                        </div>
                    </a>
                </Link>
                <Link href="http://blog.producter.co" >
                    <a className={classNames(styles.card, styles.blog, "d-lg-flex", "d-sm-none")} alt="card" target="_blank">
                        <div className={styles.cardDetail}>
                            <span className={styles.cardHeader}>For QUALITY CONTENT</span>
                            <div className="d-flex">
                                <span className={styles.cardTitle}>Blog</span>
                                <span className={styles.arrowIcon}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 36L42 24L30 12" stroke="#00D8A7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 24H40" stroke="#00D8A7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M42 24H40" stroke="#00D8A7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className={styles.cardImage}>
                            <img src={Blog.src} ></img>
                        </div>
                    </a>
                </Link>
                <Link href="https://be.producter.co/portal/changelog" >
                    <a className={classNames(styles.card, styles.changelog, "d-lg-flex", "d-sm-none")} alt="card" target="_blank">
                        <div className={styles.cardDetail}>
                            <span className={styles.cardHeader}>For PRODUCT UPDATES</span>
                            <div className="d-flex">
                                <span className={styles.cardTitle}>Changelog</span>
                                <span className={styles.arrowIcon}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 36L42 24L30 12" stroke="#ffd166" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 24H40" stroke="#ffd166" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M42 24H40" stroke="#ffd166" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className={styles.cardImage}>
                            <img src={Changelog.src} ></img>
                        </div>
                    </a>
                </Link>
                <Link href="https://be.producter.co/portal/roadmap">
                    <a className={classNames(styles.card, styles.glossary, "d-lg-flex", "d-sm-none")} alt="card" target="_blank">
                        <div className={styles.cardDetail}>
                            <span className={styles.cardHeader}>For NEXT FEATURES</span>
                            <div className="d-flex">
                                <span className={styles.cardTitle}>Roadmap</span>
                                <span className={styles.arrowIcon}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 36L42 24L30 12" stroke="#ff9c54" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 24H40" stroke="#ff9c54" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M42 24H40" stroke="#ff9c54" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className={styles.cardImage}>
                            <img src={Roadmap.src} ></img>
                        </div>
                    </a>
                </Link>
                <Link href="https://join.slack.com/t/producterhq/shared_invite/zt-ua0o22a8-vfVxL9jp4I9RyLliTuqzcA" >
                    <a className={classNames(styles.card, styles.community, "d-lg-flex", "d-sm-none")} alt="card" target="_blank">
                        <div className={styles.cardDetail}>
                            <span className={styles.cardHeader}>For PRODUCT PEOPLE</span>
                            <div className="d-flex">
                                <span className={styles.cardTitle}>Community</span>
                                <span className={styles.arrowIcon}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 36L42 24L30 12" stroke="#40e0d2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 24H40" stroke="#40e0d2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M42 24H40" stroke="#40e0d2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className={styles.cardImage}>
                            <img src={Community.src} ></img>
                        </div>
                    </a>
                </Link>
                <Link href="https://www.youtube.com/channel/UCBjvDRqnQDFRkwpABVDQPSw" >
                    <a className={classNames(styles.card, styles.videos, "d-lg-flex", "d-sm-none")} alt="card" target="_blank">
                        <div className={styles.cardDetail}>
                            <span className={styles.cardHeader}>For FUN</span>
                            <div className="d-flex">
                                <span className={styles.cardTitle}>Videos</span>
                                <span className={styles.arrowIcon}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 36L42 24L30 12" stroke="#7b61ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 24H40" stroke="#7b61ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M42 24H40" stroke="#7b61ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className={styles.cardImage}>
                            <img src={Videos.src}></img>
                        </div>
                    </a>
                </Link>


                <Swiper className={styles.swiperStart}
                    navigation={false}
                    modules={[Pagination]}
                    pagination={pagination}
                >

                    <SwiperSlide className="firstSlide">
                        <Link href="https://www.subscribepage.com/producter_resources" >
                            <a className={classNames(styles.card, styles.resources, "d-lg-none", "d-sm-flex")} alt="card" target="_blank">
                                <div className={styles.cardDetail}>
                                    <span className={styles.cardHeader}>For PRODUCT SUCCESS</span>
                                    <div className="d-flex">
                                        <span className={styles.cardTitle}>Resources</span>
                                        <span className={styles.arrowIcon}>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30 36L42 24L30 12" stroke="#2d70fd" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 24H40" stroke="#2d70fd" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M42 24H40" stroke="#2d70fd" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.cardImage}>
                                    <img src={Folder.src} ></img>
                                </div>
                            </a>
                        </Link>
                        <Link href="http://blog.producter.co">
                            <a className={classNames(styles.card, styles.blog, "d-lg-none", "d-sm-flex")} alt="card" target="_blank">
                                <div className={styles.cardDetail}>
                                    <span className={styles.cardHeader}>For QUALITY CONTENT</span>
                                    <div className="d-flex">
                                        <span className={styles.cardTitle}>Blog</span>
                                        <span className={styles.arrowIcon}>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30 36L42 24L30 12" stroke="#00D8A7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 24H40" stroke="#00D8A7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M42 24H40" stroke="#00D8A7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.cardImage}>
                                    <img src={Blog.src} ></img>
                                </div>
                            </a>
                        </Link>
                        <Link href="https://be.producter.co/portal/changelog" >
                            <a className={classNames(styles.card, styles.changelog, "d-lg-none", "d-sm-flex")} alt="card" target="_blank">
                                <div className={styles.cardDetail}>
                                    <span className={styles.cardHeader}>For PRODUCT UPDATES</span>
                                    <div className="d-flex">
                                        <span className={styles.cardTitle}>Changelog</span>
                                        <span className={styles.arrowIcon}>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30 36L42 24L30 12" stroke="#ffd166" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 24H40" stroke="#ffd166" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M42 24H40" stroke="#ffd166" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.cardImage}>
                                    <img src={Changelog.src} ></img>
                                </div>
                            </a>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="secondSlide">
                        <Link href="https://be.producter.co/portal/roadmap">
                            <a className={classNames(styles.card, styles.glossary, "d-lg-none", "d-sm-flex")} alt="card" target="_blank">
                                <div className={styles.cardDetail}>
                                    <span className={styles.cardHeader}>For NEXT FEATURES</span>
                                    <div className="d-flex">
                                        <span className={styles.cardTitle}>Roadmap</span>
                                        <span className={styles.arrowIcon}>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30 36L42 24L30 12" stroke="#ff9c54" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 24H40" stroke="#ff9c54" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M42 24H40" stroke="#ff9c54" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.cardImage}>
                                    <img src={Roadmap.src} ></img>
                                </div>
                            </a>
                        </Link>
                        <Link href="https://join.slack.com/t/producterhq/shared_invite/zt-ua0o22a8-vfVxL9jp4I9RyLliTuqzcA" >

                            <a className={classNames(styles.card, styles.community, "d-lg-none", "d-sm-flex")} alt="card" target="_blank">
                                <div className={styles.cardDetail}>
                                    <span className={styles.cardHeader}>For PRODUCT PEOPLE</span>
                                    <div className="d-flex">
                                        <span className={styles.cardTitle}>Community</span>
                                        <span className={styles.arrowIcon}>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30 36L42 24L30 12" stroke="#40e0d2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 24H40" stroke="#40e0d2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M42 24H40" stroke="#40e0d2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.cardImage}>
                                    <img src={Community.src} ></img>
                                </div>
                            </a>
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCBjvDRqnQDFRkwpABVDQPSw" >

                            <a className={classNames(styles.card, styles.videos, "d-lg-none", "d-sm-flex")} alt="card" target="_blank">
                                <div className={styles.cardDetail}>
                                    <span className={styles.cardHeader}>For FUN</span>
                                    <div className="d-flex">
                                        <span className={styles.cardTitle}>Videos</span>
                                        <span className={styles.arrowIcon}>
                                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30 36L42 24L30 12" stroke="#7b61ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M6 24H40" stroke="#7b61ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M42 24H40" stroke="#7b61ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.cardImage}>
                                    <img src={Videos.src}></img>
                                </div>
                            </a>
                        </Link>
                    </SwiperSlide>

                </Swiper>

            </div>

        </div >
    )
}

export default ProductDetailCard