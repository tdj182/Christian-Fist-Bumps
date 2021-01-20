let current = 10
let goal = 15

function calcPercentage(current, goal) {
  let percentage = (current/goal)*100

  // round if decimals exists
  if (percentage % 1 !== 0) {
    percentage = percentage.toFixed(2)
  }

  document.getElementById("percent-bar").style.width = `${percentage}%`
  document.getElementById("percent-bar").innerHTML = `${percentage}%`
  console.log(percentage)
}

calcPercentage(current,goal)