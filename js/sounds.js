

const buttonPressAudio = new Audio('./sounds/audiosbuttonpress.wav')
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const audioForest = new Audio('./sounds/forest.wav')
const audioCoffee = new Audio('./sounds/coffee.wav')
const audioRain = new Audio('./sounds/rain.wav')
const audioFire = new Audio('./sounds/fire.wav')

audioForest.loop = true
audioCoffee.loop = true
audioFire.loop = true
audioRain.loop = true



export {
    buttonPressAudio,
    kitchenTimer,
    audioForest,
    audioCoffee,
    audioRain,
    audioFire
}