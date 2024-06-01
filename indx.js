//Imag1 change the Dice (1-6)
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.bng
var randomImageSoarce = "images/" + randomDiceImage ; //images/dice1.png-images/dice2.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSoarce)

//Imag2 change the Dice (1-6)
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages = "dice" + randomNumber2 + ".png";
var randomImageSoarce2 = "images/" + randomDiceImages;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSoarce2)

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Playr 1 Wins!..";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "playr 2 Wins!..🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}