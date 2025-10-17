import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock_fakenews.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Gleek231997/Breast-Cancer-Prediction" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Gleek231997/Breast-Cancer-Prediction" target="_blank" rel="noreferrer"><h2>Breast Cancer Prediction</h2></a>
                <p>Predict whether a tumor is malignant or benign using a pre-trained machine learning model. This project uses selected features from the Wisconsin Breast Cancer Dataset and a Random Forest Classifier to provide accurate predictions.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Gleek231997/fake-news-detector" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Gleek231997/fake-news-detector" target="_blank" rel="noreferrer"><h2>Fake News Detector</h2></a>
                <p>This project predicts whether a given news headline or article is Real or Fake using a trained machine learning model.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;