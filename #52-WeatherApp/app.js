// -----------------------------
// ----------SELECTORS and VARIABLES----------
// -----------------------------
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timeZone = document.getElementById('time-zone');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temperature');
const days = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'oct', 'Nov', 'Dec'];
const API_KEY = '2670a7637b8e8b1a77d1dd2b4bb4f7c7';

// -----------------------------
// ----------FUNCTIONS----------
// -----------------------------
setInterval(() => {
    //time and date setup
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const timeFormat = hour >= 12 ? "PM" : "AM";

    // display time and date
    timeEl.innerHTML = (hoursFormat < 10 ? "0" + hoursFormat : hoursFormat) + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + `<span id=time-format>${timeFormat}</span>`
    dateEl.innerHTML = `${days[day]}, ${date} ${months[month]}`
}, 1000);

getWeatherData()
function getWeatherData() { // Getting all the information about user's location 
    navigator.geolocation.getCurrentPosition(success => { //getting latitude and longitude from the user
        let { latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                showWeatherData(data); //insert all the data provided to the function
            })
    })
}

function showWeatherData(data) { // function that displays previously provided information
    let { humidity, pressure, sunrise, sunset, wind_speed } = data.current; //destructuring necessary data
    timeZone.innerHTML = data.timezone

    // display current day data
    currentWeatherItemsEl.innerHTML =
        `<div class="weather-item">
            <div>Humidity</div>
            <div>${humidity}%</div>
        </div>
        <div class="weather-item">
            <div>Pressure</div>
            <div>${pressure}</div>
        </div>
        <div class="weather-item">
            <div>Wind Speed</div>
            <div>${wind_speed}</div>
        </div>
        <div class="weather-item">
            <div>Sunrise</div>
            <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
        </div>
        <div class="weather-item">
            <div>Sunset</div>
            <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
        </div>`;

    let futureDaysForecast = '';
    data.daily.forEach((day, index) => {
        if (index == 0) { // display current day data
            currentTempEl.innerHTML = `
                <img class="w-icon" src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png">
                <div class="other">
                    <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                    <div class="temp">Night - ${(day.temp.night).toFixed()}&#176; C</div>
                    <div class="temp">Day - ${(day.temp.day).toFixed()}&#176; C</div>
                </div>`
        } else { // display future days data
            futureDaysForecast += `
                <div class="weather-forecast-item">
                    <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
                    <img class="w-icon" src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
                    <div class="temp">Night - ${(day.temp.night).toFixed()}&#176; C</div>
                    <div class="temp">Day - ${(day.temp.day).toFixed()}&#176; C</div>
                </div>`
        }
    })
    weatherForecastEl.innerHTML = futureDaysForecast;
}