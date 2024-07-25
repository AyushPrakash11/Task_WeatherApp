document.addEventListener('DOMContentLoaded', function () {
    const api_key = '94aeb5b0c6fe9461489367bed125b097'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${api_key}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const city = data.name;
            const country = data.sys.country;
            const temp = Math.round(data.main.temp);
            const description = data.weather[0].description;

            document.querySelector('.city').textContent = city;
            document.querySelector('.country').textContent = country;
            document.querySelector('.temp').textContent = `${temp}°C`;
            document.querySelector('.description').textContent = description;
        })
        .catch(error => console.error('There was a problem fetching the weather data:', error));
});
