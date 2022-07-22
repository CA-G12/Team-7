//start section score
const retry = document.getElementById("ret-btn");
const nam = document.getElementById("pl-name");
const scoreSec = document.getElementById("score");
nam.textContent=`${user}`;
scr.textContent=`${score}`;

retry.addEventListener('click', function() {
    scoreSec.style.display="none";
    document.getElementById("home").style.display="block";
    document.getElementById("content-box1").style.display="block";
});

//end section score