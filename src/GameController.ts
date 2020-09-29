import GameButton from './GameButton';
import {
  BUTTON_ACTIVATION_DELAY,
  BUTTON_START_ANIMATION_DELAY,
  BUTTON_ANIMATION_DELAY
} from './config';

export default class GameController {
    gameRunning: boolean = false;
  
    public gameButtons: GameButton[];
    public gameSequence: GameButton[];
    public playerSequence: GameButton[];
    public colors: string[];
    public $buttonPlayAgain: HTMLElement;
    public $roundsNumber: HTMLElement;
    public rounds: number;
    public $modalLose: HTMLElement;
    public $overlayModal: HTMLElement;
      
    
    constructor() {
      this.gameRunning = true;
      this.gameButtons = []; 
      this.gameSequence = [];
      this.playerSequence = [];
      this.colors = ["pink", "blue", "yellow", "green"];
      this.rounds = 0;
        
      this.$modalLose = document.querySelector(".modal-lose");
      this.$overlayModal = document.querySelector(".overlay-modal");
      this.$roundsNumber = document.querySelector(".rounds-number");
      this.$buttonPlayAgain = document.querySelector(".btn_play-again");
      this.$buttonPlayAgain.onclick = this.playAgain.bind(this);
      
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
        this.gameSequence = [];
        this.playerSequence = [];
        this.rounds = 0;
        this.$roundsNumber.innerHTML = this.rounds.toString();
        this.openModal();
        return;
      }
  
      var roundNotFinished = this.playerSequence.length < this.gameSequence.length;
  
      if (roundNotFinished) {
        return;
      }
      
      this.rounds++;
      this.$roundsNumber.innerHTML = this.rounds.toString();
  
      this.playerSequence = [];
      this.addGameSequence();
      
    }
  
    openModal() {
        this.$modalLose.style.display = "block";
        this.$overlayModal.style.display = "block";
    }
  
    closeModal() {
        this.$modalLose.style.display = "none";
        this.$overlayModal.style.display = "none";
    }
  
    playAgain() {
      this.closeModal();
      this.addGameSequence();
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
        }, ((BUTTON_ACTIVATION_DELAY + BUTTON_ANIMATION_DELAY) * key) + BUTTON_START_ANIMATION_DELAY);
      })
    }
  }