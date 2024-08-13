import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../data/constants';
import { textVariant } from '../utils/motion';
import { TitleText } from './CustomTexts';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    contentStyle={{ background: '#854CE6', color: "#fff"}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background:experience.iconBg }}
    icon={<div className='flex justify-center items-center w-full h-full'>
      <img src={experience.icon} alt={experience.company_name} className='w-[70%] h-[70%] object-contain' />
    </div>}
    >
      
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary-white text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point,index) => (
          <li key={index} className='text-white-100 text-[15px] pl-1 tracking-wider'>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <section className={`relative z-10`}>
      <motion.div
      variants={textVariant()}
      className='z-5'
      id="experience">
      <TitleText title={<> My Work Experience<br className='md:block hidden'/></>} textStyle="text-center"/>
      </motion.div>
      <div className='mt-14 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience,index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Experience