import { useState } from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import styled from "styled-components";
import NextDays from "../components/NextDays";

export default function HomePage(){
    const [dataWeather, setDataWeather] = useState([])
    const [temperature, setTemperature] = useState(0)
    const [click, setClick] = useState(0)
    return(
        <Content>
        <LeftSide dataWeather={dataWeather}
         setDataWeather={setDataWeather}
        temperature={temperature} 
        setTemperature={setTemperature}
        
        />
        {click === 0 ?
        <RightSide 
        dataWeather={dataWeather} 
        setDataWeather={setDataWeather}
        setClick={setClick}/>
        :<NextDays 
        dataWeather={dataWeather} 
        setDataWeather={setDataWeather}
        setClick={setClick}></NextDays>}
        
        

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