import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    const linkedInBadge = (
      <div className="badge-base LI-profile-badge d-flex"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="abbas-ibrahim-7650a1343"
        data-version="v1">
        <a className="badge-base__link LI-simple-link"
          href="https://eg.linkedin.com/in/abbas-ibrahim-7650a1343?trk=profile-badge">
          <span className="px-6 py-3 bg-secondary rounded-xl border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group">
            linkedin Account
          </span>
        </a>
      </div>
              
    );
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-card rounded-2xl p-12 border border-border shadow-card text-center space-y-6"
      >
        <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          What's next? Feel free to reach out to me if you're looking for a developer, 
          have a query, or simply if you want to connect.
        </p>

        <div className="pt-6 pb-1 flex justify-center">
            {linkedInBadge}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-2">
          <motion.a
            href="mailto:abbasebrahiem123@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-secondary rounded-xl border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-primary group-hover:animate-pulse" />
            <span className="text-foreground font-medium">abbasebrahiem123@gmail.com</span>
          </motion.a>
          
          <motion.a
            href="tel:+201090388207"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-secondary rounded-xl border border-border hover:border-primary hover:shadow-glow transition-all duration-300 group"
          >
            <Phone className="w-5 h-5 text-primary group-hover:animate-pulse" />
            <span className="text-foreground font-medium">+201090388207</span>
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
