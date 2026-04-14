import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Briefcase, PartyPopper, Clock, Moon, CalendarDays, Image, Glasses, BookOpen, Mail, Baby, GraduationCap, MoreHorizontal, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type EventType = "hochzeit" | "firmenfeier" | "party" | "taufe" | "abiball" | "sonstiges";
type Duration = "stunden" | "abend" | "wochenende";
type Extra = "hintergrund" | "requisiten" | "gaestebuch";

const WEBHOOK_URL = "https://mtmstudios.app.n8n.cloud/webhook/feststube-anfrage";

const eventOptions = [
  { id: "hochzeit" as EventType, label: "Hochzeit", icon: Heart },
  { id: "firmenfeier" as EventType, label: "Firmenfeier", icon: Briefcase },
  { id: "party" as EventType, label: "Party / Geburtstag", icon: PartyPopper },
  { id: "taufe" as EventType, label: "Taufe / Kommunion", icon: Baby },
  { id: "abiball" as EventType, label: "Abiball / Abschluss", icon: GraduationCap },
  { id: "sonstiges" as EventType, label: "Sonstiges", icon: MoreHorizontal },
];

const durationOptions = [
  { id: "stunden" as Duration, label: "Ein paar Stunden", icon: Clock },
  { id: "abend" as Duration, label: "Den ganzen Abend", icon: Moon },
  { id: "wochenende" as Duration, label: "Komplettes Wochenende", icon: CalendarDays },
];

const extraOptions = [
  { id: "hintergrund" as Extra, label: "Premium Hintergrund", icon: Image },
  { id: "requisiten" as Extra, label: "Requisiten-Koffer", icon: Glasses },
  { id: "gaestebuch" as Extra, label: "Gästebuch-Service", icon: BookOpen },
];

const eventLabels: Record<EventType, string> = { hochzeit: "eine Hochzeit", firmenfeier: "eine Firmenfeier", party: "eine Party / Geburtstag", taufe: "eine Taufe / Kommunion", abiball: "einen Abiball / Abschluss", sonstiges: "ein individuelles Event" };
const durationLabels: Record<Duration, string> = { stunden: "ein paar Stunden", abend: "den ganzen Abend", wochenende: "ein komplettes Wochenende" };
const extraLabels: Record<Extra, string> = { hintergrund: "Premium Hintergrund", requisiten: "Requisiten-Koffer", gaestebuch: "Gästebuch-Service" };

const slideVariants = {
  enter: { x: 30, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -30, opacity: 0 },
};

