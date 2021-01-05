'use strict';

//Generating secret Number
let secretNumber = Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;

//Making Check_Button to Work.
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //Game code
    if (!guess) {
        document.querySelector('.message').textContent = '🔢 Enter Number';
    }
    //Win Check...!
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '✌ VICTORY 🥳';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.highscore').textContent = score;
        if(document.querySelector('.highscore').textContent > score) {
            document.querySelector('.highscore').textContent = score;
        }
    } 
    //For Wrong guess.
    else if(guess !== secretNumber){
        if(score > 1) {
        document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High': '📉 Too Low';
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🎃YOU LOST';
            document.querySelector('.score').textContent = 0;
        }
    }
//  Extra Code
/* 
    else if (guess > secretNumber) {
        if(score > 1) {
        document.querySelector('.message').textContent = '📈 Too High';
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🎃YOU LOST';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < secretNumber) {
        if(score > 1){
        document.querySelector('.message').textContent = '📉 Too Low';
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '🎃YOU LOST';
            document.querySelector('.score').textContent = 0;
        }
    }*/
    // else if(guess === secretNumber){
    //     document.querySelector('.check').addEventListener('click', function() {
    //         secretNumber = Math.trunc(Math.random()*20)+1;
    //         score = 20;
                
    //         document.querySelector('.score').textContent = score;
    //         document.querySelector('body').style.backgroundColor = '#222';
    //         document.querySelector('.number').style.width = '20rem';
    //         document.querySelector('.number').textContent = '?';
    //         document.querySelector('.guess').value = '';
    //         document.querySelector('.message').textContent = 'Start guessing...';
    //     })
    // }
})

// To Reset the Game.
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;

    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
})

// if (guess === secretNumber){
// document.querySelector('.check').addEventListener('click', function() {
//     secretNumber = Math.trunc(Math.random()*20)+1;
//     score = 20;
                
//     document.querySelector('.score').textContent = score;
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';
//     document.querySelector('.message').textContent = 'Start guessing...';
// })
// }