import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {

  return (
    
    <BrowserRouter>
   
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
     
    </BrowserRouter>
  
  );
}

export default App;

/*const PagesContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  max-height: 100vh;
  
`*/
//background-color: #8c11be;width: calc(100vw - 50px);