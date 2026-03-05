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
          const duration = 1500;
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
  <section className="py-16 md:py-20 bg-background">
    <div className="container max-w-4xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {facts.map((fact, i) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-2"
          >
            <fact.icon className="w-6 h-6 text-primary mb-1" />
            <span className="text-3xl md:text-4xl font-extrabold text-foreground">
              <AnimatedNumber value={fact.value} suffix={fact.suffix} />
            </span>
            <span className="text-sm text-muted-foreground">{fact.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default KeyFacts;
