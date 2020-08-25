var WINNING_ROUND = 10;
var ACTIVATION_DELAY = 700;
var GameApp = /** @class */ (function () {
    function GameApp() {
    }
    return GameApp;
}());
var GameButton = /** @class */ (function () {
    function GameButton(color) {
        this.active = false;
        this.element = document.querySelector(".game-button_" + color);
        this.element.addEventListener('mousedown', this.turnOnThenOff.bind(this));
    }
    GameButton.prototype.turnOn = function () {
        this.element.classList.add("game-button--activated");
    };
    GameButton.prototype.turnOff = function () {
        this.element.classList.remove("game-button--activated");
    };
    GameButton.prototype.turnOnThenOff = function () {
        var _this = this;
        this.turnOn();
        setTimeout(function () {
            _this.turnOff();
        }, ACTIVATION_DELAY);
        return function () {
        };
    };
    return GameButton;
}());
var GameController = /** @class */ (function () {
    function GameController() {
        this.gameRunning = false;
        this.gameRunning = true;
        this.gameButtons = [];
        this.gameSequence = [];
        this.colors = ["pink", "blue", "yellow", "green"];
        for (var _i = 0, _a = this.colors; _i < _a.length; _i++) {
            var color = _a[_i];
            var currentColor = new GameButton(color);
            this.gameButtons.push(currentColor);
        }
        this.startGameSequence();
        console.log(this.gameSequence);
    }
    GameController.prototype.getRandomButton = function () {
        var randomButton;
        randomButton = this.gameButtons[Math.floor(Math.random() * this.gameButtons.length)];
        return randomButton;
    };
    GameController.prototype.startGameSequence = function () {
        for (var i = 0; i < WINNING_ROUND; i++) {
            this.gameSequence.push(this.getRandomButton());
        }
        this.playGameSequence();
    };
    GameController.prototype.playGameSequence = function () {
        this.gameSequence.forEach(function (value) {
            value.turnOnThenOff();
            setTimeout(function () { return function () {
                console.log(":(");
            }; }, ACTIVATION_DELAY);
        });
    };
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
new GameController();
