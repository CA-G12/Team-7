/*Start of question section functionalities*/
//Accessing all the elements
import { questions } from "./Data.js";

let amount = document.querySelector(".amount");
let questionText = document.querySelector(".question-text");
let answerA = document.querySelector("#a-text");
let answerB = document.querySelector("#b-text");
let answerC = document.querySelector("#c-text");
let answerD = document.querySelector("#d-text");
let next = document.querySelector(".btn");
let choice = document.querySelectorAll("#question input");
let allAnswers = document.querySelectorAll(".answers");
let secSection = document.querySelector("#question");
let thirdSection = document.querySelector("#score");
let fade = document.querySelector('.message');
let result = [];

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

  if (count === 11) {
    saveToLocalStorage(score);
    secSection.style.display = "none";
    thirdSection.style.display = "block";
    fade.style.display = 'none';
  }

  if (e.target && answer === null) {
    index--
    count--
    fade.style.display = 'block'
    setTimeout(function(){
      fade.style.display = 'none'
    }, 2000);
  } else {
    answer = null;
    amount.textContent = count;
    questionText.textContent = question.question;
    answerA.textContent = question.a;
    answerB.textContent = question.b;
    answerC.textContent = question.c;
    answerD.textContent = question.d;
  }

  allAnswers.forEach((ele) => {
    if (ele.checked === true) {
      ele.checked = false;
    }
  });
}

function check(e) {
  answer = e.target.getAttribute("id").toString();
}
/*Saving the userName and his score to local storage*/
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
/*End of question section functionalities*/
/*Start of homepage section functionalities*/
let formEL = document.forms[0];
let input = document.querySelector("#userName");

formEL.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value !== "") {
    saveLocalStorage(input.value);
    document.getElementById("home").style.display = "none";
    document.getElementById("question").style.display = "block";
    input.value = "";
    document.getElementById("question").style.display = "block";
  } else {
    alert("Please enter your name first");
  }
});

function saveLocalStorage(userName) {
  localStorage.setItem("user", userName);
}
/*End of homepage section functionalities*/

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

