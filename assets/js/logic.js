$(document).ready(function () {
    var scoreNeeded = 0, currentScore = 0
    var currentScoreElem = $("#currentScore");
    var scoreNeededElem = $("#scoreNeeded");


    console.log("game started")

    init();

    function init() {
        currentScore = 0
        scoreNeeded = Math.floor(Math.random * 100)
        console.log(scoreNeeded)
        gameLoop();
    }

    function gameLoop() {
        $(".crystal").click(function () {
            currentScore += parseInt($(this).attr("value"))

            alert("Value of card: " + $(this).attr("value"))

            if (currentScore === scoreNeeded) { //win condition
                alert("You win")
            } else if (currentScore > scoreNeeded) {
                alert("You went over")
            } else {

                //continue 
            }

            scoreNeededElem.text(scoreNeeded)
            currentScoreElem.text(currentScore)
        });
    }

});