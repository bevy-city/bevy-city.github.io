import React from 'react'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
const KuryrGrid = () => {
    const { t } = useTranslation();
  return (
    <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.9 }}>
    <div>
        
        <section className='hidden sm:block'>  
  <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 ">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="bg-secondary p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-2xl font-bold text-white md:text-3xl">
          {t('translate.kuryrgrid')}
          </h2>

          <p class="hidden text-white/90 sm:mt-4 sm:block">
          {t('translate.kuryrgrid1')}
          </p>

          <div class="mt-4 md:mt-8">
            
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2 ">
        <img
          alt="Student"
          src="https://i.ibb.co/fXhbyqz/DSC-5367.jpg"
          classname="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt="Student"
          src="https://i.ibb.co/b18WPv6/DSC-5306.jpg"
          class="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
  
</section>


    </div>
    </motion.div>
  )
}

export default KuryrGrid