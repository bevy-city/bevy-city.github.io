import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import LangButton from './LangButton';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
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
  const handleMove = () => {
    window.scrollTo({ top: 500, behavior: "smooth" }); // here it goes
  };
  function scrollToComponent() {
    const myComponent = myRef.current('#ButtonRef');
    myComponent.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20   ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
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
        <li ><a href="#about">{t('translate.bar')}</a></li>
  <li><a href="#work">{t('translate.bar1')}</a></li>
  
 
           
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
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
            <li ><a href="#about">{t('translate.bar')}</a></li>
  <li><a href="#work" >{t('translate.bar1')}</a></li>
 
               
            </ul>
           
          </div>
          <a
          href="/KuryrPage"
          className='sm:hidden absolute top-0 right-2 mt-4 flex items-center gap-2'
          
        >
  <button className="bg-secondary text-white text-xs  font-semibold py-1 px-3 rounded-full   ">
  {t('translate.3')}
  </button>
  
</a>
        </div>
        <a
         href="/KuryrPage"
          className='flex items-center gap-2 '
          
        >
  <button className="bg-secondary text-white font-semibold py-2 px-6 rounded-full hidden sm:block">
  {t('translate.3')}
  </button>
  
</a>

      </div>
      <div className="ml-4">
      <LangButton  />
      </div>
      
      
    </nav>
  );
};

export default Navbar;