document.getElementById("checkBtn").addEventListener("click", () => {
  const userInput = document.getElementById("urlInput").value;

  fetch("http://localhost:5000/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userInput })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").textContent = "Unshortened URL: " + data.unshortened_url +"    " + "Shortened link verified!";
    })
    .catch(err => {
      document.getElementById("result").textContent = "❌ Failed to connect to backend.";
      console.error("Error:", err);
    });
});
