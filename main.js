function rps() {
    var me = document.getElementById("input").value;

    if(me == "scissors"){
        document.getElementById("result").innerHTML = ("rock")
        return;
    }

    if(me == "rock"){
    document.getElementById("result").innerHTML = ("paper")
    return;
    }

    if(me == "paper"){
        document.getElementById("result").innerHTML = ("scissors")
        return;
    }

}
