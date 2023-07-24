function refresh() {

    location.reload()

}


function roll() {


    var rollDice = Math.floor(Math.random() * 6 + 1);


    if (rollDice == 1) {
        return '<img src="dice1.png">'
    }

    else if (rollDice == 2) {
        return '<img src="dice2.png">'
    }

    else if (rollDice == 3) {
        return '<img src="dice3.png">'
    }

    else if (rollDice == 4) {
        return '<img src="dice4.png">'
    }

    else if (rollDice == 5) {
        return '<img src="dice5.png">'
    }

    else if (rollDice == 6) {
        return '<img src="dice6.png">'
    }
}

var newNum1 = roll()
var newNum2 = roll()
document.getElementById("check").innerHTML = newNum1;
document.getElementById("check2").innerHTML = newNum2;





