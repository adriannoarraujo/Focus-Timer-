import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonStop,
    buttonMoreTime,
    buttonLessTime,
    cardForest,
    cardRain,
    cardCoffeeShop,
    cardFireplace,
    buttonLight,
    buttonDark,
    inputForest,
    inputRain,
    inputCoffe,
    inputFireplace,
    buttonPause
} from "./elements.js"

import {
    buttonPressAudio,
    kitchenTimer,
    audioForest,
    audioCoffee,
    audioRain,
    audioFire
} from "./sounds.js"




let originMinutes = minutesDisplay.textContent
let origenseconds = secondsDisplay.textContent
let timerSet



function updateDisplay(newMinutes, seconds) {
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown(){

    timerSet = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
     
      updateDisplay(minutes, 0)

      if (minutes <= 0 && seconds <= 0) {
        document.getElementById("botao").disabled = false;
        kitchenTimer.play()
        minutesDisplay.textContent = String(originMinutes).padStart(2, "0")
        return
      }

      if( seconds <= 0 ) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
}



buttonPlay.addEventListener('click', ()=>{
    if(minutesDisplay.textContent <= 0){
        alert("Valor zerado")
        return
    }
    buttonPlay.classList.toggle("hide")
    buttonPause.classList.toggle("hide")
    countdown()
    buttonPressAudio.play()
})

buttonPause.addEventListener('click',()=>{
    clearTimeout(timerSet)
    buttonPlay.classList.toggle("hide")
    buttonPause.classList.toggle("hide")
    buttonPressAudio.play()

})


buttonStop.addEventListener('click', ()=>{
    buttonPressAudio.play()
    minutesDisplay.textContent = originMinutes
    secondsDisplay.textContent = origenseconds
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
    clearTimeout(timerSet)
})

buttonMoreTime.addEventListener('click',()=>{
    const currentMinute = Number(minutesDisplay.textContent) + 5
    minutesDisplay.textContent = String(currentMinute).padStart(2, "0")
    buttonPressAudio.play()
})

buttonLessTime.addEventListener('click',()=>{
    buttonPressAudio.play()
    let currentLessMinute = Number(minutesDisplay.textContent)
    if(currentLessMinute < 5){
        alert("Minutos está abaixo de 5")
    } else {
        currentLessMinute -= 5

    }
    minutesDisplay.textContent = String(currentLessMinute).padStart(2, "0")
})



cardForest.addEventListener('click', ()=>{
    if(cardForest.classList.contains('cardClick')) {
        cardForest.classList.toggle('cardClick')
        cardRain.disabled = false
        cardFireplace.disabled = false
        cardCoffeeShop.disabled= false
        audioForest.pause()
    }
    else {
        cardForest.classList.toggle('cardClick')
        cardRain.disabled = true
        cardFireplace.disabled = true
        cardCoffeeShop.disabled= true
        audioForest.play()
    }
})

cardRain.addEventListener('click',()=>{
    if(cardRain.classList.contains('cardClick')) {
        cardRain.classList.toggle('cardClick')
        cardForest.disabled = false
        cardFireplace.disabled = false
        cardCoffeeShop.disabled= false
        audioRain.pause()
    }
    else {
        cardRain.classList.toggle('cardClick')
        cardForest.disabled = true
        cardFireplace.disabled = true
        cardCoffeeShop.disabled= true
        audioRain.play()
    } 
})

cardCoffeeShop.addEventListener('click',()=>{ 
    if(cardCoffeeShop.classList.contains('cardClick')) {
        cardCoffeeShop.classList.toggle('cardClick')
        cardForest.disabled = false
        cardFireplace.disabled = false
        cardRain.disabled= false
        audioCoffee.pause()
    }
    else {
        cardCoffeeShop.classList.toggle('cardClick')
        cardForest.disabled = true
        cardFireplace.disabled = true
        cardRain.disabled= true
        audioCoffee.play()
    } 
})

cardFireplace.addEventListener('click',()=>{

    if(cardFireplace.classList.contains('cardClick')) {
        cardFireplace.classList.toggle('cardClick')
        cardForest.disabled = false
        cardCoffeeShop.disabled = false
        cardRain.disabled= false
        audioFire.pause()
    }
    else {
        cardFireplace.classList.toggle('cardClick')
        cardForest.disabled = true
        cardCoffeeShop.disabled = true
        cardRain.disabled= true
        audioFire.play()
    } 
})



inputForest.addEventListener('input', () => { 
   audioForest.volume = inputForest.value
})

inputRain.addEventListener('input', () => { 
   audioRain.volume = inputRain.value
})

inputCoffe.addEventListener('input', () => { 
   audioCoffee.volume = inputCoffe.value
})

inputFireplace.addEventListener('input', () => { 
   audioFire.volume = inputFireplace.value
})




buttonLight.addEventListener('click', ()=> {
  buttonLight.classList.toggle('hide')
  buttonDark.classList.toggle('hide')
  document.querySelector('html').classList.toggle('dark-mode')
})

buttonDark.addEventListener('click',()=> {
  buttonLight.classList.toggle('hide')
  buttonDark.classList.toggle('hide')
  document.querySelector('html').classList.toggle('dark-mode')
})

