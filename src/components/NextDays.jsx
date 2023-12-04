/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function NextDays({
        setClick,
        cityName,
        lat,
        lon
    } ){
    
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
                <h2 style={{cursor:"pointer"}} onClick={()=>change(1)}>Próximos dias</h2>
            </HeaderStyled>
            <CityName>
                <h1>{cityName}</h1>
                <Location>
                <h2>Lat:{lat}</h2>
                <h3>Long:{lon}</h3>
                </Location>
            </CityName>
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