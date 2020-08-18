const winningRound = 10;



class GameApp {
    public gameRunning: boolean;
    
    gameState: boolean; /* check with Adriano gameState <> gameRunning */
    constructor() {
    
    }

    /* Responsibility:
       - C
    */
}



 class GameController {
    gameRunning: boolean; /* check with Adriano gameState <> gameRunning */


    public gameSequence: string[];
    public playerSequence: string[];
    
    constructor() {

    }

    /* Responsibility:
       - Random buttom
       - Add random buttom to gameSequence
       - Get playerButton
       - Add playerButtom to playerSequence
       - Compare gameSquence == playerSequence
       - Set loseScreen = false
       -
       - Call Rounds
    */

 }

 


 class GameButton {
    public buttonState: boolean;

    constructor() {

    }

    /* Responsibility:
       - Add class game-button--active to div.game-button
    */
 }



  class Rounds {

    public rounds: number;

    constructor() {

    }

    /* Responsibility:
      - Set gameRunning = true/false
      - Verify if rounds >= winningRound
      - Set winScreen = true
    */
  }



  class WinScreen {

    public  winScreen: boolean;

    constructor() {

    }

    /* Responsibility:
      - Set winScreen = false;
      - Set gameRunning = true/false;
    */

  }



  class LoseScreen {

    public loseScreen: boolean;

    constructor() {

    }

    /* Responsibility:
      - Set loseScreen = false;
      - Set gameRunning = true/false;
    */

}