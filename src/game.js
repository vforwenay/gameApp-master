class Game {
  // compare results and analyze winning
  winAnalysis = (choice1,choice2) => {
    if (choice1 === choice2)
      return "It's a tie!";
   
    switch(choice1) {
      case 'rock': {
        return choice2 != "scissors" ? "You lose!" : "You win!"
        break;
      }
      case 'paper': {
        return choice2 != "rock" ? "You lose!" : "You win!"
        break;
      }
      case 'scissors': {
        return choice2 === "rock" ? "You lose!" : "You win!"
        break;
      }
      default:
    }
  };

  playGame = e => {
    // Hide Game board Show results
    document.getElementById('gameConsole').style.display = 'none'
    document.getElementById('results-board').style.display = 'block'
    
    // User choice
    let userChoice = e.target.dataset.id
  
    // Display user choice
    document.getElementById('results').append("You choose:" + " " + userChoice);
    
    // System choice
    let systemChoice = Math.random();
    if (systemChoice < 0.34) {
      systemChoice = "rock";
    } else if(systemChoice <= 0.67) {
      systemChoice = "paper";
    } else {
      systemChoice = "scissors";
    }
    
    // Display System choice
    const systemChoiceNode = document.createElement("p")
    systemChoiceNode.innerText = ("System:" + " " + systemChoice)
    document.getElementById('results').appendChild(systemChoiceNode);
    
    // // Compare user choice vs System choice
    const results = this.winAnalysis(userChoice,systemChoice);
  
    // Display results
    document.getElementById("results").append(results);
  } 
  
  // Game restart 
  restart = () => {
    document.getElementById('gameConsole').style.display = 'block'
    document.getElementById("results").innerHTML = ''
    document.getElementById('results-board').style.display = 'none'
  }
  
  start = () => {
    document.getElementById("restart").addEventListener('click', this.restart);  
    // Game options
    const gameOptions = document.getElementsByClassName('userOption');
    
    for (var i = 0; i < gameOptions.length; i++) {
      gameOptions[i].addEventListener('click', this.playGame, false);
    }
  }
}
