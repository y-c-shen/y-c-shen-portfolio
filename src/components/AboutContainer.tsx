import React from 'react';
import { motion } from "framer-motion";

const AboutContainer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2 // animates children one after the other
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible" // when scrolled into view, apply containerVariants.visible
      viewport={{ once: true, margin: "-100px" }} // Triggers the animation only once when the container enters the viewport, even partially (100px earlier than default)
      variants={containerVariants} // Links this motion div to the containerVariants config
      className="flex justify-center w-full"
    >
      <div className="flex flex-col w-full">
        <motion.h2 
          variants={itemVariants} // Links this motion div to the itemVariants config
          // initial="hidden" and whileInView="visible" are inherited from parent div
          className="text-2xl font-bold mb-8 text-center sm:text-left relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-16 after:h-1 after:bg-yellow-400 sm:after:mx-0 after:mx-auto"
        >
          About Me
        </motion.h2>
        
        <motion.div 
          variants={itemVariants}
          className="text-base text-neutral-300 space-y-4 leading-relaxed"
        >
          <p>
            Hey, I&apos;m Yejia, a U2 co-op student at McGill studying Software Engineering. I&apos;m always on the lookout to learn something new, whether it&apos;s diving deeper into machine learning and RAG pipelines or sharpening my full-stack development skills.
          </p>
          
          <p>
            When I&apos;m not coding, you can find me on the basketball court (go Mavs), planning my next travel adventure, or immersed in a good video game. Recent favorites are Elden Ring and Sekiro.
          </p>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >

        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutContainer;