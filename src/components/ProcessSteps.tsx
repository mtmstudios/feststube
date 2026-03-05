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
    <div className="container max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-14"
      >
        In 3 Schritten zu deinem Event-Highlight
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative flex flex-col items-center text-center gap-4"
          >
            <div className="relative">
              <span className="absolute -top-3 -left-3 text-6xl font-black text-primary/10 select-none leading-none">
                {step.num}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center relative z-10">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
