/*jshint esversion: 6 */

// getting all required elments
let start_btn = document.querySelector(".start_btn button");
let info_box = document.querySelector(".info_box");
let titleBox_rmv = document.querySelector(".title_box");
let exit_btn = info_box.querySelector(".buttons .quit");
let continue_btn = info_box.querySelector(".buttons .restart");
let quiz_box = document.querySelector(".quiz_box");
let timeCount = quiz_box.querySelector(".timer .timer_sec");
let timeLine = quiz_box.querySelector("header .time_line");
let timeOff = quiz_box.querySelector("header .time_text");
let option_list = document.querySelector(".option_list");

//If Start Quiz Button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show the info box
    titleBox_rmv.style.display = "none"; //hide title box
};

//If Exit Button Clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
    titleBox_rmv.style.display = "block"; // show title box
};

//If Continue Button Clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.add("activeQuiz"); //Show the Quiz box
    showQuestion(0);
    queCounter(1);
    startTimer(10);
    startTimerLine(0);
};

let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 10;
let widthValue = 0;
let userScore = 0;

let next_btn = quiz_box.querySelector(".next_btn");
let result_box = document.querySelector(".result_box");
let quit_quiz = result_box.querySelector(".buttons .quit");


quit_quiz.onclick = ()=>{
    window.location.reload();
};

// Gets the current score from the DOM and increments it by 1

function incrementCorScr() {

    let oldScore = parseInt(document.getElementById("cor_scr").innerText);
    document.getElementById("cor_scr").innerText = ++oldScore;
}

// If Next Button Clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestion(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
        timeOff.textContent = "Time Left";
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResultBox();
    }
};

//getting questions and options from array
function showQuestion(index){
    let que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'+'<div class="option"><span>'+ questions[index].options[1] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag;

    let option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fa-solid fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fa-solid fa-xmark"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
        incrementCorScr();
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIcon);
        
         //if answers is incorrect then automatically selected the correct answer
         for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    
//once user selected disabled all options
        for (let i = 0; i < allOptions; i++) {
            option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}

function showResultBox(){
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.remove("activeQuiz"); //hide the Quiz box
    result_box.classList.add("activeResult"); //Show the Result box
    let scoreText = result_box.querySelector(".score_text");
    if(userScore > 6){
        let scoreTag = '<span>Congrats! you got <span>'+ userScore +'</span> out of <span>'+ questions.length +'</span></span>';
        scoreText.innerHTML = scoreTag; 
    }
    else if(userScore > 4){
        let scoreTag = '<span>Nice! You got <span>'+ userScore +'</span> out of <span>'+ questions.length +'</span></span>';
        scoreText.innerHTML = scoreTag; 
    }
    else{
        let scoreTag = '<span>Try again! You got only <span>'+ userScore +'</span> out of <span>'+ questions.length +'</span></span>';
        scoreText.innerHTML = scoreTag; 
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off";

            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display = "block";
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 109);
    function timer(){
        time += 1;
        timeLine.style.width = time + "%";
        if(time > 99){
            clearInterval(counterLine);
        }
    }
}

function queCounter(index){
    let bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}