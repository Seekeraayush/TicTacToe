let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#newBtn");
let newmsg = document.querySelector("#msg");

let playerTurnO = true;
let count = 0;

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    playerTurnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(playerTurnO){
        box.innerText = "O"
        playerTurnO = false;

        }else{
            box.innerText = "X";
            playerTurnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner ){
            gameDraw();
        }

    });
});
const gameDraw =()=>{
    msg.innerText= `Draw😊`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled= true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winningPattern){
        
            let pos1= boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
        
            if(pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1 === pos2 && pos2 === pos3){   
                console.log("Winner",pos1);
                showWinner(pos1);

                }
                
            }
    }

};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);