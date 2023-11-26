import { useState } from "react";
import styled from "styled-components"
import { findCityInOpenWeather, getWheather} from "../Services/api";

export default function LeftSide(){
    const [cityName, setNameCity] = useState('');
    //const [geoLocation, setGeoLocation] = useState([])
    
    function findCity(e){
        const LatAndLong = []
        e.preventDefault()
        findCityInOpenWeather(cityName)
        .then((data) => {
        LatAndLong.push(data[0].lat, data[0].lon)
        
        getWheather(LatAndLong)
        .then((data)=>{
            console.log(data)
        })
    })
    .catch((error) => {
    console.error("Erro ao obter dados da API:", error);
  });   
    }
    return(
        <>
        <Container>
            <Header>
                <div>
                    <img src="../../public/img/casaquinho.png" alt="meu casaquinho" />
                </div>
                <div>
                    <h1>Levo um casaquinho?</h1>
                </div>
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

            </BoxTemperature>
            <Info>

            </Info>
        </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
position: fixed;
box-sizing:border-box;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
top:0;
left:0;
padding-left: 10px;
z-index: 100;
width: 580px;
height: 100vh;
//background-color: red;

`;
const Header = styled.div`
    display: flex;
    justify-content:space-around;
    align-items: center;
    width: 90%;
    height: 20%;
    //background-color: yellow;
    div:nth-child(2){

        box-sizing: content-box;
        width:350px ;
        height:120px;
        //background-color: orange;
    }
    h1{

        font-size: 50px;
        font-weight: 400;
        text-align: left;
        padding: 10px;
    }
    img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-left: 15px;
    }
`;

const Search = styled.div`
    width: 90%;
    height:5%;
    //background-color: gray;
     form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: 95%;
        border-radius: 5px;
        input{
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
    width: 90%;
    height: 20%;
    //background-color: blue;
`;

const Info = styled.div`
    width: 90%;
    height: 20%;
    //background-color: purple;
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
  color: #555; // ajuste a cor conforme necessário
`;
