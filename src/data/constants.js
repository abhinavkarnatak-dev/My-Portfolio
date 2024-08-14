export const services = [
    {
      title: "Full Stack Developer",
      services: [
        {
          name: "Full Stack",
          image: "frontend.svg",
        }
      ],
    },
    {
      title: "React Developer",
      services: [
        {
          name: "React Js",
          image: "react.svg",
        }
      ],
    },
    {
      title: "ML Developer",
      services: [
        {
          name: "ML",
          image: "ml.svg",
        }
      ],
    },
    {
      title: "UI Designer",
      services: [
        {
          name: "UI",
          image: "ui.svg",
        }
      ],
    },
  ];

export const skills = [
  {
    title: "Languages",
    skills: [
      {
        name: "HTML",
        image:
          "/Skills/Languages/HTML.svg",
      },
      {
        name: "CSS",
        image:
          "/Skills/Languages/CSS.svg",
      },
      {
        name: "JavaScript",
        image:
          "/Skills/Languages/JS.svg",
      },
      {
        name: "TypeScript",
        image: 
          "/Skills/Languages/TS.svg",
      },
      {
        name: "C++",
        image:
          "/Skills/Languages/CPP.svg",
      },
      {
        name: "Python",
        image:
          "/Skills/Languages/PYTHON.svg",
      },
    ],
  },
  {
    title: "Front End",
    skills: [
      {
        name: "React Js",
        image: 
          "/Skills/Front End/REACT.svg",
      },
      {
        name: "Tailwind CSS",
        image:
          "/Skills/Front End/TAILWIND.svg",
      },
      {
        name: "Bootstrap",
        image: 
          "/Skills/Front End/BOOTSTRAP.svg",
      },
      {
        name: "jQuery",
        image:
          "/Skills/Front End/JQUERY.svg",
      },
      {
        name: "Next Js",
        image:
          "/Skills/Front End/NEXT.png",
      },
    ],
  },
  {
    title: "Back End",
    skills: [
      {
        name: "Node Js",
        image:
          "/Skills/Back End/NODE.svg",
      },
      {
        name: "Express",
        image:
          "/Skills/Back End/EXPRESS.svg",
      },
      {
        name: "Flask",
        image:
          "/Skills/Back End/FLASK.svg",
      },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MongoDB",
          image:
            "/Skills/Databases/MONGODB.svg",
        },
        {
          name: "MySQL",
          image:
            "/Skills/Databases/MYSQL.svg",
        },
        {
          name: "Postgresql",
          image: "/Skills/Databases/POSTGRES.svg",
        },
        {
          name: "Firebase",
          image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        },
      ]
    },
    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          image:
            "/Skills/Tools/GIT.svg",
        },
        {
          name: "GitHub",
          image:
            "/Skills/Tools/GITHUB.svg",
        },
        {
          name: "VS Code",
          image:
          "/Skills/Tools/VSCODE.svg",
        },
      ],
    },
    {
      title: "Deployment",
      skills: [
        {
          name: "Netlify",
          image:
            "/Skills/Deployment/NETLIFY.svg",
        },
        {
          name: "Vercel",
          image:
            "/Skills/Deployment/VERCEL.svg",
        },
      ],
    },
];

export const experiences = [
  {
    title: "Data Engineer Intern",
    company_name: "HERE Technologies",
    icon: '/Experience/HERE.jpg',
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
    icon: '/Experience/UPES.png',
    iconBg: "#E3E4E9",
    date: "Sep 2023 - Present",
    points: [
      "Coordinate with Career Services to keep students informed about internship and placement opportunities.",
      "Provide timely updates on application procedures, deadlines, resources to support students in securing internships and job.",
      "Address and resolve students' placement-related queries within the batch.",
    ],
  }
];

export const projects = [
  {
    name: "SudoWiz: Interactive Sudoku Solver",
    description:
      "A web-based Sudoku solver built with React and Tailwind CSS. SudoWiz provides an interactive Sudoku grid where users can input numbers, solve the Sudoku puzzle, and reset the grid.",
    tags: [
      {
        name: "React Js",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
    ],
    image: '/Projects/sudowiz.png',
    source_code_link: "https://github.com/abhinavkarnatak-dev/SudoWiz",
    url_link: "https://sudowiz.vercel.app/",
    // prod : true
  },
  {
    name: "NN Based Detection, Classification of Streaming Images",
    description:
      "This project features a real-time surveillance system using YOLO v8 in Python. It detects and tracks objects in video feeds for security and monitoring applications.",
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
    image: '/Projects/nnbased.png',
    source_code_link: "https://github.com/mukul-anand-bhatt/NN-based-Detection-and-Classification-of-Streaming-Images",
    // url_link: "",
    // prod : true
  },

];