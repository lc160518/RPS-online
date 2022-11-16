

//Class that stores each move's id and all id's of moves it wins against.
class Move{
    constructor(id, wins) {
        this.id = id;
        this.wins = wins;
    }
}

//Makes a class for each move
const rockMove = new Move(0, [2]);
const paperMove = new Move(1, [0]);
const scissorMove = new Move(2, [1]);

//dictionary linking name's to id's
const names = {
    "rock" : 0,
    "paper" : 1,
    "scissor" : 2
}

//dictionary linking id's to move's
const moves = {
    0 : rockMove,
    1 : paperMove,
    2 : scissorMove
}



function makeSearch(){

    const rock = document.getElementById("rock").checked;
    const paper = document.getElementById("paper").checked;
    const scissor = document.getElementById("scissor").checked;

    var currentMove = null;

    if(rock){
        currentMove = names["rock"];
    }
    if(paper){
        currentMove = names["paper"];
    }
    if(scissor){
        currentMove = names["scissor"];
    }




    const opponentChoice = Math.floor(Math.random() * 3);
    document.getElementById("random").innerHTML = "" + opponentChoice + " " + currentMove;

    currentMove = moves[currentMove];
    if(currentMove.wins.includes(opponentChoice)){
        document.getElementById("wintext").innerHTML = "win";
    }
    else if(currentMove.id === opponentChoice){
        document.getElementById("wintext").innerHTML = "tie";
    }
    else{
        document.getElementById("wintext").innerHTML = "lose";
    }

}
