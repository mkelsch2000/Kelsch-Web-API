var highScore = document.querySelector("#high-score");
var timerEl = document.querySelector("#timer");
var mainEl = document.querySelector("#main-section");
var startBtn = document.querySelector("#start-btn")



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