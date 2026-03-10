import { motion } from "framer-motion";
import { Camera, CheckCircle, Printer, Smartphone } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Top-Qualität",
    desc: "DSLR-Kamera und professionelles Ringlicht für perfekte Ergebnisse – bei jedem Licht, bei jedem Gast.",
    wide: true,
  },
  {
    icon: CheckCircle,
    title: "Stressfreier Aufbau",
    desc: "Wir liefern, bauen auf und holen wieder ab – in Esslingen und Umgebung.",
    wide: false,
  },
  {
    icon: Printer,
    title: "Sofort-Druck",
    desc: "Eure Fotos werden in Sekunden vor Ort gedruckt.",
    wide: false,
  },
  {
    icon: Smartphone,
    title: "Digitale Galerie",
    desc: "Alle Bilder zusätzlich online in einer passwortgeschützten Galerie – sofort mit allen Gästen teilbar.",
    wide: true,
  },
];

const BentoFeatures = () => (
  <section className="py-12 md:py-20 bg-background">
    <div className="container max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-3"
      >
        Warum Feststube?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.4 }}
        className="text-muted-foreground text-center mb-8 md:mb-12 text-sm md:text-base"
      >
        Alles aus einer Hand – von der Lieferung bis zum digitalen Fotoalbum.
      </motion.p>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            className={`group rounded-2xl border border-border/50 bg-card p-4 md:p-7 hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-default${
              f.wide ? " md:col-span-2" : ""
            }`}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/15 transition-colors">
              <f.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BentoFeatures;
