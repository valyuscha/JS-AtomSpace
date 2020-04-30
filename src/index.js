import './styles/styles.scss'

const $angle = document.querySelector('i')
const $homeWorkObserver = document.querySelector('p')
const $homeWorkList = document.querySelector('ul')

$angle.classList.add('fa-angle-right')

let isMenuHidden = true

$homeWorkObserver.addEventListener('click', () => {
  isMenuHidden = !isMenuHidden

  if (!isMenuHidden) {
    $angle.classList.remove('fa-angle-right')
    $angle.classList.add('fa-angle-down')
    for (let node of $homeWorkList.childNodes) {
      console.log('Node: ', node.firstChild)
      node.firstChild.style.color = 'darkorange'
    }
    $homeWorkList.style.transform = 'translateY(0)'
    $homeWorkList.style.zIndex = '1'
    $homeWorkList.classList.add('scroll')
  } else {
    $angle.classList.add('fa-angle-right')
    $angle.classList.remove('fa-angle-down')
    for (let node of $homeWorkList.childNodes) {
      console.log('Node: ', node.firstChild)
      node.firstChild.style.color = 'transparent'
    }
    $homeWorkList.style.transform = 'translateY(-50px)'
    $homeWorkList.style.zIndex = '-1'
  }
})