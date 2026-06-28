# Monitoring Dashboard

## Domain

DevOps  
Cyber Security

---

## Objective

To build a Monitoring Dashboard that provides a centralized view of system monitoring and security-related information through a simple web interface.

---

## Product Description

The Monitoring Dashboard is a full-stack web application that displays important system information such as resource usage, service status, logs, and security alerts.

The goal is to provide users with a quick overview of system health and security status.

---

# Technologies Used

## Frontend

- React
- Vite
- JavaScript
- HTML
- CSS

## Backend

- Python
- Flask
- REST API

## DevOps

- Docker
- Docker Compose
- Kubernetes

## Development Environment

- Visual Studio Code
- Node.js
- npm

---

# Features Implemented

## Monitoring Dashboard UI

Implemented dashboard sections:

- CPU Usage
- Memory Usage
- Disk Usage
- Network Usage
- Service Status
- System Logs
- Security Alerts
- Threat Level
- Running Processes

---

## Backend API

Implemented Flask backend API for dashboard data.

API Endpoint:

GET /api/dashboard

Provides:

- CPU usage
- Memory usage
- Disk information
- Network statistics
- Process information
- Service status
- Logs
- Alerts

---

# Docker Implementation

Application is containerized using Docker.

Implemented:

- Backend Docker container
- Frontend Docker container
- Docker Compose configuration

Run application:

docker compose up --build



# Kubernetes Deployment

Application is deployed using Kubernetes.

Implemented:

- Backend Deployment
- Frontend Deployment
- Kubernetes Services

Useful commands:

kubectl get pods

kubectl get svc

kubectl logs <pod-name>

---

# Project Structure

monitoring-dashboard/

├── backend/

├── frontend/

├── docker-compose.yml

├── kubernetes/

└── README.md



# Current Project Status

## Completed 

- React dashboard UI
- Flask backend API
- API integration
- Docker containerization
- Docker Compose setup
- Kubernetes deployment

## In Progress 

- Improving dashboard features
- Adding real-time monitoring data
- Improving Kubernetes monitoring
- Public deployment


# Future Improvements

- Add Prometheus monitoring
- Integrate Grafana visualization
- Add database support
- Improve security monitoring
- Deploy application publicly
