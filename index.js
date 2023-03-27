const triesBtn = document.getElementById("intentos-btn");
const timesBtn = document.getElementById("tiempos-btn");
const navBar = document.getElementById("top-nav-div");
const settingsBtn = document.getElementById("settings-btn");
const sideBar = document.getElementById("side-bar");
const modeX8btn = document.getElementById("mode-x8-btn");
const modeX18btn = document.getElementById("mode-x18-btn");
const modeX32btn = document.getElementById("mode-x32-btn");
const themeLightBtn = document.getElementById("theme-light-btn");
const themeDarkBtn = document.getElementById("theme-dark-btn");
const cardsTableX8 = document.getElementsByClassName("cards-table-x8")[0];
const cardsTableX18 = document.getElementsByClassName("cards-table-x18")[0];
const cardsTableX32 = document.getElementsByClassName("cards-table-x32")[0];
const figuresUp = document.getElementsByClassName("figure-up");
const figuresDown = document.getElementsByClassName("figure-down");
const exitNavDiv = document.getElementById("exit-nav-div");

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

  exitNavDiv.classList.toggle("hidden");
};

exitNavDiv.onclick = () => {
  document.getElementById("config-nav-div").classList.toggle("open-settings");
  document.getElementById("config-nav-div").classList.toggle("close-settings");

  document.getElementById("config-nav-div").classList.contains("open-settings")
    ? (settingsBtn.innerText = "cerrar")
    : (settingsBtn.innerText = "configuracion");

  exitNavDiv.classList.add("hidden");
};

sideBar.onclick = () => {
  alert("Gira la pantalla para las configuraciones ⚙️.");
};

modeX8btn.onclick = () => {
  modeX8btn.classList.add("selected-mode-btn");
  modeX18btn.classList.remove("selected-mode-btn");
  modeX32btn.classList.remove("selected-mode-btn");

  cardsTableX8.classList.remove("hidding-cards-table");
  cardsTableX18.classList.add("hidding-cards-table");
  cardsTableX32.classList.add("hidding-cards-table");

  cardsX8.forEach((card) => {
    card.classList.remove("flip");
    card.addEventListener("click", flipCard);
  });
  lockTable = true;
  //shuffle cards
  setTimeout(() => {
    arr = shuffleArray(16);
    let i = 0;
    cardsX8.forEach((card) => {
      card.style.order = arr[i];
      card.querySelector(".figure-down").innerText = card.style.order;
      i++;
    });
    turnCounters.forEach((counter) => (counter.innerText = "0"));
    lockTable = false;
  }, 1000);
};

modeX18btn.onclick = () => {
  modeX18btn.classList.add("selected-mode-btn");
  modeX8btn.classList.remove("selected-mode-btn");
  modeX32btn.classList.remove("selected-mode-btn");

  cardsTableX18.classList.remove("hidding-cards-table");
  cardsTableX8.classList.add("hidding-cards-table");
  cardsTableX32.classList.add("hidding-cards-table");

  cardsX18.forEach((card) => {
    card.classList.remove("flip");
    card.addEventListener("click", flipCard);
  });
  lockTable = true;
  //shuffle cards
  setTimeout(() => {
    arr = shuffleArray(36);
    let i = 0;
    cardsX18.forEach((card) => {
      card.style.order = arr[i];
      card.querySelector(".figure-down").innerText = card.style.order;
      i++;
    });
    turnCounters.forEach((counter) => (counter.innerText = "0"));
    lockTable = false;
  }, 1000);
};

modeX32btn.onclick = () => {
  modeX32btn.classList.add("selected-mode-btn");
  modeX8btn.classList.remove("selected-mode-btn");
  modeX18btn.classList.remove("selected-mode-btn");

  cardsTableX32.classList.remove("hidding-cards-table");
  cardsTableX8.classList.add("hidding-cards-table");
  cardsTableX18.classList.add("hidding-cards-table");

  cardsX32.forEach((card) => {
    card.classList.remove("flip");
    card.addEventListener("click", flipCard);
  });
  lockTable = true;
  //shuffle cards
  setTimeout(() => {
    arr = shuffleArray(64);
    let i = 0;
    cardsX32.forEach((card) => {
      card.style.order = arr[i];
      card.querySelector(".figure-down").innerText = card.style.order;
      i++;
    });
    turnCounters.forEach((counter) => (counter.innerText = "0"));
    lockTable = false;
  }, 1000);
};

themeLightBtn.onclick = () => {
  themeLightBtn.classList.add("selected-theme-btn");
  themeDarkBtn.classList.remove("selected-theme-btn");
  document.getElementsByTagName("nav")[0].classList.remove("dark-theme");
  document.getElementById("creditos").classList.remove("dark-theme");
  sideBar.classList.remove("dark-theme");
  document.getElementsByTagName("body")[0].classList.remove("dark-theme");
  Array.prototype.forEach.call(figuresUp, function (figure) {
    figure.classList.remove("dark-theme");
  });
  Array.prototype.forEach.call(figuresDown, function (figure) {
    figure.classList.remove("dark-theme");
  });
};

themeDarkBtn.onclick = () => {
  themeDarkBtn.classList.add("selected-theme-btn");
  themeLightBtn.classList.remove("selected-theme-btn");
  document.getElementsByTagName("nav")[0].classList.add("dark-theme");
  document.getElementById("creditos").classList.add("dark-theme");
  sideBar.classList.add("dark-theme");
  document.getElementsByTagName("body")[0].classList.add("dark-theme");
  Array.prototype.forEach.call(figuresUp, function (figure) {
    figure.classList.add("dark-theme");
  });
  Array.prototype.forEach.call(figuresDown, function (figure) {
    figure.classList.add("dark-theme");
  });
};
