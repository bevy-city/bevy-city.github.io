import React from 'react'
import { useTranslation } from 'react-i18next';
const HomeKuryr = () => {


  const { t } = useTranslation();
  return (
    <div id='#hero'>
    <section
  class="relative bg-[url(https://i.ibb.co/6BF9VfZ/Particles-0-1s-1817px.png)] bg-cover bg-center bg-no-repeat sm:pt-10"
>
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center sm:  "
  >
    <div class="mx-auto max-w-xxl text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl sm: pt-20">
        
        <strong class="font-extrabold text-secondary sm:block">
        {t('translate.kuryr')}
        </strong>
      </h1>

      <p class="mt-4 sm:text-xl sm:leading-relaxed">
      {t('translate.kuryr2')}
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded-full bg-secondary px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange focus:outline-none focus:ring sm:w-auto "
          href="#contact"
        >
          {t('translate.kuryr1')}
        </a>
      
       
      </div>
     
    </div>
  </div>
</section>




    </div>
  )
}

export default HomeKuryr