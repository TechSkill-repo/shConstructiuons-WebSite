import "./App.css";
import About from './pages/About/About';
import Home from "./pages/Home/Home";
// import Sliders from "./pages/Sliders";
import Services from "./pages/Services/Services";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/">

      
      <Route exact path="/" element={<Home />}/>
      <Route exact path="about" element={<About />}/>
        
      
      <Route exact path="services" element={<Services />}/>
      {/* <Route exact path="/check" element={<Sliders />}/> */}
       
      </Route>
        
     
    </Routes>
  </BrowserRouter>,
    </>
   
    
    
  );
}

export default App;
