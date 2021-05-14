import React from 'react'
import './Home.css'
import Discover from '../Components/Discover/Discover'
import Steps from '../Components/Steps/Steps'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Steps />
      <Discover />
      <Footer />

    </div>
  )
}

export default Home
