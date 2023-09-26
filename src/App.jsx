import About from "./components/home/About"
import Footer from "./components/home/Footer"
import NavBar from "./components/home/NavBar"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import Services from "./components/services/Services"

function App() {
    return (
      <>
        <NavBar />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Footer />
  
      </>
    );
}

export default App;