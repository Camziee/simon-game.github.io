const winningRound = 10;

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
    this.element.addEventListener('mousedown', this.changeClass.bind(this));
    //bind = referenciar o this à classe, mas e se fosse outro cenário?
    //o this depois do bind é uma variável?
  }

  changeClass() {
    this.element.classList.add("game-button--activated");
  }

  // metodo turn on/off class TO DO
  // Responsibility:
  // - Add class game-button--active to div.game-button
}

class GameController {
  gameRunning: boolean = false;

  public gameButtons: GameButton[];
  public gameSequence: GameButton[];
  public playerSequence: GameButton[];
  public colors: string[];
  
  
  constructor() {
    this.gameButtons = []; 
    this.gameRunning = true;
    this.colors = ["pink", "blue", "yellow", "green"];

    for (let x of this.colors) {
      let currentColor = new GameButton(x);
      this.gameButtons.push(currentColor);
    }
      
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
  // - Verify if rounds >= winningRound
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

let gameController = new GameController();