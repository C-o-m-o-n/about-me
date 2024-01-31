let mouseCursor = document.querySelector(".mouse-cursor");
let navLink =document.querySelectorAll(".nav-link");
let paralaxObject = document.querySelectorAll('.paralax-object')

window.addEventListener('mousemove', mouseMoving)

function mouseMoving(e) {
    mouseCursor.style.top = e.pageY +  "px";
    mouseCursor.style.left = e.pageX +  "px";

    // for the paralax
    paralaxObject.forEach((move)=>{
        let movingValue = move.getAttribute('data-value')
        
        let X = e.clientX * movingValue / 250
        let Y = e.clientY * movingValue / 250

        move.style.transform = "translateX(" + X + "px) translateY(" + Y + "px)"

    })
}


navLink.forEach((link) => {
    link.addEventListener('mouseleave', ()=>{
        mouseCursor.classList.remove('link-grow')
    })
    link.addEventListener('mouseover', ()=>{
        mouseCursor.classList.add('link-grow')
    })

})