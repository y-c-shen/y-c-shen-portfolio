import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

interface SocialIconProps {
  href: string;
  icon: ReactElement;
  label: string;
  color?: string;
}

const SocialIcon = ({ href, icon, label, color }: SocialIconProps) => {  // below, we define a list of icons, and each will map to this function, returning a icon div
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="relative group"
    >
      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-700 opacity-0 group-hover:opacity-50 transition-opacity blur-md" />
      <div
        className={`relative flex items-center justify-center w-12 h-12 rounded-full border border-neutral-700 bg-neutral-800/60 backdrop-blur-sm ${color} transition-all duration-300`}
      >
        {icon} {/* React.cloneElement(icon, {className: "text-neutral-300" })  if we want to override the props*/}
      </div>
      <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {label}
      </span>
    </motion.a>
  );
};

export default function IconContainer() {
  const socials = [ // defining the icons we want
    {
      href: "https://github.com/y-c-shen",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      color: "group-hover:text-white group-hover:border-white/30",
    },
    {
      href: "https://www.linkedin.com/in/yejia-shen-2915471a3",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      color: "group-hover:text-blue-400 group-hover:border-blue-500/30",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="flex gap-4 mt-4"
    >
      {socials.map((social) => (
        <SocialIcon key={social.href} {...social} />
      ))}
    </motion.div>
  );
}
