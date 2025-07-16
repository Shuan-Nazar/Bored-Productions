/*
const $bigBall = document.querySelector('.cursor-circle');
const $hoverables = document.querySelectorAll('a, .link');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++)
{
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e)
{
    TweenMax.to($bigBall, 0.15, {
        x: e.pageX - 8,
        y: e.pageY - 8,
    })
}

// Hover an element
function onMouseHover()
{
    TweenMax.to($bigBall, .3, {
        scale: 3
    })
}
function onMouseHoverOut()
{
    TweenMax.to($bigBall, .1, {
        scale: 1
    })
}
*/

const circle = document.querySelector('.circle-cursor');

document.addEventListener('mousemove', (e) => {
  circle.style.left = `${e.clientX}px`;
  circle.style.top = `${e.clientY}px`;
});