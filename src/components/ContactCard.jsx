import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import { slideIn } from '../utils/motion';

Modal.setAppElement('#root');

const ContactCard = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setModalMessage('All fields are required. Please fill out the form completely.');
      setModalIsOpen(true);
      return;
    }

    setLoading(true);

    emailjs.send(
      'service_pjy6m8i',
      'template_qraisgw', {
      from_name: form.name,
      to_name: "Abhinav Karnatak",
      from_email: form.email,
      to_email: 'abhinavkarnatak2004@gmail.com',
      message: form.message,
    },
      'TcFzlXjA8i3L3W9QV')
      .then(() => {
        setLoading(false);
        setModalMessage('Thank You! I will get back to you as soon as possible.');
        setModalIsOpen(true);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        setLoading(false);
        console.log(error.message);
        setModalMessage('Something went wrong!');
        setModalIsOpen(true);
      });
  };

  return (
    <section className='mt-10 relative z-10'>
      <div className='2xl:mt-12 py-7 flex justify-center xl:flex-col-reverse 2xl:flex-row flex-col-reverse items-center gap-2 overflow-hidden w-screen' id="contact">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='bg-zinc-800 p-8 hover:shadow-[0_0_25px_3px_rgba(133,76,230,1)] hover:border-white hover:border-2 rounded-2xl w-[90%] lg:w-[60%] 2xl:w-[40%] md:h-full h-[40rem] flex flex-col justify-between'>
          <div>
            <h3 className='text-white font-black text-center md:text-[45px] sm:text-[50px] xs:text-[40px] text-[30px]'>Contact.</h3>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col md:gap-8 gap-3'>
            <label className='flex flex-col'>
              <span className='text-white font-bold text-[15px] md:mb-4 mb-1'>Name <span className='text-red-500'>*</span></span>
              <input type="text" name='name' value={form.name} onChange={handleChange} placeholder="Enter your name" className='py-2 md:py-4 px-6  bg-zinc-600 focus:bg-white/10 placeholder:text-secondary text-white rounded-lg outline-none border-none text-[15px]' />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-bold text-[15px] md:mb-4 mb-1'>Email <span className='text-red-500'>*</span></span>
              <input type="email" name='email' value={form.email} onChange={handleChange} placeholder="Enter your email" className='py-2 md:py-4 px-6  bg-zinc-600 focus:bg-white/10 placeholder:text-secondary text-white rounded-lg outline-none border-none text-[15px]' />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-bold text-[15px] md:mb-4 mb-1'>Message <span className='text-red-500'>*</span></span>
              <textarea rows="7" name='message' value={form.message} onChange={handleChange} placeholder="Enter your message" className='py-2 md:py-4 px-6  bg-zinc-600 focus:bg-white/10 placeholder:text-secondary text-white rounded-lg outline-none border-none text-[15px]' />
            </label>

            <button type='submit' className='border-[#854CE6] hover:border-white border-2 py-3 px-8 outline-none w-fit text-white font-bold text-[16px] shadow-md shadow-primary rounded-xl hover:bg-opacity-5 hover:shadow-[0_0_25px_3px_rgba(133,76,230,1)] hover:text-white transition ease-in-out duration-200'>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className='fixed inset-0 flex items-center justify-center z-50'
        overlayClassName='fixed inset-0 bg-black bg-opacity-70 z-40'
      >
        <div className='border-2 border-[#854CE6] bg-zinc-700 text-white p-6 rounded-lg w-[90%] max-w-md z-50'>
          <h2 className='text-xl font-semibold mb-4'>{modalMessage}</h2>
          <button
            onClick={() => setModalIsOpen(false)}
            className='border-2 border-[#854CE6] hover:border-white font-bold hover:shadow-[0_0_50px_3px_rgba(133,76,230,1)] bg-[#854CE6] text-white py-2 px-4 rounded-lg'
          >
            Ok
          </button>
        </div>
      </Modal>
    </section>
  );
}

export default ContactCard;