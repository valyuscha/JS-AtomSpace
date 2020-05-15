const wrapper = document.querySelector('.wrapper')

const timeoutWrapper = document.createElement('div')
wrapper.append(timeoutWrapper)
timeoutWrapper.classList.add('timeout-wrapper')

const startBtn = document.createElement('button')
startBtn.textContent = 'Start'
startBtn.classList.add('timeoutBtn')
const resetBtn = document.createElement('button')
resetBtn.textContent = 'Reset'
resetBtn.classList.add('timeoutBtn')
timeoutWrapper.appendChild(startBtn)
timeoutWrapper.appendChild(resetBtn)

let timeoutCount = 0
let intervalCount = 0

const timeoutResultWrapper = document.createElement('div')
timeoutResultWrapper.classList.add('timeout-result-wrapper')
wrapper.appendChild(timeoutResultWrapper)
const timeoutResult = document.createElement('span')
timeoutResult.textContent = `Timeout: ${timeoutCount}`
const intervalResult = document.createElement('span')
intervalResult.textContent = `Interval: ${intervalCount}`
timeoutResultWrapper.appendChild(timeoutResult)
timeoutResultWrapper.appendChild(intervalResult)

let timeout
let interval

timeoutWrapper.addEventListener('click', e => {
  if (e.target.textContent === 'Start') {
    console.log('Started')
    startBtn.disabled = true
    setTimeout(() => {
      startBtn.style.cursor = 'not-allowed'
    }, 2000)
    timeout = setTimeout(() => {
      timeoutResult.textContent = `Timeout: ${++timeoutCount}`
    }, 5000)

    interval = setInterval(() => {
      intervalResult.textContent = `Interval: ${++intervalCount}`
    }, 1000)
  } else {
    console.log('Stoped')
    clearInterval(interval)
    clearTimeout(timeout)
    startBtn.disabled = false
    startBtn.style.cursor = 'pointer'
  }
})