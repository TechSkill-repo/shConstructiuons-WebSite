import "./App.css";
import About from './pages/About/About';
import Home from "./pages/Home/Home";
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
       
        
     
    </Routes>
  </BrowserRouter>,
    </>
   
    
    
  );
}

export default App;
