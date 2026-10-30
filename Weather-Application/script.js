
const API_KEY = "8c1c71cc18fa476b2bcfec1bd27a3b78"; 

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    try {
        errorMessage.textContent = "Loading...";

        if(city === "") {
            throw new Error("Please enter a city name");
        }

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.message || "Failed to fetch weather data");
        }

        document.getElementById("cityName").textContent = "City: "+ data.name + ", Country: " +
        data.sys.country;

        document.getElementById("temperature").textContent =
            "Temperature: " + data.main.temp + " °C";

        document.getElementById("description").textContent =
            "Weather: " + data.weather[0].description;

        document.getElementById("humidity").textContent =
            "Humidity: " + data.main.humidity + "%";

        errorMessage.textContent = "";

    } catch (error) {
        errorMessage.textContent = error.message;
    }
}
