import { motion } from "framer-motion";
import figure1 from "../assets/images/homebg1.png";

const Heading = () => {
  return (
    <div className="heading-section">
      <div className="image-wrapper">
        <motion.div
          className="circle-figure"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.img
          src={figure1}
          alt=""
          initial={{ x: -200, opacity: 0.4 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>

      <motion.div
        className="content-wrapper"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
      >
        <h2>
          Dare to <span style={{ color: "rgb(121, 21, 21)" }}>Be</span> Seen
        </h2>
        <p>
          This isn’t just fashion—it’s a statement. Bold cuts, striking
          textures, and effortless confidence.
        </p>

        <motion.button
          className="explore-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
          <span className="circle4"></span>
          <span className="circle5"></span>
          <span className="text">Explore</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Heading;
