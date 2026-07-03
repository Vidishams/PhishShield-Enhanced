console.log("🛡 Phishing Detective Loaded");

// ===================== ML MODEL =====================

function predict(data) {
    var weight = [
        3.33346292e-01, -1.11200396e-01, -7.77821806e-01, 1.11058590e-01,
        3.89430647e-01, 1.99992062e+00, 4.44366975e-01, -2.77951957e-01,
        -6.00531647e-05, 3.33200243e-01, 2.66644002e+00, 6.66735991e-01,
        5.55496098e-01, 5.57022408e-02, 2.22225591e-01, -1.66678858e-01
    ];

    var f = 0;
    for (var j = 0; j < data.length; j++) {
        f += data[j] * weight[j];
    }
    return f > 0 ? 1 : -1;
}

// ================= URL FEATURES =================

function isIPInURL(){ return /\d+\.\d+\.\d+\.\d+/.test(location.href) ? 1 : -1; }
function isLongURL(){ let l = location.href.length; return l>75?1:(l>=54?0:-1); }
function isTinyURL(){ return location.href.length<20?1:-1; }
function isAlphaNumericURL(){ return location.href.includes("@")?1:-1; }
function isRedirectingURL(){ return location.href.indexOf("//",8)!==-1?1:-1; }
function isHypenURL(){ return location.href.includes("-")?1:-1; }
function isMultiDomainURL(){ return location.hostname.split(".").length>4?1:-1; }
function isFaviconDomainUnidentical(){
    var i=document.querySelector("link[rel*='icon']");
    if(!i) return -1;
    return i.href.includes(location.hostname)?-1:1;
}
function isIllegalHttpsURL(){ return location.href.includes("https")?-1:1; }
function isImgFromDifferentDomain(){ return document.images.length>0?1:-1; }
function isAnchorFromDifferentDomain(){ return document.links.length>0?1:-1; }
function isScLnkFromDifferentDomain(){ return document.scripts.length>0?1:-1; }
function isFormActionInvalid(){ return document.forms.length>0?1:-1; }
function isMailToAvailable(){ return document.querySelector("a[href^='mailto']")?1:-1; }
function isStatusBarTampered(){ return document.querySelector("a[onmouseover],a[onclick]")?1:-1; }
function isIframePresent(){ return document.querySelector("iframe")?1:-1; }

// ================= RUN MODEL =================

var testdata = [
    isIPInURL(),isLongURL(),isTinyURL(),isAlphaNumericURL(),isRedirectingURL(),
    isHypenURL(),isMultiDomainURL(),isFaviconDomainUnidentical(),isIllegalHttpsURL(),
    isImgFromDifferentDomain(),isAnchorFromDifferentDomain(),isScLnkFromDifferentDomain(),
    isFormActionInvalid(),isMailToAvailable(),isStatusBarTampered(),isIframePresent()
];

var prediction = predict(testdata);

// Send result to background
chrome.runtime.sendMessage({
    type: "PHISHING_RESULT",
    value: prediction
});

// Receive warning and show UI
chrome.runtime.onMessage.addListener((msg) => {
    if (msg.type === "SHOW_PHISHING_WARNING") {
        showWarning(msg.text);
    }
});

// Beautiful red warning banner
function showWarning(text) {
    if (document.getElementById("phish-warning")) return;

    var div = document.createElement("div");
    div.id = "phish-warning";
    div.style = `
        position:fixed;
        top:0;
        left:0;
        width:100%;
        background:linear-gradient(90deg,#ff0000,#b30000);
        color:white;
        padding:15px;
        font-size:18px;
        text-align:center;
        z-index:999999;
        box-shadow:0 4px 10px rgba(0,0,0,0.4);
        font-family:Arial;
    `;
    div.innerHTML = "⚠ " + text + " <span style='float:right;cursor:pointer;margin-right:20px' onclick='this.parentElement.remove()'>✖</span>";
    document.body.appendChild(div);
}
