import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Clock, SmilePlus, MapPin } from "lucide-react";

const facts = [
  { value: 150, suffix: "+", label: "Erfolgreiche Events", icon: Trophy },
  { value: 24, suffix: "h", label: "Garantierte Antwortzeit", icon: Clock },
  { value: 100, suffix: "%", label: "Zufriedene Kunden", icon: SmilePlus },
  { value: 0, suffix: "€", label: "Anfahrt in Esslingen", icon: MapPin },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 900;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const KeyFacts = () => (
  <section className="py-12 md:py-16 bg-background">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-border/60 bg-card shadow-sm px-6 md:px-8 py-8 md:py-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/50">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
              className="flex flex-col items-center text-center gap-2 py-6 md:py-0 px-4 first:pt-0 last:pb-0 md:first:pt-0 md:last:pb-0"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-1">
                <fact.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-3xl md:text-4xl font-extrabold text-foreground">
                <AnimatedNumber value={fact.value} suffix={fact.suffix} />
              </span>
              <span className="text-sm text-muted-foreground leading-tight">{fact.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default KeyFacts;
