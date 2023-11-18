var inputBox = document.querySelector('.input-box');
var searchBtn = document.getElementById('searchBtn');

var weather_img = document.querySelector('.weather-img');

var temperature = document.querySelector('.temperature');
var description = document.querySelector('.discription');

var humidity = document.querySelector('#humidity');
var wins_speed = document.querySelector('#wind-speed');
var location_not_found=document.querySelector('.location-not-found');
var weather_body=document.querySelector('.weather-body')

async function checkWeather(city) {
    var api_key = 'd1d9cef8157e57df866bf742791bbcbb';
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    var weather_data = await fetch(`${url}`).then(reaponse => reaponse.json());
    console.log(weather_data);

    if(weather_data.cod==='404'){
        location_not_found.style.display='flex';
        weather_body.style.display='none';
        // console.log('error')
        return;
    }
    location_not_found.style.display='none';
    weather_body.style.display='flex'

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°c`;
    description.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}% `
    wins_speed.innerHTML = `${weather_data.wind.speed}Km/H`

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "/images/images2.jpeg";
            break;
        case 'Clear':
            weather_img.src = "/images/image3.jpg";
            break;
        case 'Rain':
            weather_img.src = "/images/image4.jpg";
            break;
        case 'Mist':
            weather_img.src = "/images/image5.jpg";
            break;
    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value)
})