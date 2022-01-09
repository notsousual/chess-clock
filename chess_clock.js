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

let clickableElem = document.getElementById('bod')

function playSound() {
  const audio = new Audio("lighter.wav");
  audio.play();
}

window.addEventListener('keydown',  function handler() {

  console.log('wwooooop')
  
  window.addEventListener('keydown', function () {
    check_list[0] = true
    playSound()
  })
  playSound()
  accurateTimer(100, first_period, function (){}, function (){});

}, {once : true} )

clickableElem.addEventListener('click',  function () {
  
  console.log('clickableElem')
  playSound()
  check_list[0] = false

  accurateTimer(100, first_period, function (){}, function (){});

  clickableElem.addEventListener('click', function () {
    check_list[0] = true
    playSound()
  })

}, {once : true} )


function fiveHandler() {
  firstTimer.innerHTML = '5:0'
  secondTimer.innerHTML = '5:0'
  first_period = 3000
  second_period = 3000
  tenButton.addEventListener('click', tenHandler, {once : true})
  thirtyButton.addEventListener('click', thirtyHandler,{once : true})
}

function tenHandler() {
  firstTimer.innerHTML = '10:0'
  secondTimer.innerHTML = '10:0'
  first_period = 6000
  second_period = 6000
  fiveButton.addEventListener('click', fiveHandler, {once : true})
  thirtyButton.addEventListener('click', thirtyHandler,{once : true})
  

}


function thirtyHandler() {
  firstTimer.innerHTML = '0:30'
  secondTimer.innerHTML = '0:30'
  initial = 300
  first_period = 300
  second_period = 300

  tenButton.addEventListener('click', tenHandler, {once : true})
  fiveButton.addEventListener('click', fiveHandler, {once : true})


}


fiveButton.addEventListener('click', fiveHandler, {once : true})
tenButton.addEventListener('click', tenHandler, {once : true})
thirtyButton.addEventListener('click', thirtyHandler, {once : true})



function colorFirst() {
    firstClock.style.backgroundColor= 'rgb(199, 101, 92)'//red
}

function colorSecond() {
    secondClock.style.backgroundColor= 'rgb(199, 101, 92)'
}

function winFirst() {
  firstClock.style.backgroundColor= 'rgb(123, 209, 84)'//green
}

function winSecond() {
  secondClock.style.backgroundColor= 'rgb(123, 209, 84)'
}

function makeBackgroundBlack() {
  clickableElem.style.background = 'repeating-linear-gradient( -45deg, #ececec, #ececec 5px, rgb(46, 46, 46) 5px, rgb(46, 46, 46) 40px)'
}

function makeBackgroundWhite() {
  clickableElem.style.background = 'repeating-linear-gradient( -45deg, rgb(88, 88, 88), rgb(88, 88, 88) 5px, rgb(180, 180, 180) 5px, rgb(180, 180, 180) 40px)'
}

console.log('perfomance', performance.now())


//The 'timer' parameter is how long we want the wait between each function call.

// 'max' parameter is how may times we want the function to be called.

//Lastly we have a param for a function which will be called at every period 
//and a callback function for the last period.

let origin = new Date().getTime();

let initial = 6000
let check_list = [false]
let first_counter = 1;
let second_counter = 1;
let first_period = 6000
let second_period = 6000

function accurateTimer(timer, max, repeatArgument, callbackArgument){

  makeBackgroundWhite()

  let minutes = Math.floor(first_period / 600);
  let seconds = Math.floor(first_period / 10) - minutes *60

  firstTimer.innerHTML = `${minutes}:${seconds}`

  let init = (t) => {

    let timeStart = new Date().getTime();

    setTimeout(function () {

      if (first_period > 0) {
        let fix = (new Date().getTime() - timeStart) - timer;

        minutes = Math.floor(first_period / 600);
        seconds = Math.floor(first_period / 10) - minutes *60

        if (minutes === 1 && seconds === 30) {
          colorFirst()
        }

        if (check_list[0]) {

          clearTimeout()
          check_list[0] = false
          first_counter +=1


          firstTimer.innerHTML = `${minutes}:${seconds}`
          
          accurateTimer2(100,second_period,function (){},function (){});
          console.log('switch to second')
          return

        }
          
        init(t - fix);
        first_counter += 1;
        first_period -= 1 

        console.log(first_counter, first_period, t - fix)
      
      // event to be repeated max times
        repeatArgument();
        firstTimer.innerHTML = `${minutes}:${seconds}`
      } else {
      // event to be executed at animation end
        winSecond()
        return;
      }
    }, t);
  }
init(timer);
}


function accurateTimer2(timer, max, repeatArgument, callbackArgument) {

  makeBackgroundBlack()

  let minutes = Math.floor(second_period / 600);
  let seconds = Math.floor(second_period / 10) - minutes * 60

  secondTimer.innerHTML = `${minutes}:${seconds}`
  
  let init = (t) => {

    let timeStart = new Date().getTime()

    setTimeout(function () {
      if (second_period > 0) {

        let fix = (new Date().getTime() - timeStart) - timer;

        minutes = Math.floor(second_period / 600);
        seconds = Math.floor(second_period / 10) - minutes *60

        if (minutes === 1 && seconds === 30) {
          colorSecond()
        }

        if (check_list[0]) {
            clearTimeout()
            check_list[0] = false
            second_counter +=1

            console.log('switch to first')
            
            accurateTimer(100,
              first_period,
              function test(){},
              function test2(){});
            return
          }
        
        

      
        init(t - fix);
        second_counter += 1; 
        second_period -= 1

        console.log(second_counter, 'max', max,  'second', second_period,  t - fix)
      
      // event to be repeated max times
        secondTimer.innerHTML = `${minutes}:${seconds}`
        repeatArgument();
      } else {
      // event to be executed at animation end

        winFirst()
        return;
      }
    }, t);
  }
init(timer);
}


