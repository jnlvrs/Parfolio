import './App.css';

import Navbar from "./components/Navbar/Navbar";
import ParticlesBg from "./components/ParticlesBg";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Connect from "./components/Connect/Connect";


function App() {
  return (
    <div className="App-container">
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Projects />
        <Connect />
        <ParticlesBg />
      </div>
    </div>
  );
}

export default App;
