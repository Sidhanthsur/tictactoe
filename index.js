/* make sure to comment your code properly so that it is easier to understand what each part of code do */

// Ask user if he wants to x or o
var userVariable = ''
var computerVariable = ''
var counter = 0
while (true) {
  userVariable = prompt('Do you want x or o ?')
  userVariable = userVariable.toLowerCase()
  if (userVariable === 'x' || userVariable === 'o') {
    computerVariable = userVariable === 'x' ? 'o' : 'x'
    break
  } else {
    alert('Please input x or o')
  }
}

// initialize an empty array to denote 0 as empty and 1 as filled
var grid = new Array(3)
grid[0] = new Array(3)
grid[1] = new Array(3)
grid[2] = new Array(3)

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    grid[i][j] = 0
  }
}

// Function to check if the cell is already allocated with a value or not
isSqurePressed = (x, y) => {
  if (grid[x][y] === 1) {
    return true
  } else {
    return false
  }
}

// Simulates a computer move, by first getting a random position, checking if position is empty, then
// taking the spot
doComputerMove = () => {
  while (true && counter < 8) {
    var xRandom = Math.floor(Math.random() * 3)
    var yRandom = Math.floor(Math.random() * 3)
    if (!this.isSqurePressed(xRandom, yRandom)) {
      grid[xRandom][yRandom] = 1
      document.getElementById(xRandom + '-' + yRandom).innerHTML = computerVariable
      counter++
      console.log('Counter => ' + counter)
      break
    }
  }
}

// Reset action
reset = () => {
  document.location.reload(true)
}

// Check if 9 moves are done so that can reset
checkCounter = () => {
  if (counter === 9) {
    alert('Game Over, Reset will happen')
    this.reset()
  }
}

onSquarePressed = (x, y) => {
  console.log(x, y)
  if (isSqurePressed(x, y)) {
    alert('Sorry already taken')
  } else {
    if (counter < 9) {
      grid[x][y] = 1
      document.getElementById(x + '-' + y).innerHTML = userVariable
      counter++
      // The innerHTML method was slow to update before the alert function happened
      // so kept a small delay for the function to finish
      setTimeout(() => {
        this.checkCounter()
      }, 100)
      if (counter < 9) { this.doComputerMove() }
    }
  }
}
