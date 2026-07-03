chrome.runtime.onMessage.addListener((msg, sender) => {
    if (msg.type === "PHISHING_RESULT") {
        if (msg.value === 1 && sender.tab) {
            chrome.tabs.sendMessage(sender.tab.id, {
                type: "SHOW_PHISHING_WARNING",
                text: "⚠️ PHISHING WEBSITE DETECTED — Do NOT enter passwords or bank details!"
            });
        }
    }
});
