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



