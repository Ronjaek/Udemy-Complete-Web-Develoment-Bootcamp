dices = ["Images/Dicey-1.png", "Images/dice-2.png", "Images/dice-3.png", "Images/dice-4.png", "Images/dice-5.png", "Images/dice-6.png"]

// chooses a random number from
randomPosition1 = Math.floor(Math.random() * (6 + 1));
randomPosition2 = Math.floor(Math.random() * (6 + 1));

console.log(randomPosition1)
console.log(randomPosition2)
randomDice1 = dices[randomPosition1]
randomDice2 = dices[randomPosition2]

document.querySelector("#img1").setAttribute("src", randomDice1);
document.querySelector("#img2").setAttribute("src", randomDice2);

if (randomPosition1 > randomPosition2) {
	document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if (randomPosition1 < randomPosition2) {
	document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!"

}
else {
	document.querySelector("h1").innerHTML = "No winner..."
}