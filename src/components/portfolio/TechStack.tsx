import { motion } from "framer-motion";
import bootstrap_svg from "../../assets/technologies/bootstrap.svg";
import css_svg from '../../assets/technologies/css3.svg';
import django_svg from '../../assets/technologies/django.svg';
import react_svg from '../../assets/technologies/react.svg';
import Flask_svg from '../../assets/technologies/Flask.svg';
import html5_svg from '../../assets/technologies/html5.svg';
import nodejs_svg from '../../assets/technologies/nodejs.svg';
import postgresql_svg from '../../assets/technologies/postgresql.svg';
import git_svg from '../../assets/technologies/Git.svg';
import js_svg from '../../assets/technologies/js.svg';
import mysql_svg from '../../assets/technologies/mysql.svg';
import npm_svg from '../../assets/technologies/npm.svg';
import python_svg from '../../assets/technologies/Python.svg';

const technologies = [
  { name: "React", icon: react_svg },
  { name: "Python", icon: python_svg },
  { name: "Django", icon: django_svg },
  { name: "Flask", icon: Flask_svg },
  { name: "PostgreSQL", icon: postgresql_svg },
  { name: "JavaScript", icon: js_svg },
  { name: "HTML5", icon: html5_svg },
  { name: "CSS3", icon: css_svg },
  { name: "Git", icon: git_svg },
  { name: "MySQL", icon: mysql_svg },
  { name: "Bootstrap", icon: bootstrap_svg },
  { name: "Node.js", icon: nodejs_svg },
  { name: "npm", icon: npm_svg }
];

const TechStack = () => {
  return (
    <div className="bg-secondary/50 rounded-xl p-6 mt-6 border border-border">
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex flex-col items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-primary hover:shadow-glow transition-all duration-300 cursor-pointer min-w-[80px]"
          >
            <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
            <span className="text-xs font-medium text-foreground">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
