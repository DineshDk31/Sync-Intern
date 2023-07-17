const quizData = [{
    question: "1. A homepage is",
    a: "An index of encyclopedia articles",
    b: "Where all Internet data is stored",
    c: "Required for access to the Internet",
    d: "The first page of a website",
    correct: "d",
},

{
    question: "2. HTML stands for ?",
    a: "HighText Markup language",
    b: "HyperText Markup language",
    c: "HyperText Markdown language",
    d: "HighText Markdown language",
    correct: "b",
},

{
    question: "3. CSS stands for ?",
    a: "Color Special sheet",
    b: "Color style sheet",
    c: "Cascading style sheet",
    d: "Color special sheet",
    correct: "c",
},
{
    question: "4. There are ___ levels of heading in HTML",
    a: "Three",
    b: "Four",
    c: "one",
    d: "Six",
    correct: "d",
},
{
    question: "5. The Major components of the Web browser are",
    a: "Menu bar",
    b: "Toolbar",
    c: "Location",
    d: "All of the Above",
    correct: "d",
},
{
    question: "6. The latest HTML standard is",
    a: "XML",
    b: "SGML",
    c: "HTML 4.0",
    d: "HTML 5.0",
    correct: "d",
},
{
    question: "7. The ___ element can be used to identify your HTML file to the outside world",
    a: "Title",
    b: "Body",
    c: "Head",
    d: "None of the above",
    correct: "a",
},
{
    question: "8. Which character is used to represent when a tag is closed in HTML?",
    a: "#",
    b: "!",
    c: "/",
    d: ";",
    correct: "c",
},
{
    question: "9. Which of the following is used to read an HTML page and render it?",
    a: "Web server",
    b: "Web network",
    c: "Web browser",
    d: "Web matrix",
    correct: "c",
},
{
    question: "10.  Which Of The Following Is An Internet Protocol.",
    a: "FTP",
    b: "TCP/IP",
    c: "SMTP",
    d: "EDI",
    correct: "b",
},

];


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz() {
deselectAnswers()
const currentQuizData = quizData[currentQuiz]
questionEl.innerText = currentQuizData.question
a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
let answer
answerEls.forEach(answerEl => {
    if (answerEl.checked) {
        answer = answerEl.id
    }
})
return answer
}
submitBtn.addEventListener('click', () => {
const answer = getSelected()
if (answer) {
    if (answer === quizData[currentQuiz].correct) {
        score++
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        resultBox()
    }
}
})

function resultBox() {
if (score > 5) {
    quiz.innerHTML = `
    <h1 style="color:blue;font-size:60px;text-align:center;"><i class="fa-sharp fa-solid fa-crown"></i> <br> WoW! Great </h1>
    <h4 style="text-align:center;">You answered ${score}/${quizData.length} questions correctly</h4>
    <button onclick="location.reload()">Reload</button>`
} else {
    quiz.innerHTML = `
    <h1 style="color:Grey;font-size:60px;text-align:center;"><i class="fa-solid fa-face-frown"></i> <br> Sorry, Try Again</h1>
    <h4 style="text-align:center;">You answered ${score}/${quizData.length} questions correctly</h4>
    <button onclick="location.reload()">Reload</button>`
}
}

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz-container");



start_btn.onclick = () => {
info_box.classList.add("activeInfo");
}

exit_btn.onclick = () => {
window.location.reload();
}

continue_btn.onclick = function () {
info_box.classList.remove("activeInfo");
quiz_box.classList.toggle("activeQuiz");
currentQuiz = 0
loadQuiz()

 }