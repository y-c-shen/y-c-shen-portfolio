import React from 'react';
import { motion } from "framer-motion";
import { Calendar} from "lucide-react";
import { FC } from 'react';

interface Props {
    title: string;
    date: string;
    description: string;
    tags: string[];
    demoLink: string;
}

const ProjectCard: FC<Props> = ({ title, date, description, tags, demoLink }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "discrete", stiffness: 300 }}
      className="bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 rounded-lg p-6 group hover:border-yellow-400/30"
    >
    <a href={demoLink} target="_blank" rel="noopener noreferrer">
              
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>

      </div>
      
      <div className="flex items-center text-neutral-400 text-xs mb-3">
        <Calendar size={14} className="mr-1" />
        {date}
      </div>
      
      <p className="text-neutral-300 leading-relaxed">
        {description}
      </p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-2 py-0.5 bg-neutral-700/40 text-neutral-300 text-xs rounded">
            {tag}
          </span>
        ))}
      </div>
      </a>
    </motion.div>
  );
};

const ProjectsContainer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      title: "SummariX: A RAG-based finance assistant",
      date: "Nov 2024",
      description: "Full-stack application enabling financial analysts to analyze and interact with PDF documents through Q&A. Integrated Claude 3.0 LLM through AWS Bedrock for language processing and implemented a user-friendly frontend using Streamlit.",
      tags: ["RAG", "Claude 3.0", "AWS Bedrock", "Streamlit", "PDF Processing"],
      demoLink: "https://youtu.be/snLFg6mMCIA"
    },
    {
      title: "SimplyMail: Gmail summarizer extension",
      date: "Feb 2025",
      description: "Chrome extension that summarizes emails on-page and flags malicious links in real-time.",
      tags: ["Chrome Extension", "Email Processing", "Security", "JavaScript"],
      demoLink: "https://www.youtube.com/watch?v=zoDTABnNOWM&ab_channel=YejiaCharlesShen"
    },
    {
      title: "Chess Oven: Chess, from scratch.",
      date: "June 2024",
      description: "Fully featured chess game built in native javascript with piece logic, clock, castling, promotion, and checkmate.",
      tags: ["JavaScript", "Game Development", "UI/UX", "Frontend"],
      demoLink: "https://jstephenhuang.github.io/chess-oven/"
    }
  ];

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
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
          
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center border border-dashed border-neutral-700 rounded-lg p-6 min-h-[220px] hover:border-yellow-400/40 transition-colors"
          >
            <div className="text-center">
              <p className="text-neutral-400 mb-2">More projects coming soon...</p>
              <p className="text-sm text-neutral-500">Check my GitHub for the latest work</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsContainer;