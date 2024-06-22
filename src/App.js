import { BrowserRouter as Router , Route,Routes  } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contect from "./components/Contect";
import Services from "./components/Services";

import "./styles/App.css";
import "./styles/Header.css"
import "./styles/home.css"
import "./styles/Footer.css"
import "./styles/Contect.css"




function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contect" element={<Contect/>}/>
        <Route path="/Services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
