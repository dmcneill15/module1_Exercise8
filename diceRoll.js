function diceRoll() {
  let minSide = 1; //lowest number can be 1
  let maxSide = document.getElementById("numSides").value;
  if (maxSide < 2) {
    document.getElementById("error").innerText = "Number of sides is too low!";
    document.getElementById("result").innerText = " ";
  } else {
    let resultSide = generateRandomNumInRange(maxSide, minSide);
    document.getElementById("result").innerText = resultSide;
    document.getElementById("error").innerText = " ";
  }
}

//separate out the randon number generator to be able to use the function elsewhere
function generateRandomNumInRange(maxSide, minSide) {
  return Math.floor(Math.random() * (maxSide - minSide + 1)) + minSide;
}
