const triesBtn = document.getElementById("intentos-btn");
const timesBtn = document.getElementById("tiempos-btn");

triesBtn.onclick = () => {
  document.getElementById("score-tables-tries").style.display = "flex";
  document.getElementById("score-tables-time").style.display = "none";
};

timesBtn.onclick = () => {
  document.getElementById("score-tables-time").style.display = "flex";
  document.getElementById("score-tables-tries").style.display = "none";
};
