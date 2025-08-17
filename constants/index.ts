import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

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
