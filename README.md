Smart Transformer Health Monitoring System
Project Description

The Smart Transformer Health Monitoring System is an Industrial IoT-based predictive maintenance platform designed to monitor transformer conditions and predict potential failures using Machine Learning.

The system collects transformer parameters such as temperature, voltage, current, rotational speed (RPM), torque, and oil level and analyzes them using a trained Machine Learning model. The model predicts the health score and failure probability of the transformer.

A React-based dashboard displays real-time monitoring graphs and prediction results, while a Flask backend API processes data and interacts with the Machine Learning model.

Since real transformer hardware sensors were unavailable during development, a historical transformer dataset was used to simulate real-time sensor data.

The system demonstrates how AI, IoT, and Web Technologies can be integrated to build an intelligent predictive maintenance system for power infrastructure.

Objectives

The main objectives of this project are:

To design a smart monitoring system for power transformers using IoT concepts.

To collect and analyze transformer operational parameters such as temperature, voltage, current, RPM, torque, and oil level.

To develop a Machine Learning model that predicts transformer health condition and failure probability.

To build a real-time monitoring dashboard using React for visualization of sensor data.

To implement a Flask API backend for handling sensor data and ML predictions.

To simulate real-time transformer data using a historical dataset when hardware sensors are unavailable.

To demonstrate the concept of predictive maintenance in industrial systems.

System Architecture

The system consists of the following components:

Data Layer

Transformer operational dataset

Simulated real-time sensor data

Machine Learning Layer

Data preprocessing

Model training (Random Forest / XGBoost)

Failure probability prediction

Backend Layer

Flask REST API

ML model integration

Data processing and prediction service

Frontend Layer

React dashboard

Real-time sensor monitoring

Graph visualization

Health score and alert system

Features

Real-time transformer parameter monitoring

Machine learning-based failure prediction

Health score and risk level detection

Interactive monitoring dashboard

Sensor trend graphs

Alert system for abnormal conditions

Technologies Used
Frontend

React.js

Chart.js / Recharts

CSS / Tailwind

Backend

Flask

Python

Machine Learning

Scikit-learn

Random Forest / XGBoost

Pandas

NumPy

Hardware (Future Integration)

ESP32

IoT Sensors

Dataset

The project uses a transformer predictive maintenance dataset containing operational parameters such as:

Temperature

Voltage

Current

Torque

Rotational Speed

Oil Level

The dataset is used to simulate real-time transformer sensor data for model training and prediction.

System Workflow

Transformer operational data is collected from sensors or dataset.

Data is sent to the Flask backend API.

The backend loads the trained ML model.

The ML model predicts the health condition and failure probability.

Results are sent to the React dashboard.

The dashboard displays monitoring graphs and system alerts.

Future Improvements

Integration with real IoT hardware sensors

Deployment on cloud IoT platforms

Implementation of deep learning models

Real-time alert notifications (SMS/Email)

Edge AI deployment for faster predictions

Author

Laxmipriya Rout

AI / Machine Learning Project
