function getWeather() {
    const city = document.getElementById("cities").value;
    const apiKey = "05cf4d185422844890d6b60b35a39566"; // Replace with your OpenWeatherMap API key
    const weatherInfo = document.getElementById("weather-info");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const desc = data.weather[0].description;
            const country = data.sys.country;

            weatherInfo.innerHTML = `
                <h2>${city}, ${country}</h2>
                <p>Temperature: ${temp}°C</p>
                <p>Description: ${desc}</p>
            `;
        })
        .catch(error => {
            weatherInfo.innerHTML = 'Error fetching data';
        });
}
