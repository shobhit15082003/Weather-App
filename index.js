const apiKey = "f88d7a16afa3c1f0dd062fae2b59b8a7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let data;
async function checkWeather(okk) {
  const response = await fetch(apiUrl + okk +  `&appid=${apiKey}`);
   data = await response.json();
  console.log(data);
  console.log(data.name);
  updateWeather();
}

// checkWeather("Bangalore");

function updateWeather(){
document.querySelector(".cityname").innerHTML = data.name;
document.querySelector(".citytemp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humi2").innerHTML = data.main.humidity + "%";
document.querySelector(".wind2").innerHTML = Math.round(data.wind.speed) + "km/h";
let baka = data.weather[0].main;
if (baka == "Clouds") {
  document.querySelector(".bottomimg").src = "images/clouds.png";
} else if (baka == "Rain") {
  document.querySelector(".bottomimg").src = "images/rain.png";
} else if (baka == "Clear") {
  document.querySelector(".bottomimg").src = "images/clear.png";
} else if (baka == "Drizzle") {
  document.querySelector(".bottomimg").src = "images/drizzle.png";
} else if (baka == "Mist") {
  document.querySelector(".bottomimg").src = "images/mist.png";
}
}
const search = document.querySelector(".searchbar input");
const btn = document.querySelector(".searchbar button");

btn.addEventListener("click",()=>{
    console.log("hello");
     checkWeather(search.value);
})