var winningRound = 10;
var GameApp = /** @class */ (function () {
    function GameApp() {
    }
    return GameApp;
}());
var GameController = /** @class */ (function () {
    function GameController() {
        this.gameRunning = false;
        this.gameRunning = true;
        this.colors = ["pink", "blue", "yellow", "green"];
        for (var i = 0; i < 4; i++) {
            var currentColor = new GameButton("pink");
            this.gameButtons.push(currentColor);
            console.log("EU AMO MEU NAMORADO IAN");
        }
    }
    return GameController;
}());
/*let gameController = new GameController();*/
/* instanciar GameController para já começar a rodar quando carregar a página */ /* TO DO */
var GameButton = /** @class */ (function () {
    function GameButton(color) {
        this.active = false;
        this.element = document.querySelector(".game-button_" + color);
    }
    return GameButton;
}());
var Rounds = /** @class */ (function () {
    function Rounds() {
    }
    return Rounds;
}());
var WinScreen = /** @class */ (function () {
    function WinScreen() {
    }
    return WinScreen;
}());
var LoseScreen = /** @class */ (function () {
    function LoseScreen() {
    }
    return LoseScreen;
}());
