const API_KEY = "9b4030aacd935a4963e78fdadc4ae2a5";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then( response => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText= data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    
}
function onGeoError() {
    alert("Cant't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);