
import "./Services.css";

const services = [
    {
        id: 1,
        number: "01",
        title: "Transporte rodoviário",
        description:
            "Soluções para movimentação de mercadorias com planejamento e eficiência.",
    },
    {
        id: 2,
        number: "02",
        title: "Distribuição e entregas",
        description:
            "Organização das operações de distribuição para apoiar o seu negócio.",
    },
    {
        id: 3,
        number: "03",
        title: "Apoio logístico",
        description:
            "Planejamento de soluções logísticas adaptadas às necessidades de cada operação.",
    },
];

function Services() {
    return (
        <section
            className="services"
            id="servicos"
            aria-labelledby="services-title"
        >
            <div className="services__container">

                <div className="services__heading">
                    <span className="services__eyebrow">
                        O que fazemos
                    </span>

                    <h2 id="services-title">
                        Soluções que movem o seu negócio.
                    </h2>

                    <p>
                        Conheça nossas soluções em transporte e
                        logística.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((service) => (
                        <article
                            className="services__card"
                            key={service.id}
                        >
                            <div className="services__card-top">
                                <span className="services__number">
                                    {service.number}
                                </span>

                                <span
                                    className="services__arrow"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </div>

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>

                            <a
                                href="#contato"
                                className="services__link"
                            >
                                Saiba mais
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
