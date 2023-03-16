let playerList = document.querySelector(".player-list");

players.forEach(function(player) {
    
let playerDiv = document.createElement("div");
playerDiv.classList.add("player", "player-item"); // Ajoutez la classe "player-item"
playerDiv.style.fontFamily = "InazumaItalicBold";



  let playerImg = document.createElement("img");
  playerImg.src = player.Sprite;

  let playerName = document.createElement("span");
  playerName.textContent = player.Name + " - " + player.Nickname;

  playerDiv.appendChild(playerImg);
  playerDiv.appendChild(playerName);

  playerList.appendChild(playerDiv);
});

// Trier par jeu

const gamesSelect = document.getElementById("games");
const teamsSelect = document.getElementById("teams");
const elementsSelect = document.getElementById("elements");
const gendersSelect = document.getElementById("genders");
const positionsSelect = document.getElementById("positions");
const searchInput = document.getElementById("search");



gamesSelect.addEventListener("change", function() {
  const selectedGame = this.value;
  const selectedTeam = teamsSelect.value;
  const selectedElement = elementsSelect.value;
  const selectedGender = gendersSelect.value;
  const selectedPosition = positionsSelect.value;
  const searchValue = searchInput.value.toLowerCase(); // add search value here

  const playerItems = document.querySelectorAll(".player-item");

  playerItems.forEach(function(playerItem, index) {
    const playerName = playerItem.querySelector("span").textContent.toLowerCase();

    if (playerName.includes(searchValue) && 
        (selectedGame === "all" || players[index].Game === selectedGame) &&
        (selectedTeam === "all" || players[index].Team === selectedTeam) &&
        (selectedElement === "all" || players[index].Element === selectedElement) &&
        (selectedGender === "all" || players[index].Gender === selectedGender) &&
        (selectedPosition === "all" || players[index].Position === selectedPosition)) {
      playerItem.style.display = "block";
    } else {
      playerItem.style.display = "none";
    }
  });
});

teamsSelect.addEventListener("change", function() {
  const selectedTeam = this.value;
  const selectedGame = gamesSelect.value;
  const selectedElement = elementsSelect.value;
  const selectedGender = gendersSelect.value;
  const selectedPosition = positionsSelect.value;
  const searchValue = searchInput.value.toLowerCase(); // add search value here

  const playerItems = document.querySelectorAll(".player-item");

  playerItems.forEach(function(playerItem, index) {
    const playerName = playerItem.querySelector("span").textContent.toLowerCase();

    if (playerName.includes(searchValue) && 
        (selectedGame === "all" || players[index].Game === selectedGame) &&
        (selectedTeam === "all" || players[index].Team === selectedTeam) &&
        (selectedElement === "all" || players[index].Element === selectedElement) &&
        (selectedGender === "all" || players[index].Gender === selectedGender) &&
        (selectedPosition === "all" || players[index].Position === selectedPosition)) {
      playerItem.style.display = "block";
    } else {
      playerItem.style.display = "none";
    }
  });
});

elementsSelect.addEventListener("change", function() {
  const selectedElement = this.value;
  const selectedGame = gamesSelect.value;
  const selectedTeam = teamsSelect.value;
  const selectedGender = gendersSelect.value;
  const selectedPosition = positionsSelect.value;
  const searchValue = searchInput.value.toLowerCase(); // add search value here

  const playerItems = document.querySelectorAll(".player-item");

  playerItems.forEach(function(playerItem, index) {
    const playerName = playerItem.querySelector("span").textContent.toLowerCase();

    if (playerName.includes(searchValue) && 
        (selectedGame === "all" || players[index].Game === selectedGame) &&
        (selectedTeam === "all" || players[index].Team === selectedTeam) &&
        (selectedElement === "all" || players[index].Element === selectedElement) &&
        (selectedGender === "all" || players[index].Gender === selectedGender) &&
        (selectedPosition === "all" || players[index].Position === selectedPosition)) {
      playerItem.style.display = "block";
    } else {
      playerItem.style.display = "none";
    }
  });
});

gendersSelect.addEventListener("change", function() {
  const selectedGender = this.value;
  const selectedGame = gamesSelect.value;
  const selectedTeam = teamsSelect.value;
  const selectedElement = elementsSelect.value;
  const selectedPosition = positionsSelect.value;
  const searchValue = searchInput.value.toLowerCase(); // add search value here

  const playerItems = document.querySelectorAll(".player-item");

  playerItems.forEach(function(playerItem, index) {
    const playerName = playerItem.querySelector("span").textContent.toLowerCase();

    if (playerName.includes(searchValue) && 
        (selectedGame === "all" || players[index].Game === selectedGame) &&
        (selectedTeam === "all" || players[index].Team === selectedTeam) &&
        (selectedElement === "all" || players[index].Element === selectedElement) &&
        (selectedGender === "all" || players[index].Gender === selectedGender) &&
        (selectedPosition === "all" || players[index].Position === selectedPosition)) {
      playerItem.style.display = "block";
    } else {
      playerItem.style.display = "none";
    }
  });
});


positionsSelect.addEventListener("change", function() {
  const selectedPosition = this.value;
  const searchValue = searchInput.value.toLowerCase();
  const selectedGame = gamesSelect.value;
  const selectedTeam = teamsSelect.value;
  const selectedElement = elementsSelect.value;
  const selectedGender = gendersSelect.value;

  const playerItems = document.querySelectorAll(".player-item");

  playerItems.forEach(function(playerItem, index) {
    const playerName = playerItem.querySelector("span").textContent.toLowerCase();

    if (playerName.includes(searchValue) &&
        (selectedGame === "all" || players[index].Game === selectedGame) &&
        (selectedTeam === "all" || players[index].Team === selectedTeam) &&
        (selectedElement === "all" || players[index].Element === selectedElement) &&
        (selectedGender === "all" || players[index].Gender === selectedGender) &&
        (selectedPosition === "all" || players[index].Position === selectedPosition)) {
      playerItem.style.display = "block";
    } else {
      playerItem.style.display = "none";
    }
  });
});



searchInput.addEventListener("input", function() {
  const searchValue = this.value.toLowerCase();
  const selectedGame = gamesSelect.value;
  const selectedTeam = teamsSelect.value;
  const selectedElement = elementsSelect.value;
  const selectedGender = gendersSelect.value;
  const selectedPosition = positionsSelect.value;
  const playerItems = document.querySelectorAll(".player-item");

  playerItems.forEach(function(playerItem, index) {
    const playerName = playerItem.querySelector("span").textContent.toLowerCase();

    if (playerName.includes(searchValue) &&
    (selectedGame === "all" || players[index].Game === selectedGame) &&
        (selectedTeam === "all" || players[index].Team === selectedTeam) &&
        (selectedElement === "all" || players[index].Element === selectedElement) &&
        (selectedGender === "all" || players[index].Gender === selectedGender) &&
        (selectedPosition === "all" || players[index].Position === selectedPosition)) {
      playerItem.style.display = "block";
    } else {
      playerItem.style.display = "none";
    }
  });
});

