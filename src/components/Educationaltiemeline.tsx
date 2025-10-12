import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Educationaltiemeline.scss';


function Educationaltiemeline() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>EDUCATIONAL HISTORY</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-educ-element--education"
            date="Dec 2025"
            iconStyle={{
              background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
              color: 'white'
            }}
            icon={<FontAwesomeIcon icon={faBookOpenReader} />}
          >
            <h3 className="vertical-timeline-element-title">Master of Science (M.S.) in Statistics - Data Science </h3>
            <h4 className="vertical-timeline-element-subtitle">Rutgers, the State University of New Jersey</h4>
            <div className="timeline-details">
                <ul>
            <li><strong>Relevant Coursework:</strong>Probability and Statistical Inference, Regression and Time Series Analysis, Data Wrangling, Deep Learning, Database Management Systems, Data Mining, Data Structures & Algorithms</li>
            </ul>
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-educ-element--education"
            date="Jun 2019"
            iconStyle={{
              background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
              color: 'white'
            }}
            icon={<FontAwesomeIcon icon={faBookOpenReader} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Technology in Computer Science </h3>
            <h4 className="vertical-timeline-element-subtitle">KLE Institute of Technology</h4>
            {/* <div className="timeline-details">
                <ul>
            <li><strong>Relevant Coursework:</strong>Probability and Statistical Inference, Regression and Time Series Analysis, Data Wrangling, Deep Learning, Database Management Systems, Data Mining, Data Structures & Algorithms</li>
            </ul>
            </div> */}
          </VerticalTimelineElement>
                
          
        </VerticalTimeline>


      </div>
    </div>
  );
}
export default Educationaltiemeline;
