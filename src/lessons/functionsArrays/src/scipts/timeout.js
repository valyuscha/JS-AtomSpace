const wrapper = document.querySelector('.wrapper')

const timeoutWrapper = document.createElement('div')
wrapper.append(timeoutWrapper)
timeoutWrapper.classList.add('timeout-wrapper')

const startBtn = document.createElement('button')
startBtn.textContent = 'Start'
startBtn.classList.add('timeoutBtn')
const resetBtn = document.createElement('button')
resetBtn.textContent = 'Reset'
resetBtn.disabled = true
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
    startBtn.disabled = true
    resetBtn.disabled = false
    resetBtn.style.background = '#6495ed'
    resetBtn.style.borderColor = '#5382cc'
    resetBtn.style.cursor = 'pointer'
    startBtn.style.cursor = 'not-allowed'
    startBtn.style.background = 'rgba(255, 255, 255, .4)'
    startBtn.style.borderColor = '#474747'
    timeout = setTimeout(() => {
      timeoutResult.textContent = `Timeout: ${++timeoutCount}`
    }, 5000)

    interval = setInterval(() => {
      intervalResult.textContent = `Interval: ${++intervalCount}`
    }, 1000)
  } else {
    clearInterval(interval)
    clearTimeout(timeout)
    timeoutCount = 0
    intervalCount = 0
    timeoutResult.textContent = `Timeout: ${timeoutCount}`
    intervalResult.textContent = `Interval: ${intervalCount}`
    startBtn.disabled = false
    resetBtn.disabled = true
    resetBtn.style.background = 'rgba(255, 255, 255, .4)'
    resetBtn.style.borderColor = '#474747'
    resetBtn.style.cursor = 'not-allowed'
    startBtn.style.background = '#6495ed'
    startBtn.style.borderColor = '#5382cc'
    startBtn.style.cursor = 'pointer'
  }
})