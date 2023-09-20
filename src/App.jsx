import About from "./components/home/About"
import Contact from "./components/home/Contact"
import Footer from "./components/home/Footer"
import Introduction from "./components/home/Introduction"
import NavBar from "./components/home/NavBar"
import Projects from "./components/home/Projects"
import Skills from "./components/home/Skills"
import Testemonials from "./components/home/Testemonials"

function App() {
    return (
      <>
        <NavBar />
        <Introduction />
        <About />
        <Skills />
        <Projects />
        <Testemonials />
        <Contact />
        <Footer />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </>
    );
}

export default App
