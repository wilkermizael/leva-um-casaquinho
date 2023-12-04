import { useState } from "react";
import LeftSide from "../components/LeftSide";
import Today from "../components/Today";
import styled from "styled-components";
import NextDays from "../components/NextDays";

export default function HomePage(){
    const [dataWeather, setDataWeather] = useState([])
    const [temperature, setTemperature] = useState(0)
    const [cityName, setCityName] = useState();
    const [lat, setLat] = useState()
    const [lon, setLon] = useState()
    const [fahrenheit, setFahrenheit] = useState(false)
    const [click, setClick] = useState(0)
    return(
        <Content>
        <LeftSide dataWeather={dataWeather}
         setDataWeather={setDataWeather}
        temperature={temperature} 
        setTemperature={setTemperature}
        fahrenheit={fahrenheit}
        setFahrenheit ={setFahrenheit}
        
        />
        {click === 0 ?
        <Today 
        dataWeather={dataWeather} 
        setDataWeather={setDataWeather}
        setClick={setClick}
        cityName={cityName}
        setCityName={setCityName}
        fahrenheit={fahrenheit}
        lat={lat}
        setLat={setLat}
        lon={lon}
        setLon={setLon}
        />
        :<NextDays 
        dataWeather={dataWeather} 
        setDataWeather={setDataWeather}
        setClick={setClick}
        cityName={cityName}
        lat={lat}
        lon={lon}/>
        }
        
        
        </Content>
    )
}
const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

`;