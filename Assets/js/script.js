// const questionsContainer = $("#questions").class();
// console.log(questionsContainer);

// buttons
const startButton = $("#start-button");
const submitInitials = $("#submit-initials");
const goBackButton = $("#go-back");
const clearHighScores = $("#clear-scores");

let finalScore = 0;
let numCorrect = 0;



let quiz = [
    {
        question: "What's something that ants do that is behavior typically associated with humans?",
        answers: {
            a: "Calculus",
            b: "Stretching when waking up",
            c: "Putting socks on",
            d: "Foot racing"
        }
        // correctAnswer: b
    },
    {
        question: "Question 2",
        answers: {
            a: "Right",
            b: "Wrong",
            c: "Wrong",
            d: "Wrong"
        }
        // correctAnswer: a
    },
    {
        question: "Question 3",
        answers: {
            a: "Wrong",
            b: "Right",
            c: "Wrong",
            d: "Wrong"
        }
        // correctAnswer: b
    },
    {
        question: "Question 4",
        answers: {
            a: "Wrong",
            b: "Wrong",
            c: "Right",
            d: "Wrong"
        }
        // correctAnswer: c
    },
    {
        question: "Question 5",
        answers: {
            a: "Wrong",
            b: "Wrong",
            c: "Wrong",
            d: "Right"
        }
        // correctAnswer: d
    }
]

createQuestion = () => {
    for (i = 0; i < quiz.length; i++) {
        question = $("#questions").text(quiz.question[i]);
        console.log(question);
        for (i = 0; i < answers.length; i++) {
            // let choice = $("<button></button>").text(quiz.answers[i]);
            choice = $("btn1").click(function(){
                    $("#choices").text(quiz.answers[i]);
                });
        }
    }
    $(question).append("#questions");
    $(choice).append("#choices");
}

createQuestion();

$("#final-score").html() = "Your final score was " + finalScore;