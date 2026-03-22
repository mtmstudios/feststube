import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WEBHOOK_URL = "https://mtmstudios.app.n8n.cloud/webhook/feststube-anfrage";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = name.trim().length > 1 && email.trim().includes("@");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact",
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
        }),
      });
      if (!res.ok) throw new Error("Serverfehler");
      setSubmitted(true);
    } catch {
      setError("Etwas ist schiefgelaufen. Schreib uns direkt: info@feststube.de");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-10 items-start"
        >
          {/* Left: Info */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Kontakt</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frag uns einfach!
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Du hast Fragen zum Ablauf, Preisen oder verfügbaren Terminen? Schreib uns — wir antworten schnell.
            </p>

            <div className="space-y-4">
              <a href="mailto:info@feststube.de" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">info@feststube.de</span>
              </a>
              <a href="tel:+4917612345678" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">+49 176 12345678</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Denkendorf · Raum Stuttgart</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card rounded-2xl border border-border/50 shadow-lg p-6 md:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle2 className="w-14 h-14 text-[hsl(142,70%,45%)] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Nachricht gesendet!</h3>
                <p className="text-muted-foreground">
                  Danke, <span className="font-semibold text-foreground">{name}</span>! Wir melden uns so schnell wie möglich.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <Input
                      placeholder="Dein Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="E-Mail Adresse *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-xl"
                  />
                  <Input
                    type="tel"
                    placeholder="Telefon (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl"
                  />
                  <div className="sm:col-span-2">
                    <Textarea
                      placeholder="Deine Nachricht (optional) — z.B. Datum, Ort, Anzahl Gäste…"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="rounded-xl resize-none"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={!canSubmit || submitting}
                  className="w-full rounded-full py-6 font-bold text-base shadow-lg active:scale-95 transition-transform"
                >
                  {submitting ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Wird gesendet…</>
                  ) : (
                    "Nachricht senden →"
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Kein Spam. Wir antworten innerhalb von 24 Stunden.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
