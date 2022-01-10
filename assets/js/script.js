var highScore = document.querySelector("#high-score");
var timerEl = document.querySelector("#timer");
var mainEl = document.querySelector("#main-section");
var startBtn = document.querySelector("#start-btn")

// Input Welcome Text
var welcomeScreen = function() {
  var welcomeMessage = document.createElement("div");
  welcomeMessage.className = "text-box";
  welcomeMessage.id = "question-container";
  welcomeMessage.innerHTML = "<h2 class='welcome' id='question-info'>Welcome to my quiz! Press the button when you're ready to start the quiz!</h2>";
  mainEl.appendChild(welcomeMessage);
  startButton();
};

// Input Start Quiz Button
var startButton = function() {
  var pressStart = document.createElement("div");
  pressStart.className = "start-btn-box";
  pressStart.id = "start-container";
  pressStart.innerHTML = "<button class='start-btn' id='start'>Start Quiz!</button>";
  mainEl.appendChild(pressStart);
}

// Start quiz with first set of questions.
var startQuiz = function(event) {

  var targetEl = event.target;
  
    var firstQ = document.getElementById("question-info").innerText = questions[0].question;

    var buttonGroupOne = document.getElementById("start-container");
    buttonGroupOne.className = "btn-box";
    buttonGroupOne.innerHTML = 
    "<button class='btn' id='0answer1'>" + questions[0].answer1 + "</button> <button class='btn' id='0answer2'>" + questions[0].answer2 + "</button> <button class='btn' id='0answer3'>" + questions[0].answer3 + "</button> <button class='btn' id='0answer4'>" + questions[0].answer4 + "</button>";

    if (targetEl.matches(".start-btn")) {
      timeHandler();
    }
    else if (targetEl.matches(".0answer3")) {
      secondQuestion();
    }
    else if (targetEl.matches(".0answer1" || ".0answer2" || ".0answer4" )) {
      alert("wrong!");
    }
    
};

// Second Set of questions
var secondQuestion = function() {
  var secondQ = document.getElementById("question-info").innerText = questions[1].question;

  var buttonGroupOne = document.getElementById("start-container");
  buttonGroupOne.className = "btn-box";
  buttonGroupOne.innerHTML = 
  "<button class='btn' id='1answer1'>" + questions[1].answer1 + "</button> <button class='btn' id='1answer2'>" + questions[1].answer2 + "</button> <button class='btn' id='1answer3'>" + questions[1].answer3 + "</button> <button class='btn' id='1answer4'>" + questions[1].answer4 + "</button>";
}

// Timer Function
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

// Question and Answer array
const questions = [
  {
    question: "How many companions were there when the Fellowship of the Ring left Rivendell?",
    answer1: "4 Companions",
    answer2: "13 Companions",
    answer3: "9 Companions",
    answer4: "8 Companions"
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


welcomeScreen();
mainEl.addEventListener("click", startQuiz);
