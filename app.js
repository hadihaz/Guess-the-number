var numbers = [];
var usernumbers = [-1, -1, -1, -1, -1];
var numberlist = ["number1", "number2", "number3", "number4", "number5"];
var p = 0;

function randomnumbergenerator() {
    numbers = [];
    for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * 10));
    }
}
randomnumbergenerator();

function click(n) {
    if (p < 5) {
        document.getElementById(numberlist[p]).innerHTML = n;
        usernumbers[p] = n;
        p += 1
    }
}

function submitnumber() {
    var count = 0
    var newnumbers = [];
    for (let i = 0; i < 5; i++) {
        newnumbers.push(numbers[i])
    }
    for (let i = 0; i < 5; i++) {
        if (numbers[i] == usernumbers[i]) {
            document.getElementById(numberlist[i]).style.backgroundColor = "#4CAF50";
            newnumbers[newnumbers.indexOf(usernumbers[i])] = -1;
            count += 1
        }
        else {
            document.getElementById(numberlist[i]).style.backgroundColor = "#ff9494";
        }
    }
    for (let i = 0; i < 5; i++) {
        if (numbers[i] != usernumbers[i]) {
            if (newnumbers.includes(usernumbers[i])) {
                document.getElementById(numberlist[i]).style.backgroundColor = "yellow";
                newnumbers[newnumbers.indexOf(usernumbers[i])] = -1;
            }
        }
    }
    if (count == 5) {
        document.getElementById("title").innerHTML = "Win!";
        randomnumbergenerator();
    }
}

function clearnumber() {
    p = 0;
    for (let i = 0; i < 5; i++) {
        document.getElementById(numberlist[i]).style.backgroundColor = "#d7d7d7";
        document.getElementById(numberlist[i]).innerHTML = "-";
    }
    usernumbers = [-1, -1, -1, -1, -1];
    document.getElementById("title").innerHTML = "Guess the number";
}

function deletenumber() {
    document.getElementById(numberlist[p - 1]).style.backgroundColor = "#d7d7d7";
    document.getElementById(numberlist[p - 1]).innerHTML = "-";
    p -= 1;
}

document.getElementById("button1").onclick = () => { click(1) }
document.getElementById("button2").onclick = () => { click(2) }
document.getElementById("button3").onclick = () => { click(3) }
document.getElementById("button4").onclick = () => { click(4) }
document.getElementById("button5").onclick = () => { click(5) }
document.getElementById("button6").onclick = () => { click(6) }
document.getElementById("button7").onclick = () => { click(7) }
document.getElementById("button8").onclick = () => { click(8) }
document.getElementById("button9").onclick = () => { click(9) }
document.getElementById("button0").onclick = () => { click(0) }
document.getElementById("submit").onclick = submitnumber;
document.getElementById("clear").onclick = clearnumber;
document.getElementById("delete").onclick = deletenumber;


