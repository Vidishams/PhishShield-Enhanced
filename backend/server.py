from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import re

app = Flask(__name__)
CORS(app)  # Enable CORS so Chrome Extension can access this backend

# Extract URL from text
def extract_url(text):
    urls = re.findall(r'(https?://\S+)', text)
    return urls[0] if urls else None

# Unshorten the extracted URL
def unshorten_url(url, timeout=10):
    headers = { "User-Agent": "Mozilla/5.0" }
    try:
        response = requests.get(url, allow_redirects=True, timeout=timeout, headers=headers)
        return response.url
    except requests.RequestException as e:
        print(f"[ERROR] Could not unshorten {url}: {e}")
        return url

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    message = data.get("message", "")
    url = extract_url(message)
    final_url = unshorten_url(url) if url else None
    return jsonify({ "unshortened_url": final_url or "No URL found" })

if __name__ == "__main__":
    app.run(debug=True, port=5000)
