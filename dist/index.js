var winningRound = 10;
var GameApp = /** @class */ (function () {
    function GameApp() {
    }
    return GameApp;
}());
var GameButton = /** @class */ (function () {
    function GameButton(color) {
        this.active = false;
        this.element = document.querySelector(".game-button_" + color);
        this.element.addEventListener('mousedown', this.changeClass.bind(this));
        //bind = referenciar o this à classe, mas e se fosse outro cenário?
        //o this depois do bind é uma variável?
    }
    GameButton.prototype.changeClass = function () {
        this.element.classList.add("game-button--activated");
    };
    return GameButton;
}());
var GameController = /** @class */ (function () {
    function GameController() {
        this.gameRunning = false;
        this.gameButtons = [];
        this.gameRunning = true;
        this.colors = ["pink", "blue", "yellow", "green"];
        for (var _i = 0, _a = this.colors; _i < _a.length; _i++) {
            var x = _a[_i];
            var currentColor = new GameButton(x);
            this.gameButtons.push(currentColor);
        }
    }
    return GameController;
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
var gameController = new GameController();
