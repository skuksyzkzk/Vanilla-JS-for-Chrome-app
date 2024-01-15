const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes =String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =date.toLocaleTimeString();
}
getClock(); // 초기에 바로 나오게 
setInterval(getClock, 1000);