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
  <section className="py-12 md:py-20 bg-background" aria-label="So funktioniert es in 3 Schritten">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-12 md:mb-16"
      >
        In 3 Schritten zu deinem Event-Highlight
      </motion.h2>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {/* Connecting line – draws from left to right */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
          style={{ originX: 0 }}
          className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-[2px] bg-gradient-to-r from-primary/30 via-primary to-primary/30 z-0"
        />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="relative z-10 bg-card rounded-2xl p-6 md:p-8 pt-12 shadow-sm border border-border text-center md:text-left cursor-default hover:-translate-y-1 transition-transform duration-200"
          >
            {/* Step number badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.1, type: "spring", stiffness: 350, damping: 20 }}
              className="absolute -top-5 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/30"
            >
              <span className="text-lg font-bold text-primary-foreground">{step.num}</span>
            </motion.div>

            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
              <step.icon className="w-5 h-5 text-primary" />
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2 text-left">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed text-left">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
