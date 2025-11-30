import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Project } from "../../data/projects";
import { ExternalLink, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, hasMultipleImages]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary hover:shadow-glow transition-all duration-300"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ${index % 2 === 1 ? "lg:grid-cols-2 lg:[direction:rtl]" : ""}`}>
        <div>
          <div className="overflow-hidden rounded-lg relative">
            <div className="relative w-full">
              {images.length > 0 && (
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`${project.name} ${currentImageIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="w-full h-[400px] object-contain"
                />
              )}
            </div>
            {hasMultipleImages && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentImageIndex ? "bg-primary w-6" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="space-y-4 [direction:ltr]">
          <div className="flex items-start justify-between gap-4">
            <h4 className="text-xl font-bold text-foreground flex-1">
              <a
                href={`https://github.com/Abdo222000/${project.html_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors inline-flex items-center gap-2 group"
              >
                {project.name}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </h4>
          </div>

          <div className="prose prose-invert prose-sm max-w-none text-muted-foreground">
            <ReactMarkdown>{truncateText(project.description, 205)}</ReactMarkdown>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-secondary text-primary rounded-full border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => navigate(`/project/${project.id}`)}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://github.com/Abdo222000/${project.html_url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary hover:text-primary/80 transition-colors font-medium"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
