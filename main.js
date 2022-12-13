const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const buttonCookie = document.querySelector(".cookie")
const tryAgain = document.querySelector(".newCoockie")

buttonCookie.addEventListener('click', function() {
  screen1.classList.add('hide')
  screen2.classList.remove('hide')
})

tryAgain.addEventListener('click', function() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
})