let playerItems = document.querySelectorAll(".player-item");

playerItems.forEach(function(playerItem, index) {
  playerItem.dataset.index = index;
  playerItem.addEventListener("click", function() {
    let playerInfo = document.querySelector(".player-info");
    playerInfo.innerHTML = "";

    // Create Div Team
    let playerDivTeam = document.createElement("div"); // Créer une div parent
    playerDivTeam.classList.add("player-divTeam"); // Ajouter une classe pour la div
    playerDivTeam.style.fontFamily = "InazumaNormal";
    playerInfo.appendChild(playerDivTeam); // Ajouter la div parent contenant les éléments à playerInfo

    // Create Div 1
    let playerDiv = document.createElement("div"); // Créer une div parent
    playerDiv.classList.add("player-div"); // Ajouter une classe pour la div
    playerDiv.style.fontFamily = "InazumaNormal";
    playerInfo.appendChild(playerDiv); // Ajouter la div parent contenant les éléments à playerInfo

    // Create Div Desc
    let playerDivDesc = document.createElement("div"); // Créer une div parent
    playerDivDesc.classList.add("player-divDesc"); // Ajouter une classe pour la div
    playerDivDesc.style.fontFamily = "InazumaNormal";
    playerInfo.appendChild(playerDivDesc); // Ajouter la div parent contenant les éléments à playerInfo

    // Create Div Kick FP TP
    let playerDivKickTP = document.createElement("div"); // Créer une div parent
    playerDivKickTP.classList.add("player-divKickTP"); // Ajouter une classe pour la div
    playerDivKickTP.style.marginBottom = "10px";
    playerDivKickTP.style.fontFamily = "InazumaNormal";
    playerInfo.appendChild(playerDivKickTP); // Ajouter la div parent contenant les éléments à playerInfo

    // Create Div Body & SM1
    let playerDivBodySM1 = document.createElement("div"); // Créer une div parent
    playerDivBodySM1.classList.add("player-divBodySM1"); // Ajouter une classe pour la div
    playerDivBodySM1.style.marginBottom = "10px";
    playerDivBodySM1.style.fontFamily = "InazumaNormal";
    playerDivBodySM1.style.display = "flex";
    playerDivBodySM1.style.alignItems = "center"; // n'est pas appliqué à cause de display = "block" dans des divs parents
    playerInfo.appendChild(playerDivBodySM1); // Ajouter la div parent contenant les éléments à playerInfo
    
    // Create Div Control & SM2
    let playerDivControlSM2 = document.createElement("div"); // Créer une div parent
    playerDivControlSM2.classList.add("player-divControlSM2"); // Ajouter une classe pour la div
    playerDivControlSM2.style.marginBottom = "10px";
    playerDivControlSM2.style.fontFamily = "InazumaNormal";
    playerDivControlSM2.style.display = "flex";
    playerDivControlSM2.style.alignItems = "center"; // n'est pas appliqué à cause de display = "block" dans des divs parents
    playerInfo.appendChild(playerDivControlSM2); // Ajouter la div parent contenant les éléments à playerInfo
        
    // Create Div Guard & SM3
    let playerDivGuardSM3 = document.createElement("div"); // Créer une div parent
    playerDivGuardSM3.classList.add("player-divGuardSM3"); // Ajouter une classe pour la div
    playerDivGuardSM3.style.marginBottom = "10px";
    playerDivGuardSM3.style.fontFamily = "InazumaNormal";
    playerDivGuardSM3.style.display = "flex";
    playerDivGuardSM3.style.alignItems = "center"; // n'est pas appliqué à cause de display = "block" dans des divs parents
    playerInfo.appendChild(playerDivGuardSM3); // Ajouter la div parent contenant les éléments à playerInfo        
    
    // Create Div Speed & SM4
    let playerDivSpeedSM4 = document.createElement("div"); // Créer une div parent
    playerDivSpeedSM4.classList.add("player-divSpeedSM4"); // Ajouter une classe pour la div
    playerDivSpeedSM4.style.marginBottom = "10px";
    playerDivSpeedSM4.style.fontFamily = "InazumaNormal";
    playerDivSpeedSM4.style.display = "flex";
    playerDivSpeedSM4.style.alignItems = "center"; // n'est pas appliqué à cause de display = "block" dans des divs parents
    playerInfo.appendChild(playerDivSpeedSM4); // Ajouter la div parent contenant les éléments à playerInfo 

    // Create Div Stamina
    let playerDivStamina = document.createElement("div"); // Créer une div parent
    playerDivStamina.classList.add("player-divStamina"); // Ajouter une classe pour la div
    playerDivStamina.style.marginBottom = "10px";
    playerDivStamina.style.fontFamily = "InazumaNormal";
    playerInfo.appendChild(playerDivStamina); // Ajouter la div parent contenant les éléments à playerInfo

    // Create Div Guts
    let playerDivGuts = document.createElement("div"); // Créer une div parent
    playerDivGuts.classList.add("player-divGuts"); // Ajouter une classe pour la div
    playerDivGuts.style.marginBottom = "10px";
    playerDivGuts.style.fontFamily = "InazumaNormal";
    playerInfo.appendChild(playerDivGuts); // Ajouter la div parent contenant les éléments à playerInfo


    //  Player Sprite
    let playerImg = document.createElement("img");
    playerImg.src = playerItem.querySelector("img").src;
    playerImg.style.marginRight = "5px";
    playerImg.style.width = "50px";
    playerImg.style.height = "auto";
    playerDiv.appendChild(playerImg); // Ajouter l'image à la div parent

    // Player Name
    let playerName = document.createElement("text");
    playerName.textContent = players[index].Name + " - " + players[index].Nickname + " (" + players[index].Game + ") "; 
    playerDiv.appendChild(playerName); // Ajouter le nom du joueur à la div parent


    // Player Description
    let playerDescription = document.createElement("p");
    playerDescription.textContent = players[index].Description;
    playerDivDesc.appendChild(playerDescription); // Ajouter le nom du joueur à la div parent

    // Player Kick
    let playerKick = document.createElement("text");
    playerKick.textContent = "Kick: " + players[index].Kick;
    playerKick.style.marginRight = "60px";
    playerDivKickTP.appendChild(playerKick);


    // Player FP
    let playerFP = document.createElement("text");
    playerFP.textContent = "FP: " + players[index].FP;
    playerFP.style.marginRight = "50px";
    playerDivKickTP.appendChild(playerFP);


    // Player TP
    let playerTP = document.createElement("text");
    playerTP.textContent = "TP: " + players[index].TP;
    playerDivKickTP.appendChild(playerTP);


    // Player Body
    let playerBody = document.createElement("text");
    playerBody.textContent = "Body: " + players[index].Body;
    playerBody.style.marginRight = "50px";
    playerDivBodySM1.appendChild(playerBody);

    const techniqueNoeud = (technique) => {
      // au cas où la technique a été simplement définie par une chaine de caractère
      if (typeof technique === "string") {
        const playerSM = document.createElement("text");
        playerSM.textContent = technique;

        return playerSM;
      }

      // dans le cas normal où une technique est un objet
      const playerSM = document.createElement("div");
      
      const techniqueElement = document.createElement("img");
      techniqueElement.src = "./images/elements/" + technique.element + ".png";
      techniqueElement.style.marginRight = "5px";
      playerSM.appendChild(techniqueElement);

      playerSM.appendChild(document.createTextNode(technique.name + " (" + technique.TP + " TP)"))

      const techniqueType = document.createElement("img");
      techniqueType.src = "./images/types/" + technique.type + ".png";
      techniqueType.style.marginLeft = "5px";
      techniqueType.style.height = "24px";
      techniqueType.style.width = "36px";
      playerSM.appendChild(techniqueType);

      return playerSM;
    }

    // Player SM1
    const playerSM1 = techniqueNoeud(players[index].SM1)
    playerDivBodySM1.appendChild(playerSM1);

    // Player Control
    let playerControl = document.createElement("text");
    playerControl.textContent = "Control: " + players[index].Control;
    playerControl.style.marginRight = "35px";
    playerDivControlSM2.appendChild(playerControl);
    

    // Player SM2
    const playerSM2 = techniqueNoeud(players[index].SM2)
    playerDivControlSM2.appendChild(playerSM2);


    // Player Guard
    let playerGuard = document.createElement("text");
    playerGuard.textContent = "Guard: " + players[index].Guard;
    playerGuard.style.marginRight = "45px";
    playerDivGuardSM3.appendChild(playerGuard);


    // Player SM3
    const playerSM3 = techniqueNoeud(players[index].SM3)
    playerDivGuardSM3.appendChild(playerSM3);
    

    // Player Speed
    let playerSpeed = document.createElement("text");
    playerSpeed.textContent = "Speed: " + players[index].Speed;
    playerSpeed.style.marginRight = "45px";
    playerDivSpeedSM4.appendChild(playerSpeed);


    // Player SM4
    const playerSM4 = techniqueNoeud(players[index].SM4)
    playerDivSpeedSM4.appendChild(playerSM4);
    

    // Player Stamina
    let playerStamina = document.createElement("text");
    playerStamina.textContent = "Stamina: " + players[index].Stamina;
    playerDivStamina.appendChild(playerStamina);
    

    // Player Guts
    let playerGuts = document.createElement("text");
    playerGuts.textContent = "Guts: " + players[index].Guts;
    playerDivGuts.appendChild(playerGuts);
    

    // Player Team Sprite
    let playerTeamSprite = document.createElement("img");
    playerTeamSprite.src = playerTeamSprite.src = players[index].TeamSprite;
    playerTeamSprite.style.marginRight = "5px";
    playerDivTeam.appendChild(playerTeamSprite); // Ajouter le Element du joueur à la div parent


    // Player Team Name
    let playerTeamName = document.createElement("text");
    playerTeamName.textContent = players[index].Team;
    playerTeamName.style.marginRight = "5px";
    playerDivTeam.appendChild(playerTeamName); // Ajouter le nom du joueur à la div parent

    // Player Gender
    let playerGender = document.createElement("img");
    playerGender.src = playerGender.src = players[index].Gender;
    playerDivTeam.appendChild(playerGender); // Ajouter le genre du joueur à la div parent


    // Player Element
    let playerElement = document.createElement("img");
    playerElement.src = playerElement.src = players[index].Element;
    playerDivTeam.appendChild(playerElement); // Ajouter le Element du joueur à la div parent
    

    // Player Position
    let playerPosition = document.createElement("img");
    playerPosition.src = playerPosition.src = players[index].Position;
    playerDivTeam.appendChild(playerPosition); // Ajouter le Position du joueur à la div parent
  });
});
