function reveal()
{
    var reveals = document.querySelectorAll(".reveal");
    for(var i = 0; i < reveals.length; i++)
    {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
        if(elementTop < windowHeight - elementVisible)
            reveals[i].classList.add("active");
        else
            reveals[i].classList.add("error");
    }
}

window.addEventListener("scroll", reveal);

let navBtn = document.querySelectorAll('.reveal');
let menu = document.querySelectorAll('button');
window.onscroll = () => {
    navBtn.forEach(i => {
        let top = window.scrollY;
        let offset = i.offsetTop - 50;
        let height = i.offsetHeight;
        let id = i.getAttribute("id");
        if(top >= offset && top < offset + height)
        {
            menu.forEach(link => {
                link.classList.remove(".active");
                document.querySelector("button id*=" + id).classList.add(".active");
            })
        }
    })
}