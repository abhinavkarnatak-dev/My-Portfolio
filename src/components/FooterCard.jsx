import React from 'react'
import { motion } from 'framer-motion';
import { socials } from '../data/constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const FooterCard = () => {
    return (
        <div className="w-screen">
            <div className= "h-[2px] bg-white opacity-40"></div>
            <div className="flex items-center justify-center flex-wrap mt-[20px] mb-[20px]">
            <p className="font-normal text-[14px] text-white opacity-50">
                Copyright © 2024 Abhinav Karnatak
            </p>
            </div>
        </div>
    )
}

export default FooterCard;