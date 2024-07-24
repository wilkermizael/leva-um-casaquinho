    /* eslint-disable react/prop-types */
    import { Bubble } from "@typebot.io/react";
    import { useEffect, useState} from "react"
    import styled from "styled-components"
    import { Standard } from "@typebot.io/react";

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
        const [celsius, setCelsius] =useState()
        const [humidity, setHumidity] = useState()
        const [wind, setWind] = useState()
        const [coat, setCoat] = useState('')
        const [typeBotHeight, setTypeBotHeight] = useState("2%");
        
        function convertTemp(){
            const temp_MinCelsius = Math.round(dataWeather.main.temp_min -273,15)
            setCelsius(temp_MinCelsius)
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
        if(celsius <=17  && min < 62){
            setCoat('Sim, você precisa levar um casaquinho!')
           
        }
        if( celsius >17  && min >62){

            setCoat('Não, você não precisa levar um casaquinho!')
        }
}, [dataWeather,fahrenheit, coat,celsius,fahrenheit]);
    function change(value){
        if(value === 0){
            setClick(0)
        }else if(value === 1){
            setClick(1)
        }
    }
     function handleTypeBotClick() {
        setTypeBotHeight((prevHeight) => (prevHeight === "2%" ? "60%" : "2%"));
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
            {/* <TypeBot height={typeBotHeight} >
                 <Bubble typebot="input"
                  theme={{ button: { backgroundColor: "#0042DA" } }}/>
            
            </TypeBot>*/}
             <Bubble 
                  typebot="input"
                  apiHost= "https://typechat.winikii.com"
                  theme={{ button: { backgroundColor: "#0042DA" } }}/>
            <DescriptionStyled>{coat}</DescriptionStyled>
            <Footer>Política Privacidade
A sua privacidade é importante para nós. É política do winikii respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site winikii, e outros sites que possuímos e operamos.

Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.

Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.

Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.

O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.

Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.

O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.


Compromisso do Usuário
O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o winikii oferece no site e com caráter enunciativo, mas não limitativo:

A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, kiwibet ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do winikii, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
Mais informações
Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.

Esta política é efetiva a partir de 8 July 2024 22:11
                </Footer>
                <Footer>
                    1. Termos
Ao acessar ao site winikii, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.

2. Uso de Licença
É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site winikii , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: 

modificar ou copiar os materiais; 
usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); 
tentar descompilar ou fazer engenharia reversa de qualquer software contido no site winikii; 
remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou 
transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por winikii a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.

3. Isenção de responsabilidade
Os materiais no site da winikii são fornecidos 'como estão'. winikii não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
Além disso, o winikii não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
4. Limitações
Em nenhum caso o winikii ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em winikii, mesmo que winikii ou um representante autorizado da winikii tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.

5. Precisão dos materiais
Os materiais exibidos no site da winikii podem incluir erros técnicos, tipográficos ou fotográficos. winikii não garante que qualquer material em seu site seja preciso, completo ou atual. winikii pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, winikii não se compromete a atualizar os materiais.

6. Links
O winikii não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por winikii do site. O uso de qualquer site vinculado é por conta e risco do usuário.



Modificações
O winikii pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.

Lei aplicável
Estes termos e condições são regidos e interpretados de acordo com as leis do winikii e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                </Footer>
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
    position: absolute;
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

const DescriptionStyled = styled.label`
width: 90%;
font-size: 1.5vw;
font-weight: 400;
font-style: italic;
color: #AFADAD;
`;

const Footer = styled.label`
display: flex;
justify-content: flex-start;
align-items: flex-end;
padding-bottom:20px ;
width: 90%;
height: 18%;
font-size: 0.5vw;
font-weight: 400;
font-style: italic;
color: #AFADAD;
a{
    padding-left: 10px;
}
`;
const TypeBot = styled.div`
  width: 20%;
  height: ${(props) => props.height};
  padding: 10px;
  position: fixed;
  border-radius: 5%;
  right: 5%;
  bottom: 1%;
  cursor: pointer;
  transition: height 0.5s ease;
  div{
    width: 100%;
    height: 50px;
    background-color: #fff;
  }
`;
