let cube = document.querySelector(".cube");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
next.addEventListener("click" , () =>{
    cube.style.transform += `rotateY(90deg)`;
})
prev.addEventListener("click" , () =>{
    cube.style.transform += `rotateY(-90deg) translate(0)`;
})
let second = document.querySelectorAll(".second");
let minute = document.querySelectorAll(".minute");
let hour = document.querySelectorAll(".hour");
setInterval(sec , 1000);
function sec(){
    let date = new Date();
    let nowSec = date.getSeconds();
    let nowmin = date.getMinutes();
    let nowhou = date.getHours();
    second.forEach(e => {
        e.style.transform = `rotate(${6 * nowSec}deg)`;
    });
    minute.forEach(e => {
    e.style.transform = `rotate(${6 * nowmin}deg)`;   
    });
    hour.forEach(e => {
        e.style.transform = `rotate(${30 * nowhou}deg)`;
        });
}

let loader = document.querySelector(".loading");

window.addEventListener("load" , ()=>{
    loader.style.visibility = "hidden";
})


