import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { styles } from "../src/styles";
import { navLinks2 } from "../src/constants/index";
import { logo, menu, close, closekuryr, menuicon } from "../src/assets";
import LangButton from '../src/components/LangButton';
import { useTranslation } from 'react-i18next';

const NavbarKuryr = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const { t } = useTranslation();

 

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20   ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/KuryrPage'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-48 h-32 object-contain  inline-block lg:hidden' />
       <img src={logo} alt='logo' className='w-15 h-15 object-contain hidden lg:inline-block' />

         
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
        <li ><a href="#kuryrpage">{t('translate.footerkuryr')}</a></li>
  <li><a href="#kuryrpozadavky">{t('translate.footerkuryr1')}</a></li>
  <li><a href="#contact">{t('translate.bar2')}</a></li>
 
           
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? closekuryr : menuicon}
            alt='menu'
            className='w-[24px] h-[24px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
           <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
           <li ><a href="#kuryrpage">{t('translate.footerkuryr')}</a></li>
  <li><a href="#kuryrpozadavky">{t('translate.footerkuryr1')}</a></li>
  <li><a href="#contact">{t('translate.bar2')}</a></li>
            </ul>
           
          </div>
          <a
         href="/"
          className='sm:hidden absolute top-0 right-2 mt-4 flex items-center gap-2'
          
        >
  <button className="bg-secondary text-white text-xs  font-semibold py-1 px-3 rounded-full   ">
  Bevy
  </button>
  
</a>
        </div>
        <a
          href="/"
          className='flex items-center gap-2 '
          
          
        >
  <button className="bg-secondary text-white font-semibold py-2 px-6 rounded-full hidden sm:block">
  Bevy
  </button>
  
</a>

      </div>
      <div className="ml-4">
      <LangButton  />
      </div>
      
      
    </nav>
  );
};

export default NavbarKuryr;