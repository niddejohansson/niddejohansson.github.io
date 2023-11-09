import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  const [language, setLanguage] = useState("swedish");

  return (
    <div className="App">
      <div className="AppContainer">
        <Navbar setLanguage={setLanguage} language={language} />
        <About language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
