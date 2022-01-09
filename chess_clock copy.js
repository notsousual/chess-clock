let firstTimer = document.getElementById('first_timer')
let secondTimer =  document.getElementById('second_timer')

let firstTimerMask = document.getElementById('first_timer_mask')
let secondTimerMask =  document.getElementById('second_timer_mask')


const firstClock = document.getElementById('clock_1')
const secondClock =  document.getElementById('clock_2')

let pauseButton = document.getElementById('pause-btn')
let tenButton = document.getElementById('ten-btn')
let fiveButton = document.getElementById('five-btn')
let thirtyButton = document.getElementById('thirty-btn')
console.log('working')

let time = 600
let firstArray = [600]
let secondArray = [600]


fiveButton.addEventListener('click', function () {
    time = 300
    firstArray = [300]
    secondArray = [300]
 
    firstTimerMask.innerText = '05:00'
    secondTimerMask.innerHTML = '05:00'

    // firstTimerMask.style.display = 'flex'
    // firstTimer.style.display = 'none' 

    // secondTimerMask.style.display = 'flex'
    // secondTimer.style.display = 'none' 

})



tenButton.onclick = function() {
    time = 600
    firstArray = [600]
    secondArray = [600]
    // firstTimer.innerHTML = '10:00'
    // secondTimer.innerHTML = '10:00'
}

thirtyButton.onclick = function() {
    time = 30
    firstArray = [30]
    secondArray = [30]
    // firstTimer.innerHTML = '00:30'
    // secondTimer.innerHTML = '00:30'
}


console.log('!!!!!', time, firstArray, secondArray)

function colorFirst() {
    firstClock.style.backgroundColor= 'rgb(199, 101, 92)'
}

function colorSecond() {
    secondClock.style.backgroundColor= 'rgb(199, 101, 92)'
}

function start1 () {

    

    

    window.removeEventListener('keydown', start1)
    window.addEventListener('keydown', function handler() {

        clearInterval(ourTimer);
       
        window.removeEventListener('keydown', handler)
        window.addEventListener('keydown', start1)


        start2()

    })

    console.log('wow1')
 
    let ourTimer = setInterval(function () {
        let time = firstArray[0] 
        time -= 1
        // if (firstArray.length > 1) {
        //     if (firstArray[1] - firstArray[0] 
        // }
        firstArray.unshift(time)
        let minutes = Math.floor(time / 60);
        let seconds = time - minutes * 60;

        console.log(minutes)
        
        console.log(minutes, seconds, firstArray)

        if (minutes === 1 && seconds === 30) {
            colorFirst()
        }

        if (minutes === 0 && seconds === 0) {
            firstTimer.innerHTML = `${minutes}:${seconds}`
            clearInterval(ourTimer); 
            

        }
        
        firstTimer.innerHTML = `${minutes}:${seconds}`

        }, 1000); 

       


        



}


function start2 () {

    window.removeEventListener('keydown', start2)
    window.addEventListener('keydown', function handler() {

        clearInterval(ourSecondTimer);
       
        window.removeEventListener('keydown', handler)
        window.addEventListener('keydown', start2)

    })

    
    console.log('wow2')

    let ourSecondTimer = setInterval(function () {
        let time = secondArray[0]
        time -= 1
        secondArray.unshift(time)
        let minutes = Math.floor(time / 60);
        let seconds = time - minutes * 60;
        
        console.log(minutes, seconds)
        if (minutes === 1 && seconds === 30) {
            colorSecond()
        }

        if (minutes === 0 && seconds === 0) {
            secondTimer.innerHTML = `${minutes}:${seconds}`
            clearInterval(ourSecondTimer);

        }
        
        secondTimer.innerHTML = `${minutes}:${seconds}`

        // if (minutes.length === 1 && seconds.length !== 1) {
        //     secondTimer.innerHTML = `0${minutes}:${seconds}`
        // } else if (seconds.length === 1 && minutes.length !== 1 ) {
        //     secondTimer.innerHTML = `${minutes}:0${seconds}`
        // } else if (seconds.length === 1 &&  && minutes.length === 1) {
        //     secondTimer.innerHTML = `0${minutes}:0${seconds}`

        // } else {
        //     secondTimer.innerHTML = `${minutes}:${seconds}`

        // }

        }, 1000);    

        secondTimer.innerHTML = `${minutes}:${seconds}`

}


window.addEventListener('keydown', start1)