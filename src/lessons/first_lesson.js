const $mainList = document.getElementById('main-list')
const $num1Folder = document.getElementById('num1-folder')
const $num2Folder = document.getElementById('num2-folder')
const $countBtn = document.getElementById('countBtn')
const $errorMessage1 = document.getElementById('error-message1')
const $errorMessage2 = document.getElementById('error-message2')
const $result = document.querySelector('.result')

const count = ({num1, num2}) => {
  console.log('Count Result: ', Math.round((num1 / num2) * 100) / 100)
  return Math.round((num1 / num2) * 100) / 100
}

const types = {
  number: 45,
  string: 'Hello world!',
  boolean: true,
  typeNull: null,
  typeUndefined: undefined,
  typeObject: {count}
}

const {...keys} = types

Object.entries(keys).reverse().map(entry => {
  let key = entry[0]
  let value = entry[1]
  let listItem
  
  if (entry[0] === 'typeObject') {
    listItem = `<li>${key}: <span class="item-value">${typeof value.count}</span></li>`
  } else {
    listItem = `<li>${key}: <span class="item-value">${value}</span></li>`
  }

  $mainList.insertAdjacentHTML('afterbegin', listItem)
})

Object.entries(keys).map(entry => {
  let key = entry[0]
  let value = entry[1]

  if (entry[0] === 'typeObject') {
    console.log(`ListItem: ${key}: ${typeof value.count}`)
  } else {
    console.log(`ListItem: ${key}: ${value}`)
  }
})

let isValid

$countBtn.addEventListener('click', () => {
  if (isNaN($num1Folder.value) && isNaN($num2Folder.value)) {
    $errorMessage1.style.display = 'block'
    $errorMessage2.style.display = 'block'
    $result.textContent = ''
    isValid = false
  }
  else if (!isNaN($num1Folder.value) && isNaN($num2Folder.value)) {
    $errorMessage1.style.display = 'none'
    $errorMessage2.style.display = 'block'
    $result.textContent = ''
    isValid = false
  }
  else if (isNaN($num1Folder.value) && !isNaN($num2Folder.value)) {
    $errorMessage1.style.display = 'block'
    $errorMessage2.style.display = 'none'
    $result.textContent = ''
    isValid = false
  }
  else if (!isNaN($num1Folder.value) && !isNaN($num2Folder.value)) {
    $errorMessage1.style.display = 'none'
    $errorMessage2.style.display = 'none'
    $result.textContent = count({num1: $num1Folder.value, num2: $num2Folder.value})
    isValid = true
  }

  if (isValid) {
    $num1Folder.value = ''
    $num2Folder.value = ''
  }
})
