

const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});
let ham = document.querySelector(".ham")
let x = document.querySelector(".x")
let nav = document.querySelector("#nav")

 ham.addEventListener("click",()=>{
nav.classList.toggle("hidden")
ham.style.display ="none"
x.classList.toggle("hidden")
console.log("udghquidhq")
})
x.addEventListener("click",()=>{
    nav.classList.toggle("hidden")
    ham.style.display="block"
    
    x.classList.toggle("hidden")

})
document.querySelector(".img1").addEventListener("mouseenter",()=>{
    document.querySelector(".imgtext1").style.display ="block"
})
document.querySelector(".img1").addEventListener("mouseleave",()=>{
    document.querySelector(".imgtext1").style.display ="none"
})


document.querySelector(".img2").addEventListener("mouseenter",()=>{
    document.querySelector(".imgtext2").style.display ="block"
})
document.querySelector(".img2").addEventListener("mouseleave",()=>{
    document.querySelector(".imgtext2").style.display ="none"
})


document.querySelector(".img3").addEventListener("mouseenter",()=>{
    document.querySelector(".imgtext3").style.display ="block"
})
document.querySelector(".img3").addEventListener("mouseleave",()=>{
    document.querySelector(".imgtext3").style.display ="none"
})


document.querySelector(".img4").addEventListener("mouseenter",()=>{
    document.querySelector(".imgtext4").style.display ="block"
})
document.querySelector(".img4").addEventListener("mouseleave",()=>{
    document.querySelector(".imgtext4").style.display ="none"
})


document.querySelector(".img5").addEventListener("mouseenter",()=>{
    document.querySelector(".imgtext5").style.display ="block"
})
document.querySelector(".img5").addEventListener("mouseleave",()=>{
    document.querySelector(".imgtext5").style.display ="none"
})


document.querySelector(".img6").addEventListener("mouseenter",()=>{
    document.querySelector(".imgtext6").style.display ="block"
})
document.querySelector(".img6").addEventListener("mouseleave",()=>{
    document.querySelector(".imgtext6").style.display ="none"
})


document.querySelector(".img7").addEventListener("mouseenter",()=>{
    document.querySelector(".imgtext7").style.display ="block"
})
document.querySelector(".img7").addEventListener("mouseleave",()=>{
    document.querySelector(".imgtext7").style.display ="none"
})


document.querySelector(".img8").addEventListener("mouseenter",()=>{
    document.querySelector(".imgtext8").style.display ="block"
})
document.querySelector(".img8").addEventListener("mouseleave",()=>{
    document.querySelector(".imgtext8").style.display ="none"
})


document.querySelector(".img9").addEventListener("mouseenter",()=>{
    document.querySelector(".imgtext9").style.display ="block"
})
document.querySelector(".img9").addEventListener("mouseleave",()=>{
    document.querySelector(".imgtext9").style.display ="none"
})
