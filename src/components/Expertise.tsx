import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faChartLine, faCube, faProjectDiagram, faChartBar } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { motion } from "framer-motion";

const labelsFirst = [
    "Snowflake",
    "MySQL",
    "PostgreSQL",
    "MongoDB"
];

const labelsSecond = [
  "Causal Inference",
  "Predictive Modelling",
  "A/B Testing",
  "Time Series Analysis",
  "Feature Engineering",
  "Data Standardization",
  "Product Analytics",
  "Model Optimization",
  "Model Training",
];


const labelsThird = [
    "Python",
    "C++",
    "C",
    "R",
    "SQL",
];
const labelsFourth = [
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "TensorFlow",
  "PyTorch",
  "PySpark",
];

const labelsFifth = [
  "Apache Spark",
  "Apache Kafka",
  "dbt",
  "ETL Pipelines",
  "Docker",
  "Terraform",
];
const labelsSixth = [
  "Tableau",
  "Power BI",
  "Seaborn",
  "Matplotlib",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3 className="gradient-heading">
                      Database and Cloud Technologies </h3>
                    <div className="space-y-2 text-gray-900 dark:text-gray-100"> 
                        {[
                             "Designed and optimized databases using SQL and NoSQL systems such as MySQL, PostgreSQL, and MongoDB.",
                             "Developed, managed, and deployed scalable applications on AWS and Azure cloud environments.",
                             "Leveraged cloud services for storage, compute, and automation to enhance performance and reliability.",
                             "Implemented best practices in data management and system design to ensure security, scalability, and efficiency."
                            ] .map((text, index) => (
                            <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="leading-relaxed"
                            >
                                {text}
                                </motion.p>
                            ))}

                    </div>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>



                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x" />
                         <h3 className="gradient-heading">
                            Data Science & Analytics</h3>
                            <p>  Skilled in uncovering insights and driving data-informed decisions through statistical analysis, 
                                predictive modeling, and experimentation. Experienced in feature engineering, model training, and 
                                optimization for real-world applications including product analytics and time-series forecasting.
                                </p>
                                <div className="flex-chips">
                                    <span className="chip-title">Core areas:</span>
                                    {labelsSecond.map((label, index) => (
                                        <Chip key={index} className="chip" label={label} />
                                        ))}
                                </div>
                    </div>



                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3 className="gradient-heading">
                        Programming Languages</h3>
                    <p>Proficient in multiple programming languages including Python, C++, C, R and SQL.
                       I focus on writing clean, efficient, and scalable code for applications across different domains.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>



                <div className="skill">
                    <FontAwesomeIcon icon={faCube} size="3x" />
                     <h3 className="gradient-heading">
                        Frameworks & Libraries</h3>
                     <p>
                        Experienced in leveraging powerful data science and machine learning frameworks 
                        for building, training, and deploying high-performance analytical models and pipelines.
                         </p>
                         <div className="flex-chips">
                            <span className="chip-title">Libraries:</span>
                            {labelsFourth.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />))}
                         </div>
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faProjectDiagram} size="3x" />
                    <h3 className="gradient-heading">
                        Big Data & Data Engineering</h3>
                    <p>
                        Experienced in building scalable data pipelines and engineering solutions using big data technologies. 
                        Skilled in streaming, batch processing, ETL workflows, containerization, and infrastructure automation.
                        </p>
                        <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFifth.map((label, index) => (
                            <Chip key={index} className="chip" label={label} />))}
                        </div>
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faChartBar} size="3x" />
                    <h3 className="gradient-heading">
                        Visualization & Reporting</h3>
                    <p>
                        Skilled in transforming complex datasets into intuitive visual insights. Experienced in creating dashboards 
                        and reports using Tableau, Power BI, and Python visualization libraries for data-driven decision making.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />))}
                        </div>
                </div>


            </div>
        </div>
    </div>
    );
}
export default Expertise;

