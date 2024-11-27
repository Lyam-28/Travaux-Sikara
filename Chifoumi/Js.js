
 var playerScore = 0;
var computerScore = 0;


var playerScoreSpan = document.getElementById("playerScore");
var computerScoreSpan = document.getElementById("computerScore");
var playerChoiceZone = document.getElementById("playerChoiceZone");
var computerChoiceZone = document.getElementById("computerChoiceZone");
var Img = document.getElementById("Img");
var Imgbot = document.getElementById("Imgbot");
 var resetButton = document.getElementById("reset");



var choices = [
    { name: "Pierre", image: "img/rock.jpg" },
    { name: "Feuille", image: "img/paper.jpg" },
    { name: "Ciseau", image: "img/scissors.jpg" }
];


function play(playerChoiceName) {
  
    var playerChoice = choices.find(choice => choice.name === playerChoiceName);

    // Choix aléatoire pour l'ordinateur
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Afficher les zones et mettre à jour les images
    playerChoiceZone.style.display = "flex";
    computerChoiceZone.style.display = "flex";
    Img.src = Img.image;
    Imgbot.src = Imgbot.image;

    // Calculer le résultat
    if (playerChoice.name === computerChoice.name) {
        // Égalité, aucun point
    } else if (
        (playerChoice.name === "Pierre" && computerChoice.name === "Ciseau") ||
        (playerChoice.name === "Feuille" && computerChoice.name === "Pierre") ||
        (playerChoice.name === "Ciseau" && computerChoice.name === "Feuille")
    ) {
        // Le joueur gagne
        playerScore++;
    } else {
        // L'ordinateur gagne
        computerScore++;
    }

    // Mettre à jour les scores
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}


document.getElementById("rock").addEventListener("click", function() {
    play("Pierre");
});
document.getElementById("paper").addEventListener("click", function() {
    play("Feuille");
});
document.getElementById("scissors").addEventListener("click", function() {
    play("Ciseau");
});


resetButton.addEventListener("click", function() {
   
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    
    playerChoiceZone.style.display = "none";
    computerChoiceZone.style.display = "none";
});