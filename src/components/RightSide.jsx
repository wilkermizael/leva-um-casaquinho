/* eslint-disable react/prop-types */

import { useEffect, useState} from "react"
import styled from "styled-components"


export default function RightSide({dataWeather}){
    const [cityName, setCityName] = useState('Belo Horizonte');
    const [lat, setLat] = useState()
    const [lon, setLon] = useState()
    
    useEffect(() => {
    // Atualiza o cityName assim que dataWeather é fornecido
    if (dataWeather && dataWeather.name) {
      setCityName(dataWeather.name);
      setLat(dataWeather.coord.lat)
      setLon(dataWeather.coord.lon)
    }
  }, [dataWeather]);
    return(
        <Container>
            <Header>
                <h1>Hoje</h1>
                <h2>Próximos dias</h2>
            </Header>
            <CityName>
                <h1>{cityName}</h1>
                <Location>
                <h2>{lat}</h2>
                <h3>{lon}</h3>
                </Location>

            </CityName>
            <BoxTemp>
                <div>

                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
            </BoxTemp>
        </Container>
    )
}

const Container = styled.div`
    width:70%;
    height: 100vh;
    right: 0;
    padding: 25px;
    background-color: #D8D8D8;
    @media (min-width: 768px) {
    width: 70%;
    max-width: 800px;
    margin: 0 auto;
  }

`;
const Header = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  margin: auto;
  padding: 25px;
 
  h1 {
    font-size: 3vw;
    font-weight: 400;
    padding: 15px;
  }

  h2 {
    font-size: 3vw;
    font-weight: 400;
    padding: 15px;
    color: #C8C8C8;
  }
`;

const CityName = styled.div`
  width: 50vw;
  padding-left:40px;
  display: flex;
  margin: auto;
  justify-content: flex-start;
  flex-direction: column;
  

  h1 {
    font-size: 8vw;
    font-weight: 400;
  }

`;
const Location = styled.div`
    display: flex;
    justify-content: flex-start;
    h2{
    padding-right:1.5vw;
    }
`;

const BoxTemp = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    div{
        width: 40%;
        height: 30%;
        border-radius: 20px;
        margin-left: 2vw;
    }
`;
