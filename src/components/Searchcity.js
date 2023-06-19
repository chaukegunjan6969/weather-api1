import React, { useState } from 'react'
import './Searchcity.css'
import { Card } from './Card';


export const Searchcity = () => {

    const[visible , setvisible] = useState(false);

    const[Ciityname, setCiityname] = useState('');
 

    const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";


    function changecity(event)
    {
        setCiityname(event.target.value);

    }
    
  
    

  


    const [Data, setData] = useState( {

        cityname:"",

        CountryIcon:"",

        Desc:"",
        WeatherIcon:"",
        Temp:"",
        Windspeed:"",
        Humidity:"",
        Cloudiness:"",
    })

    async function fetchcityinfo(city){
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            
            rendercitywheather(data);

        }

        catch(error)
        {
            alert(error);
        }
    }

    function rendercitywheather(weatherInfo)
    {
    
        
       
        const updatedData ={
            ...Data,
            cityname : weatherInfo?.name,
            CountryIcon: `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`,
            Desc : weatherInfo?.weather?.[0]?.description,
            WeatherIcon: `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`,
            Temp:`${weatherInfo?.main?.temp} °C`,
            Windspeed:`${weatherInfo?.wind?.speed} m/s`,
            Humidity: `${weatherInfo?.main?.humidity}%`,
            Cloudiness: `${weatherInfo?.clouds?.all}%`,
        }

        console.log("great gunjan");
        console.log(updatedData)

        setData(updatedData);  ///gand maraye yee data is passinf to Card
       

      

        
        
        
        setvisible(true);
    }

  return (
    <div className='mainsearchdiv'>
        <h1>Searchwheather</h1>
        <br></br>
        
        
        <div className='searchdiv'>
            
            <input type='text' id='searchforcity' className='border-2 border-slate-950' onChange={changecity} placeholder='eg. mumbai'></input> 
            <button onClick={()=>{ fetchcityinfo(Ciityname) }}>SEARCH</button>
        
        </div>

        <br></br>
        {
            visible ? 
           ( <Card Data = {Data}></Card>) :
           (
            <div> </div>
           )
            
        }

    </div>

     
  )
}
