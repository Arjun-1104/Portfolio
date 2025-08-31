import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-black">
      <Navbar/>
      <About/>
      <Skills/>
      <Project/>
      <Education/>
      <Contact/>
      <Sidebar/>
    </div>
  );
};

export default App;
