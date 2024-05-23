let questions = [
    {
        question: 'Which HTML tag is used to define an inline style?',
        options: ['<script>', '<css>', '<style>', '<span>'],
        answer: 2
    },
    {
        question: 'Which property is used to set the background color of an element in CSS?',
        options: ['background-color', 'color', 'background', 'bgcolor'],
        answer: 0
    },
    {
        question: 'In JavaScript, what is the correct way to declare a variable?',
        options: ['variable x', 'var x', 'let x', 'int x'],
        answer: 1
    },
    {
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
        answer: 0
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        options: ['onchange', 'onmouseclick', 'onmouseover', 'onclick'],
        answer: 3
    },
    {
        question: 'How do you write "Hello World" in an alert box using JavaScript?',
        options: ['msgBox("Hello World");', 'alert("Hello World");', 'msg("Hello World");', 'alertBox("Hello World");'],
        answer: 1
    },
    {
        question: 'Which HTML attribute is used to define inline styles?',
        options: ['class', 'styles', 'font', 'style'],
        answer: 3
    },
    {
        question: 'Which property is used to change the text color of an element in CSS?',
        options: ['color', 'text-color', 'font-color', 'foreground-color'],
        answer: 0
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        options: ['var colors = "red", "green", "blue";', 'var colors = ["red", "green", "blue"];', 'var colors = {"red", "green", "blue"};', 'var colors = "red/green/blue";'],
        answer: 1
    },
    {
        question: 'What does the <noscript> tag do?',
        options: ['Defines an alternate content for users that have disabled scripts in their browser', 'Defines a section of navigation links', 'Defines a section of computer code', 'Defines the footer for a document or section'],
        answer: 0
    }
];

let currentQuestion = 0;
let totalQuestions = questions.length;
let score = 0;

let scoreText = document.getElementById('score');
let progressBar = document.getElementById('progress');
let progressText = document.getElementById('progress-text');
let question = document.getElementById('question');
let options = document.getElementsByClassName('option');

updateHUD();

let canClick = true;

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function() {
        if (!canClick) return;
        canClick = false;

        if (i == questions[currentQuestion].answer) {
            options[i].getElementsByClassName('option-text')[0].style.backgroundColor = 'green';
            score += 10;
            scoreText.textContent = score;
        } else {
            options[i].getElementsByClassName('option-text')[0].style.backgroundColor = 'red';
        }
        
        sleep(2000).then(() => {
            currentQuestion++;
            if (currentQuestion == totalQuestions) {
                window.location.href = "end.html?score=" + score;
                return;
            }
            updateHUD();
            options[i].getElementsByClassName('option-text')[0].style.backgroundColor = 'white';
            canClick = true;
        });
    });
}

function updateHUD() {
    progressText.textContent = `Question ${currentQuestion+1}/${totalQuestions}`;
    question.textContent = questions[currentQuestion].question;

    const percent = ((currentQuestion + 1) / (totalQuestions)) * 100;
    progressBar.style.width = percent + "%";

    for (let i = 0; i < options.length; i++) {
        options[i].getElementsByClassName('option-text')[0].textContent = questions[currentQuestion].options[i];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }