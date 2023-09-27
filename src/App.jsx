import About from "./components/home/About"
import NavBar from "./components/home/NavBar"
import Skills from "./components/skills/Skills"
import Services from "./components/services/Services"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Footer from "./components/home/Footer"

function App() {
    return (
      <>
        <NavBar />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
  
      </>
    );
}

export default App;