import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDatabase, 
  faCloud, 
  faCode, 
  faTerminal, 
  faCogs, 
  faProjectDiagram, 
  faChartLine, 
  faChartBar 
} from '@fortawesome/free-solid-svg-icons';
import { faPython, faDocker, faReact } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { motion } from "framer-motion";

// --- Skill Sets ---

// Programming Languages
const languages = [
  "Python", "C++", "C", "R", "SQL", "JavaScript", "TypeScript", "C#", "Bash"
];

// Frontend / Backend
const frontEnd = [
  "React", "Angular 10+", "Bootstrap", "RxJS", "Responsive Design"
];
const backEnd = [
  "ASP.NET Core", "Node.js", "Flask", "REST API Development", "Microservices"
];

// Databases & Cloud
const databases = [
  "PostgreSQL", "MySQL", "MongoDB", "Azure SQL", "Snowflake"
];
const cloudDevOps = [
  "AWS (Lambda, S3, EC2)", "Azure (App Services, Data Factory)",
  "Docker", "Kubernetes", "Jenkins", "Terraform", "Git", "CI/CD Pipelines"
];

// Data Science / Engineering
const dataScience = [
  "Causal Inference", "Predictive Modelling", "A/B Testing",
  "Time Series Analysis", "Feature Engineering", "Product Analytics",
  "Model Training", "Optimization"
];
const frameworks = [
  "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "PySpark"
];
const dataEngineering = [
  "Apache Spark", "Apache Kafka", "ETL Pipelines", "Hadoop (basic)", "dbt"
];

// Core Concepts / Tools
const coreConcepts = [
  "API Design", "Authentication & Authorization", "Unit Testing", "Agile/Scrum"
];
const toolsReporting = [
  "Tableau", "Power BI", "Seaborn", "Matplotlib", "Postman", "Swagger", "JIRA", "VS Code"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* 1. Programming Languages */}
          <div className="skill">
            <FontAwesomeIcon icon={faTerminal} size="3x" />
            <h3 className="gradient-heading">Programming Languages & Scripting</h3>
            <div className="space-y-2 text-gray-900 dark:text-gray-100">
              {[
                "Proficient in multiple languages like Python, C++, and C# with focus on efficiency and scalability.",
                "Strong in SQL for data manipulation and querying, and Bash for automation workflows."
              ].map((text, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
                  {text}
                </motion.p>
              ))}
            </div>
            <div className="flex-chips">
              <span className="chip-title">Languages:</span>
              {languages.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
          </div>

          {/* 2. Full Stack Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3 className="gradient-heading">Full-Stack & API Development</h3>
            <p>
              Experienced in building scalable applications with Angular and React for frontend,
              and Node.js, ASP.NET Core, and Flask for backend REST APIs and microservices.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Frontend:</span>
              {frontEnd.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
            <div className="flex-chips">
              <span className="chip-title">Backend:</span>
              {backEnd.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
          </div>

          {/* 3. Databases & Cloud */}
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3 className="gradient-heading">Database & Cloud Technologies</h3>
            <p>
              Designed, optimized, and deployed relational and NoSQL databases (MySQL, PostgreSQL, MongoDB).
              Skilled in AWS & Azure cloud platforms for scalable, secure, and automated solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Platforms:</span>
              {databases.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
            <div className="flex-chips">
              <span className="chip-title">Cloud/DevOps:</span>
              {cloudDevOps.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
          </div>

          {/* 4. Data Science & Analytics */}
          <div className="skill">
            <FontAwesomeIcon icon={faChartLine} size="3x" />
            <h3 className="gradient-heading">Data Science & Analytics</h3>
            <p>
              Skilled in deriving insights through predictive modeling, causal inference, and feature engineering.
              Experienced with real-world analytics and optimization projects using statistical and ML approaches.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Core Areas:</span>
              {dataScience.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
            <div className="flex-chips">
              <span className="chip-title">Frameworks:</span>
              {frameworks.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
          </div>

          {/* 5. Big Data & Data Engineering */}
          <div className="skill">
            <FontAwesomeIcon icon={faProjectDiagram} size="3x" />
            <h3 className="gradient-heading">Big Data & Data Engineering</h3>
            <p>
              Experienced in scalable data pipelines, ETL workflows, and streaming using Spark, Kafka, and dbt.
              Adept at handling structured and unstructured data efficiently for analytics and ML workloads.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech Stack:</span>
              {dataEngineering.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
          </div>

          {/* 6. Tools, Core Concepts & Visualization */}
          <div className="skill">
            <FontAwesomeIcon icon={faCogs} size="3x" />
            <h3 className="gradient-heading">Core Concepts, Tools & Visualization</h3>
            <p>
              Strong foundation in software development and analytics with focus on clean architecture, testing, and agile execution.
              Skilled in turning complex datasets into clear visual insights using modern BI and plotting tools.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Concepts:</span>
              {coreConcepts.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
            <div className="flex-chips">
              <span className="chip-title">Tools/Visualization:</span>
              {toolsReporting.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
