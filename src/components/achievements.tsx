import React from "react";
import "../assets/styles/achievements.scss";
import { motion } from "framer-motion";


const achievements = [
  {
    title: "Best Project Award",
    details: "Won 1st place in the college project expo for a Smart IoT device.",
  },
  {
    title: "Hackathon Winner",
    details: "Secured top position at the National Level Hackathon 2025.",
  },
  {
    title: "Research Paper",
    details:
      "Published paper on 5G Energy Slicing using Simplicial Homology in IEEE.",
  },
  {
    title: "Leadership Role",
    details:
      "Led a 10-member embedded systems team in design and deployment.",
  },
  {
    title: "Open Source Contributor",
    details:
      "Contributed to multiple embedded software and IoT repositories.",
  },
];

const Achievements: React.FC = () => {
  return (
    <div id="Achievements">
        <h1>ACHIEVEMENTS</h1>
    <div className="achievements-container">   
      <motion.div
        className="achievements-scroll"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...achievements, ...achievements].map((a, index) => (
          <motion.div
            key={index}
            className={`achievement-pill ${index % 2 === 0 ? "top" : "bottom"}`}
            whileHover={{ scale: 1.1 }}
          >
            <div className="achievement-content">
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-details">{a.details}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </div>
  );
};

export default Achievements;
