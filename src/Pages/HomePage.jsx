import { useState } from "react";
import LeftSide from "../components/LeftSide";

export default function HomePage(){
    const [dataWeather, setDataWheather] = useState({})
    return(
        <>
        <LeftSide dataWeather={dataWeather} setDataWheather={setDataWheather}/>
        </>
    )
}
