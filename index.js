const triesBtn = document.getElementById("intentos-btn");
const timesBtn = document.getElementById("tiempos-btn");

triesBtn.onclick = () => {
  document.getElementById("score-tables-tries").style.display = "flex";
  document.getElementById("score-tables-time").style.display = "none";
  triesBtn.style.textDecoration = "underline";
  timesBtn.style.textDecoration = "none";
};

timesBtn.onclick = () => {
  document.getElementById("score-tables-time").style.display = "flex";
  document.getElementById("score-tables-tries").style.display = "none";
  timesBtn.style.textDecoration = "underline";
  triesBtn.style.textDecoration = "none";
};
