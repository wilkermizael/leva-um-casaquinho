import {useEffect, useState } from "react";
import styled from "styled-components"
import { findCityInOpenWeather, getWheather} from "../Services/api";


// eslint-disable-next-line react/prop-types
export default function LeftSide({setDataWheather}){

    const [cityName, setNameCity] = useState('');
    const [temperature, setTemperature] = useState(0)
    const [icon, setIcon] = useState('')
    const [description, setDescription] = useState('')
    const [isClicked, setIsClicked] = useState('flex-start')
    const [currentDate, setCurrentDate] = useState(new Date());


  async function findCity(e) {
    e.preventDefault();

    try {
      const openWeatherData = await findCityInOpenWeather(cityName);
      const LatAndLong = [openWeatherData[0].lat, openWeatherData[0].lon];

      const wheatherData = await getWheather(LatAndLong);
      setDataWheather(wheatherData);
      showWheather(wheatherData);
    } catch (error) {
      console.error("Erro na solicitação à API:", error);
    }
  }


    function showWheather(data) {
    if (data && data.main && data.main.temp) {
        setTemperature(Math.trunc(data.main.temp - 273.15));
        setIcon(data.weather[0].icon);
        setDescription(data.weather[0].description)
    } else {
        setTemperature(0)
        setIcon('02d');
    }
}
    function handleClick(){
        if(isClicked === 'flex-start'){
            setIsClicked('flex-end')
            const fahrenheit = Math.round((temperature*1.8) +32)
            setTemperature(fahrenheit)
        }
        else{
            setIsClicked('flex-start')
            const celcius = Math.round((temperature -32)/1.8)
            setTemperature(celcius)
        }
    
    }
 useEffect(() => {
    const intervalId = setInterval(() => {
    setCurrentDate(new Date());
  }, 1000 * 60); // Atualiza a cada minuto

  return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado

}, []);
function getDayOfWeek(day) {
  const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  return daysOfWeek[day];
}
    return(
        <>
        <Container>
            <Header>
                <img src="../../public/img/casaquinho.png" alt="meu casaquinho" />
            
                <h1>Levo um casaquinho?</h1>
               
            </Header>
            <Search>
                <form onSubmit={findCity}>
                    <InputGroup>
                        <IconWrapper>
                            <ion-icon name="search-outline"></ion-icon>
                        </IconWrapper>
                        <input
                            placeholder="Procure por uma cidade"
                            type="text"
                            value={cityName}
                            onChange={(e) => setNameCity(e.target.value)}
                        />
                   </InputGroup>
                </form>
            </Search>
            <BoxTemperature>
                <img src={`https://openweathermap.org/img/wn/${icon?icon:'02d'}@4x.png`} alt="temperatura" />
                <h1>{temperature} °C</h1>
                <h2>{description}</h2>
            </BoxTemperature>
            <Info>
                <InfoDate>
                    <h2>{`${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`}</h2>
                    <h3>{`${getDayOfWeek(currentDate.getDay())}, ${currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}</h3>
                </InfoDate>
                <InfoButton isClicked={isClicked} onClick={handleClick}>
                    <button>
                       <ion-icon name="ellipse-outline"></ion-icon>
                    </button>
                    <h1>°F</h1>
                </InfoButton>
            </Info>
            <Footer>
                <h1>Todos os direitos reservados 2023</h1>
            </Footer>
        </Container>
        </>
    )
}

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  //position: fixed;
  top: 0;
  left: 0;
  padding-left: 10px;
  z-index: 100;
  width: 90%;
  height: 100vh;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 20%;

  h1 {
    font-size: 2vw; /* Tamanho da fonte em relação à largura da viewport */
    font-weight: 400;
    text-align: left;
    padding: 10px;
  }

  img {
    width: 8vw; /* Tamanho da imagem em relação à largura da viewport */
    height:     vw;
    border-radius: 50%;
    margin-left: 15px;
  }
`;

const Search = styled.div`
  width: 90%;
  height: 5%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 95%;
    border-radius: 5px;

    input {
      width: 80%;
      height: 35px;
      background-color: lightgray;
      border-radius: 20px;
      border: none;
      padding-left: 35px;

      :focus {
        border: 2px solid #ffb6b6;
        margin: 0px;
      }
    }
  }
`;

const BoxTemperature = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 75%;
  height: 20%;

  img {
    width: 40%;
    height: 80%;
  }

  h1 {
    font-size: 5vw;
    font-weight: 400;
    text-align: left;
    padding: 10px;
  }

  h2 {
    font-size: 2.5vw;
    font-weight: 400;
    text-align: left;
    padding: 10px;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 75%;
  height: 20%;
  margin-top: 15px;
  border-top: 2px solid lightgray;
`;

const InfoDate = styled.div`
  width: 60%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  h2,
  h3 {
    font-size: 1.5vw;
    font-weight: 400;
    text-align: left;
    padding: 10px;
  }
`;

const InfoButton = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  justify-content:f;
  align-items: center;

  button {
    width: 4vw;
    height: 4vh;
    display: flex;
    border: none;
    margin-right: 2vw;
    justify-content: ${props => props.isClicked};
    align-items: center;
    position: relative;
    background-color: lightgray;
    border-radius: 20px;
  }

  ion-icon {
    background-color: white;
    width: 1.8vw;
    height: 3.5vh;
    color: white;
    border-radius: 100%;
    transition: transform 0.3s ease-in-out;
  }
  h1{
    width: 2vw;
    height: 2vh;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  color: #555;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 20%;
  font-family: 'Poppins';

  h1 {
    font-size: 1.5vw;
    font-weight: 400;
    text-align: left;
  }
`;