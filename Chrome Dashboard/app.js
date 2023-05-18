window.addEventListener("load", () => {
    // Random Background Wallpaper using Unsplash API
    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
        .then(res => res.json())
        .then(data => {
            document.body.style.backgroundImage = `url(${data.urls.regular})`;
            if (data.user.location == null) { // check if location is available
                document.getElementById("background-location").textContent = "";
            } else {
                document.getElementById("background-location").textContent = `${data.user.location}`;
            }
        })
        .catch(err => {
            // Use a default background image/location in case of error
            document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`
        })

    // Get current time and display it
    function getCurrentTime() {
        const date = new Date();
        document.getElementById('time').textContent = date.toLocaleTimeString("ro", { timeStyle: "short" });
    }
    setInterval(getCurrentTime, 1000);

    // Random Quotes
    fetch("https://quotable.io/random")
        .then(res => res.json())
        .then(data => {
            document.getElementById("quote").textContent = `"${data.content}"`;
        })

    // Get the locations and display the weather and the location
    navigator.geolocation.getCurrentPosition(position => {
        fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
            .then(res => {
                if (!res.ok) {
                    throw Error("Weather data not available");
                }
                return res.json();
            })
            .then(data => {
                let celsiusTemp = (data.main.temp - 32) * 5 / 9; //Fahrenheit to Celsius conversion
                const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                document.getElementById("weather-info").innerHTML = `
                        <img src=${iconUrl} />
                        <p class="weather-temp">${Math.round(celsiusTemp)}º</p>
                        <p class="weather-city">${data.name}</p> `
            })
            .catch(err => console.error(err));
    });

    // Day time message
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    } else if (hours > 17 && hours < 22) {
        timeOfDay = "evening";
    } else {
        timeOfDay = "night";
    }
    document.querySelector('.day-time').innerHTML = `
        <h2>Good ${timeOfDay}!</h2>
    `;

})

document.addEventListener('keyup', function (event) { // Press ENTER to add a new task
    if (event.keyCode == 13) {
        showCryptoCard();
    }
});

// Crypto Search and Display  
let cryptoInput = document.getElementById('crypto-search-input');
document.getElementById("crypto-search-submit").addEventListener('click', showCryptoCard);

function showCryptoCard() {
    fetch(`https://api.coingecko.com/api/v3/coins/${cryptoInput.value.toLowerCase()}`)
        .then(res => {
            if (!res.ok) {
                throw Error("Something went rong")
            }
            return res.json()
        })
        .then(data => {
            document.getElementById('crypto-details').innerHTML += `
        <div id="crypto-card" class="glass">
            <img src=${data.image.small} />
            <div class="name-symbol">
                <p>${data.name}</p>
                <p>${data.symbol.toUpperCase()}</p> 
                <p>$${data.market_data.current_price.usd}</p>
            </div>
        </div> `
            cryptoInput.value = '';
        })
}
