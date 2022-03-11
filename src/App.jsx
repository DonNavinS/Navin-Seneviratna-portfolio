import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import "font-awesome/css/font-awesome.min.css";
import { hamburger, xButton } from "./utils/icons";

function App() {
  const [showNav, setShowNav] = useState(false);
  let width = showNav && "80%";
  return (
    <div className={`font-mono bg-gradient-to-b from-slate-200 to-slate-400 `}>
      <button
        className="fixed right-10 top-8 z-10 p-3 rounded hover:bg-red-500 transition duration-100"
        onClick={() => setShowNav(!showNav)}
      >
        {showNav ? xButton : hamburger}
      </button>
      <Header showNav={showNav} />
      <div className="body flex flex-col" style={{ width: width }}>
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
