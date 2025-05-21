import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { DownloadIcon, Mail } from "lucide-react";

interface Buttons {
  children: ReactNode;
  variant: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  download?: string;
  icon?: ReactNode;
}

const CustomButton: FC<Buttons> = ({ children, variant, href, onClick, download, icon }) => {
  const baseClasses ="flex items-center justify-center py-2 px-6 rounded-full font-medium duration-300 text-sm cursor-pointer";
  const variantClasses = {
    primary:
      "bg-yellow-500 text-neutral-900 hover:bg-yellow-400 shadow-lg shadow-yellow-500/20",
    secondary:
      "bg-neutral-800 text-neutral-200 border border-neutral-700 hover:bg-neutral-700 hover:border-neutral-600",
  };

  return (
    <motion.a
      href={href}
      onClick={onClick}
      download={download}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.a>
  );
};

export default function ButtonContainer() {
  const handleDownload = () => {
    const fileUrl = "/resume_2025.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "yejia_shen_resume_2025.pdf";
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "discrete" }}
      className="flex flex-col sm:flex-row gap-4 mt-8 mb-14"
    >
      <CustomButton
        variant="primary"
        href="mailto:yejia.charles.shen@gmail.com"
        onClick={() => {}}
        icon={<Mail size={16} />}
      >
        Contact Me
      </CustomButton>

      <CustomButton
        variant="secondary"
        onClick={handleDownload}
        icon={<DownloadIcon size={16} />}
      >
        Download CV
      </CustomButton>
    </motion.div>
  );
}
