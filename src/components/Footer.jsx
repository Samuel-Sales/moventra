
import "./Footer.css";

const navigationLinks = [
    {
        id: 1,
        label: "Início",
        href: "#inicio",
    },
    {
        id: 2,
        label: "Serviços",
        href: "#servicos",
    },
    {
        id: 3,
        label: "Contato",
        href: "#contato",
    },
];

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">

                    {/* Identidade da empresa */}
                    <div className="footer__brand">
                        <a
                            href="#inicio"
                            className="footer__logo"
                            aria-label="Moventra - voltar ao início"
                        >
                            <span
                                className="footer__logo-icon"
                                aria-hidden="true"
                            >
                                M
                            </span>

                            <span className="footer__logo-text">
                                MOVENTRA
                                <small>TRANSPORTE & LOGÍSTICA</small>
                            </span>
                        </a>

                        <p>
                            Conectando negócios a novos destinos
                            por meio de soluções em transporte
                            e logística.
                        </p>
                    </div>

                    {/* Navegação */}
                    <nav
                        className="footer__navigation"
                        aria-label="Navegação do rodapé"
                    >
                        <h2>Navegação</h2>

                        <ul>
                            {navigationLinks.map((link) => (
                                <li key={link.id}>
                                    <a href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Chamada para contato */}
                    <div className="footer__contact">
                        <h2>Vamos conversar?</h2>

                        <p>
                            Entre em contato para saber mais
                            sobre nossas soluções.
                        </p>

                        <a
                            href="#contato"
                            className="footer__button"
                        >
                            Solicitar contato
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>

                </div>

                {/* Parte inferior */}
                <div className="footer__bottom">
                    <p>
                        © {currentYear} Moventra.
                        Projeto demonstrativo.
                    </p>

                    <a href="#inicio">
                        Voltar ao início ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
