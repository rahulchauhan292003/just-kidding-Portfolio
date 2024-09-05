import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Errorpage from "./components/Errorpage";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from './components/About'
import Contact from './components/Contact'
import Moreprojects from './components/Moreprojects'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/moreprojects" element={<Moreprojects/>} />

          <Route path="*" element={<Errorpage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
