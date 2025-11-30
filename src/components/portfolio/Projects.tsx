import { motion } from "framer-motion";
import { projectData } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent"
      >
        My Projects
      </motion.h2>
      
      <div className="grid gap-6">
        {projectData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
