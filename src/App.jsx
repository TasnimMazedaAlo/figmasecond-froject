

import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import WhatIsAnIdp from './components/WhatIsAnIdp/WhatIsAnIdp'
import Planning from './components/Planning/Planning'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import CountryRequirements from './components/CountryRequirements/CountryRequirements'
import Customers from './components/Customers/Customers'
import Pricing from './components/Pricing/Pricing'
import HowDoesItWork from './components/HowDoesItWork/HowDoesItWork'
import Faqs from './components/Faqs/Faqs'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
   
      <Navbar></Navbar>
      <Hero></Hero>
      <WhatIsAnIdp></WhatIsAnIdp>
      <Planning></Planning>
      <WhyChooseUs></WhyChooseUs>
      <CountryRequirements></CountryRequirements>
      <Customers></Customers>
      <Pricing></Pricing>
      <HowDoesItWork></HowDoesItWork>
      <Faqs></Faqs>
      <Footer></Footer>
      <Outlet></Outlet>


    </>
  )
}

export default App

