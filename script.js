//Accessing all the elements
import { questions } from "./Data.js";

let amount = document.querySelector(".amount");
let questionText = document.querySelector(".question-text");
let list = document.querySelector("ul");
let answerA = document.querySelector("#a-text");
let answerB = document.querySelector("#b-text");
let answerC = document.querySelector("#c-text");
let answerD = document.querySelector("#d-text");
let next = document.querySelector(".btn");
let choice = document.querySelectorAll("input");
let idA = document.querySelector('#a');


let secSection = document.querySelector('#question');
let thirdSection = document.querySelector('#score')
let result = [];
localStorage.setItem('user', 'sara')
next.addEventListener("click", nextQuestion);
let score = 0;
let count = 1;
let index = 0;
let answer = null;

choice.forEach((e) => {
  e.addEventListener("click", check);
});

function nextQuestion(e) {
  count++;
  index++;

  let question = questions[index];
  let correct = questions[index - 1].correct;
  if (correct === answer) score++;
  console.log(correct === answer)

  if (count === 6) {
    saveToLocalStorage(score);
    secSection.style.display = 'none';
    thirdSection.style.display = 'block';
  }

  amount.textContent = count;
  questionText.textContent = question.question;
  answerA.textContent = question.a;
  answerB.textContent = question.b;
  answerC.textContent = question.c;
  answerD.textContent = question.d;
  if(idA.checked){
    idA.removeAttribute('checked');
  }
}

function check(e) {
  answer = e.target.getAttribute("id").toString();
  console.log(answer);
}

function saveToLocalStorage(value) {
  let user = localStorage.getItem("user");
  result = JSON.parse(localStorage.getItem("score"));

  if (result) {
    let userObj = {
      name: user,
      score: value,
    };

    result.push(userObj);
    localStorage.setItem("score", JSON.stringify(result));
  } else {
    let result = [];
    let userObj = {
      name: user,
      score: value,
    };

    result.push(userObj);
    localStorage.setItem("score", JSON.stringify(result));
  }
}


let formEL = document.forms[0];
let input = document.querySelector('#userName');


formEL.addEventListener("submit",function(e){
    e.preventDefault();
    if(input.value !== ''){
        saveLocalStorage (input.value)
        document.getElementById("home").style.display="none";
        document.getElementById("question").style.display="block";
    input.value = ""
    document.getElementById("question").style.display="block";

    }else{
        alert('Please enter your name first')
    }

})


function saveLocalStorage (userName){
localStorage.setItem("user",userName)
}

//start section score

const retry = document.getElementById("ret-btn");
const nam = document.getElementById("pl-name");
const scoreSec = document.getElementById("score");
scoreSec.style.display="none";
nam.textContent=`${user}`;
scr.textContent=`${score}`;

retry.addEventListener('click', function() {
    scoreSec.style.display="none";
    document.getElementById("home").style.display="block";
    document.getElementById("content-box1").style.display="block";
});

//end section score

