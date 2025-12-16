const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const start = document.querySelector('.start')
const gameover = document.querySelector('.game-over')

const audioStart = new Audio('./soung/audio_theme.mp3')
const audiogameover = new Audio('./soung/audio_gameover.mp3')

const startGame = () => {
    pipe.classList.add('pipe-animation')
    
  
    start.style.display = 'none' 

    audioStart.play()
    audioStart.loop = true; 
}

const restartGame = () => {
   
    gameover.style.display = 'none' 
    
   
    pipe.style.left = ''
    pipe.style.right = '0' 
    
    mario.src = './img/mario.gif'
    mario.style.width ='150px'
    mario.style.bottom = '0'


    start.style.display ='none' 


    audiogameover.pause()
    audiogameover.currentTime = 0;
    
    audioStart.play()
    audioStart.currentTime = 0;
   
    loop() 
}


const jump = () => {
   
    if (mario.classList.contains('jump')) {
        return;
    }
    
    mario.classList.add('jump')

    setTimeout(()  => {
        mario.classList.remove('jump')
    }, 800)
}

const loop = () => {
   
    const loopGame = setInterval(() => { 
        
        const pipePosition = pipe.offsetLeft
        
        
        const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace('px', '')

      
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
            
          
            
           
            pipe.classList.remove('pipe-animation') 
           
            pipe.style.left = `${pipePosition}px` 

            mario.classList.remove('jump')
           
            mario.style.bottom = `${marioPosition}px` 

            mario.src = './img/game-over.png'
            mario.style.width = '80px'
            mario.style.marginLeft = '50px'

         
            audioStart.pause()

            audiogameover.play()

          
            setTimeout(() => {
                audiogameover.pause()
            }, 7000)

           
            gameover.style.display = 'flex'
            
      
            clearInterval(loopGame)
        }
    }, 10)
}

loop() 


document.addEventListener('keypress', e => {
    const tecla = e.key 
   
    if (tecla === ' ') { 
        jump()
    }
})


document.addEventListener('touchstart', e =>
{
    if (e.touches.length) {
        jump()
    }
})

document.addEventListener('keypress', e => {
  const tecla = e.key
  if (tecla === 'Enter') {
    startGame()
  }
})