

// const questionsContainer = $("#questions").class();
// console.log(questionsContainer);

// buttons
const startButton = $("#start-button");
const submitInitials = $("#submit-initials");
const goBackButton = $("#go-back");
const clearHighScores = $("#clear-scores");

let finalScore = 0;
let numCorrect = 0;
let questionCounter = 0;
let timeLeft = 0;

let questionCard = [];


let quiz = [
    {
        question: "What's something that ants do that is behavior typically associated with humans?",
        answers: [
            "Calculus",
            "Stretching when waking up",
            "Putting socks on",
            "Foot racing"],
        correctAnswer: 1
    },
    {
        question: "Question 2",
        answers: [
            "Right",
            "Wrong",
            "Wrong",
            "Wrong"],
        correctAnswer: 0
    },
    {
        question: "Question 3",
        answers: [
            "Wrong",
            "Right",
            "Wrong",
            "Wrong"],
        correctAnswer: 1
    },
    {
        question: "Question 4",
        answers: [
            "Wrong",
            "Wrong",
            "Right",
            "Wrong"],
        correctAnswer: 2
    },
    {
        question: "Question 5",
        answers: [
            "Wrong",
            "Wrong",
            "Wrong",
            "Right"],
        correctAnswer: 3
    }
]



function startGame () {
    
}

function corrector () {
    var answerSelected = event.target.getAttribute("answer-id");
    if (quiz.answers.correctAnswer) {

    }
}

createQuestion = () => {
    for (i = 0; i < quiz.length; i++) {
        selectedQuestion = quiz[i].question;
        var displayedQuestion = (i + 1) + ". " + selectedQuestion;
        displayedQuestion.innerHTML = "<h2>" + quiz[i].question + "</h2>"

        answersEl.innerHTML = "";
        for (let j = 0; j < quiz[i].answers.length; j++) {
            // choices = $("#" + j).text(quiz[i].answers[j]);
            var answerButton = document.createElement("button");
            answerButton.setAttribute("answer-id", j);
            answerButton.setAttribute("class", "answer-button");
            answerButton.innerText = quiz[i].answers[j];
            $(answerButton).click(corrector());
            answersEl.appendChild(answerButton);
        }
    }
}    


console.log("getting it to display outside log");

createQuestion();

// $("#final-score").html() = "Your final score was " + finalScore;

$(startButton).click(startGame());