import { useTranslation } from 'react-i18next';

import { motion } from "framer-motion";
export default function Example() {

  const { t } = useTranslation();
  return (
    <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.9 }}>
    <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-60 rounded-lg "id="kuryrpozadavky"  >
    <h1 class="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">{t('translate.pozadavky')}</h1>
    <div class="border-l-2 mt-10">
   
      <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-secondary text-white rounded-full mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
     
        <div class="w-5 h-5 bg-secondary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

     
        <div class="w-10 h-1 bg-secondary absolute -left-10 z-0"></div>

    
        <div class="flex-auto">
          
          <h1 class="text-l font-bold text-center sm:hidden mb-4">{t('translate.pozadavky1')}</h1>
          <h2 class="text-l font-bold text-center hidden sm:block">{t('translate.pozadavky1')}</h2>
          
          
        
        </div>
      
      </div>

    
      <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-secondary text-white rounded-full mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
     
        <div class="w-5 h-5 bg-secondary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

      
        <div class="w-10 h-1 bg-secondary absolute -left-10 z-0"></div>

      
        <div class="flex-auto">
          
        <h1 class="text-l font-bold text-center sm:hidden mb-4">{t('translate.pozadavky2')}</h1>
          <h2 class="text-l font-bold text-center hidden sm:block">{t('translate.pozadavky2')}</h2>
     
        </div>
       
      </div>

    
      <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-secondary text-white rounded-full mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
      
        <div class="w-5 h-5 bg-secondary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

     
        <div class="w-10 h-1 bg-secondary absolute -left-10 z-0"></div>

     
        <div class="flex-auto">
          
        <h1 class="text-l font-bold text-center sm:hidden mb-4">{t('translate.pozadavky3')}</h1>
          <h2 class="text-l font-bold text-center hidden sm:block">{t('translate.pozadavky3')}</h2>
          
        </div>
        
      </div>

   
      <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-secondary text-white rounded-full mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
       
        <div class="w-5 h-5 bg-secondary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

     
        <div class="w-10 h-1 bg-secondary absolute -left-10 z-0"></div>

      
        <div class="flex-auto">
    
        <h1 class="text-l font-bold text-center sm:hidden mb-4">{t('translate.pozadavky4')}</h1>
          <h2 class="text-l font-bold text-center hidden sm:block">{t('translate.pozadavky4')}</h2>
          
        </div>
        
      </div>

    
        
      
    </div>
  <section class="mt-4 text-center"></section>
  </div>
  </motion.div>

  
  )
}
