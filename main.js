function rps() {
    var me = document.getElementById("input").value;

    const options["rock", "scissors", "paper"];
    const randomElement = array[Math.floor(Math.random() * array.length)];

    const random = Math.floor(Math.random() * options.length);


    if(me == "scissors"){
        document.getElementById("result").innerHTML = (options[random])
        return;
    }

    if(me == "rock"){
    document.getElementById("result").innerHTML = (options[random])
    return;
    }

    if(me == "paper"){
        document.getElementById("result").innerHTML = (options[random])
        return;
    }

}
