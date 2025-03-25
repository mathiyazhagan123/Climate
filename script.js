// Simulated weather data (hardcoded for demonstration purposes)
const weatherData = {
    "New York": {
        temperature: 22,
        humidity: 60,
        description: "Sunny",
    },
    "London": {
        temperature: 16,
        humidity: 75,
        description: "Cloudy",
    },
    "Tokyo": {
        temperature: 18,
        humidity: 80,
        description: "Rainy",
    },
    "Paris": {
        temperature: 20,
        humidity: 65,
        description: "Clear",
    },
    "Sydney": {
        temperature: 25,
        humidity: 50,
        description: "Windy",
    }
};

// Function to get weather data from the hardcoded list
function getWeather() {
    const city = document.getElementById('cityInput').value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // Check if the city exists in the simulated data
    if (weatherData[city]) {
        displayWeather(weatherData[city], city);
    } else {
        showError("City not found! Please try again.");
    }
}

// Function to display weather data
function displayWeather(data, city) {
    document.getElementById('error-message').classList.add('hidden');
    document.getElementById('weather-info').classList.remove('hidden');

    document.getElementById('city-name').textContent = `${city}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.temperature}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%
