let game_seq=[];
let user_seq=[];
let colors=["aqua","violet","green","red"];
let started=false;
let level=0;
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started...");
        started=true;
        levelUp();
    }

});
function GameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function levelUp(){
    user_seq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let RandIndex=Math.floor(Math.random()*3);
    let RandColor=colors[RandIndex];
    let RandBtn=document.querySelector(`.${RandColor}`);
    GameFlash(RandBtn);
    game_seq.push(RandColor);
    console.log(game_seq);
}
function btnpress(){
   let btn=this;
    UserFlash(btn);
    userColor = btn.getAttribute("id");
    //console.log(userColor);
    user_seq.push(userColor);
    console.log(user_seq);
    checkAns(user_seq.length-1);
}
 function checkAns(idx){
     if(user_seq[idx]==game_seq[idx])
     {
        if(game_seq.length==user_seq.length){
           setTimeout(levelUp,1000); 
        }
     }
     else{
         h3.innerHTML=`Game Over!!! Your Score Is <b>${level}</b> <br>Press Any Key To Continue...`
        Reset();
     }
}
let allBtns=document.querySelectorAll(".btn");
for(btns of allBtns){
    btns.addEventListener("click",btnpress);
}
function UserFlash(btn){
    btn.classList.add("UserFlash");
    setTimeout(function(){
        btn.classList.remove("UserFlash");
    },300);
}
function Reset(){
    started=false;
    game_seq=[];
    user_seq=[];
    level=0;
}