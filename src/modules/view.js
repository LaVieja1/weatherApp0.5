
const view = (() => {

    function setSearchResult(weatherData) {
        if (!weatherData) return;

        const setSearchResult = document.getElementById("searchResult");
        setSearchResult.classList.add("active");

        const cityName = document.getElementById("cityName");
        const temperature = document.getElementById("temperature");
        const tempMin = document.getElementById("tempMin");
        const tempMax = document.getElementById("tempMax");
        const feelsLike = document.getElementById("feelsLike");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");

        cityName.textContent = `${weatherData.cityName}`;
        temperature.textContent = `Temperatura Actual: ${weatherData.temperature} °C`;
        tempMin.textContent = `Temperatura mínima hoy: ${weatherData.tempMin} °C`;
        tempMax.textContent = `Temperatura máxima hoy: ${weatherData.tempMax} °C`;
        feelsLike.textContent = `Se siente como: ${weatherData.feelsLike} °C`;
        humidity.textContent = `Nivel de humedad: ${weatherData.humidity} %`;
        wind.textContent = `Viento: ${weatherData.windSpeed} km/h`;
    }

    return { setSearchResult };
})();

export default view;