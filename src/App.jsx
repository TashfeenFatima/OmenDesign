import { useState } from 'react'
import React from "react";

import HeroSection from './components/Hero';
import Amenities from './components/Amenities';
import MasterRoom from './components/MasterRoom';
import XYZ from './components/XYZ';
//import './App.css'
import './index.css'

  

function App() {
  return (
    <>
   
     <HeroSection/>
      <Amenities/>
      <MasterRoom/>
      <XYZ/>
    </>
  )
}

export default App
