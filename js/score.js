const creatingMain = document.querySelector('.creating-main')
const questionContainer = document.querySelector('.question-container')
const btn = document.querySelector('.button')
const timer = document.getElementById('timer');

console.log({questions})

let importedQuestions = questions;

let currentAns = '';
let questionNum = 0;
let currentScore = 0;
let counter = 0;

btn.addEventListener('click', startGame)

function startGame() {
    creatingMain.classList.add('hide')
    questionContainer.classList.remove('hide');
    // add questions
    addQuestions()
    // start clock
    startCountdown(20)
}

function startCountdown(seconds) {
    counter = seconds;

    const interval = setInterval(() => {
        timer.innerHTML = counter;
        counter--;

        if (counter < 0) {
            questionContainer.innerHTML = ""
        }
    }, 1000)
}

function addQuestions() {
    if (questionNum < questions.length) {
        let curentQues = importedQuestions[questionNum];
        console.log(curentQues)

        currentAns = curentQues.answer;

    let listOfQuest = `
    <div  class="question-block">
            <p>${curentQues.title} </p>
           <div class="btn-holder" name="${curentQues.choices[0]}" onclick="getAnswer(event)"><button>${curentQues.choices[0]}</button></div> 
           <div class="btn-holder" name="${curentQues.choices[1]}" onclick="getAnswer(event)"> <button>${curentQues.choices[1]}</button></div> 
           <div class="btn-holder" name="${curentQues.choices[2]}" onclick="getAnswer(event)"> <button>${curentQues.choices[2]}</button></div> 
           <div class="btn-holder" name="${curentQues.choices[3]}"onclick="getAnswer(event)"> <button>${curentQues.choices[3]}</button></div> 
        </div>
    `;
    questionContainer.innerHTML = ``;
    questionContainer.innerHTML = listOfQuest;
    }
}

function startClock(event) {

}

function getAnswer(event) {

}