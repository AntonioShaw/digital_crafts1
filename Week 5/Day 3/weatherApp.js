const cityName = document.getElementById("cityName")
const GET_WEATHER_URL = (`http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=24bdcd57e4b6ba23ee392497557ab72e&units=imperial`)
const getWeatherButton = document.getElementById("getWeatherButton")
const results = document.getElementById("results")

function getWeather() {
    console.log(cityName.value)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=24bdcd57e4b6ba23ee392497557ab72e&units=imperial`)
            .then(response => {
                return response.json()
                .then(result => {
                    console.log(result)

                    
                    displayWeather(result.main)
                })
            })
        }

    console.log(getWeather)

getWeatherButton.addEventListener("click", function () {
    getWeather()
})

function displayWeather(data) {
    console.log(data.temp, data.temp_max, data.temp_min, data.feels_like, data.humidity, data.pressure)

    const weather = `
        <h2>Here are the current conditions in ${cityName.value}.</h2>
        <div>Real Temperature: ${data.temp} F | Feels Like: ${data.feels_like} F </div>
        <div>Today's High & Low: High - ${data.temp_max} F | Low - ${data.temp_min} F </div>
        <div>Humidity: ${data.humidity} </div>
        <div>Air Pressure: ${data.pressure} ATM</div>
    `
    results.innerHTML= weather
}

