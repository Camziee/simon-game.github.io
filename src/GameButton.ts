import {BUTTON_ACTIVATION_DELAY} from './config';

export default class GameButton {
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

