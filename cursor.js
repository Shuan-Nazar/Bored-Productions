const circle = document.querySelector('.cursor')
const hoverables = document.querySelectorAll('button, a')

document.addEventListener('mousemove', e => {
  circle.style.top = `${e.clientY - circle.offsetHeight/6}px`
  circle.style.left = `${e.clientX - circle.offsetWidth/3}px`
})

for(elm of hoverables) {
  elm.addEventListener('mouseenter', () => {
    circle.style.scale = 3
  })
  elm.addEventListener('mouseleave', () => {
    circle.style.scale = 1
  })
}