// import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <h1>
        <Navbar/>
        <Home/>
        <SocialLinks/>
      </h1>
    </div>
  );
}

export default App;
