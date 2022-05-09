//IIFE
(function () {
  // select all of my elements (hungarian notation $)
  const $flipButton = document.querySelector("#flip");
  const $clearButtin = document.querySelector("#clear");
  const $pennyImage = document.querySelector("#penny-image");
  const $message = document.querySelector("#message");
  const $headsValue = document.querySelector("#heads");
  const $headsPercent = document.querySelector("#heads-percent");
  const $tailsValue = document.querySelector("#tails");
  const $tailsPercent = document.querySelector("#tails-percent");

  let scoreBoard = {
    heads: 0,
    percentageHeads: 0,
    tails: 0,
    percentageTails: 0,
    totalFlips: 0,
  };

  function changeScoreBoardNumbers() {
    $headsValue.textContent = `${scoreBoard.heads}`;
    $headsPercent.textContent = `${Math.round(scoreBoard.percentageHeads)}%`;
    $tailsValue.textContent = `${scoreBoard.tails}`;
    $tailsPercent.textContent = `${Math.round(scoreBoard.percentageTails)}%`;
  }

  function calculateScorePercentages() {
    scoreBoard.percentageHeads =
      (scoreBoard.heads / scoreBoard.totalFlips) * 100;
    scoreBoard.percentageTails =
      (scoreBoard.tails / scoreBoard.totalFlips) * 100;
  }

  function handleFlipButtonClick() {
    // figure out if we flipped heads or tails
    const headsOrTails = Math.random() < 0.5;

    //if we flip heads...do this
    if (headsOrTails) {
      // total  flips increases by 1
      scoreBoard.totalFlips += 1;
      // number of heads to increase by 1
      scoreBoard.heads += 1;
      // % heads to increase
      calculateScorePercentages();
      // penny image to show heads
      $pennyImage.setAttribute("src", "assets/images/penny-heads.jpg");
      //change message to show "You Flipped Heads!"
      $message.textContent = "You Flipped Heads!";

      changeScoreBoardNumbers();
    } else {
      // total  flips increases by 1
      scoreBoard.totalFlips += 1;
      // number of tails to increase by 1
      scoreBoard.tails += 1;
      // % tails to increase
      calculateScorePercentages();
      // penny image to show tails
      $pennyImage.setAttribute("src", "assets/images/penny-tails.jpg");
      //change message to show "You Flipped Tails!"
      $message.textContent = "You Flipped Tails!";

      changeScoreBoardNumbers();
    }
  }

  function handleClearButtonClick() {
    // clear the scoreboard
    scoreBoard = {
      heads: 0,
      percentageHeads: 0,
      tails: 0,
      percentageTails: 0,
      totalFlips: 0,
    };
    // make sure the HTML shows all 0's
    changeScoreBoardNumbers();

    //change the message to say "..."
    $message.textContent = `Let's Get Rolling!`;
  }

  function setUpEventListeners() {
    //listen for clicks on my buttons
    $flipButton.addEventListener("click", function () {
      handleFlipButtonClick();
    });

    $clearButton.addEventListener("click", function () {
      handleClearButtonClick();
    });
  }

  function init() {
    // set up event listeners for the buttons
    setUpEventListeners();
  }

  init();
})();
