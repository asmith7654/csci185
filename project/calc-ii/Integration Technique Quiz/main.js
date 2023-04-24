const questions = [
    {
        question:"What is the integral of 1/x?",
        answers:["1","2","3"]
    },
    {
        question:"What is the integral of 1/x+2?",
        answers:["1","2","3"]
    },
    {
        question:"What is the integral of 1/x+3?",
        answers:["1","2","3"]
    },
    {
        question:"What is the integral of 1/x+4?",
        answers:["1","2","3"]
    },
    {
        question:"What is the integral of 1/x+5?",
        answers:["1","2","3"]
    }
]



let idx = 0



function checkAnswer() {
    const input = document.querySelector('#input').value;
    const possibleAnswers = questions[idx].answers;
    const isCorrect = possibleAnswers.includes(input);
    
    alert(isCorrect);

}

function showQuestion() {
    document.getElementsByTagName('h2')[0].innerHTML = questions[idx].question;
    console.log("show question");
}

function previous() {
    console.log('previous');
    --idx;
    
    if (idx == -1) {
        idx = 0;
       }
       showQuestion();
}

function next() {
    console.log('next');
    ++idx;
    
    if (idx == questions.length) {
        idx = questions.length;
       }
       showQuestion();
       //add clear function
}

showQuestion();