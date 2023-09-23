import React from 'react'
import CriteriaSection from '../homeLayout/CriteriaSection'
import Footer from '../homeLayout/Footer'
import Hero from '../homeLayout/Hero'
import IntroSection from '../homeLayout/IntroSection'
import PartnersSection from '../homeLayout/PartnersSection'
import PolicySection from '../homeLayout/PolicySection'
import QuestionSection from '../homeLayout/QuestionSection'
import RewardsSection from '../homeLayout/RewardsSection'
import RulesSection from '../homeLayout/RulesSection'
import TimelineSection from '../homeLayout/TimelineSection'

const Home = () => {
  return (
    <div>
        <Hero/>
        <IntroSection/>
        <RulesSection/>
        <CriteriaSection/>
        <QuestionSection/>
        <TimelineSection/>
        <RewardsSection/>
        <PartnersSection/>
        <PolicySection/>
        <Footer/>
    </div>
  )
}

export default Home