/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import styled from 'styled-components';


function handleClick(setIsClicked, isClicked,setTemperature,setFahrenheit,temperature) {
  setIsClicked((prevState) => !prevState);
  if(isClicked === false){
    const fahrenheit = Math.round(temperature * 1.8 + 32);
      setTemperature(fahrenheit);
      setFahrenheit(true);
  }else{
      const celcius = Math.round((temperature - 32) / 1.8);
      setTemperature(celcius);
      setFahrenheit(false);
  }
}



const InfoButton = ({setIsClicked, isClicked,setTemperature,setFahrenheit,temperature} ) => {
  useEffect(()=>{


    
  },[setFahrenheit,isClicked, ])
  return (
    <StyledInfoButton onClick={()=>handleClick(setIsClicked, isClicked,setTemperature,setFahrenheit,temperature)}>
      <input type="checkbox" />
      <span></span>
    </StyledInfoButton>
  );
};

const StyledInfoButton = styled.label`
  background-color: #E9E9EA;
  width: 4rem;
  height: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  
  input{
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 1rem;
    position: relative;
    

  }
  span{
    
    width: 2rem;
    height: 2rem;
    border-radius: 10rem;
    box-shadow: 1px 1px 3px gray;
    background-color: #FFF;
    left: 0;
    position: absolute;
    transition: left 0.3s ease;
  }
    input:checked + span {
    left: auto;
    right: 0;
  }
`;

export default InfoButton;