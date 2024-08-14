import React from 'react'
import ContactCard from './ContactCard';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex justify-center bg-black">
            <div className="mt-10">
                <ContactCard/>
            </div>
        </section>
    );
};

export default Contact;