const WINNING_ROUND = 10;
const BUTTON_ACTIVATION_DELAY = 700;

class GameApp {
  public gameRunning: boolean;
    
  gameState: boolean;
  constructor() {
    
  }
}

class GameButton {
  public active: boolean = false;
  public element: HTMLElement;
  public clickedCallback: Function;

  constructor(color: string, callback: Function) {
    this.element = document.querySelector(`.game-button_${color}`);
    this.element.addEventListener('mouseup', this.click.bind(this));
    this.clickedCallback = callback;
  }
  
  turnOn() {
    this.element.classList.add("game-button--activated");
  }

  turnOff() {
    this.element.classList.remove("game-button--activated");
  }

  turnOnThenOff() {
    this.turnOn();
    setTimeout(() => {
      this.turnOff();
    }, BUTTON_ACTIVATION_DELAY);
  }

  click() {
    this.clickedCallback(this);
  }

}

class GameController {
  gameRunning: boolean = false;

  public gameButtons: GameButton[];
  public gameSequence: GameButton[];
  public playerSequence: GameButton[];
  public colors: string[];
  
  
  constructor() {
    this.gameRunning = true;
    this.gameButtons = []; 
    this.gameSequence = [];
    this.playerSequence = [];
    this.colors = ["pink", "blue", "yellow", "green"];    

    for (let color of this.colors) {
      const currentColor = new GameButton(color, this.playerClickedGameButton.bind(this));
      this.gameButtons.push(currentColor);
    }

    this.addGameSequence();

  }


  playerClickedGameButton(gameButton: GameButton) {
    this.playerSequence.push(gameButton);
    var isEqual = true;

    console.log(this.playerSequence);
    
    for (let index = 0; index < this.playerSequence.length; index++) {
      if (this.gameSequence[index] !== this.playerSequence[index]) {
        isEqual = false;
        break;
      }
    }

    if(!isEqual) {
      alert("Wrong button, you lost :(");
      this.gameSequence = [];
      this.playerSequence = [];
      this.addGameSequence();
      return;      
    }

    var roundNotFinished = this.playerSequence.length < this.gameSequence.length;

    if (roundNotFinished) {
      console.log("NotFinished");
      return;
    }

    this.playerSequence = [];
    this.addGameSequence();
    
    console.log("Finished");
    
  }

  getRandomButton() {
    return this.gameButtons[Math.floor(Math.random() *  this.gameButtons.length)];
  }

  addGameSequence() {
    this.gameSequence.push(this.getRandomButton());

    this.playGameSequence();

    
    console.log(this.gameSequence);
  }

  playGameSequence() {
    this.gameSequence.forEach(function (gameButton, key) {
      setTimeout(() => {
        gameButton.turnOnThenOff();
      }, (BUTTON_ACTIVATION_DELAY * key) + 2000);
    })
  }

  // Responsibility:
  // - Random buttom
  // - Add random buttom to gameSequence
  // - Get playerButton
  // - Add playerButtom to playerSequence
  // - Compare gameSquence == playerSequence
  // - Set loseScreen = true
  // - Call Rounds
}

class Rounds {

  public rounds: number;

  constructor() {

  }
  // Responsibility:
  // - Set gameRunning = true/false
  // - Verify if number if items in the gameSequence array >= WINNING_ROUNDS
  // - Set winScreen = true
}



class WinScreen {

  public  winScreen: boolean;

  constructor() {

  }
  // Responsibility:
  // - Set winScreen = false;
  // - Set gameRunning = true/false;
}



class LoseScreen {

  public loseScreen: boolean;

  constructor() {

  }
  // Responsibility:
  // - Set loseScreen = false;
  // - Set gameRunning = true/false;
}

new GameController();