
import { useTranslation } from "react-i18next";
import "./Contact.css";

const whatsappNumber = (
    import.meta.env.VITE_WHATSAPP_NUMBER || ""
).replace(/\D/g, "");

const whatsappEnabled = /^55\d{10,11}$/.test(whatsappNumber);

const serviceIds = ["road", "delivery", "support"];

function createWhatsAppUrl(message = "") {
    const url = `https://wa.me/${whatsappNumber}`;

    return message
        ? `${url}?text=${encodeURIComponent(message)}`
        : url;
}

function Contact() {
    const { t } = useTranslation();

    function handleSubmit(event) {
        event.preventDefault();

        if (!whatsappEnabled) return;

        const formData = new FormData(event.currentTarget);

        const name = String(
            formData.get("name") || ""
        ).trim();

        const email = String(
            formData.get("email") || ""
        ).trim();

        const serviceId = String(
            formData.get("service") || ""
        ).trim();

        const message = String(
            formData.get("message") || ""
        ).trim();

        const service = serviceIds.includes(serviceId)
            ? t(`services.items.${serviceId}.title`)
            : t("contact.other");

        const whatsappMessage = [
            t("contact.whatsappGreeting"),
            "",
            `${t("contact.whatsappName")}: ${name}`,
            `${t("contact.whatsappEmail")}: ${email}`,
            `${t("contact.whatsappService")}: ${service}`,
            "",
            `${t("contact.whatsappMessage")}: ${message}`,
        ].join("\n");

        window.location.assign(
            createWhatsAppUrl(whatsappMessage)
        );
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
                        {t("contact.eyebrow")}
                    </span>

                    <h2 id="contact-title">
                        {t("contact.title")}
                    </h2>

                    <p>{t("contact.intro")}</p>

                    <div className="contact__info">
                        <span
                            className="contact__info-icon"
                            aria-hidden="true"
                        >
                            ↗
                        </span>

                        <div>
                            <strong>
                                {t("contact.supportTitle")}
                            </strong>

                            <p>
                                {t("contact.supportDescription")}
                            </p>
                        </div>
                    </div>
                </div>

                <form
                    className="contact__form"
                    onSubmit={handleSubmit}
                >
                    <h3>{t("contact.formTitle")}</h3>

                    <div className="contact__field">
                        <label htmlFor="contact-name">
                            {t("contact.nameLabel")}
                        </label>

                        <input
                            id="contact-name"
                            name="name"
                            type="text"
                            placeholder={t("contact.namePlaceholder")}
                            autoComplete="name"
                            minLength={2}
                            maxLength={100}
                            required
                        />
                    </div>

                    <div className="contact__field">
                        <label htmlFor="contact-email">
                            {t("contact.emailLabel")}
                        </label>

                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            placeholder={t("contact.emailPlaceholder")}
                            autoComplete="email"
                            maxLength={150}
                            required
                        />
                    </div>

                    <div className="contact__field">
                        <label htmlFor="contact-service">
                            {t("contact.serviceLabel")}
                        </label>

                        <select
                            id="contact-service"
                            name="service"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                {t("contact.servicePlaceholder")}
                            </option>

                            <option value="road">
                                {t("services.items.road.title")}
                            </option>

                            <option value="delivery">
                                {t("services.items.delivery.title")}
                            </option>

                            <option value="support">
                                {t("services.items.support.title")}
                            </option>

                            <option value="other">
                                {t("contact.other")}
                            </option>
                        </select>
                    </div>

                    <div className="contact__field">
                        <label htmlFor="contact-message">
                            {t("contact.messageLabel")}
                        </label>

                        <textarea
                            id="contact-message"
                            name="message"
                            placeholder={t("contact.messagePlaceholder")}
                            rows={5}
                            maxLength={1000}
                            required
                        />
                    </div>

                    <p className="contact__disclaimer">
                        {t("contact.disclaimer")}
                    </p>

                    <button
                        className="contact__submit"
                        type="submit"
                        disabled={!whatsappEnabled}
                    >
                        {t("contact.submit")}
                        <span aria-hidden="true">↗</span>
                    </button>

                    {!whatsappEnabled && (
                        <p
                            className="contact__notice"
                            role="status"
                        >
                            {t("contact.notice")}
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
                    aria-label={t("contact.whatsappLabel")}
                >
                    <span aria-hidden="true">✆</span>
                    <span>WhatsApp</span>
                </a>
            )}
        </section>
    );
}

export default Contact;