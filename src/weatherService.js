const API_KEY = "613785dbe8fa42a4b2959f4fe0b3c836";



const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  console.log(data);
};

export { getFormattedWeatherData };
