import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import { Spinner } from './Spinner';
import './Grantlocation.css'
import locate from "../assets/location.png"



export const Grantlocation = () => {

 


  const [grantacess, setgrantaccess] = useState(false);
  const [loader, setloader] = useState(false);

  
  const [yourcitydata, setyourcitydata] = useState(
    {
      cityname:"",

      CountryIcon:"",

      Desc:"",
      WeatherIcon:"",
      Temp:"",
      Windspeed:"",
      Humidity:"",
      Cloudiness:"",
    }
  )

  const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

  // useEffect(()=>{
  //   getlocation()
  // }, [grantacess])

  


  function getlocation(){
    if(navigator.geolocation)
    {
      setgrantaccess(true);
      setloader(true);
      
      // setgrantaccess(false);
      navigator.geolocation.getCurrentPosition(showPosition);

    }
    else
    {
      alert("geolocation is not access");
    }
  }

  function showPosition(position)
  {
    const userCoordinate = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinate));
    Fetchuserwheather(userCoordinate);
  }

  

  async function Fetchuserwheather(coordinates)
  {
    ///spinner
    const {lat, lon} = coordinates;

    //api call

    try{
      const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      const Result = await reponse.json();
      renderweatherinfo(Result);
      
    }
    catch(error)
    {
      alert(error);
    }


  }

  function renderweatherinfo(weatherInfo)
  {

    const updatedData ={
      ...yourcitydata,
      cityname : weatherInfo?.name,
      CountryIcon: `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`,
      Desc : weatherInfo?.weather?.[0]?.description,
      WeatherIcon: `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`,
      Temp:`${weatherInfo?.main?.temp} °C`,
      Windspeed:`${weatherInfo?.wind?.speed} m/s`,
      Humidity: `${weatherInfo?.main?.humidity}%`,
      Cloudiness: `${weatherInfo?.clouds?.all}%`,
  }
  
  setyourcitydata(updatedData);
  
  
  
  setloader(false);
    
  }

  
   


  return (

    <div className='grantlocationmain'>

    {
      grantacess ?

      (

        loader ? 
        (<Spinner></Spinner>
          )
        :
        ( <Card Data = {yourcitydata}></Card>)
        
      )
      :

      (
      <div className='flex flex-col justify-items-center  items-center'>

      <div className='locationimg'>
      <img src={locate}></img>
      </div>
  
     
        <h1>Grant Location Access</h1>
        <h3>Allow Access to get weather information</h3>
        
  
      
        <button onClick={getlocation}>Grant Access</button>
  
  
      </div>) 

      
     
    }

    </div>

    
    
  )
}
