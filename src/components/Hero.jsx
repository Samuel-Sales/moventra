
import "./Hero.css";

function Hero() {
    return (
        <section
            className="hero"
            id="inicio"
            aria-labelledby="hero-title"
        >
            <div className="hero__container">
                <div className="hero__content">
                    <span className="hero__eyebrow">
                        Transporte & Logística
                    </span>

                    <h1 id="hero-title">
                        Sua carga no caminho{" "}
                        <span>certo.</span>
                    </h1>

                    <p className="hero__description">
                        Soluções em transporte e logística para
                        conectar seu negócio a novos destinos,
                        com eficiência e confiança.
                    </p>

                    <div className="hero__actions">
                        <a
                            href="#contato"
                            className="hero__button hero__button--primary"
                        >
                            Solicitar cotação
                            <span aria-hidden="true">↗</span>
                        </a>

                        <a
                            href="#servicos"
                            className="hero__button hero__button--secondary"
                        >
                            Nossas soluções
                        </a>
                    </div>
                </div>

                <div className="hero__visual" aria-hidden="true">
                    <div className="hero__visual-top">
                        <span>MOVENTRA / EM MOVIMENTO</span>
                        <span>↗</span>
                    </div>

                    <svg
                        className="hero__truck"
                        viewBox="0 0 520 240"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="370"
                            cy="105"
                            r="100"
                            fill="#233D58"
                        />

                        <path
                            d="M20 195 H500"
                            stroke="#66809B"
                            strokeWidth="3"
                            strokeDasharray="12 10"
                        />

                        <rect
                            x="55"
                            y="72"
                            width="280"
                            height="120"
                            rx="8"
                            fill="#F59E0B"
                        />

                        {[90, 130, 170, 210, 250, 290].map((x) => (
                            <path
                                key={x}
                                d={`M${x} 84 V180`}
                                stroke="#D18A12"
                                strokeWidth="3"
                            />
                        ))}

                        <path
                            d="M335 105 H402 L452 155 V192 H335 Z"
                            fill="#E5EDF5"
                        />

                        <path
                            d="M357 119 H394 L427 153 H357 Z"
                            fill="#294561"
                        />

                        <circle
                            cx="125"
                            cy="193"
                            r="21"
                            fill="#1A3046"
                            stroke="#E5EDF5"
                            strokeWidth="8"
                        />

                        <circle
                            cx="395"
                            cy="193"
                            r="21"
                            fill="#1A3046"
                            stroke="#E5EDF5"
                            strokeWidth="8"
                        />
                    </svg>

                    <div className="hero__visual-bottom">
                        <span>CONEXÃO</span>
                        <span>EFICIÊNCIA • CONFIANÇA</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
