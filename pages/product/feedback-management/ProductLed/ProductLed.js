import React, { useContext } from 'react'
import style from './ProductLed.module.css';
import ProductLedBanner from '../../../../assets/media/banner/productLed.jpg'
import ProductLedMobileBanner from '../../../../assets/media/banner/productLed-mobile.jpg'
import { GlobalSettingsContext } from '../../../../context/GlobalSettingsContext'

const ProductLed = () => {

    let { mobile } = useContext(GlobalSettingsContext)

    return (
        <div className={style.container}>
            {
                mobile ? <img src={ProductLedMobileBanner.src} className={style.banner} /> : <img src={ProductLedBanner.src} className={style.banner} />
            }
        </div>
    )
}

export default ProductLed