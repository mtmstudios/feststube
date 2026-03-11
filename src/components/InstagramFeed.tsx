import { motion } from "framer-motion";
import { Heart, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/feststubestuttgart/";

const posts = [
  { src: insta1, alt: "Hochzeit Fotobox Moment", likes: 124, comments: 5 },
  { src: insta2, alt: "Elegante Fotostreifen auf dem Tisch", likes: 98, comments: 3 },
  { src: insta3, alt: "Corporate Event mit Fotobox", likes: 156, comments: 8 },
  { src: insta4, alt: "Polaroid Prints und Konfetti", likes: 211, comments: 12 },
];

const InstagramFeed = () => (
  <section className="py-12 md:py-20 bg-background">
    <div className="container max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-3"
      >
        Folge uns auf Instagram
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08, duration: 0.4 }}
        className="text-muted-foreground text-center mb-10 md:mb-12"
      >
        @feststubestuttgart – Inspiration, echte Events und jede Menge Spaß.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {posts.map((post, i) => (
          <motion.a
            key={post.alt}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.35 }}
            className="group relative aspect-square rounded-2xl overflow-hidden"
          >
            <img
              src={post.src}
              alt={post.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-250 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex items-center gap-4 text-background font-semibold text-sm">
                <span className="flex items-center gap-1.5">
                  <Heart className="w-5 h-5 fill-current" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="w-5 h-5 fill-current" />
                  {post.comments}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex justify-center mt-10"
      >
        <Button
          variant="outline"
          asChild
          className="rounded-full px-8 gap-2 font-semibold"
        >
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5" />
            Auf Instagram ansehen
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default InstagramFeed;
