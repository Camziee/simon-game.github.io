const WINNING_ROUND = 10;
const ACTIVATION_DELAY = 700;

class GameApp {
  public gameRunning: boolean;
    
  gameState: boolean;
  constructor() {
    
  }
}

class GameButton {
  public active: boolean = false;
  public element: HTMLElement;

  constructor(color: string) {
    this.element = document.querySelector(`.game-button_${color}`);
    this.element.addEventListener('mousedown', this.turnOnThenOff.bind(this));
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
    }, ACTIVATION_DELAY)
    return function(){
    };
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
    this.colors = ["pink", "blue", "yellow", "green"];     

    for (let color of this.colors) {
      const currentColor = new GameButton(color);
      this.gameButtons.push(currentColor);
    }

    this.startGameSequence();
    console.log(this.gameSequence);
      
  }

  getRandomButton() {
    let randomButton: GameButton;
    randomButton = this.gameButtons[Math.floor(Math.random() *  this.gameButtons.length)];
    return randomButton;
  }

  startGameSequence() {
    for (let i = 0; i < WINNING_ROUND; i++) {
      this.gameSequence.push(this.getRandomButton());
    }
    this.playGameSequence();
  }

  playGameSequence() {
    this.gameSequence.forEach(function (value) {
      value.turnOnThenOff();
      setTimeout(() => function (){
        console.log(":(");
      }, ACTIVATION_DELAY)
    })
  }

  // método para pegar um index aleatorio do gameButtons e adicionar no gameSequence OK
  // método para executar o turnOnThenOff de todos os buttons do gameSequence (utilizar o ACTIVATION_DELAY)

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