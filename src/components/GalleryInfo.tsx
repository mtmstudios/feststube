import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";
import galleryBooth from "@/assets/gallery-booth.jpg";
import galleryProps from "@/assets/gallery-props.jpg";
import galleryPrints from "@/assets/gallery-prints.jpg";

const images = [
  { src: galleryBooth, alt: "Moderne Fotobox von Feststube" },
  { src: galleryProps, alt: "Lustige Requisiten für die Fotobox" },
  { src: galleryPrints, alt: "Sofort gedruckte Fotostreifen" },
];

const GalleryInfo = () => (
  <section className="py-12 md:py-20 bg-muted/50">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-3"
      >
        Ein Blick auf das Highlight
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08, duration: 0.4 }}
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base"
      >
        Unsere Fotobox kombiniert modernes Design mit professioneller DSLR-Technik – für Bilder in Studio-Qualität bei jedem Event.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((img, i) => (
          <div key={img.alt} className="relative overflow-hidden rounded-2xl shadow-lg">
            {/* Cinematic wipe-reveal */}
            <motion.div
              className="absolute inset-0 bg-muted z-10 rounded-2xl"
              initial={{ x: "0%" }}
              whileInView={{ x: "101%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15, ease: [0.77, 0, 0.175, 1] }}
            />
            <motion.img
              src={img.src}
              alt={img.alt}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15, ease: [0.33, 1, 0.68, 1] }}
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="mt-8 flex flex-col items-center text-center gap-4 bg-background rounded-2xl border border-border/50 p-5 md:p-6"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Camera className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-1 flex items-center justify-center gap-2 text-base">
            Professionelle DSLR-Kamera
            <Sparkles className="w-4 h-4 text-primary" />
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Im Inneren arbeitet eine hochwertige Spiegelreflexkamera mit Profi-Ringlicht. Das Ergebnis: gestochen scharfe, perfekt ausgeleuchtete Fotos – ganz automatisch, bei jedem Klick.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default GalleryInfo;
