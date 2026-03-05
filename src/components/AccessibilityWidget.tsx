import { useState, useEffect, useCallback } from "react";
import { Accessibility } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const AccessibilityWidget = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.toggle("large-text", largeText);
  }, [largeText]);

  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reducedMotion);
    if (reducedMotion) {
      document.documentElement.style.scrollBehavior = "auto";
    } else {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, [reducedMotion]);

  const Toggle = ({ label, active, onToggle }: { label: string; active: boolean; onToggle: () => void }) => (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={active}
      className="flex items-center justify-between w-full py-2.5 px-1 text-sm font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
    >
      <span>{label}</span>
      <span
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
          active ? "bg-primary" : "bg-muted-foreground/30"
        }`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 rounded-full bg-background shadow-sm transition-transform ${
            active ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </span>
    </button>
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          aria-label="Barrierefreiheit-Optionen öffnen"
          className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-card text-muted-foreground border border-border flex items-center justify-center shadow-lg hover:scale-110 hover:text-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Accessibility className="w-6 h-6" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="start"
        className="w-64 bg-background/80 backdrop-blur-xl border border-border/50 shadow-xl rounded-xl p-4"
      >
        <h3 className="text-sm font-bold text-foreground mb-3">Barrierefreiheit</h3>
        <div className="divide-y divide-border">
          <Toggle label="Kontrast erhöhen" active={highContrast} onToggle={() => setHighContrast(!highContrast)} />
          <Toggle label="Text vergrößern" active={largeText} onToggle={() => setLargeText(!largeText)} />
          <Toggle label="Animationen stoppen" active={reducedMotion} onToggle={() => setReducedMotion(!reducedMotion)} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccessibilityWidget;
