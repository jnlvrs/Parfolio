import './App.css';

import Navbar from "./components/Navbar";
import ParticlesBg from "./components/ParticlesBg";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Connect from "./components/Connect";


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
