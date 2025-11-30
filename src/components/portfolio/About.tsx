import { motion } from "framer-motion";
import TechStack from "./TechStack";
import pfp from "../../assets/pfp_photo.jpg"
import { Code2, Database, Zap, Github, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 my-16 space-y-12">
      {/* First Section: Introduction and Image */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden"
      >
        {/* Background gradient elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="relative backdrop-blur-sm border border-primary/20 rounded-3xl p-12 bg-gradient-card/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Introduction */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 60 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                />
                <h3 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                  About Me
                </h3>
              </div>
              
              <p className="text-lg leading-relaxed text-foreground">
                I'm a <span className="font-bold text-primary">Full Stack Web Developer</span>
                <br />
                with a foundation in <span className="font-bold text-primary">Computer and Systems Engineering</span>
                <br />
                and advanced training from the <span className="font-bold text-primary">Information Technology Institute (ITI)</span>
                <br />
                in Full Stack Web Development using Python.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My passion is transforming complex ideas into robust, practical, and scalable web applications. 
                I am committed to clean code, user-friendly design, and contributing to open-source initiatives.
              </p>
              
              <motion.a
                whileHover={{ x: 5 }}
                href="https://github.com/Abdo222000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold group"
              >
                Visit My GitHub
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.section>

            {/* Profile Image */}
            <motion.section 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <motion.div 
                className="relative"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary via-primary/50 to-transparent blur-3xl rounded-full"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="relative">
                  <img 
                    src={pfp}
                    alt="Abbas Ibrahim"
                    className="w-72 h-72 rounded-3xl object-cover shadow-2xl"
                  />
                </div>
              </motion.div>
            </motion.section>
          </div>
        </div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mb-6"
          />
          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Technologies I Use
          </h3>
        </div>
        <TechStack />
      </motion.div>

      {/* Second Section: Technical Stack and Key Projects */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Background elements */}
        {/* <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" /> */}
        {/* <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" /> */}
        
        <div className="relative grid md:grid-cols-2 gap-8">
          {/* Technical Stack */}
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group rounded-2xl border border-primary/20 bg-gradient-card/50 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Technical Stack
              </h4>
            </div>
            
            <ul className="space-y-4">
              {[
                {
                  title: "Front-End",
                  icon: <Zap className="w-4 h-4" />,
                  desc: "React with Vite, Bootstrap CSS, modern CSS practices for responsive UIs"
                },
                {
                  title: "Back-End",
                  icon: <Database className="w-4 h-4" />,
                  desc: "Python, Django, Flask, RESTful APIs for scalable solutions"
                },
                {
                  title: "Database",
                  icon: <Database className="w-4 h-4" />,
                  desc: "PostgreSQL for flexible, secure database design"
                }
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-border/50 hover:border-primary/30"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">{item.icon}</div>
                    <div>
                      <div className="font-bold text-foreground mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Key Projects */}
          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="group rounded-2xl border border-primary/20 bg-gradient-card/50 backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Key Projects
              </h4>
            </div>
            
            <ul className="space-y-4">
              {[
                {
                  title: "Full Stack Fundraising Platform",
                  tags: ["Frontend", "Backend"],
                  desc: "React + Django REST Framework with PostgreSQL. Complete development lifecycle mastery."
                },
                {
                  title: "Promptverse AI Landing Page",
                  tags: ["Modern UI"],
                  desc: "Modern HTML/CSS design showcasing advanced front-end development skills."
                },
                {
                  title: "Modular React Applications",
                  tags: ["Architecture"],
                  desc: "Component-based architecture with state management and reusable patterns."
                }
              ].map((project, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors border border-border/50 hover:border-primary/30"
                >
                  <div className="font-bold text-foreground mb-2">{project.title}</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">{project.desc}</div>
                </motion.li>
              ))}
            </ul>
            
            <motion.a
              whileHover={{ x: 5 }}
              href="https://github.com/Abdo222000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold group mt-6"
            >
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
