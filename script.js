console.log("Welcome to Tic..Tac...Toe....")
const turnSound = new Audio("clickSound.mp3");
const gameover = new Audio("gameover.mp3");

let turn = "X"
let isgameover = false;

//function to change turn.
const changeTurn = ()=>{
    return turn === "X"?"O":"X";
}

//function to check win.
const checkWin = ()=>{

    //collect all the elements from the boxtext.
    let boxtext = document.getElementsByClassName('boxtext');

    //All the possible winning combination,each number indiate each column by order..
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    
    //loops through each possible winning combination and check weather it is occupied by "X" or "O".
    wins.forEach(e => {

        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){

            //if the above condition is true then show Won.
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "  WON"
            //isgameover is true.
            isgameover = true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    });
        
    

}


// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText == ''){
            boxtext.innerText = turn;
            turnSound.play();
            turn = changeTurn();
            checkWin();

            //if the gameover is not true show the next turn.
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerHTML = "Turn for "+turn;
            }
        }
    })
})

//adding a reset button
reset.addEventListener('click',()=>{
    //collect the elements from '.boxtext'.
    //and make all elements null
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = 0;
})