var startBtnEl = document.querySelector("#start-quiz-btn");
var timeLeft = 75;
var timerEl = document.getElementById("timer");
var displayCorrectness = document.getElementById("correctness");
var questionNumber = 0;
let questions = [
    {
        "key": 1,
        "question": "Commonly used data types Do Not include:",
        "choices": [
            {
                "choice": "1. strings",
                "answer": false
            },
            {
                "choice": "2. booleans",
                "answer": false
            },
            {
                "choice": "3. alerts",
                "answer": true
            },
            {
                "choice": "4. numbers",
                "answer": false
            },
        ]
    },
    {
        "key": 2,
        "question": "The condition in an if/else statement is enclosed with ___________________.",
        "choices": [
            {
                "choice": "1. quotes",
                "answer": false
            },
            {
                "choice": "2. curly brackets",
                "answer": false
            },
            {
                "choice": "3. parenthesis",
                "answer": true
            },
            {
                "choice": "4. square brackets",
                "answer": false
            },
        ]
    },
    {
        "key": 3,
        "question": "Arrays in JavaScript can be used to store ________________.",
        "choices": [
            {
                "choice": "numbers and strings",
                "answer": false
            },
            {
                "choice": "other arrays",
                "answer": false
            },
            {
                "choice": "booleans",
                "answer": false
            },
            {
                "choice": "all of the above",
                "answer": true
            },
        ]
    },
    {
        "key": 4,
        "question": "String values must be enclosed within _______________ when being assigned to variables",
        "choices": [
            {
                "choice": "commas",
                "answer": false
            },
            {
                "choice": "curley brackets",
                "answer": false
            },
            {
                "choice": "quotes",
                "answer": true
            },
            {
                "choice": "parenthesis",
                "answer": false
            },
        ]
    },
    {
        "key": 5,
        "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "choices": [
            {
                "choice": "JavaScript",
                "answer": false
            },
            {
                "choice": "terminal/bash",
                "answer": false
            },
            {
                "choice": "for loops",
                "answer": false
            },
            {
                "choice": "console.log",
                "answer": true
            },
        ]
    },
];

var allDone = function () {
    console.log("all done");
}

function countDown() {

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = 'Time: 0';
            clearInterval(timeInterval);
            allDone();
        }
    }, 1000);
};

var isCorrect = function (correctness) {
    displayCorrectness.style.visibility = "visible";
    displayCorrectness.textContent = correctness;
}

var answerHandler = function (event) {
    var targetEl = event.target.getAttribute("data-choice-id");
    correctness = questions[questionNumber].choices[targetEl].answer;
    if (correctness) {
        isCorrect("Correct!");
    } else {
        isCorrect("Wrong!");
        timeLeft = timeLeft - 10;
    }
    questionNumber++;
    setTimeout(displayQuestions, 1000);
}

var displayQuestions = function () {
    if ((questionNumber < questions.length) && (timeLeft > 0)) {
        var currentQuestion = questions[questionNumber];
        var displayQuestion = document.getElementById("question");
        displayQuestion.textContent = currentQuestion.question;
        var choiceList = document.getElementById("answers");
        choiceList.innerHTML = '';
        displayCorrectness.style.visibility = "hidden";
        for (var i = 0; i < currentQuestion.choices.length; i++) {
            var displayChoice = document.createElement("button");
            displayChoice.className = "choiceButton";
            displayChoice.textContent = currentQuestion.choices[i].choice;
            displayChoice.setAttribute("data-choice-id", i);
            choiceList.appendChild(displayChoice);
        }
        choiceList.addEventListener("click", answerHandler);

    }
    else {
        allDone();
    }
}






var startQuiz = function () {
    console.log("quiz has started");
    document.getElementById("first-page").style.display = "none";
    countDown();
    displayQuestions();






}



startBtnEl.addEventListener("click", startQuiz);