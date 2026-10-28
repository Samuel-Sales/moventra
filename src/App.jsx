import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main id="inicio">
        <Hero />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
