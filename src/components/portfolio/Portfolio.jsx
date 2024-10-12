import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Unleashified",
    img: "/unleashified.png",
    desc: "Unleashified is a job outsourcing platform designed to connect businesses with top talent for their project needs. Developed using ReactJS and BootstrapCSS, the platform offers a clean, responsive interface that allows businesses to post jobs, conduct interviews, and hire the best candidates to fill outsourced roles.",
    buttonLink: "https://unleashified.com/",
  },
  {
    id: 2,
    title: "Thels Impact Consulting",
    img: "/thels.png",
    desc: "Thels Impact Consulting focuses on driving change in Nigeria's Higher Education landscape. Developed using Next.js, TailwindCSS, and Node.js, the platform highlights Thels' mission to address the pressing issues in the HigherEd system by providing consulting services. The website features a modern and responsive design, allowing users to book sessions, explore services, and stay informed about the company's projects and impact.",
    buttonLink: "https://www.thelsimpactconsulting.com/",
  },
  {
    id: 3,
    title: "HooBank",
    img: "/bank.png",
    desc: "I developed a sleek, modern landing page for HooBank, a fintech startup, using ReactJS and Tailwind CSS. The design features dynamic 3D card visuals, responsive layouts, and an intuitive user interface. I integrated smooth hover effects and animations to enhance interactivity, while ensuring the page remains responsive across devices. The project showcases my ability to build visually compelling web interfaces with a focus on user experience and performance.",
    buttonLink: "https://modern-bank-app-mr21.onrender.com",
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   buttonLink: "www.unleashified.com",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.buttonLink} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
