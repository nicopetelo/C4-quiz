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
        answers: [
            "Calculus",
            "Stretching when waking up",
            "Putting socks on",
            "Foot racing"]
        // correctAnswer: b
    },
    {
        question: "Question 2",
        answers: [
            "Right",
            "Wrong",
            "Wrong",
            "Wrong"]
        // correctAnswer: a
    },
    {
        question: "Question 3",
        answers: [
            "Wrong",
            "Right",
            "Wrong",
            "Wrong"]
        // correctAnswer: b
    },
    {
        question: "Question 4",
        answers: [
            "Wrong",
            "Wrong",
            "Right",
            "Wrong"]
        // correctAnswer: c
    },
    {
        question: "Question 5",
        answers: [
            "Wrong",
            "Wrong",
            "Wrong",
            "Right"]
        // correctAnswer: d
    }
]

createQuestion = () => {

    for (i = 0; i < quiz.length; i++) {
        selectedQuestion = quiz[i].question;
        displayedQuestion = (i + 1) + ". " + selectedQuestion;
        // console.log(displayedQuestion);
        // $(".questions").append("<div class='question'></div>");
        $(".questions").append(displayedQuestion);
        for (j = 0; j < quiz[i].answers.length; j++) {
            answerOption = quiz[i].answers[j];
            // console.log(answerOption);
            choices = $("#" + j).text(quiz[i].answers[j]);
            // console.log(choices);

            // $(".questions").append(answerOption);
        };
        // for (j = 0; j < quiz[i].answers.length; j++) {}
    };
    // $(".choices").append(choice);
}


console.log("getting it to display outside log");

createQuestion();

// $("#final-score").html() = "Your final score was " + finalScore;