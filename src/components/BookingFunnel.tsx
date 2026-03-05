import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Briefcase, PartyPopper, Clock, Moon, CalendarDays, Image, Glasses, BookOpen, MessageCircle, Mail, Baby, GraduationCap, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type EventType = "hochzeit" | "firmenfeier" | "party" | "taufe" | "abiball" | "sonstiges";
type Duration = "stunden" | "abend" | "wochenende";
type Extra = "hintergrund" | "requisiten" | "gaestebuch";

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
  enter: { x: 60, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -60, opacity: 0 },
};

const BookingFunnel = () => {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState<EventType | null>(null);
  const [duration, setDuration] = useState<Duration | null>(null);
  const [extras, setExtras] = useState<Extra[]>([]);

  const toggleExtra = (id: Extra) => {
    setExtras((prev) => prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]);
  };

  const canProceed = (step === 1 && eventType) || (step === 2 && duration) || step === 3;

  const buildWhatsAppURL = () => {
    const lines = [
      `Hallo Feststube! 👋`,
      `Ich suche eine Fotobox für ${eventType ? eventLabels[eventType] : ""}`,
      `Dauer: ${duration ? durationLabels[duration] : ""}`,
      extras.length > 0 ? `Extras: ${extras.map((e) => extraLabels[e]).join(", ")}` : "",
      `Ich freue mich auf eure Rückmeldung!`,
    ].filter(Boolean).join("\n");
    return `https://wa.me/4917612345678?text=${encodeURIComponent(lines)}`;
  };

  return (
    <section id="booking-funnel" className="py-20 md:py-28 bg-muted/50">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl shadow-xl border border-border/50 p-6 md:p-10"
        >
          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-colors duration-300",
                  s <= step ? "bg-primary" : "bg-muted"
                )}
              />
            ))}
            <span className="text-xs font-semibold text-muted-foreground ml-2">{step}/4</span>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Was feierst du?</h2>
                <p className="text-muted-foreground mb-6">Wähle deinen Event-Typ.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {eventOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setEventType(opt.id)}
                      className={cn(
                        "flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-md",
                        eventType === opt.id
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border bg-background hover:border-primary/40"
                      )}
                    >
                      <opt.icon className={cn("w-8 h-8", eventType === opt.id ? "text-primary" : "text-muted-foreground")} />
                      <span className="font-semibold text-foreground">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Wie lange brauchst du uns?</h2>
                <p className="text-muted-foreground mb-6">Wähle die gewünschte Dauer.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {durationOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setDuration(opt.id)}
                      className={cn(
                        "flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-md",
                        duration === opt.id
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border bg-background hover:border-primary/40"
                      )}
                    >
                      <opt.icon className={cn("w-8 h-8", duration === opt.id ? "text-primary" : "text-muted-foreground")} />
                      <span className="font-semibold text-foreground">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Mach es besonders!</h2>
                <p className="text-muted-foreground mb-6">Wähle optionale Extras aus.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {extraOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => toggleExtra(opt.id)}
                      className={cn(
                        "flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-md",
                        extras.includes(opt.id)
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border bg-background hover:border-primary/40"
                      )}
                    >
                      <opt.icon className={cn("w-8 h-8", extras.includes(opt.id) ? "text-primary" : "text-muted-foreground")} />
                      <span className="font-semibold text-foreground">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Lass uns quatschen!</h2>
                <div className="bg-muted rounded-xl p-5 mb-6 text-foreground">
                  <p className="text-sm text-muted-foreground mb-1">Deine Zusammenfassung:</p>
                  <p className="font-semibold">
                    Du suchst eine Fotobox für{" "}
                    <span className="text-primary">{eventType ? eventLabels[eventType] : ""}</span>{" "}
                    für <span className="text-primary">{duration ? durationLabels[duration] : ""}</span>.
                  </p>
                  {extras.length > 0 && (
                    <p className="mt-1">
                      Extras: <span className="text-primary">{extras.map((e) => extraLabels[e]).join(", ")}</span>
                    </p>
                  )}
                </div>
                <a href={buildWhatsAppURL()} target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-white rounded-full py-6 text-lg font-bold shadow-lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Anfrage per WhatsApp senden
                  </Button>
                </a>
                <a
                  href="mailto:info@feststube-esslingen.de?subject=Fotobox Anfrage"
                  className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Oder klassisch per E-Mail
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <Button variant="ghost" onClick={() => setStep((s) => s - 1)} className="text-muted-foreground">
                Zurück
              </Button>
            ) : (
              <div />
            )}
            {step < 4 && (
              <Button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canProceed}
                className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-8 font-semibold"
              >
                Weiter
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingFunnel;
