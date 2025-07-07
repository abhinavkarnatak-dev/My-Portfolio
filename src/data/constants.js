export const services = [
  {
    title: "Full-Stack Development",
    services: [
      {
        name: "Full Stack",
        image: "frontend.svg",
      },
    ],
  },
  {
    title: "Web Applications",
    services: [
      {
        name: "React Js",
        image: "react.svg",
      },
    ],
  },
  {
    title: "UI/UX Design",
    services: [
      {
        name: "UI",
        image: "ui.svg",
      },
    ],
  },
  {
    title: "Machine Learning",
    services: [
      {
        name: "ML",
        image: "ml.svg",
      },
    ],
  },
];

export const skills = [
  {
    title: "Languages",
    skills: [
      {
        name: "C++",
        image: "/Skills/Languages/CPP.svg",
      },
      {
        name: "JavaScript",
        image: "/Skills/Languages/JS.svg",
      },
      {
        name: "TypeScript",
        image: "/Skills/Languages/TS.svg",
      },
      {
        name: "Python",
        image: "/Skills/Languages/PYTHON.svg",
      },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      {
        name: "HTML",
        image: "/Skills/WebTech/HTML.svg",
      },
      {
        name: "CSS",
        image: "/Skills/WebTech/CSS.svg",
      },
      {
        name: "React Js",
        image: "/Skills/WebTech/REACT.svg",
      },
      {
        name: "React Native",
        image: "/Skills/WebTech/REACTNATIVE.png",
      },
      {
        name: "Tailwind CSS",
        image: "/Skills/WebTech/TAILWIND.svg",
      },
      {
        name: "Bootstrap",
        image: "/Skills/WebTech/BOOTSTRAP.svg",
      },
      {
        name: "Next Js",
        image: "/Skills/WebTech/NEXT.png",
      },
      {
        name: "Node Js",
        image: "/Skills/WebTech/NODE.svg",
      },
      {
        name: "Express",
        image: "/Skills/WebTech/EXPRESS.svg",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        image: "/Skills/Databases/MONGODB.svg",
      },
      {
        name: "Postgresql",
        image: "/Skills/Databases/POSTGRES.svg",
      },
      {
        name: "Prisma",
        image: "/Skills/Databases/PRISMA.svg",
      },
    ],
  },
  {
    title: "Computer Vision",
    skills: [
      {
        name: "OpenCV",
        image: "/Skills/DSML/OPENCV.svg",
      },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      {
        name: "Figma",
        image: "/Skills/Tools/FIGMA.svg",
      },
      {
        name: "Framer Motion",
        image: "/Skills/Tools/FRAMER.svg",
      },
      {
        name: "Git",
        image: "/Skills/Tools/GIT.svg",
      },
      {
        name: "GitHub",
        image: "/Skills/Tools/GITHUB.svg",
      },
      {
        name: "VS Code",
        image: "/Skills/Tools/VSCODE.svg",
      },
    ],
  },
  {
    title: "Deployment",
    skills: [
      {
        name: "Netlify",
        image: "/Skills/Deployment/NETLIFY.svg",
      },
      {
        name: "Vercel",
        image: "/Skills/Deployment/VERCEL.svg",
      },
    ],
  },
];

export const experiences = [
  {
    title: "Data Engineer Intern",
    company_name: "HERE Technologies",
    icon: "/Experience/HERE.jpg",
    iconBg: "#383A46",
    date: "Jun 2024 - Jul 2024",
    points: [
      "Built a custom web crawler using Scrapy to collect store locations from various retail websites, handling diverse HTML structures.",
      "Automated data collection through scheduled Scrapy spiders, reducing manual effort and saving around 30% of operational time.",
      "Documented the workflow and codebase to make it easier to maintain and update in the future.",
    ],
  },
  {
    title: "Student Placement Representative (SPR)",
    company_name: "UPES",
    icon: "/Experience/UPES.png",
    iconBg: "#E3E4E9",
    date: "Sep 2023 - May 2025",
    points: [
      "Coordinated with Career Services to keep students informed about internship and placement opportunities.",
      "Provided timely updates on application procedures, deadlines, resources to support students in securing internships and job.",
      "Addressed and resolved students' placement-related queries within the batch.",
    ],
  },
];

