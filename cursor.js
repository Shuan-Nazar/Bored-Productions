/*(function() {
    console.clear();
    
    const follower = document.querySelector('.cursor');
    
    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;
    
    const ease = 0.1;
    
    function easeTo() {    
      const followerBounds = follower.getBoundingClientRect();
      
      const dX = mouseX - (followerBounds.left + 16);
      const dY = mouseY - (followerBounds.top + 16);
      
      posX += dX * ease;
      posY += dY * ease;
    }
    
    function update() {
      easeTo();
      follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;  
      requestAnimationFrame(update);
    }
    
    function setCoords(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    
      document.onmousemove = setCoords;
    update();
  })();*/


const $bigBall = document.querySelector('.cursor');
const $hoverables = document.querySelectorAll('a, .link');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
    TweenMax.to($bigBall, 0.15, {
        x: e.pageX - 8,
        y: e.pageY - 8,
    })
}

// Hover an element
function onMouseHover() {
    TweenMax.to($bigBall, .3, {
        scale: 3
    })
}
function onMouseHoverOut() {
    TweenMax.to($bigBall, .1, {
        scale: 1
    })
}  