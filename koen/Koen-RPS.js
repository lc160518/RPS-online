function makeSearch(){
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissor = document.getElementById("scissor");



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
