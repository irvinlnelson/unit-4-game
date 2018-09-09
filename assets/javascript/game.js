var crystal = {
    blue: 0,
    yellow: 0,
    red: 0,
    green: 0
};

var myScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;


var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
};

function start() {
    var myScore = 0;
    var targetScore = randomNumber(19, 120);
    crystal.blue = randomNumber(1, 12);
    crystal.yellow = randomNumber(1, 12);
    crystal.red = randomNumber(1, 12);
    crystal.green = randomNumber(1, 12);

    $("#my-score").html(myScore);
    $("#target-score").html(targetScore);
}

var scoreCalculator = function (crystal) {
    myScore = myScore + crystal;
    $("#my-score").html = myScore;
}



start();


$("#blue").click(function () {
    scoreCalculator(crystal.blue)
});

$("#yellow").click(function () {
    scoreCalculator(crystal.yellow);
});

$("#red").click(function () {
    scoreCalculator(crystal.red);
});

$("#green").click(function () {
    scoreCalculator(crystal.green);
});








