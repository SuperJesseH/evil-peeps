var gameMode
var secondCount
var rateOfPlay
var peepLocX
var peepLocY
var onOff
//Dhruv was here

function setup() {
  createCanvas(2208 / 2, 1242 / 2) // Half of my phones screen resoulution
  background(60)
  gameMode = 1
  rateOfPlay = 1


}

function draw() {
  peepLocX = mouseX + random(-2, 2)
  peepLocY = mouseY + random(-2, 2)
  onOff = random(0,1)
  
}