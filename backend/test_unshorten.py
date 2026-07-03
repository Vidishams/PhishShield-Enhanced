import requests

def unshorten_url(url):
    headers = {
        "User-Agent": "Mozilla/5.0"
    }
    try:
        response = requests.get(url, allow_redirects=True, timeout=10, headers=headers)
        return response.url
    except Exception as e:
        return f"[ERROR] {e}"

# Test with tinyurl
url = "https://tinyurl.com/y3kbn9v7"
final_url = unshorten_url(url)
print("Unshortened URL:", final_url)
