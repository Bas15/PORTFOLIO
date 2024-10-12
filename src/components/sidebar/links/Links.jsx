import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Portfolio", "Contact"];
  //  "Services",  "About"
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}

      <span className="viewcv">
        <motion.a
          href="https://bit.ly/3FoN0hp"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.0 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume <FiArrowUpRight size={17} />
        </motion.a>
      </span>
    </motion.div>
  );
};

export default Links;
