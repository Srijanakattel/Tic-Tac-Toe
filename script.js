let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let turny=true;//playerx,playery
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
box.forEach((box) =>{
    box.addEventListener("click",()=>{
        
        if(turny){//if turn is of y?
            box.innerText="y";//if yes write y.
            turny=false;//once the y is written then fix it value as false so again y cannot have chance.
        }
        else{
            box.innerText="x";//after y turn is of x.
            turny=true;//once the x get turn fix the value of y as true so it can get next chance.
        }
        box.disabled=true;//this wont allow the change of value in double click once one value is set it cannot be changed.
         checkWinner();


    });
    
});
//function to disable boxes once one team win.
const disableBoxes=()=>{
    for(let boxes of box){
        boxes.disabled=true;
    }
};
//function to enable boxes after once the game is completed.
const enableBoxes=()=>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
    }
};

const showWinner =(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
//function to check winner
const checkWinner =()=>{
    for(let pattern of winPatterns){
        let pos1val=box[pattern[0]].innerText;
        let pos2val=box[pattern[1]].innerText;
        let pos3val=box[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
             showWinner(pos1val);
            }
        }

    }
};
//function to reset game
const resetGame=()=>{
    turny=true;
    enableBoxes();
    msgcontainer.classList.add("hide");

};
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
