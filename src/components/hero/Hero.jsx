import "./hero.scss";
import { motion } from "framer-motion";
import { PopupButton } from "react-calendly";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>AWOLEYE BOLAJI</motion.h2>
          <motion.h1 variants={textVariants}>
            Full-Stack Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {/* Wrap the motion.button inside an anchor tag */}
            <a href="#Portfolio">
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </a>
            {/* <a href="https://calendly.com/bolajistephen72/30min">
              <motion.button variants={textVariants}>
                Book A Session
              </motion.button>
            </a> */}
            <PopupButton
              url="https://calendly.com/bolajistephen72/30min"
              rootElement={document.getElementById("root")}
              text="Book A Session"
            />
          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        ReactJs TailwindCSS NodeJs ExpressJs Mongodb NextJs Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
