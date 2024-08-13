import { motion } from 'framer-motion';
import { textVariant2 } from '../utils/motion';

export const TitleText = ({ title, textStyle }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[85px] font-bold lg:text-[32px] text-[32px] text-white ${textStyle}`}
  >
    {title}
  </motion.h2>
);