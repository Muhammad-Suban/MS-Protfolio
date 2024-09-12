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
  carrent,
  jobit,
  tripguide,
  threejs,
  Swift,
  Swift2,
  Swiftt,
  Basar,
  Basar2,
  Blog,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Front-end Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Javascipt Developer',
    icon: backend,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
]

const experiences = [
  {
    title: 'React.js Developer',
    // company_name: "Starbucks",
    icon: javascript,
    iconBg: '#383E56',
    // date: "March 2020 - April 2021",
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },

  {
    title: 'Web Developer',
    icon: reactjs,
    iconBg: '#383E56',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Blog App',
    description:
      'A fully functional blog app that offers a seamless content management experience. Users can easily create, update, and manage blog posts, ensuring an optimal and user-friendly experience',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'Appwrite',
        color: 'pink-text-gradient',
      },
      {
        name: 'Redux-Toolkit',
        color: 'green-text-gradient',
      },
    ],
    image: Blog,
    source_code_link: 'https://github.com/Muhammad-Suban/Blog-Application',
  },
  {
    name: 'Swift Card',
    description:
      'A dynamic e-commerce platform where users can effortlessly add products to their cart, browse via sorting and filtering options, and navigate through pages with ease. Features real-time API integration for an optimal shopping experience.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Axios',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'AntD',
        color: 'green-text-gradient',
      },
    ],
    image: Swiftt,
    source_code_link: 'https://github.com/MHassamSaqib/suban-ecommerce',
  },
  {
    name: 'BASAR',
    description:
      'A comprehensive  e-commerce platform, created as a collaborative university project, showcasing robust backend support. Users benefit from  account management and advanced product handling features. Built with MongoDB and Express',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Redux-toolkit',
        color: 'blue-text-gradient',
      },
      {
        name: 'Express',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: Basar,
    source_code_link: 'https://github.com/Abdulbasit219/s.e',
  },
]

export { services, technologies, experiences, testimonials, projects }
