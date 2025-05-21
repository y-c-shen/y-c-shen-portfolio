import React from 'react';
import { motion } from "framer-motion";
import { CalendarIcon } from "lucide-react";

const ExperienceContainer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="flex justify-center w-full"
    >
      <div className="flex flex-col w-full">
        <motion.h2 
          variants={itemVariants}
          className="text-2xl font-bold mb-8 text-center sm:text-left relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-16 after:h-1 after:bg-yellow-400 sm:after:mx-0 after:mx-auto"
        >
          Experience
        </motion.h2>
        
        <div className="relative border-l-2 border-neutral-700 pl-8 ml-4 space-y-12">
          {/* Ampliwork Experience */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-10 mt-1.5 ring-4 ring-neutral-900"></div>
            
            <div className="bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 rounded-lg p-6 transition-all hover:border-yellow-400/30 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h3 className="font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                  Software Intern @ Ampliwork
                </h3>
                <div className="flex items-center text-neutral-400 text-sm mt-1 sm:mt-0">
                  <CalendarIcon size={14} className="mr-1" />
                  Feb 2025 - Present
                </div>
              </div>
              
              <p className="text-neutral-300 leading-relaxed">
                Designing AI agent workflows focused on scalable data processing. Responsible for implementing test pipelines, deploying API endpoints, and integrating cloud-based services to support real-time operations. Processed data is optimized for ingestion and embedding within a Retrieval-Augmented Generation (RAG) system.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {["RAG", "API Development", "Cloud Services", "Data Processing"].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-neutral-700/40 text-neutral-300 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Navy Experience */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-10 mt-1.5 ring-4 ring-neutral-900"></div>
            
            <div className="bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 rounded-lg p-6 transition-all hover:border-yellow-400/30 group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h3 className="font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                  Naval Communicator @ Canadian Armed Forces
                </h3>
                <div className="flex items-center text-neutral-400 text-sm mt-1 sm:mt-0">
                  <CalendarIcon size={14} className="mr-1" />
                  Mar 2022 - Present
                </div>
              </div>
              
              <p className="text-neutral-300 leading-relaxed">
                Built and implemented a full-stack mobile application in Power Apps for the unit&apos;s Supply Department, streamlining equipment requests and appointment services for over 325+ Naval Reservists.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {["Full-stack Development", "Power Apps", "Mobile Development", "Process Optimization"].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-neutral-700/40 text-neutral-300 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceContainer;