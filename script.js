'use strict';

let numEl = document.querySelector(".number");
let scoreEl = document.querySelector(".score");
let highScoreEl = document.querySelector(".highscore");
let msgEl = document.querySelector(".message");
let score = 20;
const guessEl = document.querySelector(".guess");
const checkEl = document.querySelector(".check");
const againEl = document.querySelector(".again");

let flag = true;
let secNum = Math.trunc(Math.random()*20)+1;

againEl.addEventListener("click",initAgain);
checkEl.addEventListener("click",checkNum);

function checkNum() {
    if(guessEl.value != ""){
        if(flag){
            if(score>1){
                if(guessEl.value==secNum){
                    msgEl.textContent = "Correct Number";
                    numEl.textContent = secNum;
                    if(highScoreEl.textContent<score){
                        highScoreEl.textContent = score;
                    }
                    flag = false;
                    document.body.style.backgroundColor = "green";
                } else if(guessEl.value>secNum){
                    msgEl.textContent = "Too High!!";
                    score--;
                    scoreEl.textContent = score; 
                } else {
                    msgEl.textContent = "Too Low!!";
                    score--;
                    scoreEl.textContent = score; 
                }
            } else {
                msgEl.textContent = "You Lost!!";
                document.body.style.backgroundColor = "red";
                score = 0;
                scoreEl.textContent = score;       
            }
        }
    }
}

function initAgain() {
    document.body.style.backgroundColor = "#222";
    secNum = Math.trunc(Math.random()*20)+1;
    numEl.textContent = "?";
    score = 20;
    scoreEl.textContent = 20;
    guessEl.value = "";
    msgEl.textContent = "Start guessing...";
    flag = true;
}