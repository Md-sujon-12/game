let box=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetgame");


let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8], 
];

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();

    });
});





const checkwinner=()=>{
    for(pattern of winpatterns){
        let pos1val= box[pattern[0]].innerText;
        let pos2val= box[pattern[1]].innerText;
        let pos3val= box[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner");
                
            }
        }
    }
};
 let resetgame=document.querySelector(".resetgame");

 resetgame.onclick=()=>{
    console.log(resetgame)
 };
