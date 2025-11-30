import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12 py-8 border-t border-border"
    >
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground">
          2025 | Designed and Coded with <span className="text-red-500">❤️</span> by{" "}
          <span className="text-primary font-semibold">Abbas Ibrahim</span>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
