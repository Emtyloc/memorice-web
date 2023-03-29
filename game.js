const cards = document.querySelectorAll(".card");
const cardsX8 = document.querySelectorAll(".cards-table-x8 .card");
const cardsX18 = document.querySelectorAll(".cards-table-x18 .card");
const cardsX32 = document.querySelectorAll(".cards-table-x32 .card");
const turnCounters = document.querySelectorAll(".turn-counter");
const timers = document.querySelectorAll(".time-counter");
const tryTableX32 = document.getElementById("try-table-x32");
const tryTableX18 = document.getElementById("try-table-x18");
const tryTableX8 = document.getElementById("try-table-x8");
const timeTableX32 = document.getElementById("time-table-x32");
const timeTableX18 = document.getElementById("time-table-x18");
const timeTableX8 = document.getElementById("time-table-x8");

let flippedCard = false;
let lockTable = false;
let newGame = false;
let gameModes = { x8: 8, x18: 18, x32: 32 };
let gameMode = gameModes.x8;
let pairsCounter = 0;
let firstCard, secondCard, seconds, runningTimer;

//function to flip card and detect if is first or second card
function flipCard() {
  if (lockTable) return;
  if (this === firstCard) return;
  if (!newGame) startTimer();

  this.classList.add("flip");

  //if flippedCard == false then is the first card
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }
  //else is the second card and we check for a match
  secondCard = this;

  checkForMatch();
}

//check if the cards are pairs, if they are then disabled them,
// else flip them back.
function checkForMatch() {
  //count turns
  turnCounters.forEach((counter) => {
    let n = parseInt(counter.innerText) + 1;
    counter.innerText = n.toString();
  });

  let isMatch = firstCard.dataset.icon === secondCard.dataset.icon;
  isMatch ? disableCards() : unflipCards();
}

//remove click actions for paired cards.
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  pairsCounter++;
  if (pairsCounter === gameMode) youWin();

  resetTable();
}

//flip cards back after 1.2 seconds.
function unflipCards() {
  lockTable = true;
  setTimeout(() => navigator.vibrate([50, 30, 50]), 400);
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetTable();
  }, 1000);
}

