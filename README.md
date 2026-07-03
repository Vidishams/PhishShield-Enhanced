# 🛡️ PhishShield
### AI-Powered Real-Time Phishing Website Detection Chrome Extension

---

## Overview

PhishShield is an AI-powered Chrome extension that detects phishing websites in real time before users interact with them. Instead of relying solely on traditional blacklist-based detection, it combines machine learning, URL feature analysis, and Google Safe Browsing to identify both known and previously unseen phishing websites.

The extension analyzes website URLs, expands shortened links, evaluates structural features, and generates a risk score within seconds to protect users from credential theft, financial fraud, and malicious websites.

---

## Features

- Real-time phishing website detection
- URL feature analysis
- Shortened URL expansion (Bit.ly, TinyURL, etc.)
- AI-based phishing detection using Machine Learning
- Google Safe Browsing verification
- Instant warning alerts
- Lightweight Chrome Extension
- Secure user authentication with Firebase
- Detection history stored in Firebase Firestore

---

## Tech Stack

### Frontend
- React.js
- Chrome Extension API (Manifest V3)
- Tailwind CSS

### Backend
- FastAPI
- Python

### Machine Learning
- XGBoost

### Database & Cloud
- Firebase Authentication
- Firebase Firestore

### APIs
- Google Safe Browsing API

---

## System Architecture

```
User
   │
   ▼
Chrome Extension
   │
   ▼
URL Extraction
   │
   ▼
URL Unshortening
   │
   ▼
FastAPI Backend
   │
   ├── Google Safe Browsing API
   └── AI Detection Engine (BERT + XGBoost)
            │
            ▼
      Risk Score Generation
            │
            ▼
 Safe  / Phishing 
```

---

## Working Flow

1. User logs in using Firebase Authentication.
2. User visits a website.
3. PhishShield captures the URL.
4. Shortened URLs are expanded.
5. Website information is sent to the FastAPI backend.
6. Google Safe Browsing checks for known threats.
7. AI models analyze phishing indicators.
8. A risk score is generated.
9. The website is classified as **Safe** or **Phishing**.
10. Warning alerts are displayed if necessary.
11. Scan history is stored in Firebase Firestore.

---

## AI Detection Pipeline

```
Website URL
      │
      ▼
Extract URL Features
      │
      ▼
Google Safe Browsing
      │
      ▼
AI Detection Engine
(BERT + XGBoost)
      │
      ▼
Risk Score
      │
      ▼
Warning / Safe Result
```

---

## Machine Learning Models

### XGBoost

Used for phishing website classification based on URL and structural features such as:

- URL length
- Number of subdomains
- Presence of IP address
- Suspicious characters
- SSL certificate
- Domain-based features

---

### BERT

Used to analyze webpage text and detect suspicious phishing language patterns.

---

## Project Structure

```
PhishShield
│
├── frontend/
├── backend/
├── extension/
├── models/
├── README.md
└── requirements.txt
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Vidishams/PhishShield-Enhanced.git
cd PhishShield
```

### Install Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend

pip install -r requirements.txt

python server.py
```

---

## Load Chrome Extension

1. Open Chrome
2. Visit:

```
chrome://extensions
```

3. Enable **Developer Mode**
4. Click **Load unpacked**
5. Select the extension folder

The extension is now ready to detect phishing websites.

---

## Demo

https://drive.google.com/drive/folders/1TS5_8WgvVvPXJ7lYqHT_6LRswJXvu_R5?usp=sharing
---

## Future Improvements

- Dark mode
- Browser history analytics
- Domain reputation scoring
- Threat visualization dashboard
- Faster AI inference
- Multi-browser support
