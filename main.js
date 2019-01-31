const questions = [
    {
        question: "What is 10 + 10?",
        options: ["100", "20", "30", "40"],
        answer: "20"
    },

    {
        question: "What is the capital city of Nigeria",
        options: ["Abuja", "Sokoto", "Kaduna", "Jos"],
        answer: "Abuja"
    },

]

let correct = 0;
let question_number = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question () {
    let current_question = questions[question_number];

    // get question and output it to #questions
    document.querySelector("#question").innerHTML = questions[question_number].question;
    // get options and output it to #options
    const options = document.querySelector("#options");
    options.innerHTML = "";



    // loop through each option
    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
    }

    document.querySelectorAll(".option").forEach(option => {
        //  add event listeners
        option.onclick = () => {
            question_number++;
            current_question.choice = option.textContent;

            if (option.textContent === current_question.answer) correct++

            document.getElementById("correct").innerHTML = correct + " | " + question_number;

            //if questions are completed, quiz over otherwise reload questions

            question_number >= questions.length ? quiz_over() : load_question();

            
        }
    });
}

function game_over() {
    document.querySelector()
}

// link https://codepen.io/Digicrest/pen/XOWPdY?editors=0010