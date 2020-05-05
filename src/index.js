import {homeWorkLinks} from './server/home-work-links'
import {otherProjectsLinks} from './server/other-projects-links'
import {socialNetworksLinks} from './server/social-networks-links'
import './styles/styles.scss'

const $homeworkList = document.getElementById('homework-list')
const $otherProjectsList = document.getElementById('other-projects-list')
const $socialsList = document.getElementById('socials-list')

let isHomeworkMenuOpened = false
let isOtherProjectsMenuOpened = false
let isSocialLinksOpened = false

const openClose = (block, clicked, menu) => {
  if (menu) {
    block.childNodes[1].childNodes[1].childNodes[1].classList.add('fa-angle-down')
    block.childNodes[1].childNodes[1].childNodes[1].classList.remove('fa-angle-right')
    clicked.closest('.section-wrapper').childNodes[3].classList.add('open')
    clicked.closest('.section-wrapper').childNodes[3].classList.remove('close')
  } else {
    block.childNodes[1].childNodes[1].childNodes[1].classList.remove('fa-angle-down')
    block.childNodes[1].childNodes[1].childNodes[1].classList.add('fa-angle-right')
    clicked.closest('.section-wrapper').childNodes[3].classList.remove('open')
    clicked.closest('.section-wrapper').childNodes[3].classList.add('close')
  }
}

document.querySelectorAll('.section-wrapper').forEach(section => {
  section.addEventListener('click', e => {
    document.querySelectorAll('.section-wrapper').forEach(section => {
      section.childNodes[3].classList.remove('open')
      section.childNodes[3].classList.add('close')
      section.childNodes[1].childNodes[1].childNodes[1].classList.remove('fa-angle-down')
      section.childNodes[1].childNodes[1].childNodes[1].classList.add('fa-angle-right')
    })

    if (e.target.id === 'homework' || e.target.id === 'homework-angel') {
      isHomeworkMenuOpened = !isHomeworkMenuOpened
      isOtherProjectsMenuOpened = false
      isSocialLinksOpened = false
      openClose(section, e.target, isHomeworkMenuOpened)
    } else if (e.target.id === 'other-projects' || e.target.id === 'other-projects-angel') {
      isOtherProjectsMenuOpened = !isOtherProjectsMenuOpened
      isHomeworkMenuOpened = false
      isSocialLinksOpened = false
      openClose(section, e.target, isOtherProjectsMenuOpened)
    } else if (e.target.id === 'social-projects' || e.target.id === 'socials-angel') {
      isSocialLinksOpened = !isSocialLinksOpened
      isHomeworkMenuOpened = false
      isOtherProjectsMenuOpened = false
      openClose(section, e.target, isSocialLinksOpened)
    }
  })
})

homeWorkLinks.reverse().map(item => {
  let link = `
  <li class="homework-item">
    <a class="homework-link" href=${item.src} target="_blank">${item.name}</a>
    <a class="homework-link" href=${item.repoSrc} target="_blank" style="margin: 0 10px; color: #00bc00;">${item.repoName}</a>
  </li>`
  return $homeworkList.insertAdjacentHTML('afterbegin', link)
})

otherProjectsLinks.reverse().map(item => {
  let link = `
  <li class="homework-item">
    <a class="homework-link" href=${item.src} target="_blank">${item.name}</a>
    <a class="homework-link" href=${item.repoSrc} target="_blank" style="margin: 0 10px; color: #00bc00;">${item.repoName}</a>
  </li>`
  return $otherProjectsList.insertAdjacentHTML('afterbegin', link)
})

socialNetworksLinks.reverse().map(item => {
  let link = `
  <li class="homework-item">
    <a class="homework-link" href=${item.src} target="_blank">
      <i class="${item.iconClasses.join(' ')}" style="color: ${item.color}; font-size: 20px; margin-right: 5px;"></i>
      ${item.name}
    </a>
  </li>`
  return $socialsList.insertAdjacentHTML('afterbegin', link)
})