
import { useTranslation } from "react-i18next";
import "./Services.css";

const serviceIds = ["road", "delivery", "support"];

function Services() {
    const { t } = useTranslation();

    return (
        <section
            className="services"
            id="servicos"
            aria-labelledby="services-title"
        >
            <div className="services__container">

                <div className="services__heading">
                    <span className="services__eyebrow">
                        {t("services.eyebrow")}
                    </span>

                    <h2 id="services-title">
                        {t("services.title")}
                    </h2>

                    <p>{t("services.subtitle")}</p>
                </div>

                <div className="services__grid">
                    {serviceIds.map((id, index) => (
                        <article
                            className="services__card"
                            key={id}
                        >
                            <div className="services__card-top">
                                <span className="services__number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span
                                    className="services__arrow"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </div>

                            <h3>
                                {t(`services.items.${id}.title`)}
                            </h3>

                            <p>
                                {t(`services.items.${id}.description`)}
                            </p>

                            <a
                                href="#contato"
                                className="services__link"
                            >
                                {t("services.learnMore")}
                                <span aria-hidden="true">→</span>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;