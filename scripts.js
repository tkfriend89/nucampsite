require('dotenv').config(); //needed to use .env and API key

apiKey= process.env.OPEN_WEATHER_API_KEY;

async function fetchWeather(){

    const city= 'London';

    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        displayWeather(data);
    } catch (error){
        console.error('There was an error: ', error);
    }
}

function displayWeather(data) {
   
    const cityName = data["location"]["name"];
    const country = data["location"]["country"];
    const temperature = data["current"]["temperature"];
    //const description = data.current.weather_descriptions[0];
    // const iconCode = data.current.weather_icons[0].split('/').pop().split('.')[0]; 

    //const iconImg = document.createElement('img');
    //iconImg.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    //iconImg.alt = description; 

    document.getElementById('weather-temp').textContent = `${cityName}, ${country} ${temperature}\u00B0F`;
    //document.getElementById('weather-description').textContent = description;

    //document.getElementById('weather-icon').appendChild(iconImg);
}

fetchWeather();