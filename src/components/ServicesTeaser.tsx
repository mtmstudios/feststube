import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, Tent, Speaker, ArrowRight } from "lucide-react";

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
];

const ServicesTeaser = () => (
  <section className="py-20 md:py-28 bg-muted/40">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-3"
      >
        Alles für dein Event
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="text-muted-foreground text-center mb-12 max-w-xl mx-auto"
      >
        Fotobox, Zeltvermietung und Veranstaltungstechnik – alles aus einer Hand in
        Esslingen und Umgebung.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          >
            <Link
              to={s.href}
              className="group flex flex-col h-full rounded-2xl border border-border/50 bg-card p-7 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              aria-label={s.title}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 border border-primary/20">
                  {s.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <div className="flex items-center gap-1 mt-5 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
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
