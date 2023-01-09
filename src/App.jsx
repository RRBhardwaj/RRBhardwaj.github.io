// import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <h1>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <SocialLinks/>
      </h1>
    </div>
  );
}

export default App;
