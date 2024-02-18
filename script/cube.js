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
// let da = document.querySelector(".date");
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
//     let sec = nowSec < 10 ? "0" + nowSec : nowSec;
//     let min = nowmin < 10 ? "0" + nowmin : nowmin;
//     let hou = nowhou < 10 ? "0" + nowhou : nowhou;
// da.innerHTML = `${hou}:${min}:${sec}`;
}

let loader = document.querySelector(".loader");

window.addEventListener("load" , ()=>{
    loader.style.visibility = "hidden";
})


