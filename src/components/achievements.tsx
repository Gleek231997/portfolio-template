import React from "react";
import "../assets/styles/achievements.scss";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "High Performer Award at Accenture",
    details: "Received the High Performer Award at Accenture for developing and implementing an API-based Single Sign-On (SSO) integration with Microsoft profile authentication, enabling seamless access across applications and assisting multiple teams in adopting and deploying the solution.",
  },
  {
    title: "Recognized with the STARMARK",
    details: "SPOT Talent Award for exceptional performance during the COVID period by consistently delivering high-impact solutions under tight deadlines and resolving critical production issues across LAB cases and multiple case types, ensuring uninterrupted client operations.",
  },
  {
    title: "Client Value Award at Accenture",
    details:
      "Received the Client Value Award at Accenture for delivering high-quality solutions that enhanced client satisfaction, optimized project efficiency, and consistently exceeded performance expectations through proactive problem-solving and cross-team collaboration.",
  },
  {
    title: "Client Value and Client Recognition Awards at Accenture",
    details:
      "Received the Client Value and Client Recognition Awards at Accenture for delivering high-quality, client-centric solutions that improved satisfaction and project efficiency, while proactively resolving issues and collaborating across teams to exceed performance expectations.",
  },
  {
    title: "KLEIT ADVITYA COORDINATOR",
    details:
      "hosted a coding camp for students across 200 campuses where invited. IBOCS - University Mentor ",
  },
  {
    title: "Rutgers Career Shoutout – Office of Career Exploration and Success (2025)",
    details:"Praised by Madeline Giordana, Sr. Assistant Director, for developing and automating multiple data-cleaning scripts and user interface tools that saved over 85 hours of manual work annually. Recognized for critical thinking, initiative, and collaboration in delivering scalable data solutions."
  },
];

const Achievements: React.FC = () => {
  // Use a duplicated array for seamless looping (essential for infinite scroll)
  const infiniteAchievements = [...achievements, ...achievements];

  return (
    <div id="Achievements">
      <h1>ACHIEVEMENTS</h1>
      
      <div className="achievements-container">
        {/* 1. Use 'achievement-track' for the animated element 
          2. Framer Motion handles the animation from 0% to -50% for infinite loop
          3. Remove the now-unnecessary 'top'/'bottom' classes
        */}
        <motion.div
          className="achievement-track" 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }} // Increased duration for smoother speed
        >
          {infiniteAchievements.map((a, index) => (
            <motion.div
              key={index}
              className="achievement-pill" // Removed top/bottom class logic
              whileHover="expanded" // Use Framer Motion variant for better control
              initial="collapsed"
              variants={{
                collapsed: { scale: 1, borderRadius: 12 },
                expanded: { scale: 1.05, borderRadius: 20 }, // Match the 20px CSS border-radius
              }}
              transition={{ duration: 0.3 }} // Match CSS transition time
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