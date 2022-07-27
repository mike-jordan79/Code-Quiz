const creatingMain = document.querySelector('.creating-main')

const questionContainer = document.querySelector('.question-container')

const btn =document.querySelector('.button')

btn.addEventListener('click', function(){
    creatingMain.classList.add('hide')
    questionContainer.classList.remove('hide')
    

})
console.log('hello')