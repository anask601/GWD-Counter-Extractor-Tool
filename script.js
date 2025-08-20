function extractCounters() {
  const htmlInput = document.getElementById("htmlInput").value;
  const outputArea = document.getElementById("outputArea");
  const counterInfo = document.getElementById("counterInfo");
  const counterCount = document.getElementById("counterCount");
  const copyBtn = document.getElementById("copyBtn");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  // Hide previous messages
  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  if (!htmlInput.trim()) {
    errorMessage.textContent = "❌ Please paste some HTML code first.";
    errorMessage.style.display = "block";
    return;
  }

  // Create a temporary DOM element to parse the HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlInput;

  // Find all gwd-counter elements
  const counters = tempDiv.querySelectorAll("gwd-counter");

  if (counters.length === 0) {
    errorMessage.style.display = "block";
    counterInfo.style.display = "none";
    outputArea.value = "";
    copyBtn.disabled = true;
    return;
  }

  // Extract counter HTML
  let counterHTML = "";
  counters.forEach((counter, index) => {
    if (index > 0) counterHTML += "";
    counterHTML += counter.outerHTML;
  });

  // Update UI
  outputArea.value = counterHTML;
  counterCount.textContent = `Found ${counters.length} counter${
    counters.length !== 1 ? "s" : ""
  }`;
  counterInfo.style.display = "block";
  copyBtn.disabled = false;

  // Show success info
  successMessage.textContent = `✅ Successfully extracted ${counters.length} gwd-counter elements!`;
  successMessage.style.display = "block";
}

function copyToClipboard() {
  const outputArea = document.getElementById("outputArea");
  const successMessage = document.getElementById("successMessage");

  if (!outputArea.value) {
    return;
  }

  // Copy to clipboard
  outputArea.select();
  outputArea.setSelectionRange(0, 99999); // For mobile devices

  try {
    document.execCommand("copy");
    successMessage.textContent = "✅ Copied to clipboard successfully!";
    successMessage.style.display = "block";

    // Hide success message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  } catch (err) {
    console.error("Copy failed:", err);
  }
}

function clearAll() {
  document.getElementById("htmlInput").value = "";
  document.getElementById("outputArea").value = "";
  document.getElementById("counterInfo").style.display = "none";
  document.getElementById("copyBtn").disabled = true;
  document.getElementById("successMessage").style.display = "none";
  document.getElementById("errorMessage").style.display = "none";
}

// Allow keyboard shortcuts
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "Enter") {
    extractCounters();
  }
  if (
    e.ctrlKey &&
    e.key === "c" &&
    document.getElementById("outputArea").value
  ) {
    copyToClipboard();
  }
});

// Auto-extract when pasting
document.getElementById("htmlInput").addEventListener("paste", function () {
  setTimeout(() => {
    extractCounters();
  }, 100);
});
