import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Max & Anna", text: "Die Fotobox war das absolute Highlight unserer Hochzeit! Der Aufbau durch das Team verlief komplett geräuschlos im Hintergrund. Die Bilder haben Studio-Qualität.", event: "Hochzeit" },
  { name: "Firmen-Event GmbH", text: "Professionell, super pünktlich und die gebrandeten Fotostreifen kamen beim Team genial an. Sehr empfehlenswert für jedes Corporate Event in der Region.", event: "Firmenfeier" },
  { name: "Lisa M.", text: "Habe die Box für meinen 30. gemietet. Die Requisiten waren der Hammer und der Drucker ist irre schnell. Alle Gäste haben ihre Bilder direkt an den Kühlschrank gepinnt!", event: "30. Geburtstag" },
];

const SocialProof = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12"
      >
        Das sagen unsere Kunden
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-2xl border border-border/50 p-6"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-4">„{r.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
