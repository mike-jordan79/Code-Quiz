const creatingMain = document.querySelector(".creating-main");
const questionContainer = document.querySelector(".question-container");
const btn = document.querySelector(".button");
const timer = document.getElementById("timer");
let wrongAnswer, rightAnswer;

console.log({ questions });

let importedQuestions = questions;

let currentAns = "";
let questionNum = 0;
let currentScore = 0;
let counter = 0;
let interval;

btn.addEventListener("click", startGame);

function startGame() {
  creatingMain.classList.add("hide");
  questionContainer.classList.remove("hide");
  // add questions
  addQuestions();
  // start clock
  startCountdown(60);
}

function startCountdown(seconds) {
  counter = seconds;

  interval = setInterval(() => {
    timer.innerHTML = `Time: ${counter}`;
    if (counter > 0) {
      counter--;
    }

    if (counter <= 0) {
    //   questionContainer.innerHTML = "";
       gameFinished();
    }
  }, 1000);
}

function addQuestions() {
  if (questionNum < questions.length) {
    let currentQues = importedQuestions[questionNum];

    currentAns = currentQues.answer;

    let listOfQuest = `
        <div  class="question-block">
            <p>${currentQues.title} </p>
            
           <div><button name="${currentQues.choices[0]}" onclick="getAnswer(event)" class="btn-holder">1. ${currentQues.choices[0]}</button></div> 
           <div><button name="${currentQues.choices[1]}" onclick="getAnswer(event)" class="btn-holder">2. ${currentQues.choices[1]}</button></div> 
           <div><button name="${currentQues.choices[2]}" onclick="getAnswer(event)" class="btn-holder">3. ${currentQues.choices[2]}</button></div> 
           <div><button name="${currentQues.choices[3]}" onclick="getAnswer(event)" class="btn-holder">4. ${currentQues.choices[3]}</button></div> 
        </div>
        <div class="wrong-answer hide">
            <h2 style="font-style:italic">Wrong Answer!</h2>
        </div>
        <div class="right-answer hide">
            <h2 style="font-style:italic">Right Answer!</h2>
        </div>
    `;

    questionContainer.innerHTML = ``;
    questionContainer.innerHTML = listOfQuest;
    wrongAnswer = document.querySelector(".wrong-answer");
    rightAnswer = document.querySelector(".right-answer");
  } else {
    gameFinished();
  }
}

function startClock(event) {}

function getAnswer(event) {
  // If wrong answer, subtract 5 seconds from counter
  if (event.target.name !== currentAns) {
    wrongAnswer.classList.remove("hide");
    counter = counter - 5;
  } else {
    rightAnswer.classList.remove("hide");
    // update answer score
    currentScore += 10;
  }

  // increase questionNum
  ++questionNum;
  // invoke addQuestions
  setTimeout(() => {
    if (wrongAnswer.classList.contains("hide")) {
      wrongAnswer.classList.remove("hide");
    }

    if (rightAnswer.classList.contains("hide")) {
      rightAnswer.classList.remove("hide");
    }
    addQuestions();
  }, 800);
}

function gameFinished() {
  clearInterval(interval);

  questionContainer.innerHTML = ``;
  let finished = `
        <div  class="question-block">
            <h2>Game is Finished</h2>
            <p>Your score is : ${currentScore}</p>
            <div>
                <span>Enter Initials:</span> <input id="initials" type="text name="initials /> <button id="initial-submit">Submit</button>
            </div>
        </div>
    `;

  questionContainer.innerHTML = finished;
  let initialBtn = document.getElementById("initial-submit");

  initialBtn.addEventListener("click", function (event) {
    let initialVal = document.getElementById("initials").value;

    if (localStorage.getItem("highScoreList") !== null) {
      let highScore = JSON.parse(localStorage.getItem("highScoreList"));

      highScore.push({
        initials: initialVal,
        score: currentScore,
      });

      localStorage.setItem("highScoreList", JSON.stringify(highScore));
    } else {
      let firstScore = [];

      firstScore.push({
        initials: initialVal,
        score: currentScore,
      });

      localStorage.setItem("highScoreList", JSON.stringify(firstScore));
    }

    console.log({ initialVal, currentScore });
    window.location.href = "/viewhighscore.html";
  });
}