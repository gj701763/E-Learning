import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 z-20 w-full overflow-hidden top-20 lg:hidden lg:overflow-auto"
        >
          <div className="py-10 m-6 font-semibold text-black uppercase ext-xl o bg-primary rounded-3xl">
            <ul className="flex flex-col items-center justify-center gap-5 px-4">
              <li className="w-full py-2 text-center rounded-lg hover:bg-yellow-300">Home</li>
              <li className="w-full py-2 text-center rounded-lg hover:bg-yellow-300">About</li>
              <li className="w-full py-2 text-center rounded-lg hover:bg-yellow-300">Service</li>
              <li className="w-full py-2 text-center rounded-lg hover:bg-yellow-300">Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;