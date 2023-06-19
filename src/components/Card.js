import React from "react";
import cloud from "../assets/cloud.png"
import humidity from "../assets/humidity.png"
import wind from "../assets/wind.png"

export const Card = (props) => {
  let daata = props.Data;
  // console.log("gunjan chauke");
  // console.log(daata);

  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="flex  justify-center gap-3">
        <h1 className="text-2xl">{daata.cityname}</h1>
        <div className="flex w-8 h-8">
          <img src={daata.CountryIcon} className="w-10px h-10px"></img>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center">
        <h2>{daata.Desc}</h2>
        <div>
          <img src={daata.WeatherIcon} alt="wheather icon"></img>
        </div>
        <h1>{daata.Temp}</h1>
      </div>

      <div className="flex flex-row justify-around items-center gap-8">
        <div className="flex flex-col  items-center bg-gray-300 rounded-md">
          <img src={wind}></img>
          <p> {daata.Windspeed}</p>
          <p>Windspeed</p>
        </div>

        <div className="flex flex-col  items-center bg-gray-300 rounded-md">
          <img src={humidity}></img>
          <p>{daata.Humidity}</p>
        </div>

        <div className="flex flex-col  items-center bg-gray-300 rounded-md">
          <img src={cloud}></img>
          <p>{daata.Cloudiness}</p>
        </div>
      </div>
    </div>
  );
};
