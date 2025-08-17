import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaIdBadge,
  FaUniversity,
  FaGitAlt,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiCloudinary,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export const NAV_LINKS = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export const SOCIAL_LINKS = [
  {
    name: "Github",
    path: "https://github.com",
    icon: FaGithub,
  },
  {
    name: "Linkedin",
    path: "https://www.linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    name: "Telegram",
    path: "https://t.me",
    icon: FaTelegramPlane,
  },
  {
    name: "TwitterX",
    path: "https://x.com",
    icon: FaXTwitter,
  },
];

export const STAT_LIST = [
  { num: 12, text: "Years of experience" },
  { num: 26, text: "Projects completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 500, text: "Code commits" },
];

export const SERVICE_LIST = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building responsive and high-performing websites tailored to your needs.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging interfaces that enhance user experience.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Creating memorable and versatile logos that capture your brand identity.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Optimizing your website to rank higher on search engines and attract traffic.",
    href: "",
  },
];

export const ABOUT_DATA = {
  icon: FaIdBadge,
  title: "About me",
  description:
    "I’m a highly motivated and detail-oriented software engineer with over 12 years of professional experience. My focus is on building scalable web applications, creating efficient solutions, and continuously learning new technologies. I enjoy collaborating with teams, solving complex problems, and turning ideas into impactful digital products.",
  info: [
    { fieldName: "Name", fieldValue: "Luke Coleman" },
    { fieldName: "Phone", fieldValue: "+49 123 456 7890" },
    { fieldName: "Email", fieldValue: "luke.coleman@email.com" },
    { fieldName: "Experience", fieldValue: "12+ Years" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "En, De" },
  ],
};

export const EXPERIENCE_DATA = {
  icon: FaIdBadge,
  title: "My experience",
  description:
    "I have gained practical experience working on full-stack web projects, developing responsive interfaces and integrating APIs to deliver user-friendly applications.",
  items: [
    {
      company: "Tech Solutions GmbH",
      position: "Full-Stack Developer",
      duration: "09/2023 - Present",
    },
    {
      company: "NextGen Web Agency",
      position: "Full-Stack Developer",
      duration: "08/2021 - 08/2023",
    },
    {
      company: "Freelance / Contract Work",
      position: "Full-Stack Developer",
      duration: "01/2020 - 07/2021",
    },
    {
      company: "Startup Lab",
      position: "Junior Full-Stack Developer",
      duration: "06/2019 - 12/2019",
    },
  ],
};

export const EDUCATION_DATA = {
  icon: FaUniversity,
  title: "My education",
  description:
    "Throughout my academic journey I’ve gained both theoretical knowledge and practical experience in software development, design, and modern web technologies. My education provided a strong foundation that I continue to build on through projects and continuous learning.",
  items: [
    {
      institution: "Technical University of Berlin",
      degree: "Master’s in Computer Science",
      duration: "09/2021 - 08/2023",
    },
    {
      institution: "Technical University of Berlin",
      degree: "Bachelor’s in Software Engineering",
      duration: "09/2017 - 07/2021",
    },
    {
      institution: "Udemy / Online Courses",
      degree: "Full-Stack Web Development Bootcamp",
      duration: "01/2020 - 06/2020",
    },
    {
      institution: "Coursera",
      degree: "UI/UX Design Specialization",
      duration: "03/2019 - 09/2019",
    },
  ],
};

export const SKILLS_DATA = {
  title: "My skills",
  description:
    "I’ve built strong skills in both frontend and backend development, from creating responsive UIs to designing efficient server-side apps and databases. I enjoy full-stack work, integrating APIs, and delivering scalable solutions. I’m also experienced with design tools and version control, ensuring smooth workflows.",
  skillList: [
    {
      icon: FaHtml5,
      name: "html 5",
    },
    {
      icon: FaCss3,
      name: "css 3",
    },
    {
      icon: SiTailwindcss,
      name: "tailwind.css",
    },
    {
      icon: FaJs,
      name: "javascrypt",
    },
    {
      icon: FaReact,
      name: "react.js",
    },
    {
      icon: SiNextdotjs,
      name: "next.js",
    },
    {
      icon: FaNodeJs,
      name: "node.js",
    },
    {
      icon: SiExpress,
      name: "express",
    },
    {
      icon: SiMongodb,
      name: "mongoDB",
    },
    {
      icon: FaGitAlt,
      name: "git",
    },
    {
      icon: SiCloudinary,
      name: "cloudinary",
    },
    {
      icon: FaFigma,
      name: "figma",
    },
  ],
};