export const projects = [
  {
    name: "Revuea – Empowering Honest Feedback with Anonymity",
    description:
      "A full stack web app that helps teams and communities gather honest, anonymous feedback without fear of judgment. Built with React, Node.js, Tailwind CSS, PostgreSQL, and Prisma — it offers secure form creation, real-time analytics, CSV exports, and AI-powered summaries.",
    tags: [
      {
        name: "React.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "PostgreSQL (Prisma)",
      },
      {
        name: "Framer Motion",
      },
    ],
    image: "/Projects/revuea.png",
    source_code_link: "https://github.com/abhinavkarnatak-dev/Revuea",
    url_link: "https://revuea.vercel.app/",
    // prod : true
  },
  {
    name: "PixScribe - SaaS Text-to-Image Generator Web App",
    description:
      "A SaaS-based text-to-image generator built with MERN stack, Tailwind CSS, and Framer Motion. PixScribe allows users to create custom images using a credit-based system, with options to purchase additional credits via Razorpay, and features a responsive design with dynamic credit tracking.",
    tags: [
      {
        name: "M E R N",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Framer Motion",
      },
      {
        name: "Razorpay",
      },
    ],
    image: "/Projects/pixscribe.png",
    source_code_link: "https://github.com/abhinavkarnatak-dev/PixScribe",
    url_link: "https://pixscribeai.vercel.app/",
    // prod : true
  },
  {
    name: "DermaGlow AI – Personalized Skincare Powered by AI",
    description:
      "A responsive skincare recommendation platform built using Next.js, Tailwind CSS, and Framer Motion. It uses a smart questionnaire to collect user data and generates personalized skincare routines and product suggestions using AI, with smooth transitions and a clean UI for enhanced user experience.",
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Framer Motion",
      },
      {
        name: "Gemini API",
      },
    ],
    image: "/Projects/dermaglowai.jpg",
    source_code_link: "https://github.com/abhinavkarnatak-dev/DermaGlow-AI",
    url_link: "https://dermaglowai.vercel.app/",
    // prod : true
  },
  {
    name: "AdaptSense: Empowering Visually & Hearing Impaired with AI",
    description:
      "Built with React Native (Expo) and Tailwind CSS, AdaptSense is a mobile app that enhances accessibility by converting text, braille, audio, and images into four output formats: audio, text, braille, and sign language GIFs. It integrates Gemini APIs for 13 unique input-output combinations, providing a seamless experience for auditory and visually impaired users.",
    tags: [
      {
        name: "React Native (Expo)",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Fast API",
      },
      {
        name: "Gemini API",
      },
    ],
    image: "/Projects/adaptsense.jpg",
    source_code_link: "https://github.com/abhinavkarnatak-dev/AdaptSense",
    // url_link: "",
    // prod: true,
  },
  {
    name: "AviaGeek - Aircraft Encyclopedia",
    description:
      'A platform for avgeeks, built with Next.js, MongoDB, NextAuth, Node.js, Tailwind CSS, and Cloudinary. AviaGeek offer details about various aircraft models, allowing users to compare models, and a "favorites" page to keep track of their favorite aircraft.',
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "NextAuth",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Node.js",
      },
    ],
    image: "/Projects/aviageek.png",
    source_code_link: "https://github.com/abhinavkarnatak-dev/AviaGeek",
    url_link: "https://aviageek.vercel.app/",
    // prod: true,
  },
  {
    name: "SudoWiz: Quick Sudoku Solver",
    description:
      "SudoWiz is a Sudoku solver built with React and Tailwind CSS. It allows users to input numbers into a grid, solve puzzles automatically, and reset the game with ease. The app offers a simple, interactive interface for an enjoyable puzzle-solving experience.",
    tags: [
      {
        name: "React Js",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Backtracking",
      },
    ],
    image: "/Projects/sudowiz.png",
    source_code_link: "https://github.com/abhinavkarnatak-dev/SudoWiz",
    url_link: "https://sudowiz.vercel.app/",
    // prod : true
  },
  {
    name: "NN-Based Image Detection & Classification",
    description:
      "This project features a real-time surveillance system built with YOLO v8 in Python. It detects and tracks objects in video feeds, offering an efficient, reliable, and scalable solution for security, monitoring, surveillance, and automated analysis applications.",
    tags: [
      {
        name: "Python",
      },
      {
        name: "OpenCV",
      },
      {
        name: "YOLO v8",
      },
      {
        name: "Tkinter",
      },
    ],
    image: "/Projects/nnbased.png",
    source_code_link:
      "https://github.com/mukul-anand-bhatt/NN-based-Detection-and-Classification-of-Streaming-Images",
    // url_link: "",
    // prod : true
  },
];
