import React, { useContext } from 'react'
import WaitList from './WaitList/WaitList'
import CollectFeeback from './CollectFeedback'
import Header from '../../components/Header'
import CustomerSlider from './CustomerSlider'
import WidgetParallax from './WidgetParallax'
import ProductDetailCards from './ProductDetailCards'
import Prioritize from './Piroritize'
import JoinProducter from './JoinProducter'
import FeedbackMobile from '../../components/CollectFeedbackMobile/CollectFeedbackMobile.js'
import Partners from './Partners'
import Sitemap from '../../components/Sitemap'
import { GlobalSettingsContext } from '../../context/GlobalSettingsContext'


const Home = (props) => {
  const { feedbackRef, taskRef, roadMapRef, shareRef, createRef } = props
  const { theValueRef, howItHelpsRef, integrationsRef, tryProducterRef, resourcesRef, setShowPopup } = useContext(GlobalSettingsContext)

  return (
    <>
      <Sitemap />

      <Header page="home"
        feedbackRef={feedbackRef}
        taskRef={taskRef}
        roadMapRef={roadMapRef}
        shareRef={shareRef}
        createRef={createRef}
         ><div><WaitList /></div></Header>

      <div ref={theValueRef} className="d-sm-none d-lg-block">
        <CollectFeeback />
      </div>

      <div className="d-sm-block d-lg-none">
        <FeedbackMobile />
      </div>

      <div>
        <CustomerSlider />
      </div>
      <div ref={howItHelpsRef}>
        <WidgetParallax feedbackRef={feedbackRef} taskRef={taskRef} roadMapRef={roadMapRef} shareRef={shareRef} createRef={createRef} />
      </div>
      <div ref={integrationsRef}>
        <Partners />
      </div>
      <div ref={tryProducterRef}>
        <JoinProducter />
      </div>
      <div>
        <Prioritize />
      </div>
      <div ref={resourcesRef}>
        <ProductDetailCards />
      </div>
    </>
  )
}

export default Home