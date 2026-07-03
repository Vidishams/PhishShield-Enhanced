import requests

def unshorten_url(url, timeout=10):
    headers = { "User-Agent": "Mozilla/5.0" }
    try:
        response = requests.get(url, allow_redirects=True, timeout=timeout, headers=headers)
        return response.url
    except requests.RequestException as e:
        print(f"[ERROR] Could not unshorten {url}: {e}")
        return url
