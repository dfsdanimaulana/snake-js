import { update as updateSnake , draw as drawSnake, getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood , draw as drawFood } from './food.js'
import { outSideGrid } from './grid.js'
import { config } from './config.js'

// game loop
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if(gameOver){
    if(confirm('Game over, restart the game?')){
      window.location = '/'
    }
    return
  }
  const secondSinceLastRender = (currentTime - lastRenderTime)/1000
  window.requestAnimationFrame(main)
  if(secondSinceLastRender < 1/config.SNAKE_SPEED) return
  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}