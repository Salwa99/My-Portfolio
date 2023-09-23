import About from "./components/home/About"
import Contact from "./components/home/Contact"
import Footer from "./components/home/Footer"
import NavBar from "./components/home/NavBar"
import Projects from "./components/home/Projects"
import Services from "./components/Services/Services"
import Testemonials from "./components/home/Testemonials"

function App() {
    return (
      <>
        <NavBar />
        <About />
        <Services />
        <Projects />
        <Testemonials />
        <Contact />
        <Footer />
  
      </>
    );
}

export default App
