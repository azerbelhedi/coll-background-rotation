let angle = 0
document.querySelector("body").style.backgroundImage = `linear-gradient(${angle}deg , red , rgb(2, 71, 175))`

setInterval(function(){
angle ++ 
if(angle === 360){angle = 0 }
document.querySelector("body").style.backgroundImage = `linear-gradient(${angle}deg , rgb(255, 100, 243) , rgb(2, 71, 175))`

} , 20)