const image = document.querySelector('img');

image.addEventListener('load', imgLoad) 

function imgLoad() {
    console.log('Image loaded!')
}

const audio = document.querySelector('audio')

audio.addEventListener("play", isPlay)
audio.addEventListener('pause', paused)

function isPlay() {
    console.log("Playing");
}
    
function paused() {
    console.log('Paused')
}
  