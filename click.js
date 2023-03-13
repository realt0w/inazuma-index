let playerItems = document.querySelectorAll(".player-item");

playerItems.forEach(function(playerItem, index) {
  playerItem.dataset.index = index;
  playerItem.addEventListener("click", function() {
    let playerInfo = document.querySelector(".player-info");
    playerInfo.innerHTML = "";

    let playerDiv = document.createElement("div"); // Créer une div parent
    playerDiv.classList.add("player-div"); // Ajouter une classe pour la div
    
    let playerImg = document.createElement("img");
    playerImg.src = playerItem.querySelector("img").src;
    playerDiv.appendChild(playerImg); // Ajouter l'image à la div parent
    
    let playerGender = document.createElement("img");
    playerGender.src = playerGender.src = players[index].Gender;
    playerDiv.appendChild(playerGender); // Ajouter le genre du joueur à la div parent

    let playerElement = document.createElement("img");
    playerElement.src = playerElement.src = players[index].Element;
    playerDiv.appendChild(playerElement); // Ajouter le Element du joueur à la div parent
    
    let playerPosition = document.createElement("img");
    playerPosition.src = playerPosition.src = players[index].Position;
    playerDiv.appendChild(playerPosition); // Ajouter le Position du joueur à la div parent

    let playerName = document.createElement("h2");
    playerName.textContent = playerItem.querySelector("span").textContent;
    playerDiv.appendChild(playerName); // Ajouter le nom du joueur à la div parent

    let playerDescription = document.createElement("p");
    playerDescription.textContent = players[index].Description;
    
    // Ajouter les autres éléments au bloc parent
    let playerKick = document.createElement("p");
    playerKick.textContent = "Kick: " + players[index].Kick;
    
    let playerBody = document.createElement("p");
    playerBody.textContent = "Body: " + players[index].Body;
    
    let playerControl = document.createElement("p");
    playerControl.textContent = "Control: " + players[index].Control;
    
    let playerGuard = document.createElement("p");
    playerGuard.textContent = "Guard: " + players[index].Guard;
    
    let playerSpeed = document.createElement("p");
    playerSpeed.textContent = "Speed: " + players[index].Speed;
    
    let playerStamina = document.createElement("p");
    playerStamina.textContent = "Stamina: " + players[index].Stamina;
    
    let playerGuts = document.createElement("p");
    playerGuts.textContent = "Guts: " + players[index].Guts;

    let playerFP = document.createElement("p");
    playerFP.textContent = "FP: " + players[index].FP;

    let playerTP = document.createElement("p");
    playerTP.textContent = "TP: " + players[index].TP;

    let playerSM1 = document.createElement("p");
    playerSM1.textContent = players[index].SM1;

    let playerSM2 = document.createElement("p");
    playerSM2.textContent = players[index].SM2;

    let playerSM3 = document.createElement("p");
    playerSM3.textContent = players[index].SM3;

    let playerSM4 = document.createElement("p");
    playerSM4.textContent = players[index].SM4;
    
    playerInfo.appendChild(playerDiv); // Ajouter la div parent contenant les éléments à playerInfo
    

    playerInfo.appendChild(playerImg);
    playerInfo.appendChild(playerGender);
    playerInfo.appendChild(playerElement);
    playerInfo.appendChild(playerPosition);
    playerInfo.appendChild(playerName);
    playerInfo.appendChild(playerDescription);
    playerInfo.appendChild(playerKick);
    playerInfo.appendChild(playerBody);
    playerInfo.appendChild(playerControl);
    playerInfo.appendChild(playerGuard);
    playerInfo.appendChild(playerSpeed);
    playerInfo.appendChild(playerStamina);
    playerInfo.appendChild(playerGuts);
    playerInfo.appendChild(playerFP);
    playerInfo.appendChild(playerTP);
    playerInfo.appendChild(playerSM1);
    playerInfo.appendChild(playerSM2);
    playerInfo.appendChild(playerSM3);
    playerInfo.appendChild(playerSM4);
  });
});
