import { useState } from "react";
import "./Header.css";

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    function fecharMenu() {
        setMenuAberto(false);
    }

    return (
        <header className="header">
            <div className="header__container">
                <a href="#inicio" className="header__logo" onClick={fecharMenu}>
                    <span className="header__logo-icon">M</span>
                    <span className="header__logo-text">
                        MOVENTRA
                        <small>TRANSPORTE & LOGÍSTICA</small>
                    </span>
                </a>

                <button
                    className="header__menu-button"
                    type="button"
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                    aria-controls="menu-principal"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav id="menu-principal" className={`header__nav ${menuAberto ? "header__nav--open" : ""
                    }`}
                    aria-label="Navegação principal"
                >
                    <a href="#inicio" onClick={fecharMenu}>Início</a>
                    <a href="#servicos" onClick={fecharMenu}>
                        Serviços
                    </a>

                    <a href="#contato" onClick={fecharMenu}>
                        Contato
                    </a>
                </nav>
            </div>
        </header>
    );
};