//fix next function so if you spam next past the max it still responds to previous
//fix mathjax so it applies to every question

const questions = [
    {
        question:"$$∫ \\frac{x}{x^2+7}dx$$",
        answers:["1/2ln|x^2+7|+c","(1/2)ln|x^2+7|+c","1/2*ln|x^2+7|+c", "(1/2)*ln|x^2+7|+c", "1/2ln(x^2+7)+c","(1/2)ln(x^2+7)+c","1/2*ln(x^2+7)+c", "(1/2)*ln(x^2+7)+c", "(1/2)(ln(x^2+7))+c", "1/2(ln(x^2+7))+c", "(1/2)*(ln(x^2+7))+c", "1/2*(ln(x^2+7)+c"]
    },
    {
        question:"$$∫ x^{3}e^{x^4}dx$$",
        answers:["1/4e^x^4+c","(1/4)e^x^4+c","1/4*e^x^4+c", "1/4(e^x^4)+c", "(1/4)(e^x^4+c)", "1/4e^(x^4)+c", "(1/4)e^(x^4)+c", "(1/4)(e^(x^4))+c"]
    },
    {
        question:"$$∫ cos(2x)dx$$",
        answers:["1/5sin(5x)+c", "(1/5)sin(5x)+c", "1/5(sin(5x))+c", "(1/5)sin5x+c", "1/5sin5x+c", "1/5(sin5x)+c"]
    },
    {
        question:"$$∫ 2^{3x}dx$$",
        answers:["2^3x/3ln(2)+c", "(2^3x)/(3ln(2))+c", "2^3x/3(ln(2))+c", "2^3x/3*ln(2)+c", "2^3x/(3(ln(2)))+c"]
    },
    {
        question:"$$∫ \\frac{3}{xln(x)}dx$$",
        answers:["3ln|ln(x)|+c", "3(ln|ln(x)|)+c", "3ln(ln(x))+c", "3(ln(ln(x)))+c", "(3)ln|ln(x)|+c" ]
    },
    {
        question:"$$∫ x^{10}ln(x)dx$$",
        answers:["ln(x)(x^11/11)-(x^11/121)+c", "ln(x)x^11/11-x^11/121+c", "ln(x)*(x^11/11)-(x^11/121)+c", "(ln(x)(x^11/11))-(x^11/121)+c", "((ln(x)(x^11/11))-(x^11/121))+c"]
    },
    {
        question:"$$∫ x^{3}e^{2x}dx$$",
        answers:["(1/2)(x^3)(e^2x)-(3/4)(x^2)(e^2x)+(3/4)(x)(e^2x)-(3/8)(e^2x)+c", "1/2x^3e^2x-3/4x^2e^2x+3/4xe^2x-3/8e^2x+c", "(1/2x^3e^2x)-(3/4x^2e^2x)+(3/4xe^2x)-(3/8e^2x)+c", "(1/2)x^3e^2x-(3/4)x^2e^2x+(3/4)xe^2x-(3/8)e^2x+c", "(1/2)(x^3)(e^(2x))-(3/4)(x^2)(e^(2x))+(3/4)(x)(e^(2x))-(3/8)(e^(2x))+c"]
    },
    {
        question:"$$∫ e^{x}cos(5x)dx$$",
        answers:["(1/26)(cos(5x)e^x+5sin(5x)e^x)+c", "(1/26)((cos(5x)e^x)+(5sin(5x)e^x))+c", "(1/26)(((cos(5x)(e^x))+((5)(sin(5x)(e^x)))+c", "1/26(cos(5x)e^x+5sin(5x)e^x)+c", "(1/26)(cos(5x)e^x+5sin(5x)e^x+c)", "(1/26)(cos(5x)e^x+5sin(5x)e^x+c)", ]
    },
    {
        question:"$$∫ \\frac{dx}{x^2\\sqrt{x^2-100}}$$",
        answers:["(x^2-100)^1/2/100x+c", "(x^2-100)^1/2/(100x)+c"]
    },
    {
        question:"$$∫ \\frac{dx}{(1-x^2)^{3/2}}$$",
        answers:["x/(1-x^2)^1/2+c", "(x)/((1-x^2)^1/2)+c", "(x)/(1-x^2)^1/2+c", "x/((1-x^2)^1/2)+c"]
    },
    {
        question:"$$∫ \\frac{x^2+1}{x^4-2x^3+x^2}dx$$",
        answers:["(2ln|x|)-(1/x)-(2ln|x-1|)-(2/1-x)+c", "(2ln(x))-(1/x)-(2ln(x-1))-(2/1-x)+c", "2ln|x|-1/x-2ln|x-1|-2/1-x+c", "2ln(x)-1/x-2ln(x-1)-2/1-x+c", "2ln(x)-(1/x)-2ln(x-1)-2/(1-x)+c", "2ln(x)-(1/x)-2ln(x-1)-(2/1-x)+c", "2ln|x|-(1/x)-2ln|x-1|-(2/1-x)+c"]
    },
    {
        question:"$$∫ \\frac{x^3}{x^2-3x+2}dx$$",
        answers:["(x^2/2)+3x-ln|x-1|+8ln|x-2|+c", "((x^2)/2)+(3x)-(ln|x-1|)+(8ln|x-2|)+c", "((x^2)/2)+3x-ln|x-1|+8ln|x-2|+c", "x^2/2+3x-ln|x-1|+8ln|x-2|+c", "(x^2/2)+3x-ln(x-1)+8ln(x-2)+c", "((x^2)/2)+(3x)-(ln(x-1))+(8ln(x-2))+c", "((x^2)/2)+3x-ln(x-1)+8ln(x-2)+c", "x^2/2+3x-ln(x-1)+8ln(x-2)+c"]
    },
]

// $$∫ \\frac{x}{x^2+7}dx$$


let idx = 0



function checkAnswer() {
    const input = document.querySelector('#input').value;
    const possibleAnswers = questions[idx].answers;
    const isCorrect = possibleAnswers.includes(input);
    
   if (isCorrect) {
    document.getElementById("input").style.backgroundColor = 'lightgreen';
   }
   else {
    document.getElementById("input").style.backgroundColor = 'tomato';
   }
    // alert(isCorrect);

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
       document.getElementById("input").value = "";
       document.getElementById("input").style.backgroundColor = '';
}

function next() {
    
    console.log('next');
    ++idx;
    
    if (idx == questions.length) {
        idx = questions.length;
       }
       showQuestion();
       document.getElementById("input").value = "";
       document.getElementById("input").style.backgroundColor = '';
}

showQuestion();