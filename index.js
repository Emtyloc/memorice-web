const triesBtn = document.getElementById("intentos-btn");
const timesBtn = document.getElementById("tiempos-btn");

triesBtn.onclick = () => {
  document.getElementById("score-tables-tries").style.display = "flex";
  document.getElementById("score-tables-time").style.display = "none";
  if (timesBtn.classList.contains("selected-table-btn")) {
    timesBtn.classList.remove("selected-table-btn");
  }
  if (!triesBtn.classList.contains("selected-table-btn"))
    triesBtn.classList.add("selected-table-btn");
};

timesBtn.onclick = () => {
  document.getElementById("score-tables-time").style.display = "flex";
  document.getElementById("score-tables-tries").style.display = "none";
  if (triesBtn.classList.contains("selected-table-btn")) {
    triesBtn.classList.remove("selected-table-btn");
  }
  if (!timesBtn.classList.contains("selected-table-btn"))
    timesBtn.classList.add("selected-table-btn");
};
