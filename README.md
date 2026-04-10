Smart Transformer Health Monitoring System

An Industrial IoT + Machine Learning-based predictive maintenance system that monitors transformer parameters and predicts failure probability in real-time.

It combines AI, IoT concepts, and full-stack web development to enable intelligent monitoring and preventive maintenance of power transformers.

📌 Overview

The system analyzes key transformer parameters such as:

Temperature
Voltage
Current
RPM
Torque
Oil Level

and provides:

⚡ Health Score prediction
⚠️ Failure probability estimation
🔧 Predictive maintenance insights

A React-based dashboard visualizes real-time data, while a Flask backend handles ML predictions and API services.

🎯 Objectives
Design an intelligent transformer monitoring system using IoT concepts
Analyze transformer operational parameters
Develop ML models for failure prediction
Build a real-time monitoring dashboard
Implement Flask API for prediction services
Simulate real-time sensor data using datasets
Demonstrate predictive maintenance in industrial systems
🏗️ System Architecture
🔹 Data Layer
Transformer dataset
Simulated real-time sensor data
🔹 Machine Learning Layer
Data preprocessing
Feature engineering
Model training (Random Forest / XGBoost)
Failure prediction
🔹 Backend Layer
Flask REST API
Model loading & inference
Data processing services
🔹 Frontend Layer
React.js dashboard
Real-time graphs
Alert visualization
⚙️ Features
📊 Real-time transformer parameter monitoring
🤖 Machine learning-based failure prediction
❤️ Health score estimation
📈 Interactive graphs & dashboards
🚨 Smart alert system for abnormal conditions
🔄 Simulated sensor data streaming
🛠️ Tech Stack
🔹 Frontend
React.js
Chart.js / Recharts
Tailwind CSS
🔹 Backend
Flask
Python
🔹 Machine Learning
Scikit-learn
Random Forest / XGBoost
Pandas, NumPy
🔹 Future Hardware Integration
ESP32
IoT Sensors
📂 Dataset

The system uses a transformer predictive maintenance dataset containing:

Temperature
Voltage
Current
Torque
Rotational Speed (RPM)
Oil Level

These features are used for training ML models and simulating real-time sensor inputs.

🔄 System Workflow
Collect transformer data (dataset / sensors)
Send data to Flask API
Backend processes and loads ML model
Model predicts health & failure probability
Results sent to frontend
Dashboard displays visualization & alerts
📊 Results
🧠 Model Performance

(Add your metrics here if available)

Accuracy: XX%
Precision: XX%
Recall: XX%
F1-Score: XX%
📸 Output Screenshots
📊 Dashboard View

📉 Real-Time Monitoring

⚠️ Failure Prediction Alert

📈 Graph Analysis

⚠️ Replace image paths with your actual uploaded image names in GitHub repo.

🚀 Future Improvements
Integration with real IoT sensors (ESP32 / Arduino)
Cloud deployment (AWS / Azure IoT)
Deep Learning-based prediction models
SMS/Email alert system
Edge AI deployment for real-time inference
👩‍💻 Author

Laxmipriya Rout
AI / Machine Learning Enthusiast

🔗 GitHub: laxmipriya-345

🔗 LinkedIn: Profile

📜 License

This project is licensed under the MIT License
