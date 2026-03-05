import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/feststube-logo-2.png";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <img src={logo} alt="Feststube" className="h-10 w-auto mb-3 -rotate-90 origin-center" />
          <p className="text-sm text-muted-foreground">
            Die premium Fotobox für unvergessliche Events in Esslingen und Umgebung.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Kontakt</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="mailto:hallo@feststube.de" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              hallo@feststube.de
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Esslingen am Neckar
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Rechtliches</h4>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Impressum</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Feststube Esslingen. Alle Rechte vorbehalten.
      </div>
    </div>
  </footer>
);

export default Footer;
