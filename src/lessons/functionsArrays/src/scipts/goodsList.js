const listName = document.createElement('h2')
listName.textContent = 'List of goods'

const list = document.createElement('ol')

const wrapper = document.querySelector('.wrapper')
wrapper.appendChild(listName)
wrapper.appendChild(list)

const goods = ['Apples', 'Pen', 'Pencil', 'Tomato', 'Candies', 'Cookies']
let num = 0
let listItem

function showList() {
  if (num < goods.length) {
    goods.reverse()
    goods.map(item => {
      num++
      listItem = `<li>${item}</li>`
      list.insertAdjacentHTML('afterbegin', listItem)
      return list
    })

    return showList()
  }
}

showList()