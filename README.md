#  PhishShield  
### *AI-Powered Real-Time Phishing Website Detection Chrome Extension*

---

##  Problem Statement

Phishing attacks are rapidly increasing through fake websites, malicious emails, and shortened links that appear identical to legitimate services. Attackers often send fraudulent emails containing phishing links that redirect users to fake websites designed to steal sensitive information such as login credentials, banking details, or personal data.

Users cannot easily identify these threats because phishing pages often perfectly mimic legitimate websites, and email messages are crafted to appear trustworthy.

Most existing security tools rely mainly on blacklists or static rules, which fail to detect new and zero-day phishing attacks and sophisticated email-based phishing campaigns.

As a result, users often fall victim to phishing attacks before the threat is detected.

---

##  Our Solution

PhishShield is a lightweight AI-powered Chrome extension designed to detect both phishing websites and phishing emails in real time.

The extension scans:

```
# Visited websites
# Email content and embedded links
# Shortened URLs
```

PhishShield expands shortened URLs, analyzes webpage structure and email content, and applies machine learning and NLP models (BERT + XGBoost) to identify phishing patterns within one second.

The system combines:
- AI-based phishing detection
- Google Safe Browsing verification
- URL feature analysis
- Risk score generation

to warn users before they click malicious links or enter sensitive information.

- This proactive approach helps protect users from:
- Email phishing campaigns
- Fake login pages
- Credential harvesting attacks
- Financial fraud websites

---

##  Features

-  Real-time website phishing detection  
-  Shortened URL expansion (bit.ly, tinyurl, etc.)  
-  AI-based detection (BERT + XGBoost)  
-  Instant warning alerts  
-  Lightweight (< 1 MB) Chrome extension  
-  Secure login using Firebase Authentication  
-  Threat history stored in Firebase Firestore

---

##  Technology Stack

### Frontend
- Chrome Extension API  
- React.js  
- Tailwind CSS  

### Backend & AI
- Python  
- FastAPI  
- BERT  
- XGBoost  

### Google Technologies
- Firebase Authentication  
- Firebase Firestore  
- Google Safe Browsing API  
- Google Chrome Extensions Ecosystem

---

##  System Architecture

```
User
 ↓
Chrome Browser
 ↓
PhishShield Extension
 ↓
URL / Email Link Extraction
 ↓
FastAPI Backend
 ↓
Google Safe Browsing Check
 ↓
AI Phishing Detection (BERT + XGBoost)
 ↓
Risk Score Generation
 ↓
Safe / Phishing Warning
```

---

## Project Working Flow

1. User logs in using Firebase Authentication  
2. User opens a website  
3. PhishShield captures the URL and page content  
4. Shortened URLs are expanded  
5. Data is sent to FastAPI backend  
6. AI models analyze phishing patterns  
7. Google Safe Browsing verifies known threats  
8. Site is classified as **Safe** or **Phishing**  
9. Warning is shown if phishing is detected  
10. Result is stored in Firebase Firestore

    

---

## Industry-Style Phishing Detection Pipeline
**Modern cybersecurity systems use multi-layer detection pipelines to detect phishing.**
```
Email / Website
      ↓
Extract Links
      ↓
1. Google Safe Browsing API
2. ML Phishing Detection Model
3. NLP Keyword / AI Analysis
      ↓
Risk Score
      ↓
Warn User
```

---

## AI Models Used
# BERT (Natural Language Processing)

Used to analyze email and webpage text content.
Detects phishing language patterns such as:
“Verify your account immediately”
“Click here to avoid suspension”
“Your bank account has been locked”

# XGBoost (Machine Learning Model)

Analyzes URL and structural website features, including:
URL length
Number of subdomains
Presence of IP address
Suspicious characters (@, -, //)
Domain age
SSL certificate presence
These features help detect phishing pages even when they look identical to real websites.

## Ensemble Learning for Phishing Detection

PhishShield experiments with multiple machine learning algorithms:
Neural Network
Random Forest
Support Vector Machine (SVM)
The best performing model is saved and used for real-time detection.

## Random Forest + Gradient Boosting for Email Phishing

- Random Forest and Gradient Boosting can form a powerful ensemble for phishing detection.
- Random Forest
- Strengths:
- Handles noisy datasets well
- Reduces overfitting
- Works well with structural URL features

## Strengths:

- Learns from mistakes of previous models
- Achieves higher prediction accuracy
- Captures complex phishing patterns
- Works well with:
- Email metadata
- Text features (TF-IDF)
- Domain reputation

---

## Project Working Flow

- User logs in using Firebase Authentication
- User opens a website or email
- PhishShield captures URL and email links
- Shortened URLs are expanded
- Data is sent to the FastAPI backend
- Google Safe Browsing API checks known threats
- AI models analyze phishing patterns
- A risk score is generated
- Website or email link is classified as Safe or Phishing
- Warning alert is shown if phishing is detected
- Detection result is stored in Firebase Firestore

---

##  How to Run the Project

# Step 1 – Clone the repository
git clone https://github.com/JeevithaR3/Phishield

# Step 2 – Go to project folder
cd Phishield

# Step 3 – Install dependencies
npm install

# Step 4 – Run the frontend
npm run dev

---
## Running the AI Phishing Detection Module

PhishShield includes a local engine that powers the real-time phishing detection.
To run the detection system, follow these steps:

# Step 1 – Navigate to the AI module
cd PhishShield_Extension

# Step 2 – Install Python dependencies
pip install pandas numpy scikit-learn joblib flask

# Step 3 – Train the phishing detection model
python run_algorithms.py

_This trains the Neural Network, Random Forest, and SVM models and saves the trained SVM as:_
svm_model.pkl

# Step 4 – Load the Chrome Extension
```
Open Chrome
Go to chrome://extensions
Enable Developer Mode
Click Load Unpacked
Select the PhishShield_Extension folder

# Step 4.1 – Load the Chrome Extension to detect phishing_emails
```
Open Chrome
Go to chrome://extensions
Enable Developer Mode
Click Load Unpacked
Select the phish_emails

The PhishShield icon will appear in the browser.

# Step 5 – Test phishing detection
Open any website.
If a phishing site is detected, PhishShield will show a warning banner.

---

## How to Run the URL Unshortener & Load the Chrome Extension
# Backend Setup (URL Unshortener Server)
Open a terminal and navigate to the project directory:
cd Phishield

cd backend

Start the backend server:
python server.py

Ensure the server is running successfully before proceeding.

---
## Email Phishing Detection Extension

To enable email phishing detection:
Load unpacked → phish_emails folder

# Load the Chrome Extension (Developer Mode)
Open Google Chrome

Navigate to:
chrome://extensions/

Enable Developer mode using the toggle in the top-right corner

Click Load unpacked

Select the extension folder from the Phishield project directory

The extension will now be loaded and ready to use

# Requirements
Python 3.x

Google Chrome (latest version recommended)

---

##  Demo
https://drive.google.com/drive/folders/1TS5_8WgvVvPXJ7lYqHT_6LRswJXvu_R5?usp=sharing

---

##  Impact

PhishShield helps protect:
Online banking users
E-commerce shoppers
Students and employees
Everyday internet users
From phishing, data theft, and financial fraud.

---

##  Team

PhishShield – Hackathon Project  
_Built for AI-powered cyber security_  

_Team Members:_  
- Jeevitha R  (Team Lead)
- Jeevitha L Shetty  
- Srividisha MS
- Morupuri Neha Reddy 
 


