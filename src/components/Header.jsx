
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const { t, i18n } = useTranslation();

    const isEnglish = i18n.resolvedLanguage === "en";

    function fecharMenu() {
        setMenuAberto(false);
    }

    function alternarIdioma() {
        i18n.changeLanguage(isEnglish ? "pt-BR" : "en");
    }

    return (
        <header className="header">
            <div className="header__container">
                <a
                    href="#inicio"
                    className="header__logo"
                    aria-label={t("header.brandLabel")}
                    onClick={fecharMenu}
                >
                    <span
                        className="header__logo-icon"
                        aria-hidden="true"
                    >
                        M
                    </span>

                    <span className="header__logo-text">
                        MOVENTRA
                        <small>{t("header.brandSubtitle")}</small>
                    </span>
                </a>

                <nav
                    id="menu-principal"
                    className={`header__nav ${menuAberto ? "header__nav--open" : ""
                        }`}
                    aria-label={t("header.navigationLabel")}
                >
                    <a href="#inicio" onClick={fecharMenu}>
                        {t("header.home")}
                    </a>

                    <a href="#servicos" onClick={fecharMenu}>
                        {t("header.services")}
                    </a>

                    <a href="#contato" onClick={fecharMenu}>
                        {t("header.contact")}
                    </a>
                </nav>

                <div className="header__actions">
                    <button
                        className="header__language"
                        type="button"
                        onClick={alternarIdioma}
                        aria-label={t("header.switchLanguage")}
                        title={t("header.switchLanguage")}
                    >
                        <span aria-hidden="true">🌐</span>

                        <span>{isEnglish ? "EN" : "PT-BR"}</span>

                        <span aria-hidden="true">⇄</span>
                    </button>

                    <button
                        className="header__menu-button"
                        type="button"
                        aria-label={t(
                            menuAberto
                                ? "header.closeMenu"
                                : "header.openMenu"
                        )}
                        aria-expanded={menuAberto}
                        aria-controls="menu-principal"
                        onClick={() => setMenuAberto(!menuAberto)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