//set default values for flippedCard and lockTable,
// and reset first and second Cards values to null
function resetTable() {
  [flippedCard, lockTable] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffleArray(lenght) {
  return Array.from(Array(lenght).keys())
    .map((n) => n + 1)
    .sort(() => Math.random() - 0.5);
}

(function shuffle() {
  arr = shuffleArray(16);
  let i = 0;
  cardsX8.forEach((card) => {
    card.style.order = arr[i];
    card.querySelector(".figure-down").innerText = card.style.order;
    i++;
  });
})();

function startTimer() {
  newGame = true;
  seconds = 0;

  function incrementSeconds() {
    timers.forEach((timer) => (timer.innerText = seconds.toString()));
    seconds++;
  }

  runningTimer = setInterval(incrementSeconds, 1000);
  incrementSeconds();
}

function youWin() {
  saveScores();
  sortTables();
  saveTableData("try-table-x8");
  saveTableData("try-table-x18");
  saveTableData("try-table-x32");
  saveTableData("time-table-x32");
  saveTableData("time-table-x18");
  saveTableData("time-table-x8");
  setTimeout(() => alert("Ganaste el modo x" + gameMode.toString() + "!"), 500);
  clearInterval(runningTimer);
}

function saveScores() {
  let today, row, cell1, cell2, cell3;
  switch (gameMode) {
    case 32:
      today = new Date();
      row = tryTableX32.querySelector("tbody").insertRow();
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell3 = row.insertCell(2);
      cell1.innerHTML = "Tu";
      cell2.innerHTML = turnCounters[0].innerText;
      cell3.innerHTML =
        String(today.getDate()).padStart(2, "0") +
        "/" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "/" +
        today.getFullYear();
      today = new Date();
      row = timeTableX32.querySelector("tbody").insertRow();
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell3 = row.insertCell(2);
      cell1.innerHTML = "Tu";
      cell2.innerHTML = String(seconds - 1);
      cell3.innerHTML =
        String(today.getDate()).padStart(2, "0") +
        "/" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "/" +
        today.getFullYear();
      break;
    case 18:
      today = new Date();
      row = tryTableX18.querySelector("tbody").insertRow();
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell3 = row.insertCell(2);
      cell1.innerHTML = "Tu";
      cell2.innerHTML = turnCounters[0].innerText;
      cell3.innerHTML =
        String(today.getDate()).padStart(2, "0") +
        "/" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "/" +
        today.getFullYear();
      today = new Date();
      row = timeTableX18.querySelector("tbody").insertRow();
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell3 = row.insertCell(2);
      cell1.innerHTML = "Tu";
      cell2.innerHTML = String(seconds - 1);
      cell3.innerHTML =
        String(today.getDate()).padStart(2, "0") +
        "/" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "/" +
        today.getFullYear();
      break;
    case 8:
      today = new Date();
      row = tryTableX8.querySelector("tbody").insertRow();
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell3 = row.insertCell(2);
      cell1.innerHTML = "Tu";
      cell2.innerHTML = turnCounters[0].innerText;
      cell3.innerHTML =
        String(today.getDate()).padStart(2, "0") +
        "/" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "/" +
        today.getFullYear();
      today = new Date();
      row = timeTableX8.querySelector("tbody").insertRow();
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell3 = row.insertCell(2);
      cell1.innerHTML = "Tu";
      cell2.innerHTML = String(seconds - 1);
      cell3.innerHTML =
        String(today.getDate()).padStart(2, "0") +
        "/" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "/" +
        today.getFullYear();
      break;
    default:
      console.log("NO ENTRO A NINGUN CASO PARA GUARDAR SCORES!");
      break;
  }
}

function sortTables() {
  let timeRowsX32 = Array.from(timeTableX32.querySelectorAll("tbody tr"));
  let timeRowsX18 = Array.from(timeTableX18.querySelectorAll("tbody tr"));
  let timeRowsX8 = Array.from(timeTableX8.querySelectorAll("tbody tr"));
  let tryRowsX32 = Array.from(tryTableX32.querySelectorAll("tbody tr"));
  let tryRowsX18 = Array.from(tryTableX18.querySelectorAll("tbody tr"));
  let tryRowsX8 = Array.from(tryTableX8.querySelectorAll("tbody tr"));

  timeRowsX32.sort(function (a, b) {
    let aVal = parseInt(a.cells[1].textContent);
    let bVal = parseInt(b.cells[1].textContent);
    return aVal - bVal;
  });
  timeRowsX32.forEach(function (row, index) {
    if (index === 3) {
      timeTableX32.querySelector("tbody").removeChild(row);
      return;
    }
    timeTableX32.querySelector("tbody").appendChild(row);
  });

  timeRowsX18.sort(function (a, b) {
    let aVal = parseInt(a.cells[1].textContent);
    let bVal = parseInt(b.cells[1].textContent);
    return aVal - bVal;
  });
  timeRowsX18.forEach(function (row, index) {
    if (index === 3) {
      timeTableX18.querySelector("tbody").removeChild(row);
      return;
    }
    timeTableX18.querySelector("tbody").appendChild(row);
  });

  timeRowsX8.sort(function (a, b) {
    let aVal = parseInt(a.cells[1].textContent);
    let bVal = parseInt(b.cells[1].textContent);
    return aVal - bVal;
  });
  timeRowsX8.forEach(function (row, index) {
    if (index === 3) {
      timeTableX8.querySelector("tbody").removeChild(row);
      return;
    }
    timeTableX8.querySelector("tbody").appendChild(row);
  });

  tryRowsX32.sort(function (a, b) {
    let aVal = parseInt(a.cells[1].textContent);
    let bVal = parseInt(b.cells[1].textContent);
    return aVal - bVal;
  });
  tryRowsX32.forEach(function (row, index) {
    if (index === 3) {
      tryTableX32.querySelector("tbody").removeChild(row);
      return;
    }
    tryTableX32.querySelector("tbody").appendChild(row);
  });

  tryRowsX18.sort(function (a, b) {
    let aVal = parseInt(a.cells[1].textContent);
    let bVal = parseInt(b.cells[1].textContent);
    return aVal - bVal;
  });
  tryRowsX18.forEach(function (row, index) {
    if (index === 3) {
      tryTableX18.querySelector("tbody").removeChild(row);
      return;
    }
    tryTableX18.querySelector("tbody").appendChild(row);
  });

  tryRowsX8.sort(function (a, b) {
    let aVal = parseInt(a.cells[1].textContent);
    let bVal = parseInt(b.cells[1].textContent);
    return aVal - bVal;
  });
  tryRowsX8.forEach(function (row, index) {
    if (index === 3) {
      tryTableX8.querySelector("tbody").removeChild(row);
      return;
    }
    tryTableX8.querySelector("tbody").appendChild(row);
  });
}

function saveTableData(id) {
  let tabla = document.getElementById(id);
  let datos = [];

  for (let i = 0; i < tabla.querySelector("tbody").rows.length; i++) {
    let fila = tabla.querySelector("tbody").rows[i];
    let nombre = fila.cells[0].textContent;
    let centro = fila.cells[1].textContent;
    let fecha = fila.cells[2].textContent;

    datos.push({ nombre: nombre, centro: centro, fecha: fecha });
  }
  localStorage.setItem(id, JSON.stringify(datos));
}

function getSavedTable(id) {
  let tabla = JSON.parse(localStorage.getItem(id));
  if (tabla === null) return;
  for (let i = 0; i < tabla.length; i++) {
    let fila = document.createElement("tr");
    let celdaNombre = document.createElement("td");
    let celdaCentral = document.createElement("td");
    let celdaFecha = document.createElement("td");

    celdaNombre.textContent = tabla[i].nombre;
    celdaCentral.textContent = tabla[i].centro;
    celdaFecha.textContent = tabla[i].fecha;

    fila.appendChild(celdaNombre);
    fila.appendChild(celdaCentral);
    fila.appendChild(celdaFecha);

    document.getElementById(id).querySelector("tbody").appendChild(fila);
  }
}

getSavedTable("try-table-x8");
getSavedTable("try-table-x18");
getSavedTable("try-table-x32");
getSavedTable("time-table-x32");
getSavedTable("time-table-x18");
getSavedTable("time-table-x8");

//adding click event listener for all cards, and calls flipCard().
cards.forEach((card) => card.addEventListener("click", flipCard));

//instructions of the game
setTimeout(
  () =>
    alert(
      "Instrucciones de Memo Vice 🎴:\n  \
  1. Para comenzar o reiniciar una partida, apreta uno de los modos de juego que se encuentran en configuracion ⚙️.\n  \
  2. El juego termina cuando encuentras todos los pares.\n  \
  3. Diviertete! 😎"
    ),
  200
);

//https://marina-ferreira.github.io/tutorials/js/memory-game/
