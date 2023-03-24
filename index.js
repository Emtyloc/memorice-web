const triesBtn = document.getElementById("intentos-btn");
const timesBtn = document.getElementById("tiempos-btn");
const navBar = document.getElementById("top-nav-div");
const settingsBtn = document.getElementById("settings-btn");
const sideBar = document.getElementById("side-bar");
const cardsTable = document.getElementsByClassName("cards-table")[0];

triesBtn.onclick = () => {
  document.getElementById("score-tables-tries").classList.add("showing-table");
  document
    .getElementById("score-tables-tries")
    .classList.remove("hidding-table");

  document.getElementById("score-tables-time").classList.add("hidding-table");
  document
    .getElementById("score-tables-time")
    .classList.remove("showing-table");

  timesBtn.classList.remove("selected-table-btn");
  triesBtn.classList.add("selected-table-btn");
};

timesBtn.onclick = () => {
  document.getElementById("score-tables-time").classList.add("showing-table");
  document
    .getElementById("score-tables-time")
    .classList.remove("hidding-table");

  document.getElementById("score-tables-tries").classList.add("hidding-table");
  document
    .getElementById("score-tables-tries")
    .classList.remove("showing-table");

  triesBtn.classList.remove("selected-table-btn");
  timesBtn.classList.add("selected-table-btn");
};

navBar.onclick = () => {
  document.getElementById("config-nav-div").classList.toggle("open-settings");
  document.getElementById("config-nav-div").classList.toggle("close-settings");

  document.getElementById("config-nav-div").classList.contains("open-settings")
    ? (settingsBtn.innerText = "cerrar")
    : (settingsBtn.innerText = "configuracion");
};
