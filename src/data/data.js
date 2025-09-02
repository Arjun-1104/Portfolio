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
  // experience: "Experience - Company Name",
  // workYear: "May- 2024 to Present",
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
    image: assets.fruitBasketImg,
    label: "1. FruitBasket",
    desc: "FruitBasket is a fully responsive fruit store design created using HTML, CSS, JS and Bootstrap. It includes a modern homepage layout, product sections, and a clean UI optimized for all screen sizes.",
    languageUse: ["HTML", "CSS", "JS", "BootStrap"],
    path: "https://arjun-1104.github.io/Fruit-site/",
    gitPath: "https://github.com/Arjun-1104/Fruit-site",
  },
  {
    id: 2,
    image: assets.freshBitesImg,
    label: "3. FreshBites",
    desc: "FoodBites is a responsive food ordering platform built with React.js and Tailwind CSS, featuring a clean UI to browse items, explore categories, and view product details. It highlights my skills in reusable components, state management, and mobile-first design.",
    languageUse: ["HTML", "CSS", "React Js", "Tailwind CSS", "Redux"],
    path: "https://fresh-bites-frontend.vercel.app/",
    gitPath: "https://github.com/Arjun-1104/FreshBites_Frontend",
  },
  {
    id: 3,
    image: assets.plastoGreenImg,
    label: "3. Plasto Green",
    desc: "Plasto Green is a responsive e-commerce platform developed with React.js and Zustand. It allows users to explore plywood, wood, and door products with a clean UI, dynamic product listings, and smooth state management.",
    languageUse: ["HTML", "CSS", "React Js", "Tailwind CSS", "Zustend"],
    path: "https://plasto-green-frontend.vercel.app/",
    gitPath: "https://github.com/Arjun-1104/Plasto-Green-Frontend",
  },
  {
    id: 4,
    image: assets.portfolioImg,
    label: "4 PortFolio",
    desc: "I have developed a responsive and dynamic portfolio website using React.js. It showcases my projects, skills, and experience with modern UI components, smooth navigation, and optimized performance.",
    languageUse: ["HTML", "CSS", "React Js", "Tailwind CSS"],
    path: "https://portfolio-2vxtne2vr-arjuns-projects-1be61253.vercel.app/",
    gitPath: "https://github.com/Arjun-1104/Portfolio",
  },
];

export const educationData = [
  {
    id: 1,
    course: "Bachelor of Computer Application",
    year: "2021-2024",
    percentage: "8.32",
    institute: "Jiwaji University, Gwalior",
    image: assets.bcaImg,
  },
  {
    id: 2,
    course: "12th - Science",
    year: "2020-2021",
    percentage: "82%",
    institute: "Govt. Gorkhi H.S. School, Gwalior",
    image: assets.twelvethImg,
  },
  {
    id: 3,
    course: "10th - Board",
    year: "2018-2019",
    percentage: "79%",
    institute: "Saraswati Vidhya Mandir, Gwalior",
    image: assets.tenthImg,
  },
];

export const contactData = {
  letsContact: {
    heading: "Let's Connect",
    subHeading:
      "Thank you for visiting my personal portfolio website. Connect with me over socials.",
    items: [
      {
        icon: assets.linkedinIcon,
        path: "https://www.linkedin.com/in/arjun-rathore-ar/",
      },
      { icon: assets.githubIcon, path: "https://github.com/Arjun-1104" },
      { icon: assets.mailIcon, path: "mailto:developerarjun01@gmail.com" },
    ],
  },

  contact: {
    heading: "Contact Info",
    items: [
      {
        icon: assets.callIcon,
        label: "+91 9479440283",
      },
      {
        icon: assets.mailIcon,
        label: "developerarjun01@gmail.com",
      },
      {
        icon: assets.locationIcon,
        label: "Gwalior, MP, India",
      },
    ],
  },
  designBy: "Designed by",
  name: "Arjun",
};
