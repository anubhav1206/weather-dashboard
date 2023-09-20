import React from "react";
import { Logo } from "../assets";
import { SearchBar } from "./SearchBar";
import { motion } from "framer-motion";

const NavBar = () => {
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const searchBarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="pt-4 md:py-6 w-full flex justify-center xs:justify-between items-center">
      <div className="hidden xs:flex justify-start items-start">
        <motion.img
          src={Logo}
          className="w-[88px] h-[109px] object-contain"
          alt="Logo"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        />
      </div>
      <motion.div
        className="hidden xs:flex"
        variants={searchBarVariants}
        initial="hidden"
        animate="visible"
      >
        
      </motion.div>
      <SearchBar />
    </div>
  );
};

export default NavBar;
