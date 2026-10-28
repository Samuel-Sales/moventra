import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />

      <main id="inicio">
        <Hero />

        <Services />

        <section className="section">
          <h1>Sua carga no caminho certo.</h1>
          <p>
            Soluções inteligentes em transporte e logística.
          </p>
        </section>

        <section id="servicos" className="section">
          <h2>Nossas soluções</h2>
          <p>Em breve, nossos serviços.</p>
        </section>

        <section id="contato" className="section">
          <h2>Entre em contato</h2>
          <p>Em breve, nossas informações de contato.</p>
        </section>
      </main>
    </>
  )
}

export default App
