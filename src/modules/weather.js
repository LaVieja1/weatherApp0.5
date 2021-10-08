const weather = (() => {
    function convertData(data) {
        const {
            name: cityName,
            main: { temp: temperature, feels_like: feelsLike, temp_min: tempMin, temp_max: tempMax, humidity },
            wind: { speed: windSpeed },
        } = data;
        return { cityName, temperature, feelsLike, tempMin, tempMax, humidity, windSpeed };
    }
    async function getData(city) {
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0c9da8e756d3317486decdc48e6175c0`;
        try {
            const response = await fetch(endpoint, {mode: 'cors'});
            if (!response.ok) throw new Error(`Ciudad ${city} no encontrada`);
            const data = convertData(await response.json());
            console.log(data);
            return data;
        } catch (error) {
            alert(error);
            return null;
        }
    }
    return { getData };
})();

export default weather;