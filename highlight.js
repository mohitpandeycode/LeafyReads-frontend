let isHighlightMode = false;
const highlightBtn = document.getElementById("highlightBtn");

// Toggle highlight mode on button click
highlightBtn.addEventListener("click", () => {
  isHighlightMode = !isHighlightMode;
  highlightBtn.style.backgroundColor = isHighlightMode ? "#f1c40f" : "#2c3e50";
});

// ✅ Toggle highlight mode using 'h' or 'H' key
document.addEventListener("keydown", (e) => {
  if (e.key === "h" || e.key === "H") {
    isHighlightMode = !isHighlightMode;
    highlightBtn.style.backgroundColor = isHighlightMode ? "#f1c40f" : "#2c3e50";
  }
});

// Apply highlight on selected text
document.addEventListener("mouseup", () => {
  if (!isHighlightMode) return;

  const selection = window.getSelection();
  if (!selection.toString()) return;

  const range = selection.getRangeAt(0);
  const span = document.createElement("span");
  span.className = "highlighted";
  range.surroundContents(span);
  selection.removeAllRanges();
});
