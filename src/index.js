import {homeWorkLinks} from './server/home-work-links'
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
    $homeWorkList.style.opacity = '1'
    $homeWorkList.style.transform = 'translateY(0)'
  } else {
    $angle.classList.add('fa-angle-right')
    $angle.classList.remove('fa-angle-down')
    $homeWorkList.style.opacity = '0'
    $homeWorkList.style.transform = 'translateY(-20px)'
  }
})

homeWorkLinks.reverse().map(item => {
  let link = `<li class="homework-item"><a class="homework-link" href=${item.src}>${item.name}</a></li>`
  return $homeWorkList.insertAdjacentHTML('afterbegin', link)
})