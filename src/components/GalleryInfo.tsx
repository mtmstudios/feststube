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
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4"
      >
        Ein Blick auf das Highlight
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
      >
        Unsere Fotobox kombiniert modernes Design mit professioneller DSLR-Technik – für Bilder in Studio-Qualität bei jedem Event.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-background rounded-2xl border border-border/50 p-6"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Camera className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-foreground mb-1 flex items-center gap-2">
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
