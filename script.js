let current = 20
let goal = 30
const bar = document.getElementById("percent-bar")
const counter = document.getElementById("header-counter")
const message = document.getElementById("header-message")


function calcPercentage(current, goal) {
  let percentage = (current/goal)*100

  // round if decimals exists
  if (percentage % 1 !== 0) {
    percentage = percentage.toFixed(2)
  }

  bar.style.width = `${percentage}%`
  bar.innerHTML = `${percentage}%`

  counter.innerHTML = `Current: ${current} || Goal: ${goal}`
  current > goal ?
    message.innerHTML = `Congrats to Christian~ He reached his goal of ${goal} fist bumps.` :
    message.innerHTML = `Only ${goal-current} to go!`
  
  console.log(percentage)
}


calcPercentage(current, goal)