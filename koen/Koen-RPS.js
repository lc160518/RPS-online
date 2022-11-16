//dictionary linking id's to move's
const moves = {
    0 : "rock",
    1 : "paper",
    2 : "scissor"
}

//Makes a class for each move
const rock = new Move(0, [2]);
const paper = new Move(1, [0]);
const scissor = new Move(2, [1]);

//Class that stores each move's id and all id's of moves it wins against.
class Move{
    constructor(id, wins) {
        this.id = id;
        this.wins = wins;
    }
}


function makeSearch(){
    const rock = document.getElementById("rock").checked;
    const paper = document.getElementById("paper").checked;
    const scissor = document.getElementById("scissor").checked;



    const opponentChoice = Math.floor(Math.random() * 3);
    document.getElementById("random").innerHTML = "" + opponentChoice;

    if((rock.checked && opponentChoice == 0) || (paper.checked && opponentChoice == 1) || (scissor.checked && opponentChoice == 2)){
        document.getElementById("wintext").innerHTML = "did u win: tie!"
    }
    if((rock.checked && opponentChoice == 1) || (paper.checked && opponentChoice == 2) || (scissor.checked && opponentChoice == 0)){
        document.getElementById("wintext").innerHTML = "did u win: lose!"
    }
    if((rock.checked && opponentChoice == 2) || (paper.checked && opponentChoice == 0) || (scissor.checked && opponentChoice == 1)){
        document.getElementById("wintext").innerHTML = "did u win: win!"
    }
}
