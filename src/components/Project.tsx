import React from "react";
import mock_employee from '../assets/images/mock_employee.png';
import mock_fakenews from '../assets/images/mock_fakenews.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.png';
import mock03 from '../assets/images/mock03.png';
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
                <a href="https://github.com/Gleek231997/fake-news-detector" target="_blank" rel="noreferrer"><img src={mock_fakenews} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Gleek231997/fake-news-detector" target="_blank" rel="noreferrer"><h2>Fake News Detector</h2></a>
                <p>This project predicts whether a given news headline or article is Real or Fake using a trained machine learning model.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Gleek231997/Employee-Attrition" target="_blank" rel="noreferrer"><img src={mock_employee} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Gleek231997/Employee-Attrition" target="_blank" rel="noreferrer"><h2>Employee Attrition Prediction</h2></a>
                <p>Predict employee attrition using a Random Forest Classifier trained on the “Attrition of an Employee” Kaggle dataset, leveraging key HR features to forecast whether an employee is likely to leave the organization.</p>
            </div> 
            <div className="project">
                <a href="https://github.com/Gleek231997/Causal-Inference" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Gleek231997/Causal-Inference" target="_blank" rel="noreferrer"><h2>Growth Mindset Intervention — Causal Inference </h2></a>
                <p>Estimates the causal impact of a brief growth-mindset intervention on student achievement using synthetic NSLM-style data (~10k students). Propensity scores were modeled to apply IPW and AIPW methods, showing a positive and statistically significant effect on achievement (ATE greater than 0), robust across both estimators.</p>
            </div> 
            <div className="project">
                <a href="https://github.com/Gleek231997/Rethinking-Generalisation" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Gleek231997/Rethinking-Generalisation" target="_blank" rel="noreferrer"><h2>Rethinking-Generalisation (Data Mining)</h2></a>
                <p>Reproducible study exploring why deep neural networks generalize well despite being highly over-parameterized. Re-implements key experiments from “Understanding Deep Learning Requires Rethinking Generalization” (Zhang et al., 2017) to analyze memorization vs. generalization, the effects of explicit (dropout, weight decay) and implicit (optimizer, architecture) regularization, and how data structure influences model robustness.</p>
            </div> 
            <div className="project">
                <a href="https://github.com/Gleek231997/Advanced-Database" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Gleek231997/Advanced-Database" target="_blank" rel="noreferrer"><h2>Twitter Search Engine</h2></a>
                <p>A Flask-based web app that lets users search tweets by keywords, usernames, and hashtags using both MongoDB and PostgreSQL for efficient storage and retrieval. It features indexed databases, preprocessing pipelines, and caching for fast performance, combining a clean UI with robust backend architecture.</p>
            </div> 
        </div>
    </div>
    );
}

export default Project;