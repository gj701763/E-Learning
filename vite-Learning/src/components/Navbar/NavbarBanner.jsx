import React from "react";
import { motion } from "framer-motion";

const NavbarBanner = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="relative hidden p-1 text-sm font-semibold text-center bg-primary lg:block"
      >
        Are you a university or school student for an online tutoring
        partnership?
        <a href="#" className="ml-2 text-secondary">
          Talk to us
        </a>
        <div
          className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-10"
          onClick={() => setIsOpen(false)}
        >
          X
        </div>
      </motion.div>
    )
  );
};

export default NavbarBanner;