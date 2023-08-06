let isGameStarted = 0;
let winner = document.getElementById("winner");
console.log(winner);
let cellArray = ["","","","","","","","",""];
let currentPlayer = null;

let playerx = document.getElementById("player-x");
let playero=document.getElementById("player-o");

let boxes = document.querySelectorAll(".box");

let cells = Array.from(boxes);

let restart = document.getElementById("restart");
restart?.addEventListener("click",()=>{
    location.reload();
})


function checkStatus()
{
    let flag = 1;
    for(let i = 0 ;i<9;i++)
    {
        if(cellArray[i] === "")
        {
            flag = 0;
        }
    }
    if(flag)
    {
        winner.textContent = `Draw`;
        winner.style.display = "flex";
        setTimeout(() => {
            location.reload();
            }, 3000); 
    }
    if((cellArray[0]=="x" && cellArray[3]=="x" && cellArray[6]=="x")||(cellArray[0]=="x" && cellArray[1]=="x" && cellArray[2]=="x") ||(cellArray[0]=="x" && cellArray[4]=="x" && cellArray[8]=="x") || (cellArray[3]=="x" && cellArray[4]=="x" && cellArray[5]=="x") || (cellArray[6]=="x" && cellArray[7]=="x" && cellArray[8]=="x") || (cellArray[1]=="x" && cellArray[4]=="x" && cellArray[7]=="x") || (cellArray[2]=="x" && cellArray[5]=="x" && cellArray[8]=="x")|| (cellArray[2]=="x" && cellArray[4]=="x" && cellArray[6]=="x"))
    {
        winner.textContent = `Winner is player X`;
        winner.style.display = "flex";
        setTimeout(() => {
            location.reload();
            }, 3000);
    }
    else if((cellArray[0]=="o" && cellArray[3]=="o" && cellArray[6]=="o")||(cellArray[0]=="o" && cellArray[1]=="o" && cellArray[2]=="o") ||(cellArray[0]=="o" && cellArray[4]=="o" && cellArray[8]=="o") || (cellArray[3]=="o" && cellArray[4]=="o" && cellArray[5]=="o") || (cellArray[6]=="o" && cellArray[7]=="o" && cellArray[8]=="o") || (cellArray[1]=="o" && cellArray[4]=="o" && cellArray[7]=="o") || (cellArray[2]=="o" && cellArray[5]=="o" && cellArray[8]=="o")|| (cellArray[2]=="o" && cellArray[4]=="o" && cellArray[6]=="o"))
    {
        winner.textContent = `Winner is player O`;
        winner.style.display = "flex";
        setTimeout(() => {
        location.reload();
        }, 3000);

    }
}

cells.forEach((cell,index)=>{
    // console.log(cell);
    // cellArray[]
    cell.addEventListener("click",(current)=>{
        console.log(current);
        if(currentPlayer)
        {
            cellArray[index] = currentPlayer;
            playero.style.cursor = "none";
            playerx.style.cursor = "none";
            isGameStarted = 1;
            cell.innerText = currentPlayer;
            cell.style.pointerEvents = "none";
            if(currentPlayer==="x")
            {
                playerx?.classList.remove("active");
                playero?.classList.add("active");
                currentPlayer= "o";
            }
            else
            {
                playero?.classList.remove("active");
                playerx?.classList.add("active");
                currentPlayer = "x";
            }
            checkStatus();
        }
        else
        {
            return;
        }
    });
});

function changePlayer(player1,player2)
{
    if(!(player1.classList.contains("active")))
    {
        player1.classList.add("active");
    }
    else
    {

        currentPlayer = null;
        player1.classList.remove("active");
    }
    if(player2.classList.contains("active"))
    {
        player2.classList.remove("active");
    }
}




playerx?.addEventListener("click",()=>{
    if(!isGameStarted)
    {
        currentPlayer = "x";
        changePlayer(playerx,playero);
    }
})
playero?.addEventListener("click",()=>{
    if(!isGameStarted)
    {
        currentPlayer = "o";
        changePlayer(playero,playerx);
    }
})




