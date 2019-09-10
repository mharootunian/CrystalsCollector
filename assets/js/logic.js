$(document).ready(function () {
    let scoreNeeded = 0, currentScore = 0, wins = 0, losses = 0
    let currentScoreElem = $("#currentScore")
    let scoreNeededElem = $("#scoreNeeded")
    let winsElem = $("#wins")
    let lossesElem = $("#losses")

    function randomNumberGenerator(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }

    function randomizeCrystalValues() {
        $("img").each(function () {
            $(this).attr("value", randomNumberGenerator(1, 12))
        });
    }

    function updateHUD() {
        scoreNeededElem.text(scoreNeeded)
        currentScoreElem.text(currentScore)
        winsElem.text(wins)
        lossesElem.text(losses)
    }

    function gameInit() {
        currentScore = 0
        scoreNeeded = randomNumberGenerator(16, 120)
        randomizeCrystalValues()
    }

    updateHUD(); 
    gameInit();

    $(".crystal").click(function () {
        currentScore += parseInt($(this).attr("value"))

        if (currentScore === scoreNeeded) { //win condition
            alert("You win")
            wins++
            gameInit()
        } else if (currentScore > scoreNeeded) {
            alert("You went over")
            losses++
            gameInit()
        }

        updateHUD();
    });
});