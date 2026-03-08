import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
  useEffect(() => {
    document.title = "Datenschutzerklärung | Feststube – Fotobox Esslingen";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-2xl pt-32 pb-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
          Datenschutzerklärung
        </h1>
        <p className="text-sm text-muted-foreground mb-10">Stand: März 2026</p>

        <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">1. Verantwortliche</h2>
            <p>
              Sahra Dettenrieder<br />
              Feststube – Fotobox Esslingen<br />
              Klingenstraße 6, 73770 Denkendorf<br />
              E-Mail:{" "}
              <a href="mailto:hallo@feststube.de" className="text-primary hover:underline">
                hallo@feststube.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden nur im
              technisch notwendigen Umfang erhoben. Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht, es sei
              denn, dies ist zur Vertragserfüllung erforderlich oder gesetzlich vorgeschrieben.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">3. Hosting</h2>
            <p>
              Diese Website wird über externe Hosting-Dienste betrieben. Im Rahmen des Hostings werden
              Server-Logfiles erhoben, die Ihre IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL sowie
              Datum und Uhrzeit des Zugriffs enthalten können. Diese Daten werden ausschließlich zur
              Sicherstellung des technischen Betriebs und zur Fehlerbehebung verarbeitet (Art. 6 Abs. 1 lit. f
              DSGVO) und nach spätestens 7 Tagen gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">4. Kontaktaufnahme per E-Mail oder WhatsApp</h2>
            <p>
              Wenn Sie uns per E-Mail oder WhatsApp kontaktieren, speichern wir Ihre Angaben (Name,
              E-Mail-Adresse bzw. Telefonnummer sowie Ihre Nachricht) zur Bearbeitung Ihrer Anfrage und für den
              Fall von Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
              bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten
              werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet wurde und keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
            <p className="mt-2">
              <strong>WhatsApp</strong> wird von Meta Platforms Ireland Ltd. bereitgestellt. Beim Versand einer
              Nachricht können Metadaten (z. B. Zeitstempel, Telefonnummer) an Server von Meta übertragen werden.
              Weitere Informationen finden Sie in der{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                WhatsApp Datenschutzrichtlinie
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">5. Instagram-Einbindung</h2>
            <p>
              Auf dieser Website sind Links zu unserem Instagram-Profil (@feststubestuttgart) eingebunden.
              Die Vorschaubilder werden von unseren eigenen Servern geladen, sodass beim bloßen Betrachten der
              Seite keine Daten an Instagram übertragen werden. Erst durch einen Klick auf den Link werden
              Sie zu Instagram weitergeleitet und Instagram erhält Informationen über Ihren Besuch. Betreiberin
              von Instagram ist Meta Platforms Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
              Irland. Informationen zur Datenverarbeitung durch Meta finden Sie unter{" "}
              <a
                href="https://privacycenter.instagram.com/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://privacycenter.instagram.com/policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">6. Cookies</h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der
              Website erforderlich sind. Es werden keine Tracking- oder Marketing-Cookies gesetzt. Eine
              Einwilligung ist für diese Cookies nicht erforderlich (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">7. Ihre Rechte</h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:hallo@feststube.de" className="text-primary hover:underline">
                hallo@feststube.de
              </a>
            </p>
            <p className="mt-2">
              Sie haben außerdem das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren.
              In Baden-Württemberg ist dies der Landesbeauftragte für den Datenschutz und die
              Informationsfreiheit Baden-Württemberg (LfDI BW),{" "}
              <a
                href="https://www.baden-wuerttemberg.datenschutz.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.baden-wuerttemberg.datenschutz.de
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die
              Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben
              kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
