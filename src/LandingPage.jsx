import React from 'react'
import Header from './components/common/Header'
import TopSection from './components/TopSection'
import Section1 from './components/Section1'
import Section02 from './components/Section02'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

const LandingPage = () => {
  return (
      <div className='px-20'>
      <Header />
      <TopSection />
      <Section1 />
      <Section02 />
      <Section3 />
      <Section4 />

    </div>
  )
}

export default LandingPage