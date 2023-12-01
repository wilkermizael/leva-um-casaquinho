    /* eslint-disable react/prop-types */

    import { useEffect, useState} from "react"
    import styled from "styled-components"


    export default function RightSide({
        dataWeather, 
        setDataWeather, 
        setClick,
        cityName,
        setCityName,
        fahrenheit,
        setLat,
        setLon,
        lat,
        lon
    }){
        
      
        const [min, setMin] = useState()
        const [max, setMax] = useState()
        const [humidity, setHumidity] = useState()
        const [wind, setWind] = useState()
        
        function convertTemp(){
            const temp_MinCelsius = Math.round(dataWeather.main.temp_min -273,15)
            const temp_MaxCelsius = Math.round(dataWeather.main.temp_max -273,15)
            if(fahrenheit){
               
                const fahrenheit_Min = Math.round((temp_MinCelsius*1.8) +32)
                const fahrenheit_Max = Math.round((temp_MaxCelsius*1.8) +32)
                return[fahrenheit_Min, fahrenheit_Max]
            }else{
                return[temp_MinCelsius,temp_MaxCelsius]
            }
        }
       
        useEffect(() => {   
        const storedWeatherData = localStorage.getItem('weatherLocalStorage');
        if (storedWeatherData) {
            const weatherLocalStorage = JSON.parse(storedWeatherData);
            
            if (JSON.stringify(weatherLocalStorage) !== JSON.stringify(dataWeather)) {
                setDataWeather(weatherLocalStorage);
            }
        }

        if (dataWeather && dataWeather.name) {
            const arrayTemp =convertTemp()
            setCityName(dataWeather.name);
            setLat(dataWeather.coord.lat);
            setLon(dataWeather.coord.lon);
            setMin(arrayTemp[0])
            setMax(arrayTemp[1])
            setHumidity(Math.round(dataWeather.main.humidity));
            setWind(Math.trunc(dataWeather.wind.speed));
        }
}, [dataWeather,fahrenheit]);
    function change(value){
        if(value === 0){
            setClick(0)
        }else if(value === 1){
            setClick(1)
        }
    }
    return(
        <Container>
            <HeaderStyled>
                
                <h1 style={{cursor:"pointer"}} onClick={()=>change(0)}>Hoje</h1>
                <h2 style={{cursor:"pointer"}} onClick={cityName ? () => change(1) : null}>Próximos dias</h2>
                
            </HeaderStyled>
            <CityName>
                <h1>{cityName}</h1>
                <Location>
                <h2>Lat:{lat}</h2>
                <h3>Long:{lon}</h3>
                </Location>

            </CityName>
            <BoxTemp>
                <div>
                    <p>Mínima</p>
                    {min && fahrenheit? `${min}°F` :`${min}°C`}
                </div>
                <div>
                    <p>Máxima</p>
                    {max && fahrenheit? `${max}°F` :`${max}°C`}
                </div>
                <div>
                    <p>Umidade</p>
                    {humidity? `${humidity}%`: '0%'}
                </div>
                <div>
                    <p>Velocidade do vento</p>
                    {wind? `${wind}m/s`: '0m/s'}
                </div>
            </BoxTemp>
        </Container>
    )
}

const Container = styled.div`
    width:70%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    
    right: 0;
    padding: 25px;
    background-color: #D8D8D8;
    @media (min-width: 768px) {
    width: 70%;
    max-width: auto;
    margin: 0 auto;
  }

`;
const HeaderStyled = styled.div`
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
 
  h1 {
    font-size: 2vw;
    font-weight: 400;
  }

  h2 {
    font-size: 2vw;
    font-weight: 400;
    padding-left: 8vw;
    color: #C8C8C8;
  }
`;

const CityName = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  h1 {
    font-size: 5vw;
    font-weight: 400;
  }

`;
const Location = styled.div`
    width: 90%;
    height: 20%;
    display: flex;
    justify-content: flex-start;
    h2{
    padding-right:1.5vw;
    }
`;

const BoxTemp = styled.div`
    width: 90%;
    height: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 40%;
        height: 30%;
        box-sizing: border-box;
        border-radius: 20px;
        background-color: #4D4494;
        padding: 15px;
        font-size: 25px;
        color:#FFFFFF;
        
    }
`;