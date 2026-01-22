# 🐳 Dockerized Python Tic Tac Toe Web Application

## 📌 Overview
This project is a **Dockerized Python web application** built with Flask.  
It demonstrates how to containerize a simple Python app for consistent development, testing, and deployment.

It’s designed as a **beginner-friendly DevOps project** to help you understand:
- How Docker works with Python  
- How to write a Dockerfile  
- How to build and run containers  
- How to ship apps in a portable way  

---

## 🚀 Project Highlights
- Simple Flask-based Tic Tac Toe web app  
- Fully Dockerized for portability  
- Works locally with or without Docker  
- Clean project structure  
- Beginner-friendly DevOps example  

---

## ✨ Features
- Runs inside a Docker container  
- Accessible in your browser via `http://localhost:5000`  
- Lightweight and easy to customize  
- Ready for CI/CD and cloud deployment  

---

## 📦 Prerequisites

### For Local (Python Only)
- Python 3.8+  
- Flask  
- pip  

### For Docker Run
- Docker installed  
- Docker Hub account (optional, for pushing images)  

---

## 🧪 Run Locally (Python Only)

```bash
git clone https://github.com/thedevopsguide/tic-tac-toe-web.git
cd tic-tac-toe-web

python3 -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows

pip install -r requirements.txt
python app.py
````

Then open your browser and visit:

```
http://localhost:5000
```

---

## 🐳 Run with Docker

### 1️⃣ Build the Docker Image

```bash
docker build -t tic-tac-toe-web .
```

### 2️⃣ Run the Container

```bash
docker run -p 5000:5000 tic-tac-toe-web
```

Open in browser:

```
http://localhost:5000
```

---

## 📂 Project Structure

```text
tic-tac-toe-web/
├── app.py
├── requirements.txt
├── Dockerfile
├── templates/
│   └── index.html
└── static/
    └── style.css
```

---

## 📖 Full Step-by-Step Guide

Want a **complete walkthrough** with:

* Writing the Dockerfile
* Explaining each Dockerfile instruction
* Building & pushing the image to Docker Hub
* Running the app in Docker

👉 **Read the full blog here:**
[https://thedevopsguide.in/devops-project-for-beginners-docker-python/](https://thedevopsguide.in/devops-project-for-beginners-docker-python/)


