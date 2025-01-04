const questions = [
    {
        question:"What does the word 'عائلة' mean?" ,
        options: ["Love", "Family", "Home", "Friend"],
        answer: "Family"
    },
    {
        question:"What does the word 'Pain' mean?" ,
        options: ["Home", "Sorry", "Love", "Bread"],
        answer: "Bread"
    },
    {
        question:"What does the word 'Amigo' mean?" ,
        options: ["Family", "Friend", "Love", "Thanks"],
        answer: "Friend"
    },
    {
        question:"What does the word '水' mean?" ,
        options: ["Yes", "Water", "No", "Child"],
        answer: "Water"
    },
    {
        question:"What does the word 'آسف' mean?" ,
        options: ["Sorry", "Water", "Hello", "Thanks"],
        answer: "Sorry"
    },
    {
        question:"What does the word 'Çocuk' mean?" ,
        options: ["Water", "Bread", "Excuse me", "Child "],
        answer: "Child"
    },
    {
        question:"What does the word 'Casa' mean?" ,
        options: ["Home", "Bread", "Family", "Water"],
        answer: "Home"
    },
    {
        question:"What does the word 'École' mean?" ,
        options: ["Love", "Child", "Home", "School"],
        answer: "School" 
    },
    {
        question:"What does the word 'Hayır' mean?" ,
        options: ["Yes", "No", "Sorry", "Thanks"],
        answer: "No"
    },
    {
        question:"What does the word '谢谢' mean?" ,
        options: ["Bread", "Water", "Thanks", "Sorry"],
        answer: "Thanks"
    },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

function startTimer() {
    let timeLeft = 60;
    const timerElement = document.getElementById("timer");
    timer = setInterval(() => {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const resultElement = document.getElementById("result");
    
    // عرض رسالة إجابتك صحيحة أو خاطئة
    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = "Your answer is correct!";
        score++;
    } else {
        resultElement.textContent = "Your answer is wrong!";
    }

    setTimeout(() => {
        resultElement.textContent = ""; 
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            showFinalScore();
        }
    }, 1000);
}

function showFinalScore() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("timer").style.display = "none"; 
    
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `You have answered correctly ${score} out of ${questions.length} questions!`;
}

startTimer();
loadQuestion();