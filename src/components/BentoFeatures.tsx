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
  <section className="py-20 md:py-28 bg-background">
    <div className="container max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-3"
      >
        Warum Feststube?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="text-muted-foreground text-center mb-12"
      >
        Alles aus einer Hand – von der Lieferung bis zum digitalen Fotoalbum.
      </motion.p>

      {/* Bento Grid: row 1 → [wide, normal], row 2 → [normal, wide] */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group rounded-2xl border border-border/50 bg-card p-7 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col${
              f.wide ? " md:col-span-2" : ""
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BentoFeatures;
