const circle = document.querySelector('.cursor')
const circleStyle = circle.style
const hoverables = document.querySelectorAll('a')

document.addEventListener('mousemove', e => {
  circleStyle.top = `${e.clientY - circle.offsetHeight/2}px`
  circleStyle.left = `${e.clientX - circle.offsetWidth/2}px`
})

for(elm in hoverables) {
  elm.addEventListener('mouseenter', () => {
    circleStyle.scale = 3
  })
  elm.addEventListener('mouseleave', () => {
    circleStyle.scale = 1
  })
}