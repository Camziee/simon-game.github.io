var BUTTON_ACTIVATION_DELAY = 700;
var GameApp = /** @class */ (function () {
    function GameApp() {
    }
    return GameApp;
}());
var GameButton = /** @class */ (function () {
    function GameButton(color, callback) {
        this.active = false;
        this.element = document.querySelector(".game-button_" + color);
        this.element.addEventListener('mouseup', this.click.bind(this));
        this.clickedCallback = callback;
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
        }, BUTTON_ACTIVATION_DELAY);
    };
    GameButton.prototype.click = function () {
        this.clickedCallback(this);
    };
    return GameButton;
}());
var GameController = /** @class */ (function () {
    function GameController() {
        this.gameRunning = false;
        this.gameRunning = true;
        this.gameButtons = [];
        this.gameSequence = [];
        this.playerSequence = [];
        this.colors = ["pink", "blue", "yellow", "green"];
        this.rounds = 0;
        this.$roundsNumber = document.querySelector(".rounds-number");
        this.$modalPlayAgain = document.querySelector(".btn_play-again");
        this.$modalPlayAgain.onclick = this.playAgain.bind(this);
        for (var _i = 0, _a = this.colors; _i < _a.length; _i++) {
            var color = _a[_i];
            var currentColor = new GameButton(color, this.playerClickedGameButton.bind(this));
            this.gameButtons.push(currentColor);
        }
        this.addGameSequence();
    }
    GameController.prototype.playerClickedGameButton = function (gameButton) {
        this.playerSequence.push(gameButton);
        var isEqual = true;
        console.log(this.playerSequence);
        for (var index = 0; index < this.playerSequence.length; index++) {
            if (this.gameSequence[index] !== this.playerSequence[index]) {
                isEqual = false;
                break;
            }
        }
        if (!isEqual) {
            this.gameSequence = [];
            this.playerSequence = [];
            this.rounds = 0;
            this.$roundsNumber.innerHTML = this.rounds.toString();
            this.openModal();
            return;
        }
        var roundNotFinished = this.playerSequence.length < this.gameSequence.length;
        if (roundNotFinished) {
            console.log("NotFinished");
            return;
        }
        this.rounds++;
        this.$roundsNumber.innerHTML = this.rounds.toString();
        this.playerSequence = [];
        this.addGameSequence();
        console.log("Finished");
    };
    GameController.prototype.openModal = function () {
        var $modalLose = document.querySelector(".modal-lose");
        var $overlayModal = document.querySelector(".overlay-modal");
        $modalLose.style.display = "block";
        $overlayModal.style.display = "block";
    };
    GameController.prototype.closeModal = function () {
        var $modalLose = document.querySelector(".modal-lose");
        var $overlayModal = document.querySelector(".overlay-modal");
        $modalLose.style.display = "none";
        $overlayModal.style.display = "none";
    };
    GameController.prototype.playAgain = function () {
        this.closeModal();
        this.addGameSequence();
    };
    GameController.prototype.getRandomButton = function () {
        return this.gameButtons[Math.floor(Math.random() * this.gameButtons.length)];
    };
    GameController.prototype.addGameSequence = function () {
        this.gameSequence.push(this.getRandomButton());
        this.playGameSequence();
        console.log(this.gameSequence);
    };
    GameController.prototype.playGameSequence = function () {
        this.gameSequence.forEach(function (gameButton, key) {
            setTimeout(function () {
                gameButton.turnOnThenOff();
            }, (BUTTON_ACTIVATION_DELAY * key) + 2000);
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
