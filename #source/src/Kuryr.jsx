import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, CreditCardIcon, TruckIcon, InformationCircleIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";


export default function Example() {
  const { t } = useTranslation();
  return (
    <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.8 }}>
    <div className="bg-white py-30 sm:py-32 mt-25 pt-20" id='kuryrpage'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10">
        <div className="mx-auto max-w-2xl lg:text-center ">
     
          <h2 className="text-base font-semibold leading-7 text-secondary pt-5" >{t('translate.nabidka')} </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t('translate.nabidka2')}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          {t('translate.nabidka3')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
           
              <div  className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <CreditCardIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {t('translate.nabizime')}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600"> {t('translate.nabizime7')}</dd>
              </div>
              <div  className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <TruckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {t('translate.nabizime1')}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600"> {t('translate.nabizime4')}</dd>
              </div>
              <div  className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <InformationCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {t('translate.nabizime2')}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600"> {t('translate.nabizime5')}</dd>
              </div>
              <div  className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <DocumentCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {t('translate.nabizime3')}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600"> {t('translate.nabizime6')}</dd>
              </div>
           
          </dl>
        </div>
      </div>
      
      
    </div>
    </motion.div>
  )
}
