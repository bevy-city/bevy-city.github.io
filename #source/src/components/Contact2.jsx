import React, { useState } from 'react';
import DropButton from '../DropButton';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
const Contact2 = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const { t } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    formData.append('SelectedOption', selectedOption); // Add selected option to form data
    fetch(form.action, {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        alert('Děkujeme za vaši zprávu ! V nejbližší době vás budeme kontaktovat ');
        form.reset();
      })
      .catch(error => {
        alert('There was an error submitting the form. Please try again later.');
        console.error(error);
      });
  };

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
  };






  return (
    <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
 transition={{ duration: 0.5 }}>
    <div className="py-5 md:py-7 lg:py-14" id='contact'>
    <div className="container mx-auto px-5 xl:max-w-screen-xl">
      <h1 className="text-3xl font-bold text-center text-secondary md:text-4xl">{t('translate.kontakt')} </h1>
      <p className="max-w-lg mx-auto mt-2.5 text-center text-black md:text-lg">{t('translate.kontaktdesc2')}</p>
      <div className="mt-5 md:mt-7 lg:mt-14">
        <div className="flex justify-center">
          <div className="space-y-5 sm:max-w-screen-sm sm:w-full sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-5 md:gap-7">
            <div className="flex items-center sm:flex-col sm:text-center">
              <div className="flex items-center justify-center flex-shrink-0 w-11 h-11 mr-5 rounded  sm:mr-0">
                
              </div>
              
            </div>
           
            <div className="flex items-center sm:flex-col sm:text-center">
              <div className="flex items-center justify-center flex-shrink-0 w-11 h-11 mr-5 rounded sm:mr-0">
                
              </div>
            
            </div>
          </div>
        </div>
        <form className="w-full max-w-[600px] mx-auto space-y-5 mt-5 p-5 rounded-lg shadow-md border-2  md:mt-7" action='https://script.google.com/macros/s/AKfycbx8wCGRGy_YjT5MA0DhpfFSnFKqZRjiK4Ldgntoh8pHEXAoU1M5UsbXjqN2LuCkLbv8zw/exec' method='post' onSubmit={handleSubmit}>
          <label className="block">
            <p className='text-black'>{t('translate.kontaktjmeno')}</p>
            <div className="relative flex items-center mt-2.5 group text- focus-within:text-black">
              <svg className="absolute left-5 w-6 h-6 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              <input className="w-full pl-16 pr-5 py-3 rounded border border-green-600 outline-none focus:ring-1 focus:ring-secondary focus:border-green-600 focus:text-green-600" type="text" placeholder="Jméno" required name='Name' />
            </div>
          </label>
          <label className="block">
            <p className='text-black'>{t('translate.holdermail')}</p>
            <div className="relative flex items-center mt-2.5 group text-green-600 focus-within:text-secondary">
              <svg className="absolute left-5 w-6 h-6 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 16 16">
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
              </svg>
              <input className="w-full pl-16 pr-5 py-3 rounded border border-green-600 outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 focus:text-green-600" type="email" placeholder="email@example.com" required name='Email'/>
            </div>
          </label>
          <label className="block">
            <p className='text-black'>{t('translate.cislo1')}</p>
            <div className="relative flex items-center mt-2.5 group text-secondary focus-within:text-green-600">
              <svg className="absolute left-5 w-6 h-6 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              <input className="w-full pl-16 pr-5 py-3 rounded border border-green-600 outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 focus:text-black" type="text" placeholder="+420 777 777 777" required name='Phone' />
            </div>
          </label>
          
          <input placeholder="Selected Option" name="Recommendation" type="hidden" value={selectedOption}  />
          <DropButton onSelect={handleOptionSelect}  />
          <button className="w-full px-5 py-3 rounded font-medium bg-secondary text-white focus:outline-none" type="submit" value="Submit">Odeslat</button>
        </form>
      </div>
    </div>
  </div>
  </motion.div>
  )
}

export default Contact2

