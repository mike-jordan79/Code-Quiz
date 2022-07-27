const creatingMain = document.querySelector('.creating-main')
const questionContainer = document.querySelector('.question-container')
const btn = document.querySelector('.button')

let currentAns = '';
let questionNum = 0;
let currentScore = 0;

btn.addEventListener('click', startGame)

function startGame() {
    creatingMain.classList.add('hide')
    questionContainer.classList.remove('hide');
    // add questions
    // start clock
}

function addQuestions(event) {
    if (questionNum < questions.length) {
        let curentQues = questions[questionNum]
        currentAns = curentQues.answer;
    let questions = `
    <div  class="question-block">
            <p>${curentQues.title} </p>
           <div class="btn-holder" name="${curentQues.choices[0]}"><button>1</button></div> 
           <div class="btn-holder" name="${curentQues.choices[1]}> <button>2</button></div> 
           <div class="btn-holder" name="${curentQues.choices[2]}> <button>3</button></div> 
           <div class="btn-holder" name="${curentQues.choices[3]}><button>4</button></div> 
        </div>
    `;
    }
}

function startClock(event) {

}