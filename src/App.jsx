import { BrowserRouter,Routes,Route } from "react-router-dom";
import { styled } from "styled-components";
import HomePage from "./Pages/HomePage";


function App() {

  return (
    <PagesContainer>
    <BrowserRouter>
   
     
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
     
    </BrowserRouter>
  </PagesContainer>
  );
}

export default App;

const PagesContainer = styled.main`
  background-color: #333333;
  width: 100vw;
  max-height: 100vh;
  
`
//background-color: #8c11be;width: calc(100vw - 50px);