const dino = document.querySelector('.dino');
const background = document.querySelector(".background")
console.log(dino)
let isJumping = false;
let playerPosition  = 0;


const handleKeyUp = (event) => {

  switch(event.keyCode){
    case 32:

      if(!isJumping)  jump()

      break;

    case 39:
      move()
  }

}

const jump = () => {
  isJumping = true;

  const upInterval = setInterval(() => {
    if (playerPosition  >= 150) {
      clearInterval(upInterval)
      isJumping=false
      const downInterval = setInterval(()=>{
        playerPosition  -= 10
        if(playerPosition ===0){
          clearInterval(downInterval)

        }

        dino.style.bottom = playerPosition  + "px"

      },20)


    } else {
      playerPosition  += 20

      dino.style.bottom = playerPosition  + "px"

    }

  }, 20)
}
const createCactus = ()=>{
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomSpawnTime = Math.random() *6000
  cactus.classList.add('cactus');
  cactus.style.left = window.screen.width +"px"
  background.appendChild(cactus)

  const leftInterval =setInterval(()=>{
    if(cactusPosition<-60){
      clearInterval(leftInterval)
      background.removeChild(cactus)
    }else if(cactusPosition >0 && cactusPosition<50 && playerPosition<50){
      console.log("Game Over")
      clearInterval(leftInterval)
      document.body.innerHTML ='<h1 class="game-over" >Você Perdeu ! Aperte F5 para tentar novamente</h1>'

    }
     else {
       cactusPosition-=10  
      cactus.style.left = cactusPosition +"px"
    }
  },20)
  setTimeout(createCactus, randomSpawnTime)
}
createCactus()

document.addEventListener("keyup", handleKeyUp)