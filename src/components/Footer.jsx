
import { useTranslation } from "react-i18next";
import "./Footer.css";

const navigationLinks = [
    {
        id: "home",
        href: "#inicio",
        translationKey: "header.home",
    },
    {
        id: "services",
        href: "#servicos",
        translationKey: "header.services",
    },
    {
        id: "contact",
        href: "#contato",
        translationKey: "header.contact",
    },
];

function Footer() {
    const { t } = useTranslation();

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">

                    <div className="footer__brand">
                        <a
                            href="#inicio"
                            className="footer__logo"
                            aria-label={t("header.brandLabel")}
                        >
                            <span
                                className="footer__logo-icon"
                                aria-hidden="true"
                            >
                                M
                            </span>

                            <span className="footer__logo-text">
                                MOVENTRA
                                <small>
                                    {t("header.brandSubtitle")}
                                </small>
                            </span>
                        </a>

                        <p>
                            {t("footer.brandDescription")}
                        </p>
                    </div>

                    <nav
                        className="footer__navigation"
                        aria-label={t("footer.navigationLabel")}
                    >
                        <h2>
                            {t("footer.navigationTitle")}
                        </h2>

                        <ul>
                            {navigationLinks.map((link) => (
                                <li key={link.id}>
                                    <a href={link.href}>
                                        {t(link.translationKey)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="footer__contact">
                        <h2>
                            {t("footer.contactTitle")}
                        </h2>

                        <p>
                            {t("footer.contactDescription")}
                        </p>

                        <a
                            href="#contato"
                            className="footer__button"
                        >
                            {t("footer.contactButton")}
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>
                        {t("footer.copyright", {
                            year: currentYear,
                        })}
                    </p>

                    <a href="#inicio">
                        {t("footer.backToTop")}
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;