const BookingFunnel = () => {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState<EventType | null>(null);
  const [duration, setDuration] = useState<Duration | null>(null);
  const [extras, setExtras] = useState<Extra[]>([]);

  // Step 4 contact fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggleExtra = (id: Extra) => {
    setExtras((prev) => prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]);
  };

  const canProceed = (step === 1 && eventType) || (step === 2 && duration) || step === 3;
  const canSubmit = name.trim().length > 1 && email.trim().includes("@");

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "funnel",
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          eventType,
          duration,
          extras,
        }),
      });
      if (!res.ok) throw new Error("Serverfehler");
      setSubmitted(true);
    } catch {
      setError("Etwas ist schiefgelaufen. Bitte schreib uns direkt: feststube@gmail.com");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="booking-funnel" className="py-12 md:py-28 bg-muted/50">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-card rounded-2xl shadow-xl border border-border/50 p-4 md:p-10"
        >
          {/* Progress bar */}
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-colors duration-300",
                  s <= step ? "bg-primary" : "bg-muted"
                )}
              />
            ))}
            <span className="text-xs font-semibold text-muted-foreground ml-1 shrink-0">{step}/4</span>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.22 }}>
                <h2 className="text-xl md:text-3xl font-bold text-foreground mb-1">Was feierst du?</h2>
                <p className="text-muted-foreground mb-5 text-sm md:text-base">Wähle deinen Event-Typ.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {eventOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setEventType(opt.id)}
                      aria-label={`Event-Typ: ${opt.label}`}
                      className={cn(
                        "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95",
                        eventType === opt.id
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border bg-background hover:border-primary/40"
                      )}
                    >
                      <opt.icon className={cn("w-7 h-7", eventType === opt.id ? "text-primary" : "text-muted-foreground")} />
                      <span className="font-semibold text-foreground text-xs sm:text-sm text-center leading-tight">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.22 }}>
                <h2 className="text-xl md:text-3xl font-bold text-foreground mb-1">Wie lange brauchst du uns?</h2>
                <p className="text-muted-foreground mb-5 text-sm md:text-base">Wähle die gewünschte Dauer.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {durationOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setDuration(opt.id)}
                      aria-label={`Dauer: ${opt.label}`}
                      className={cn(
                        "flex flex-row sm:flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95",
                        duration === opt.id
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border bg-background hover:border-primary/40"
                      )}
                    >
                      <opt.icon className={cn("w-7 h-7 shrink-0", duration === opt.id ? "text-primary" : "text-muted-foreground")} />
                      <span className="font-semibold text-foreground text-sm sm:text-center">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.22 }}>
                <h2 className="text-xl md:text-3xl font-bold text-foreground mb-1">Mach es besonders!</h2>
                <p className="text-muted-foreground mb-5 text-sm md:text-base">Wähle optionale Extras aus.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {extraOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => toggleExtra(opt.id)}
                      aria-label={`Extra: ${opt.label}`}
                      className={cn(
                        "flex flex-row sm:flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95",
                        extras.includes(opt.id)
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border bg-background hover:border-primary/40"
                      )}
                    >
                      <opt.icon className={cn("w-7 h-7 shrink-0", extras.includes(opt.id) ? "text-primary" : "text-muted-foreground")} />
                      <span className="font-semibold text-foreground text-sm sm:text-center">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && !submitted && (
              <motion.div key="step4" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.22 }}>
                <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">Fast geschafft!</h2>

                {/* Summary */}
                <div className="bg-muted rounded-xl p-4 mb-5 text-foreground">
                  <p className="text-sm text-muted-foreground mb-1">Deine Zusammenfassung:</p>
                  <p className="font-semibold text-sm md:text-base">
                    Fotobox für{" "}
                    <span className="text-primary">{eventType ? eventLabels[eventType] : ""}</span>{" "}
                    · <span className="text-primary">{duration ? durationLabels[duration] : ""}</span>
                  </p>
                  {extras.length > 0 && (
                    <p className="mt-1 text-sm">
                      Extras: <span className="text-primary">{extras.map((e) => extraLabels[e]).join(", ")}</span>
                    </p>
                  )}
                </div>

                {/* Contact fields */}
                <p className="text-muted-foreground text-sm mb-3">Wohin sollen wir dein Angebot schicken?</p>
                <div className="space-y-3">
                  <Input
                    placeholder="Dein Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl"
                  />
                  <Input
                    type="email"
                    placeholder="E-Mail Adresse *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl"
                  />
                  <Input
                    type="tel"
                    placeholder="Telefon (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl"
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive mt-3">{error}</p>
                )}

                <Button
                  size="lg"
                  onClick={handleSubmit}
                  disabled={!canSubmit || submitting}
                  className="w-full mt-4 rounded-full py-6 text-base md:text-lg font-bold shadow-lg active:scale-95 transition-transform"
                >
                  {submitting ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Wird gesendet…</>
                  ) : (
                    "Unverbindliches Angebot anfragen →"
                  )}
                </Button>

                <a
                  href="mailto:feststube@gmail.com?subject=Fotobox Anfrage"
                  className="flex items-center justify-center gap-2 mt-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  <Mail className="w-4 h-4" />
                  Oder klassisch per E-Mail
                </a>
              </motion.div>
            )}

            {step === 4 && submitted && (
              <motion.div key="success" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }} className="text-center py-6">
                <CheckCircle2 className="w-16 h-16 text-[hsl(142,70%,45%)] mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Anfrage gesendet! 🎉</h2>
                <p className="text-muted-foreground">
                  Danke, <span className="font-semibold text-foreground">{name}</span>! Wir melden uns so schnell wie möglich bei dir.
                </p>
                <p className="text-sm text-muted-foreground mt-2">Schau auch in deinen Spam-Ordner.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6 gap-3">
            {step > 1 && !submitted ? (
              <Button variant="ghost" onClick={() => setStep((s) => s - 1)} className="text-muted-foreground px-4">
                ← Zurück
              </Button>
            ) : (
              <div />
            )}
            {step < 4 && (
              <Button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed}
                className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-8 font-semibold ml-auto"
              >
                Weiter →
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingFunnel;
