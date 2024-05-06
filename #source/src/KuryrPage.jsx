import React from 'react'
import Kuryr from './Kuryr'

import KuryrComp from './KuryrComp'

import NavbarKuryr from './NavbarKuryr'
import { FooterKuryr } from './components';
import HomeKuryr from './HomeKuryr';
import Contact2 from './components/Contact2';
import KuryrGrid from './KuryrGrid';


const KuryrPage = () => {
 
  return (
    <>
    
    <NavbarKuryr />
    <HomeKuryr  />
    <Kuryr />
    <KuryrComp />
    <KuryrGrid />
    
    <Contact2/>
    <FooterKuryr/>
    </>
  )
}

export default KuryrPage