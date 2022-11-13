import "./App.css";
import About from './pages/About/About';
import Home from "./pages/Home/Home";
// import Sliders from "./pages/Sliders";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import CSR from "./pages/CSR/CSR";
import Sustainability from "./pages/Sustainability/Sustainability";
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
      <Route exact path="csr" element={<CSR />}/>
      <Route exact path="sustainability" element={<Sustainability />}/>
      <Route exact path="contact" element={<Contact />}/>
      {/* <Route exact path="/check" element={<Sliders />}/> */}
       
      </Route>
        
     
    </Routes>
  </BrowserRouter>,
    </>
   
    
    
  );
}

export default App;
