var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn--roll").addEventListener("click", function () {
  //Random number selection
  var dice = Math.floor(Math.random() * 6) + 1;
  // display the random number
  var diceDom = document.querySelector(".dice");
  diceDom.style.display = "block";
  diceDom.src = "assets/dice-" + dice + ".png";

  //update randomScore if dice is not equal to 1
  if (dice !== 1) {
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
  }
});

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// document.querySelector("#current--0").textContent = dice;
