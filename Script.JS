document.addEventListener("DOMContentLoaded", function () {
  const bgColorInput = document.getElementById("bgColor");
  const saveBtn = document.getElementById("saveBtn");
  const animateBtn = document.getElementById("animateBtn");
  const box = document.getElementById("box");

  // Load background preference from localStorage
  const savedColor = localStorage.getItem("bgColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    bgColorInput.value = savedColor;
  }

  // Save user preference to localStorage
  saveBtn.addEventListener("click", function () {
    const selectedColor = bgColorInput.value;
    localStorage.setItem("bgColor", selectedColor);
    document.body.style.backgroundColor = selectedColor;
    alert("Background color saved!");
  });

  // Animate box on button click
  animateBtn.addEventListener("click", function () {
    box.classList.remove("animate"); // Reset animation
    void box.offsetWidth; // Force reflow to restart animation
    box.classList.add("animate");
  });
});
