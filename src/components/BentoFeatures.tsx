import { motion } from "framer-motion";
import { Camera, CheckCircle, Printer, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { icon: Camera, title: "Top-Qualität", desc: "DSLR-Kamera und professionelles Ringlicht für perfekte Ergebnisse.", large: true },
  { icon: CheckCircle, title: "Stressfreier Aufbau", desc: "Wir liefern, bauen auf und holen wieder ab – in Esslingen und Umgebung.", large: false },
  { icon: Printer, title: "Sofort-Druck", desc: "Eure Fotos werden in Sekunden vor Ort gedruckt – als Erinnerung zum Mitnehmen.", large: false },
  { icon: Smartphone, title: "Digitaler Link", desc: "Alle Bilder zusätzlich online in einer Galerie – sofort teilbar.", large: true },
];

const BentoFeatures = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12"
      >
        Warum Feststube? 💜
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "group rounded-2xl border border-border/50 bg-background p-7 hover:shadow-lg hover:scale-[1.02] transition-all duration-300",
              f.large && "md:col-span-1"
            )}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BentoFeatures;
