import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import whatsappIcon from "@/assets/whatsapp-icon.avif";

const WhatsAppFAB = () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <a
        href="https://wa.me/4917612345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
        aria-label="Schreib uns auf WhatsApp!"
      >
        <span className="absolute inset-0 rounded-full bg-[hsl(142,70%,45%)]/30 animate-pulse-ring" />
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-14 h-14 rounded-full object-cover relative z-10 mix-blend-multiply"
        />
      </a>
    </TooltipTrigger>
    <TooltipContent side="left">
      <p>Schreib uns auf WhatsApp!</p>
    </TooltipContent>
  </Tooltip>
);

export default WhatsAppFAB;
