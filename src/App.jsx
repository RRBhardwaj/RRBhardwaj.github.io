// import './App.css';
import About from "./components/About";
import Contacts from "./components/Contacts";
import Github from "./components/Github";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        {/* <Projects/> */}
        <Github/>
        <Contacts/>
        <SocialLinks/>
    </div>
  );
}

export default App;
