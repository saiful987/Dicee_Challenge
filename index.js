
// This will generate a random number between 1-6.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// This will get first tag img[0] and change the img depending on the random number.
document.getElementsByTagName("img")[0].setAttribute("src","images/dice" + randomNumber1 + ".png");

// This will generate a random number between 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// This will get first tag img[1] and change the img depending on the random number.
document.getElementsByTagName("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
  // querySelector will target the h1 and the innerHTML will change the text to "player 1 wins!" when the website is refreshed.
     document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    // querySelector will target the h1 and the innerHTML will change the text to "player 2 wins!" when the website is refreshed.
     document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else {
  // querySelector will target the h1 and the innerHTML will change the text to "Draw!". 
  document.querySelector("h1").innerHTML = "Draw!";
}
