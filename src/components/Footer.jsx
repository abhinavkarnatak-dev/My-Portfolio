import React from 'react'
import FooterCard from './FooterCard';

const Footer = () => {
    return (
        <section id="footer" className="h-88 flex justify-center bg-black">
            <div className="mt-10">
                <FooterCard/>
            </div>
        </section>
    );
};

export default Footer;