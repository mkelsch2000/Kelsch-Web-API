var highScore = document.querySelector("#high-score");
var timerEl = document.querySelector("#timer");
var mainEl = document.querySelector("#main-section");
var startBtn = document.querySelector("#start-btn")

var startBtnHandler = function() {

  timeHandler();

}

var timeHandler = function() {
  var timeLeft = 50;

  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = 'Timer: ' + timeLeft;
      timeLeft--;
    }
    else {
      timerEl.textContent = 'Timer: 0';
      clearInterval(timeInterval);
    }
  }, 1000);
}

var scoreHandler = function() {

}

const questions = [
  {
    question: "How many companions were there when the Fellowship of the Ring left Rivendell?",
    answer1: "4",
    answer2: "13",
    answer3: "9",
    answer4: "8"
  },
  {
    question: "Who was Sauron's master?",
    answer1: "Aragorn",
    answer2: "Morgoth",
    answer3: "Smaug",
    answer4: "Elendil"
  },
  {
    question: "Who forged the Rings of Power?",
    answer1: "Sauron",
    answer2: "Elrond",
    answer3: "Galadriel",
    answer4: "Celebrimbor"
  },
  {
    question: "How old was Gimli when he died?",
    answer1: "97",
    answer2: "262",
    answer3: "111",
    answer4: "563"
  },
]

mainEl.addEventListener("click", startBtnHandler);