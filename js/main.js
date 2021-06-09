document.querySelector('.header__burger').addEventListener('click', () => {
  document.querySelector('.header__burger').classList.toggle('active')
  document.querySelector('.sitenav').classList.toggle('active')
  document.querySelector('.top-header').classList.toggle('active')
})
