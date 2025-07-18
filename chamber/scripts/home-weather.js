const weatherIcon = document.querySelector('#weather-icon');
const details = document.querySelector('figcaption');
const forecast = document.querySelector('#forecast');
const url1 = "https://api.openweathermap.org/data/2.5/weather?lat=39.11&lon=-94.62&appid=e143855b8f3274f1b9a11f713cc02899&units=imperial"
const url2 = "https://api.openweathermap.org/data/2.5/forecast?lat=39.11&lon=-94.62&appid=e143855b8f3274f1b9a11f713cc02899&units=imperial"

async function apiFetch() {
    try {
        const response1 = await fetch(url1);
        if (response1.ok) {
            const data1 = await response1.json();
            console.log(data1);
            try {
                const response2 = await fetch(url2);
                if (response2.ok) {
                    const data2 = await response2.json();
                    console.log(data2);
                    displayResults(data1, data2);
                }
                else {
                    throw Error(await response2.text());
                }
            }
            catch (error) {
            console.log(error);
            }
        }
        else {
            throw Error(await response1.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data1, data2) {
    // Icon
    
    const iconsrc = `https://openweathermap.org/img/w/${data1.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    // Current Temp
    const currentTemp = document.createElement("p");
    currentTemp.innerHTML = `${Math.round(data1.main.temp)}&deg;F`;
    currentTemp.setAttribute("class", "temp");
    details.appendChild(currentTemp);
    // Description
    const descText = document.createElement("p");
    let desc = data1.weather[0].description
    descText.innerHTML = `${desc}`;
    descText.setAttribute("id", "desc")
    details.appendChild(descText);
    weatherIcon.setAttribute('alt', desc);
    // Humidity
    const humidity = document.createElement("p");
    humidity.innerHTML = `Humidity: ${data1.main.humidity}%`;
    details.appendChild(humidity);
    // Sunrise
    const sunrise = document.createElement("p");
    let sunriseTime = getTime(data1.sys.sunrise);
    sunrise.innerHTML = `Sunrise: ${sunriseTime}`;
    details.appendChild(sunrise);
    // Sunset
    const sunset = document.createElement("p");
    let sunsetTime = getTime(data1.sys.sunset);
    sunset.innerHTML = `Sunset: ${sunsetTime}`;
    details.appendChild(sunset);
    // Today's Forecast
    let forecastArray = getForecast(data2);
    const today = document.createElement("p");
    today.innerHTML = `Today: <span class="temp">${Math.round(forecastArray[0].main.temp)}&deg;F</span>`
    forecast.appendChild(today);
    // Tomorrow's Forecast
    const tomorrow = document.createElement("p");
    let tomorrowDay = getWeekday(forecastArray[1].dt);
    tomorrow.innerHTML = `${tomorrowDay}: <span class="temp">${Math.round(forecastArray[1].main.temp)}&deg;F</span>`
    forecast.appendChild(tomorrow);
    // Overmorrow's Forecast
    const overmorrow = document.createElement("p");
    let overmorrowDay = getWeekday(forecastArray[2].dt);
    overmorrow.innerHTML = `${overmorrowDay}: <span class="temp">${Math.round(forecastArray[2].main.temp)}&deg;F</span>`
    forecast.appendChild(overmorrow);
}

function getTime(dateCode) {
    let date = new Date(dateCode * 1000);
    let dateHour = date.getUTCHours();
    let dateMinutes = date.getUTCMinutes();
    let time = "";
    // Subtracting 5 since that is Kansas City's UTC offset, change if city changes
    dateHour = dateHour - 5;
    if (dateMinutes < 10) {
        dateMinutes = `0${dateMinutes}`;
    }
    if (dateHour < 0) {
        dateHour = dateHour + 12;
        time = `${dateHour}:${dateMinutes} PM`;
    }
    else if (dateHour > 12) {
        dateHour = dateHour - 12;
        time = `${dateHour}:${dateMinutes} PM`;
    }
    else if (dateHour == 0) {
        dateHour = 12;
        time = `${dateHour}:${dateMinutes} AM`;
    }
    else if (dateHour == 12) {
        time = `${dateHour}:${dateMinutes} PM`;
    }
    else {
        time = `${dateHour}:${dateMinutes} AM`;
    }
    return time;
}

function getWeekday(dateCode) {
    let date = new Date(dateCode * 1000);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekday = date.getDay();
    weekday = days[weekday];
    return weekday;
}

function getForecast(data) {
    function getHour(dt) {
        let date = new Date(dt * 1000);
        let hour = date.getUTCHours();
        return hour;
    }
    let firstHour = getHour(data.list[0].dt);
    let sameTimes = data.list.filter(i => getHour(i.dt) == firstHour);
    console.log(sameTimes);
    return sameTimes;
}