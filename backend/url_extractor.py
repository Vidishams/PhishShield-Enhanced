import re

def extract_url(text):
    urls = re.findall(r'(https?://\S+)', text)
    return urls[0] if urls else None
