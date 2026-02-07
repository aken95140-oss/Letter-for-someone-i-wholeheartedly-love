const openBtn = document.getElementById("openBtn");
const paper = document.getElementById("paper");
const envelope = document.getElementById("envelope");

openBtn.addEventListener("click", () => {
  paper.classList.remove("hidden");
  envelope.style.display = "none";
});
