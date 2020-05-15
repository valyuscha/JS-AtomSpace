function getNumbers(func, num1, num2) {
  return func(num1, num2)
}

const plus = (num1, num2) => num1 + num2
const minus = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const share = (num1, num2) => Math.round((num1 / num2) * 100) / 100

const input1 = document.createElement('input')
input1.placeholder = 'Enter number'
input1.maxLength = 8
const input2 = document.createElement('input')
input2.maxLength = 8
input2.placeholder = 'Enter number'

const wrapper = document.querySelector('.wrapper')
const input1Wrapper = document.createElement('div')
const input2Wrapper = document.createElement('div')
wrapper.appendChild(input1Wrapper)
wrapper.appendChild(input2Wrapper)
input1Wrapper.appendChild(input1)
input2Wrapper.appendChild(input2)

const buttonsWrapper = document.createElement('div')
buttonsWrapper.classList.add('btn-wrapper')
wrapper.appendChild(buttonsWrapper)

const buttons = ['+', '-', '*', '/']
buttons.map(item => {
  const button = document.createElement('button')
  button.classList.add('count-btn')
  button.textContent = item
  buttonsWrapper.appendChild(button)
})

let result = document.createElement('p')
result.classList.add('result')
result.textContent = 'Here will be the result'
wrapper.appendChild(result)

const errorMessage1 = document.createElement('p')
errorMessage1.classList.add('error')
errorMessage1.id = 'error1'
errorMessage1.textContent = 'You have to enter the number'
const errorMessage2 = document.createElement('p')
errorMessage2.classList.add('error')
errorMessage2.id = 'error2'
errorMessage2.textContent = 'You have to enter the number'

input1Wrapper.appendChild(errorMessage1)
input2Wrapper.appendChild(errorMessage2)

buttonsWrapper.addEventListener('click', e => {
  if (input1.value.trim() !== '' || input2.value.trim() !== '') {
    if (!isNaN(input1.value) && !isNaN(input2.value)) {
      if (e.target.textContent === '+') {
        result.textContent = getNumbers(plus, +input1.value, +input2.value)
      } else if (e.target.textContent === '-') {
        result.textContent = getNumbers(minus, +input1.value, +input2.value)
      } else if (e.target.textContent === '*') {
        result.textContent = getNumbers(multiply, +input1.value, +input2.value)
      } else if (e.target.textContent === '/') {
        result.textContent = getNumbers(share, +input1.value, +input2.value)
      }

      errorMessage1.style.opacity = '0'
      errorMessage2.style.opacity = '0'
      input1.value = ''
      input2.value = ''
    } else if (!isNaN(input1.value) && isNaN(input2.value)) {
      errorMessage1.style.opacity = '0'
      errorMessage2.style.opacity = '1'
    } else if (isNaN(input1.value) && !isNaN(input2.value)) {
      errorMessage1.style.opacity = '1'
      errorMessage2.style.opacity = '0'
    } else if (isNaN(input1.value) && isNaN(input2.value)) {
      errorMessage1.style.opacity = '1'
      errorMessage2.style.opacity = '1'
    }
  } else if (e.target.tagName.toLowerCase() !== 'button') {
    result.textContent = 'Here will be the result'
  } else {
    result.textContent = 'You have to enter number'
  }
})