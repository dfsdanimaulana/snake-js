import { getInputDirection } from './input.js'

const snakeBody = [{ x:11, y:11}]
let newSegment = 0

export function update() {
  
  addSegments()
  const inputDrection = getInputDirection()
  for(let i = snakeBody.length - 2; i >= 0; i--){
    snakeBody[i + 1] = { ... snakeBody[i]}
  }
  
  snakeBody[0].x += inputDrection.x
  snakeBody[0].y += inputDrection.y
}

export function draw(gameBoard) {
  snakeBody.forEach((segment)=>{
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

export function expandSnake(amount) {
  newSegment += amount
}

export function getSnakeHead(){
  return snakeBody[0]
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment,index) => {
    if(ignoreHead && index === 0) return false
    return equalPosition(segment, position)
  })
}

function equalPosition(pos1, pos2){
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
  for (let i = 0; i < newSegment; i++) {
    snakeBody.push({...snakeBody[snakeBody.length - 1]})
  }
  
  newSegment = 0
}

export function snakeIntersection () {
  return onSnake(snakeBody[0], { ignoreHead: true})
}

export function updatePoint() {
  return snakeBody.length - 1
}