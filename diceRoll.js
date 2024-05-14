function diceRoll() {
    let maxSide = document.getElementById("numSides").value;
    let minSide = 1;
    let resultSide = generateRandomNumInRange(maxSide, minSide);
    document.getElementById("result").innerText = resultSide;
  }

  //separate out the randon number generator to be able to use the function elsewhere
  function generateRandomNumInRange(maxSide, minSide) {
    return Math.floor(Math.random() * (maxSide - minSide + 1)) + minSide;
  }