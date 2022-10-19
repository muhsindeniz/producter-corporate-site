import React, { useState } from 'react'
import Header from '../../components/Header'
import Hero from './Hero/Hero'
import Footer from '../../components/Footer'
import CustomerTeams from './CustomerTeams/CustomerTeams'
import WaitList from './WaitList/WaitList'
import FeatureComparison from './FeatureComparison/FeatureComparison'
import TeamWorld from './TeamWorld/TeamWorld'
import FeedbackWorkspace from './FeedbackWorkspace/FeedbackWorkspace'
import FeedbackServices from '../product/feedback-management/FeedbackServices/FeedbackServices'

const Pricing = () => {

    let [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <Header count={13} page="feedbackModule" setOpenMenu={setOpenMenu} openMenu={openMenu} customHeight={"690px"}>
                <Hero />
            </Header>
            <CustomerTeams />
            <WaitList />
            <FeatureComparison />
            <TeamWorld />
            <FeedbackWorkspace />
            <FeedbackServices />
            <Footer />
        </>
    )
}

export default Pricing