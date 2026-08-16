let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#re-btn");
let newBtn = document.querySelector("#new-game");
let msgGame = document.querySelector(".msg-game");
let msg = document.querySelector("#msg");
let turn = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const reset_new_game = ()=>{
    turn = true;
    enDisabled();
    msgGame.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText = "O";
            turn = false;
            box.style.color = "#00e5ff" // Neon Cyan for O
        }else{
            box.innerText = "X";
            turn = true;
            box.style.color = "#ff3366" // Neon Pink for X
        }
        box.disabled = true;
        checlwin();
    })
});

const dnDisabled = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enDisabled = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const winner = (plyWin)=>{
    msg.innerText = `Congratulations, Winner is ${plyWin}`;
    msgGame.classList.remove("hide");
    dnDisabled();
}
const checlwin = ()=>{
    for(let winin of winPatterns){
        let pos1 = boxes[winin[0]].innerText; 
        let pos2 = boxes[winin[1]].innerText; 
        let pos3 = boxes[winin[2]].innerText; 
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("win");
                winner(pos1);
            }
        }
    }
}
newBtn.addEventListener("click",reset_new_game);
reset.addEventListener("click",reset_new_game);