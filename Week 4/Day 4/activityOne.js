// CALLBACKS 

let counter = 0 

window.setInterval(CALLBACK-FUNCTION, 5000)

// fire tick function every 5 seconds (5000 milliseconds)
// setInterval is called repeatedly and cancelled when the interval is cleared (window.clearInterval)
const intervalId = window.setInterval(function() {
    counter++ 
    if(counter == 10) {
        // cancel the interval 
        window.clearInterval(intervalId)
        return 
    }
    console.log(counter)
}, 1000)


console.log(`Interval Id: ${intervalId}`)

/*
function tick() {
    counter++ 
    if(counter == 10) {
        // cancel the interval 
        window.clearInterval(intervalId)
        return 
    }
    console.log(counter)
} */

// setTimeout is called once and then it is cancelled 
window.setTimeout(function() {
    console.log("startSlideShow")
}, 2000)

/*
function startSlideShow() {
    console.log("startSlideShow")
} */