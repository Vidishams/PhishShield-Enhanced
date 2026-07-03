from urllib.parse import urlparse

def get_domain_reputation(url):
    """
    Returns a dummy domain reputation: 'malicious' or 'safe'.
    Replace with real logic or API integration as needed.
    """
    parsed = urlparse(url)
    domain = parsed.netloc.lower()

    bad_domains = [
        "malicious.com",
        "phishingsite.xyz",
        "badlogin.site",
        "fakebank.cc"
    ]

    return "malicious" if any(bad in domain for bad in bad_domains) else "safe"
