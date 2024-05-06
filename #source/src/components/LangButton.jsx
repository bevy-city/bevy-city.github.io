import React from 'react'
import Flag from 'react-flagkit'
import i18n from '../i18next'
import { useTranslation } from 'react-i18next';

const LangButton = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };


  return (
    <div>
    <span
  class="inline-flex divide-x overflow-hidden rounded-full border bg-grey shadow-sm"
>
  <button
    class="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
    title="Česky"
    onClick={() => changeLanguage('cz')} 
  >
    <Flag country='CZ' className='h-5 w-5' />
  </button>

  <button
    class="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
    title="English"
    onClick={() => changeLanguage('en')}
  >
    <Flag country='GB'  className='h-5 w-5'    />
   
    
  </button>
  
</span>

    </div>
   
    
  )
}

export default LangButton