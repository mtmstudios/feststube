import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/feststube-logo-new.png";

const Footer = () => (
  <footer className="py-10 md:py-12 border-t border-border">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {/* Brand — full-width on mobile, 1 col on desktop */}
        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="Feststube" className="h-10 md:h-20 w-auto mb-3" />
          <p className="text-sm text-muted-foreground">
            Dein Partner für unvergessliche Events in Esslingen und Umgebung.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm md:text-base">Unsere Leistungen</h4>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Fotobox mieten
            </Link>
            <Link to="/zeltvermietung" className="text-muted-foreground hover:text-foreground transition-colors">
              Zeltvermietung
            </Link>
            <Link to="/veranstaltungstechnik" className="text-muted-foreground hover:text-foreground transition-colors">
              Veranstaltungstechnik
            </Link>
            <Link to="/digitale-einladungskarte" className="text-muted-foreground hover:text-foreground transition-colors">
              Digitale Einladungskarte
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm md:text-base">Kontakt</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <a
              href="mailto:hallo@feststube.de"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              hallo@feststube.de
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              Esslingen am Neckar
            </span>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm md:text-base">Rechtliches</h4>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link to="/impressum" className="text-muted-foreground hover:text-foreground transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-muted-foreground hover:text-foreground transition-colors">
              Datenschutz
            </Link>
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
