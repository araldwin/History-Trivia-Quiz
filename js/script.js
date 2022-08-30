// getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const titleBox_rmv = document.querySelector(".title_box");
const quiz_box = document.querySelector(".quiz_box");

//If Start Quiz Button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show the info box
    titleBox_rmv.classList.remove("title_box"); //hide title box
};

//If Exit Button Clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
    titleBox_rmv.classList.add("title_box"); // show title box
};

//If Continue Button Clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.add("activeQuiz"); //Show the Quiz box
};