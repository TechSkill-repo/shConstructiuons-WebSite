import "./App.css";
import About from './pages/About/About';
import Home from "./pages/Home/Home";
import Sliders from "./pages/Sliders";
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
      <Route exact path="/" element={<Home />}/>
      
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/check" element={<Sliders />}/>
       
        
     
    </Routes>
  </BrowserRouter>,
    </>
   
    
    
  );
}

export default App;
