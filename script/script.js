let clocka = document.querySelector(".clock");

clocka.style.height = getComputedStyle(clocka).width;
window.addEventListener("resize" , ()=>{
    clocka.style.height = getComputedStyle(clocka).width;

})


let clockRect = clocka.getBoundingClientRect();
document.body.addEventListener("mousemove" , (e)=>{
    requestAnimationFrame(() =>{
        let xPose = e.pageX;
        let Ypose = e.pageY;
        let mouseXClock = xPose - clockRect.x - clockRect.width / 2;
        let mouseYClock = Ypose - clockRect.y - clockRect.height / 2;
        let clockXAngle = 40 * (mouseXClock / window.innerWidth);
        let clockYAngle = -1 * 40 * (mouseYClock / window.innerHeight);
        clocka.style.setProperty("--xAngle", clockXAngle.toFixed(2) + "deg");
        clocka.style.setProperty("--yAngle", clockYAngle.toFixed(2) + "deg");
    })
})

document.body.addEventListener("touchmove" , (e)=>{
    requestAnimationFrame(() =>{
        let xPose = e.touches[0].pageX;
        let Ypose = e.touches[0].pageY;
        let mouseXClock = xPose - clockRect.x - clockRect.width / 2;
        let mouseYClock = Ypose - clockRect.y - clockRect.height / 2;
        let clockXAngle = 40 * (mouseXClock / window.innerWidth);
        let clockYAngle = -1 * 40 * (mouseYClock / window.innerHeight);
        clocka.style.setProperty("--xAngle", clockXAngle.toFixed(2) + "deg");
        clocka.style.setProperty("--yAngle", clockYAngle.toFixed(2) + "deg");
    })
})


//  /////Date

let dateText = document.querySelector(".date");
setInterval(dateNow , 1000);
function dateNow(){
let date = new Date;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let h = (hour < 10) ? "0" + hour : hour ;
    let m = (minute < 10) ? "0" + minute : minute ;
    let s = (second < 10) ? "0" + second : second ;
     dateText.innerHTML = `${h}:${m}:${s}`;
}
// ////////// Clock
let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let hour = document.querySelector(".hour");
setInterval(clock , 1000);
function clock(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    second.style.transform = `rotate(${s * 6}deg)`;
    hour.style.transform = `rotate(${h * 30 + (m * 6 / 12)}deg)`;
    minute.style.transform = `rotate(${m * 6}deg)`;

}

// ////////////////Loading

let loader = document.querySelector(".loading");

window.addEventListener("load" , ()=>{
    loader.style.visibility = "hidden";
})

// /////////// click effect

document.addEventListener("click" , (e)=>{
    let x = e.pageX;
    let y = e.pageY;    
    let span = document.createElement("span");
    span.classList.add("mouse-effect");
    span.style.top = y + "px";
    span.style.left = x + "px";


    document.body.appendChild(span);

    setInterval(() => {
        span.remove()
    }, 400);
})

