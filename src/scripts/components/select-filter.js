window.addEventListener('load', () => {
  if (!document.querySelector('.dropdown')) {
    return false
  }

  const menu = document.querySelector('.dropdown')

  menu.addEventListener('click', e => {
    if (e.target.classList.contains('dropdown') || e.target.classList.contains('dropdown__select') || e.target.classList.contains('dropdown__icon')) {
      menu.classList.toggle('dropdown__active')
    }
  })
})
