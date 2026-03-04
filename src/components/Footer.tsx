const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Feststube Esslingen. Alle Rechte vorbehalten.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
        <a href="#" className="hover:text-foreground transition-colors">Datenschutz</a>
      </div>
    </div>
  </footer>
);

export default Footer;
