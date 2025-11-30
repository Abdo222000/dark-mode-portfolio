import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
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
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
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
