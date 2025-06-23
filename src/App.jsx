import "./App.css";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
function App() {
  return (
    <>
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
    </>
  );
}

export default App;
