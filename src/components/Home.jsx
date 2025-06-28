import React from "react";
import myImage from "../assets/myPhoto.jpg";
import CV from "../assets/akResume.pdf";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TypingEffect from "react-typing-effect";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center bg-black text-white px-36 z-10"
    >
      <div className="flex flex-col md:flex-row items-center gap-14 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="rounded-full border-2 md:border-[3px] lg:border-[3px] border-white overflow-hidden w-[200px] md:min-w-48 lg:min-w-64 mt-[90px] md:-mt-10 lg:mt-0 md:-ml-10 drop-shadow-[0_0_10px_rgba(133,76,230,1)] lg:drop-shadow-[0_0_15px_rgba(133,76,230,1)]"
        >
          <img
            src={myImage}
            alt="Abhinav"
            className="rounded-full shadow-lg cursor-pointer hover:scale-110 transition ease-in-out"
          />
        </motion.div>
        <div className="text-center md:text-left z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl text-nowrap lg:text-6xl font-bold lg:mt-10"
          >
            Hi, It's <span className="text-white">Abhinav</span>
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl lg:text-4xl font-bold my-2"
          >
            I'm a{" "}
            <span className="md:hidden lg:hidden">
              <br />
            </span>
            <TypingEffect
              className="text-Purple1"
              text={["Full Stack Developer", "Problem Solver", "Tech Enthusiast"]}
              speed={100}
              eraseSpeed={100}
              typingDelay={100}
              eraseDelay={1500}
              cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            />
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg lg:text-lg mt-8"
          >
            I specialize in building responsive, scalable, and user-centric web and mobile applications using technologies like React, Next.js, Tailwind CSS, Node.js, PostgreSQL, and MongoDB. From SaaS platforms to accessibility-focused tools, I enjoy crafting full-stack solutions that solve real problems and create meaningful digital experiences.
          </motion.p>
          <div className="flex justify-center md:justify-start mt-8 space-x-6">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="https://github.com/abhinavkarnatak-dev"
              className="text-Purple1 border-2 border-Purple1 hover:border-white p-2 rounded-full hover:bg-Purple1 hover:text-black transition ease-in-out hover:drop-shadow-[0_0_8px_rgba(133,76,231,1)]"
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href="https://www.linkedin.com/in/abhinav-karnatak-9a7667206/"
              className="text-Purple1 border-2 border-Purple1 hover:border-white p-2 rounded-full hover:bg-Purple1 hover:text-black transition ease-in-out hover:drop-shadow-[0_0_8px_rgba(133,76,230,1)]"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              href="https://x.com/AbhinavKar941"
              className="text-Purple1 border-2 border-Purple1 hover:border-white p-2 rounded-full hover:bg-Purple1 hover:text-black transition ease-in-out hover:drop-shadow-[0_0_8px_rgba(133,76,230,1)]"
            >
              <i className="fab fa-twitter"></i>
            </motion.a>{" "}
          </div>
          <motion.a
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 md:mt-12 lg:mt-14 px-4 lg:px-8 py-2 lg:py-3 bg-Purple1 text-white font-bold text-sm lg:text-lg border-2 border-Purple1 rounded-full hover:drop-shadow-[0_0_8px_rgba(133,76,230,1)] hover:scale-95 hover:border-white transition ease-in-out mb-10 lg:mb-0"
          >
            Resume <OpenInNewIcon fontSize="small" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Home;
