import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, Tent, Speaker, ArrowRight, Mail } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Fotobox mieten",
    desc: "DSLR-Qualität, Sofort-Druck & digitale Galerie. Das Highlight für jede Feier – ab 249 €.",
    href: "/",
    badge: "Ab 249 €",
  },
  {
    icon: Tent,
    title: "Zeltvermietung",
    desc: "Pagodenzelt bis Großraumzelt für bis zu 200 Gäste – inkl. professionellem Aufbau.",
    href: "/zeltvermietung",
    badge: "Neu",
  },
  {
    icon: Speaker,
    title: "Veranstaltungstechnik",
    desc: "PA-Anlage, Licht & Mikrofone – auf Wunsch inkl. Techniker vor Ort.",
    href: "/veranstaltungstechnik",
    badge: "Neu",
  },
  {
    icon: Mail,
    title: "Digitale Einladungskarte",
    desc: "RSVP, Essensauswahl, Songwünsche & Live-Galerie – die moderne Einladung für eure Hochzeit.",
    href: "/digitale-einladungskarte",
    badge: "Neu",
  },
];

const ServicesTeaser = () => (
  <section className="py-12 md:py-20 bg-muted/40">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-3"
      >
        Alles für dein Event
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05, duration: 0.4 }}
        className="text-muted-foreground text-center mb-8 md:mb-12 max-w-xl mx-auto text-sm md:text-base"
      >
        Fotobox, Zeltvermietung, Veranstaltungstechnik und digitale Einladungen – alles aus einer Hand in
        Esslingen und Umgebung.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
          >
            <Link
              to={s.href}
              className="group flex flex-col h-full rounded-2xl border border-border/50 bg-card p-5 md:p-7 hover:shadow-xl transition-shadow duration-300 cursor-pointer active:scale-[0.98] transition-transform"
              aria-label={s.title}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 border border-primary/20">
                  {s.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-primary">
                Mehr erfahren
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesTeaser;
