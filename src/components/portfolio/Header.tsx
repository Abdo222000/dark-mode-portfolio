import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-8 pb-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-6">
          <a 
            href="https://github.com/Abdo222000/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse-slow" />
              <img 
                src="https://github.com/Abdo222000.png" 
                alt="Abbas Ibrahim profile" 
                className="relative w-24 h-24 rounded-full border-4 border-primary shadow-glow object-cover"
              />
            </motion.div>
          </a>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent"
          >
            Abbas Ibrahim
          </motion.h1>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
