export const services = [
  {
    title: "Full Stack Developer",
    services: [
      {
        name: "Full Stack",
        image: "frontend.svg",
      },
    ],
  },
  {
    title: "React Developer",
    services: [
      {
        name: "React Js",
        image: "react.svg",
      },
    ],
  },
  {
    title: "ML Developer",
    services: [
      {
        name: "ML",
        image: "ml.svg",
      },
    ],
  },
  {
    title: "UI Designer",
    services: [
      {
        name: "UI",
        image: "ui.svg",
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
        name: "JavaScript",
        image: "/Skills/WebTech/JS.svg",
      },
      // {
      //   name: "TypeScript",
      //   image: "/Skills/WebTech/TS.svg",
      // },
      {
        name: "React Js",
        image: "/Skills/WebTech/REACT.svg",
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
      // {
      //   name: "MySQL",
      //   image: "/Skills/Databases/MYSQL.svg",
      // },
      // {
      //   name: "Postgresql",
      //   image: "/Skills/Databases/POSTGRES.svg",
      // },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "Data Science/ML",
    skills: [
      {
        name: "OpenCV",
        image: "/Skills/DSML/OPENCV.svg",
      },
      {
        name: "Artificial Intelligence",
        image: "/Skills/DSML/AI.svg",
      },
      {
        name: "Machine Learning",
        image: "/Skills/DSML/ML.svg",
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
      "Developed and maintained web scraping scripts using Scrapy and BeautifulSoup to efficiently extract store data from various online sources.",
      "Cleaned and organized scraped data, ensuring accuracy and completeness for use in company databases and applications.",
      "Collaborated with team members to troubleshoot and resolve issues related to web scraping processes and data extraction.",
    ],
  },
  {
    title: "Student Placement Representative (SPR)",
    company_name: "UPES",
    icon: "/Experience/UPES.png",
    iconBg: "#E3E4E9",
    date: "Sep 2023 - Present",
    points: [
      "Coordinate with Career Services to keep students informed about internship and placement opportunities.",
      "Provide timely updates on application procedures, deadlines, resources to support students in securing internships and job.",
      "Address and resolve students' placement-related queries within the batch.",
    ],
  },
];

export const projects = [
  {
    name: "PixScribe - AI Image Generator",
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
    name: "AviaGeek - Aircraft Encyclopedia",
    description:
      "Aviation enthusiasts' platform under development, built with Next.js, MongoDB, NextAuth, Node.js, and Tailwind CSS. Aviageek will offer details about various aircraft models, allow users to compare models, and feature a favorites page for saving preferred aircraft.",
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
    prod: true,
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
