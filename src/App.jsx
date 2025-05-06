/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import CriminalLaw from './Pages/Services/CriminalLaw'
import { AnimatePresence } from "framer-motion";
import AnimatedPage from './Components/AnimatedPage'
import './App.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { getAssetPath } from './utils/getAssetPath'


function App() {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className='w-full mx-0 '>
        <Navbar />
        <Hero />
      </header>
    <div className="flex-grow w-full">
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home showOverlay={true}  />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <About showOverlay={true} />
            </AnimatedPage>
          }
        />
        <Route
          path="/services"
          element={
            <AnimatedPage>
              <Services />
            </AnimatedPage>
          }
        />
        <Route
          path="/services/criminal-law"
          element={
            <AnimatedPage>
              <CriminalLaw  />
            </AnimatedPage>
          }
        />
        <Route
          path="/services/traffic-law"
          element={
            <AnimatedPage>
              <div>Traffic Law Page</div> 
            </AnimatedPage>
          }
        />
        <Route
          path="/services/property-law"
          element={
            <AnimatedPage>
              <div>Property Law Page</div> 
            </AnimatedPage>
          }
        />
        <Route
          path="/services/civil-law"
          element={
            <AnimatedPage>
              <div>Civil Law Page</div>
            </AnimatedPage>
          }
        />
              <Route
                path="/contact"
                element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
    </div>
    
      <Footer />
    <Analytics /> 
    <SpeedInsights />
    </div>  
  );
}

export default App
