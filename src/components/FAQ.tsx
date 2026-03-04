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
    a: "Die Fotobox benötigt ca. 2 x 2 Meter Stellfläche. Sie passt problemlos in die meisten Veranstaltungsräume, Restaurants und Festsäle in Esslingen und Umgebung.",
  },
  {
    q: "Ist der Aufbau in Esslingen kostenlos?",
    a: "Ja! Innerhalb von Esslingen am Neckar ist die Anlieferung, der Aufbau und der Abbau komplett im Preis enthalten. Für Orte außerhalb berechnen wir eine kleine Anfahrtspauschale.",
  },
  {
    q: "Können wir die Bilder auch digital bekommen?",
    a: "Auf jeden Fall! Alle Fotos werden zusätzlich zum Sofort-Druck in einer Online-Galerie gespeichert. Den Link erhaltet ihr direkt nach dem Event – perfekt zum Teilen mit allen Gästen.",
  },
  {
    q: "Wie viele Fotos können gedruckt werden?",
    a: "So viele ihr wollt! Es gibt keine Begrenzung bei der Anzahl der Drucke. Jeder Gast kann seine Bilder sofort mitnehmen – als perfekte Erinnerung an euer Event.",
  },
];

const FAQ = () => (
  <section className="py-20 md:py-28 bg-background">
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
