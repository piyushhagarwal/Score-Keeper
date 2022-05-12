let p1score = document.querySelector('#p1score');
let p2score = document.querySelector('#p2score');
let winPoints = document.querySelector('#winpoints');
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p = document.querySelector('#p');
let reset = document.querySelector('#reset');
let score1 = 0;
let score2 = 0;
let isGameOver = false;
p1.addEventListener('click',()=>{
    if(!isGameOver){
        score1 += 1;
        
        if(score1 === parseInt(winPoints.value)){
            isGameOver = true;
            p1score.style.color = 'green'
            p.innerText = "PLAYER 1 WINS"
            p2score.style.color = 'red'

        }
        p1score.innerText = score1
    }
});

p2.addEventListener('click',()=>{
    if(!isGameOver){
        score2 += 1;
        
        if(score2 === parseInt(winPoints.value)){
            isGameOver = true;
            p2score.style.color = 'green'
            p.innerText = "PLAYER 2 WINS"
            p1score.style.color = 'red'
        }
        p2score.innerText = score2
    }
});

reset.addEventListener('click',()=>{
    p1score.innerText = 0
    p2score.innerText = 0
    score1=0
    score2=0
    isGameOver = false;
    p1score.style.color = 'black'
    p2score.style.color = 'black'
    p.innerText = 'Use the buttons below to keep score.'
})