import { Button } from "@/components/ui/button";
import logo from "@/assets/feststube-logo-2.png";

const Header = () => {
  const scrollToFunnel = () => {
    document.getElementById("booking-funnel")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Feststube" className="h-9 w-auto scale-x-[-1]" />
        </a>
        <Button
          onClick={scrollToFunnel}
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-6 font-semibold shadow-sm shadow-primary/20"
        >
          Jetzt anfragen
        </Button>
      </div>
    </header>
  );
};

export default Header;
