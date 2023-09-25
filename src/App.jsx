import About from "./components/home/About"
import Footer from "./components/home/Footer"
import NavBar from "./components/home/NavBar"
import Projects from "./components/projects/Projects"
import Resume from "./components/resume/Resume"
import Services from "./components/services/Services"

function App() {
    return (
      <>
        <NavBar />
        <About />
        <Services />
        <Resume />
        <Projects />
        <Footer />
  
      </>
    );
}

export default App;