import { motion } from "framer-motion";
import { Send, Truck, PartyPopper } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: Send,
    title: "Unverbindlich anfragen",
    desc: "Nutze unseren Funnel oder schreib uns direkt per WhatsApp. Wir prüfen sofort deinen Wunschtermin.",
  },
  {
    num: "2",
    icon: Truck,
    title: "Wir liefern & bauen auf",
    desc: "Am Tag deines Events bringen wir die Fotobox nach Esslingen & Umgebung, bauen alles auf und geben dir eine kurze Einweisung.",
  },
  {
    num: "3",
    icon: PartyPopper,
    title: "Lächeln & Feiern",
    desc: "Deine Gäste genießen den Abend, drucken Fotos sofort aus und du erhältst später alle Bilder digital.",
  },
];

const ProcessSteps = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-16"
      >
        In 3 Schritten zu deinem Event-Highlight
      </motion.h2>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {/* Connecting dashed line on desktop */}
        <div className="hidden md:block absolute top-[2.75rem] left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px border-t-2 border-dashed border-primary/30 z-0" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative z-10 flex flex-col items-center text-center bg-card border border-border rounded-xl shadow-sm p-6 pt-8"
          >
            {/* Step number badge */}
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 shadow-md">
              <span className="text-xl font-bold text-primary-foreground">{step.num}</span>
            </div>

            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <step.icon className="w-5 h-5 text-primary" />
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
