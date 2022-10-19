import React, { useContext, useState } from 'react'
import Header from '../../../components/Header'
import Hero from './Hero/Hero'
import FeedbackWorkspace from './FeedbackWorkspace/FeedbackWorkspace'
import ParallaxSlider from './ParallaxSlider/ParallaxSlider'
import ProductLed from './ProductLed/ProductLed'
import FeedbackPanel from './FeedbackPanel/FeedbackPanel'
import FeedbackServices from './FeedbackServices/FeedbackServices'
import Loveus from './Loveus/Loveus'
import JoinProducter from '../../Home/JoinProducter'
import Partners from '../../Home/Partners'
import Footer from '../../../components/Footer'
import { GlobalSettingsContext } from '../../../context/GlobalSettingsContext'
const ModuleDetail = () => {
    const { mobile } = useContext(GlobalSettingsContext)
    let [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <Header count={13} page="feedbackModule" setOpenMenu={setOpenMenu} openMenu={openMenu} customHeight={"865px"} >
                <Hero />
            </Header>
            {!mobile && <ParallaxSlider />}
            <FeedbackWorkspace />
            <ProductLed />
            <FeedbackPanel />
            <Loveus />
            <JoinProducter />
            <Partners />
            <FeedbackServices />
            <Footer />
        </>
    )
}

export default ModuleDetail