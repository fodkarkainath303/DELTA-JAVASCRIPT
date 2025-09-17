let gameSeq=[];
let userSeq=[];

let level=0;

let started="false";
let h2=document.querySelector("h2");



let btns=["red","yellow","green","purple"];

document.addEventListener("keypress" , function(){
    if(started=="false"){
        started="true";
        levelUp();
        userSeq=[];
     }
})

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){ 
        btn.classList.remove("gameflash");
    }, 250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){ 
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq=[];
    h2.innerText=`Level ${++level} `;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randbtn);
} 

let highscore = 0;
let h1 = document.querySelector("h1");
let scoreBoard = document.createElement("p");
scoreBoard.innerText = `Highscore = ${highscore}`;
h1.append(scoreBoard);

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
      
    }}
    else {
       let newhighscore = level - 1;
       if (newhighscore > highscore) {
        highscore = newhighscore;
       }
      scoreBoard.innerText = `Highscore = ${highscore}`;
      
       h2.innerHTML=`Wrong sequence! Your score was <b>${newhighscore}.</b><BR>Press any key to start the game again`; 

       let body=document.querySelector("body");
       body.style.backgroundColor="red";
       setTimeout(function(){
        body.style.backgroundColor="white"
       }, 250);
       userSeq=[];
       gameSeq=[];
       started="false";
       level=0;
    }
}



function btnPress(){
    let btn=this;
    userflash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
} 


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


