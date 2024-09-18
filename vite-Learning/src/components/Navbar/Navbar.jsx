import React from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex items-center justify-between py-6">
          {/* Logo section */}
          <div className="flex items-center gap-2 text-2xl font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p>E-Tutor</p>
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block px-2 py-1 text-sm font-semibold text-gray-600 transition-all duration-300 xl:text-base xl:px-3 hover:text-secondary"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA Button section */}
          <div className="hidden space-x-6 lg:block">
            <button className="font-semibold">Sign in</button>
            <button className="px-6 py-2 font-semibold text-white rounded-full bg-secondary ">
              Register
            </button>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="overflow-y-hidden lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl cursor-pointer" />
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;