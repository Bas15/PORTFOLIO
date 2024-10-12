import { FaLinkedin } from "react-icons/fa";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/awoleyebolaji/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src="/facebook.png" alt="" /> */}
            <FaLinkedin size={20} color="blue" />
          </a>
          <a
            href="https://x.com/aval_stephen"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src="/instagram.png" alt="" /> */}
            <FaSquareXTwitter size={20} />
          </a>
          <a href="#">
            {/* <img src="/youtube.png" alt="" /> */}
            <IoLogoYoutube size={24} color="red" />
          </a>
          {/* <a href="#">
            <img src="/dribbble.png" alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
