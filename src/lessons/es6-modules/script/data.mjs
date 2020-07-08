import {add, takeOver} from './utils.mjs'

const resultWrapper = document.getElementById('count')
const folderWrapper = document.getElementById('folders')
const result = document.getElementById('result')

const folderForFirstNumber = folderWrapper.firstElementChild
const folderForSecondNumber = folderWrapper.lastElementChild

let NUMBER_1
let NUMBER_2


resultWrapper.addEventListener('click', e => {
  if (e.target.dataset.type === 'count-btn') {
    if (!folderForFirstNumber.value.trim() && !folderForSecondNumber.value.trim()) {
      NUMBER_1 = 0
      NUMBER_2 = 0
    } else if (!folderForFirstNumber.value.trim() && folderForFirstNumber.value.trim()) {
      NUMBER_1 = 0
      NUMBER_2 = folderForSecondNumber.value.trim()
    } else if(folderForFirstNumber.value.trim() && !folderForSecondNumber.value.trim()) {
      NUMBER_1 = folderForFirstNumber.value.trim()
      NUMBER_2 = 0
    } else {
      NUMBER_1 = folderForFirstNumber.value.trim()
      NUMBER_2 = folderForSecondNumber.value.trim()
    }
  }

  if (e.target.dataset.role === 'add') {
    result.textContent = add(NUMBER_1, NUMBER_2)
  }

  if (e.target.dataset.role === 'take-over') {
    result.textContent = takeOver(NUMBER_1, NUMBER_2)
  }

  if (e.target !== resultWrapper) {
    folderForFirstNumber.value = ''
    folderForSecondNumber.value = ''
  }
})