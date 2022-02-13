let inputDirection = { x:0, y:0 }
let lastInputDirection = { x:0, y:0 }

window.addEventListener('keydown', (e)=>{
  switch (e.key) {
    case 'arrowUp':
      if(lastInputDirection.y !== 0) break
      inputDirection = { x:0, y:-1}
      break;
    case 'arrowDown':
      if(lastInputDirection.y !== 0) break
      inputDirection = { x:0, y:1}
      break;
    case 'arrowLeft':
      if(lastInputDirection.x !== 0) break
      inputDirection = { x:-1, y:0}
      break;
    case 'arrowRight':
      if(lastInputDirection.x !== 0) break
      inputDirection = { x:1, y:0}
      break;
  }
})

const keys = document.querySelectorAll('.key')

keys.forEach(key => {
  key.addEventListener('click', (e)=>{
    switch (e.target.id) {
    case 'up':
      if(lastInputDirection.y !== 0) break
      inputDirection = { x:0, y:-1}
      break;
    case 'down':
      if(lastInputDirection.y !== 0) break
      inputDirection = { x:0, y:1}
      break;
    case 'left':
      if(lastInputDirection.x !== 0) break
      inputDirection = { x:-1, y:0}
      break;
    case 'right':
      if(lastInputDirection.x !== 0) break
      inputDirection = { x:1, y:0}
      break;
  }
  })
})

export function getInputDirection(){
  lastInputDirection = inputDirection
  return inputDirection
}