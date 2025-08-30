import assets from "../assets/assets";

export const navigation = [
  { name: "About", to: "#about", current: true },
  // { name: "Resume", href: "#", current: false },
  { name: "Skills", to: "#skills", current: false },
  { name: "Projects", to: "#projects", current: false },
  { name: "Education", to: "#education", current: false },
  { name: "Contact", to: "#contact", current: false },
];

export const aboutData = {
  preName: "Hello, my name is",
  name: "Arjun\nRathore",
  occupation: "Frontend\nDeveloper",
  experience: "Experience - Mito Infotech",
  workYear: "May- 2024 to Present",
  description:
    "Skilled react.js developer with 1.5 years Of hands-on experience. Expertise in building responsive and scalable web applications. Strong frontend development and UI/UX design.",
  shortLine: "Open to work and collaborations.",
  resumeTitle: "Resume",
};

export const skillsData = [
  { id: "1", image: assets.html5, label: "HTML" },
  { id: "2", image: assets.css3, label: "CSS" },
  { id: "3", image: assets.js, label: "JavaScript" },
  { id: "4", image: assets.reactjs, label: "React Js" },
  { id: "5", image: assets.redux, label: "Redux" },
  { id: "6", image: assets.btstrap, label: "Bootstrap" },
  { id: "7", image: assets.tailwind, label: "Tailwind CSS" },
  { id: "8", image: assets.git, label: "Git" },
];

export const projectsData = [
  {
    id: 1,
    image: assets.weatherImg,
    label: "1. Weather App",
    desc: "fBuilt a responsive weather application using React.js and OpenWeather API to display real-time weather conditions with intuitive UI, search functionality, and API error handling.",
    languageUse: ["HTML", "CSS", "React Js", "Weather API"],
  },
  {
    id: 2,
    image: assets.noteImg,
    label: "1. Weather App",
    desc: "fBuilt a responsive weather application using React.js and OpenWeather API to display real-time weather conditions with intuitive UI, search functionality, and API error handling.",
    languageUse: ["HTML", "CSS", "React Js", "Weather API"],
  },
  {
    id: 3,
    image: assets.votingImg,
    label: "1. Weather App",
    desc: "fBuilt a responsive weather application using React.js and OpenWeather API to display real-time weather conditions with intuitive UI, search functionality, and API error handling.",
    languageUse: ["HTML", "CSS", "React Js", "Weather API"],
  },
  {
    id: 4,
    image: assets.portfolioImg,
    label: "1. Weather App",
    desc: "fBuilt a responsive weather application using React.js and OpenWeather API to display real-time weather conditions with intuitive UI, search functionality, and API error handling.",
    languageUse: ["HTML", "CSS", "React Js", "Weather API"],
  },
];

export const educationData = [
  {
    id: 1,
    course : 'Bachelor of Computer Application',
    year: '2021-2024',
    percentage: '8.32',
    institute: 'Jiwaji University, Gwalior',
    image: assets.bcaImg
  },
  {
    id: 2,
    course : '12th - Science',
    year: '2020-2021',
    percentage: '82%',
    institute: 'Govt. Gorkhi H.S. School, Gwalior',
    image: assets.twelvethImg
  },
  {
    id: 3,
    course : '10th - Board',
    year: '2018-2019',
    percentage: '79%',
    institute: 'Saraswati Vidhya Mandir, Gwalior',
    image: assets.tenthImg
  }
]


