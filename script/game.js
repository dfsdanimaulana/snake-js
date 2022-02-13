import { update as updateSnake , draw as drawSnake, getSnakeHead, snakeIntersection, updatePoint} from './snake.js'
import { update as updateFood , draw as drawFood } from './food.js'
import { outSideGrid } from './grid.js'
import { config } from './config.js'

// game loop
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
const gamePoint = document.getElementById('point-value')

function main(currentTime) {
  if(gameOver){
      Swal.fire(
        'Game Over!',
        "don't give up and try again 😊",
        'error'
      ).then(()=>{
        window.location = '/snake-js'
      })
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
  gamePoint.innerHTML = updatePoint()
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