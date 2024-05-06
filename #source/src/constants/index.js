import { useTranslation } from 'react-i18next';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
 

  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Naše Služby ",
  },
  {
    id: "work",
    title: "Naše vize",
  },
  
  
];

export const navLinks2 = [
  {
    id: "kuryrpage",
    title: "Co nabízíme? ",
  },
  {
    id: "kuryrpozadavky",
    title: "Naše požadavky",
  },
 
];

const services = [
  {
    title: "Local",
    icon: web,
  },
  {
    title: "Agile",
    icon: mobile,
  },
  {
    title: "Emission free",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 ,
  {
    name: "git",
    icon: git,
  },
 
];

const experiences = [
  {
    title: "",
    company_name: "",
    icon: starbucks,
    iconBg: "#d4e7d3",
    date: "",
    points: [
      "I my společně s našimi rodinami žijeme ve městě, které bychom rádi udržovalii do budoucna. Chceme, aby naše děti <br>vyrůstaly v prostředí s čistým ovzdušíma nízkou hlučností.",
    ],
  },
  
  {
    title: "",
    company_name: "",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Chceme vytvořit tu nejflexibilnější rozvozovou službu, \nale s udržitelnými prostředky. Myslíme na budoucnost \na chceme vytvořit další úroveň městského doručování.\n",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: starbucks,
    iconBg: "#d4e7d3",
    date: "",
    points: [
      "Díky využití  elektrických vozů operujeme bez jakýchkoliv emisí \na s nízkou hlučností. Myslíme na budoucnost a chceme vytvořit další úroveň  doručování.\n\n",
    ],
  },
  {
    title: "",
    company_name: "",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Lepší kvalita ovzduší, nižší zatížení hlukem bez ztráty kvality doručení, rychlost a spolehlivost je to, co si představujeme a pro co pracujeme.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "text",
    name: "Zabit Magomedsharipov",
    designation: "CFO",
    company: "UFC",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "text",
    name: "Peter Pettigrew",
    designation: "COO",
    company: "James Potter corporation",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "text",
    name: "Hasbulah Magomedov",
    designation: "CTO",
    company: "Hasbulla s.r.o",
    image: "https://www.thesun.co.uk/wp-content/uploads/2022/08/553fc8c0-4e02-4a96-800b-a2453827fe2b.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
   
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };