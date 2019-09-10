$(document).ready(function () {
    let scoreNeeded = 0, currentScore = 0, wins = 0, losses = 0
    let currentScoreElem = $("#currentScore")
    let scoreNeededElem = $("#scoreNeeded")
    let winsElem = $("#wins")
    let lossesElem = $("#losses")

    gameInit();

    function randomValue() {
        return Math.floor(Math.random() * 13)
    }

    function randomizeCrystalValues() {
        $("img").each(function () {
            $(this).attr("value", randomValue())
        });
    }

    function gameInit() {
        currentScore = 0
        scoreNeeded = Math.floor(Math.random() * 100)
        randomizeCrystalValues()
    }

    $(".crystal").click(function () {
        currentScore += parseInt($(this).attr("value"))

        //alert("Value of card: " + $(this).attr("value"))

        if (currentScore === scoreNeeded) { //win condition
            alert("You win")
            wins++
            gameInit()
        } else if (currentScore > scoreNeeded) {
            alert("You went over")
            losses++
            gameInit()
        } 

        scoreNeededElem.text(scoreNeeded)
        currentScoreElem.text(currentScore)
        winsElem.text(wins)
        lossesElem.text(losses)
    });

});