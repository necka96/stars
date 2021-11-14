const home = document.getElementById("home")
const about = document.getElementById("about")
const gallery = document.getElementById("gallery")
const contact = document.getElementById("contact")
const menu = document.querySelector(".menu")
const preloader = document.querySelector(".preloader")

var homeSec = document.getElementById("home-sec")
var aboutSec = document.getElementById("about-sec")
var gallerySec = document.getElementById("gallery-sec")
var contactSec = document.getElementById("contact-sec")

window.addEventListener("load", showHome)
window.addEventListener("load",disppear)
home.addEventListener("click", showHome)
about.addEventListener("click", showAbout)
gallery.addEventListener("click", showGallery)
contact.addEventListener("click", showContact)
document.addEventListener("click", (e)=>{
    if(e.target.id !== "toggle"){
        menu.classList.remove("active")
    }
})
menu.addEventListener("click",()=>{
    menu.classList.toggle("active")
  
})

function disppear (){
    preloader.classList.add("disppear")
}

function showHome (){
 homeSec.classList.add("active")
 aboutSec.classList.remove("active")
  gallerySec.classList.remove("active")
    contactSec.classList.remove("active")
}

function showAbout(){
 homeSec.classList.remove("active")
 aboutSec.classList.add("active")
  gallerySec.classList.remove("active")
    contactSec.classList.remove("active")
}

function showGallery(){
 homeSec.classList.remove("active")
 aboutSec.classList.remove("active")
 gallerySec.classList.add("active")
  contactSec.classList.remove("active")
}

function showContact(){
 homeSec.classList.remove("active")
 aboutSec.classList.remove("active")
 gallerySec.classList.remove("active")
 contactSec.classList.add("active")
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

