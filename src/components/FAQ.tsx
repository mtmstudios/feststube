import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Wie viel Platz benötigt die Fotobox?",
    a: "Unsere Fotobox ist ein echtes Platzwunder! Eine Fläche von ca. 2 x 2 Metern reicht völlig aus, damit sich deine Gäste vor der Kamera frei entfalten können. Ein normaler Stromanschluss (230V) in der Nähe genügt – den Rest erledigen wir.",
  },
  {
    q: "Ist der Aufbau in Esslingen wirklich kostenlos?",
    a: "Ja, absolut! Für Events in Esslingen und der direkten Umgebung ist die Lieferung, der professionelle Aufbau und der Abbau am nächsten Tag komplett im Preis inklusive. Du musst dich um nichts kümmern und kannst dich zu 100 % auf deine Feier konzentrieren.",
  },
  {
    q: "Können wir die Bilder auch digital bekommen?",
    a: "Selbstverständlich. Neben den sofortigen Premium-Ausdrucken vor Ort speichern wir alle Bilder in höchster Qualität digital ab. Nach dem Event erhältst du einen passwortgeschützten Link zu einer Online-Galerie, den du direkt mit all deinen Gästen teilen kannst.",
  },
  {
    q: "Wie viele Fotos können gedruckt werden?",
    a: "Bei uns gibt es kein böses Erwachen: Unser Premium-Drucker ist mit ausreichend Papier für den ganzen Abend ausgestattet (bis zu 400 Prints ohne Wechsel). Euer Partyspaß hat also kein Limit!",
  },
];

const FAQ = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container max-w-2xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12"
      >
        Häufige Fragen
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-foreground font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
