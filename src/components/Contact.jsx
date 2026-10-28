
import "./Contact.css";

const whatsappNumber = (
    import.meta.env.VITE_WHATSAPP_NUMBER || ""
).replace(/\D/g, "");

const whatsappEnabled = /^55\d{10,11}$/.test(whatsappNumber);

function createWhatsAppUrl(message = "") {
    const url = `https://wa.me/${whatsappNumber}`;

    if (!message) {
        return url;
    }

    return `${url}?text=${encodeURIComponent(message)}`;
}

function Contact() {
    function handleSubmit(event) {
        event.preventDefault();

        if (!whatsappEnabled) {
            return;
        }

        const formData = new FormData(event.currentTarget);

        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const service = String(formData.get("service") || "").trim();
        const message = String(formData.get("message") || "").trim();

        const whatsappMessage = [
            "Olá! Gostaria de solicitar informações sobre os serviços da Moventra.",
            "",
            `Nome: ${name}`,
            `E-mail: ${email}`,
            `Serviço: ${service}`,
            "",
            `Mensagem: ${message}`,
        ].join("\n");

        window.location.assign(createWhatsAppUrl(whatsappMessage));
    }

    return (
        <section
            id="contato"
            className="contact"
            aria-labelledby="contact-title"
        >
            <div className="contact__container">
                <div className="contact__content">
                    <span className="contact__eyebrow">
                        Fale conosco
                    </span>

                    <h2 id="contact-title">
                        Vamos movimentar seu negócio?
                    </h2>

                    <p>
                        Conte um pouco sobre sua necessidade.
                        Estamos aqui para iniciar uma conversa
                        sobre soluções em transporte e logística.
                    </p>

                    <div className="contact__info">
                        <span className="contact__info-icon" aria-hidden="true">
                            ↗
                        </span>

                        <div>
                            <strong>Atendimento pelo WhatsApp</strong>
                            <p>
                                Preencha o formulário e envie sua
                                solicitação diretamente pelo aplicativo.
                            </p>
                        </div>
                    </div>
                </div>

                <form
                    className="contact__form"
                    onSubmit={handleSubmit}
                >
                    <h3>Solicite um contato</h3>

                    <div className="contact__field">
                        <label htmlFor="contact-name">
                            Nome completo
                        </label>

                        <input
                            id="contact-name"
                            name="name"
                            type="text"
                            placeholder="Seu nome"
                            autoComplete="name"
                            minLength={2}
                            maxLength={100}
                            required
                        />
                    </div>

                    <div className="contact__field">
                        <label htmlFor="contact-email">
                            E-mail
                        </label>

                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            placeholder="seu@email.com"
                            autoComplete="email"
                            maxLength={150}
                            required
                        />
                    </div>

                    <div className="contact__field">
                        <label htmlFor="contact-service">
                            Serviço de interesse
                        </label>

                        <select
                            id="contact-service"
                            name="service"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Selecione um serviço
                            </option>
                            <option value="Transporte rodoviário">
                                Transporte rodoviário
                            </option>
                            <option value="Distribuição e entregas">
                                Distribuição e entregas
                            </option>
                            <option value="Apoio logístico">
                                Apoio logístico
                            </option>
                            <option value="Outros">
                                Outros
                            </option>
                        </select>
                    </div>

                    <div className="contact__field">
                        <label htmlFor="contact-message">
                            Sua mensagem
                        </label>

                        <textarea
                            id="contact-message"
                            name="message"
                            placeholder="Como podemos ajudar?"
                            rows={5}
                            maxLength={1000}
                            required
                        />
                    </div>

                    <p className="contact__disclaimer">
                        Ao continuar, o WhatsApp será aberto
                        com os dados preenchidos para você revisar
                        e enviar a mensagem.
                    </p>

                    <button
                        className="contact__submit"
                        type="submit"
                        disabled={!whatsappEnabled}
                    >
                        Enviar via WhatsApp
                        <span aria-hidden="true">↗</span>
                    </button>

                    {!whatsappEnabled && (
                        <p className="contact__notice" role="status">
                            Integração em demonstração: configure o
                            número do WhatsApp para habilitar o envio.
                        </p>
                    )}
                </form>
            </div>

            {whatsappEnabled && (
                <a
                    className="contact__floating-whatsapp"
                    href={createWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Conversar pelo WhatsApp"
                >
                    <span aria-hidden="true">✆</span>
                    <span>WhatsApp</span>
                </a>
            )}
        </section>
    );
}

export default Contact;
