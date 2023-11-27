import { useState } from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import styled from "styled-components";

export default function HomePage(){
    const [dataWeather, setDataWheather] = useState([])
    return(
        <Content>
        <LeftSide dataWeather={dataWeather} setDataWheather={setDataWheather}/>
        <RightSide dataWeather={dataWeather} />
        </Content>
    )
}
const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

`;