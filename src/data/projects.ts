import full1 from '../assets/projects_images/full1.png';
import full2 from '../assets/projects_images/full2.png';
import full3 from '../assets/projects_images/full3.png';
import full4 from '../assets/projects_images/full4.png';
import full5 from '../assets/projects_images/full5.png';
import full6 from '../assets/projects_images/full6.png';

import prompt1 from '../assets/projects_images/prompt1.png';
import prompt2 from '../assets/projects_images/prompt2.png';
import prompt3 from '../assets/projects_images/prompt3.png';
import prompt4 from '../assets/projects_images/prompt4.png';
import prompt5 from '../assets/projects_images/prompt5.png';

import react1 from '../assets/projects_images/react1.png';
import react2 from '../assets/projects_images/react2.png';
import react3 from '../assets/projects_images/react3.png';
import react4 from '../assets/projects_images/react4.png';
import react5 from '../assets/projects_images/react5.png';
import react6 from '../assets/projects_images/react6.png';


export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  html_url: string;
  images: string[];
}

export const projectData: Project[] = [
  {
    id: 1,
    name: "Full Stack Fundraising Platform (Frontend)",
    description: "The front-end client for a full-scale fundraising web application. Built with **React** to provide a dynamic and responsive user experience. It interacts with the backend via **RESTful APIs** to handle user authentication, donation processes, and campaign display. This project demonstrates advanced front-end routing, state management, and interaction with complex backend systems.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "RESTful APIs"],
    html_url: "project-frontend",
    images: [full1, full2, full3, full4, full5, full6]
  },
  {
    id: 2,
    name: "Full Stack Fundraising Platform (Backend)",
    description: "The robust backend for the Fundraising Platform, implemented using **Python's Django REST Framework**. It manages the core business logic, including user profiles, donation tracking, and campaign data. The data is secured and persisted using a **PostgreSQL** database. This project showcases expertise in API design, database modeling, and security implementation.",
    technologies: ["Python", "Django REST Framework", "PostgreSQL", "API Design", "Authentication"],
    html_url: "project-backend",
    images: [full4, full6, full5, full1, full2, full3]
  },
  {
    id: 3,
    name: "Promptverse AI Landing Page",
    description: "A responsive and visually engaging landing page designed for a conceptual AI product. Developed using modern **HTML5** and **CSS3** practices, focusing on high-fidelity design, optimal user experience, and cross-browser compatibility. This project highlights proficiency in crafting polished, marketing-ready front-end interfaces.",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    html_url: "Promptverse-AI-Landing-Page",
    images: [prompt1, prompt2, prompt3, prompt4, prompt5]
  },
  {
    id: 4,
    name: "React Ecommerce Platform",
    description: "A dedicated front-end project focusing on modern component architecture and state management within a **React/Vite** environment. The application demonstrates effective use of libraries like **Bootstrap** and implements complex UI features, serving as a clean example of scalable front-end code structure.",
    technologies: ["React", "Vite", "JavaScript", "Bootstrap"],
    html_url: "react-project",
    images: [react1, react2, react3, react4, react5, react6]
  },
  // {
  //   id: 5,
  //   name: "ITI Shell Scripting Automation",
  //   description: "A comprehensive project showcasing proficiency in Linux system administration and automation. It contains practical **Shell Scripts** designed to automate common tasks, directory management, and system monitoring. This project demonstrates low-level system understanding and command-line efficiency.",
  //   technologies: ["Shell Scripting", "Linux/Ubuntu", "Automation"],
  //   html_url: "ITI_shell_script_project",
  //   images: []
  // },
  // {
  //   id: 6,
  //   name: "Simple Interactive Exam Page",
  //   description: "A client-side interactive system that simulates an online examination. Built primarily with **JavaScript** and **HTML/CSS**, it handles dynamic content rendering and immediate user feedback. This project demonstrates core JavaScript logic for immediate client-side application functionality.",
  //   technologies: ["JavaScript", "HTML", "CSS"],
  //   html_url: "Simple-Exam-Page.github.io",
  //   images: []
  // }
];
