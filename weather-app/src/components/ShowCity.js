import Switchbutton from "./Switchbutton";

import { useCity } from "../context/City";
import { useEffect } from "react";
import axios from "axios";

function ShowCity() {
  const { selectedCity, Api, setApi } = useCity();
  const url = "https://api.openweathermap.org/data/2.5/";
  const key = "56e2ce44e0657a477022304efda632a6";

  useEffect(() => {
    axios(
      `${url}weather?q=${selectedCity}&lon=${selectedCity}&appid=${key}&units=metric&lang=tr`
    ).then((res) => setApi([res.data]));
  }, [selectedCity, setApi]);
  console.log(Api);
  return (
    <div className="Form">
      <Switchbutton />

      {Api.map((weather, index) => (
        <div className="cityShow">
          <h1 className="cityName" key={index}>{weather.name}</h1>
          <div className="cityTemp">
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="weather-icon"
          />
          <p>{Math.round(weather.main.temp)}°C</p>
          </div>
          <p className="description">{weather.weather[0].description.toUpperCase()}</p>
          <div className="Temp">
          <p>{weather.main.temp_max}/</p>
          <p>{weather.main.temp_min}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowCity;
