import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import "react-vertical-timeline-component/style.min.css";
import { starbucks } from "../assets";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = () => {
  const { t } = useTranslation();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#aeccb3",
        color: "#fff",
        
        
      }}
      
      contentArrowStyle={{ borderRight: "px solid  " }}
  
      iconStyle={{ backgroundColor: "#fff" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={starbucks}
           
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'></h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
         
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2 '>
       
          <li
           
            className='text-white-100 text-[20px] pl-1 tracking-wider list-none '
         
          >
        {t('translate.vize')} 
          </li>
        
      </ul>
    </VerticalTimelineElement>
  );
};


const ExperienceCard2 = () => {
  const { t } = useTranslation();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#aeccb3",
        color: "#fff",
        
        
      }}
      contentArrowStyle={{ borderRight: "px solid  " }}
  
      iconStyle={{ backgroundColor: "#fff" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={starbucks}
           
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'></h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
         
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2 '>
       
          <li
           
            className='text-white-100 text-[20px] pl-1 tracking-wider list-none '
         
          >
         {t('translate.vize1')} 
          </li>
        
      </ul>
    </VerticalTimelineElement>
  );
};


const ExperienceCard3 = () => {
  const { t } = useTranslation();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#aeccb3",
        color: "#fff",
        
        
      }}
      contentArrowStyle={{ borderRight: "px solid  " }}
  
      iconStyle={{ backgroundColor: "#fff" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={starbucks}
           
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'></h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
         
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2 '>
       
          <li
           
            className='text-white-100 text-[20px] pl-1 tracking-wider list-none '
         
          >
        {t('translate.vize2')}  
          </li>
        
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperienceCard4 = () => {
  const { t } = useTranslation();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#aeccb3",
        color: "#fff",
        
        
      }}
      contentArrowStyle={{ borderRight: "px solid  " }}
  
      iconStyle={{ backgroundColor: "#fff" }}
      icon={
        <div className='flex justify-center items-center w-full h-full '>
          <img
            src={starbucks}
           
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'></h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
         
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2 '>
       
          <li
           
            className='text-white-100 text-[20px] pl-1 tracking-wider list-none '
         
          >
        {t('translate.vize3')} 
          </li>
        
      </ul>
    </VerticalTimelineElement>
  );
};






const Experience = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        
      <h2 className={`${styles.sectionHeadText} text-center mt-9 md:mt-0 md:mb-9 !important`}>
      {t('translate.about')}
</h2>
      </motion.div>

      <div className='mt-20 flex flex-col list-none ' >
        <VerticalTimeline>
        
            <ExperienceCard
              
              
            />

<ExperienceCard2
              
              
              />
              <ExperienceCard3
              
              
              />
              <ExperienceCard4
              
              
              />
        
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");