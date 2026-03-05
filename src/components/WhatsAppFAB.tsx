import whatsappIcon from "@/assets/whatsapp-logo.png";

const WhatsAppFAB = () => (
  <a
    href="https://wa.me/4917612345678"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-3 py-3 sm:px-5 sm:py-3.5 shadow-lg shadow-green-500/30 hover:bg-[#1DA851] hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group"
    aria-label="Schreib uns auf WhatsApp!"
  >
    <img
      src={whatsappIcon}
      alt=""
      className="w-6 h-6 shrink-0 animate-pulse"
      aria-hidden="true"
    />
    <span className="hidden sm:inline text-sm font-bold whitespace-nowrap">
      Schreib uns auf WhatsApp
    </span>
  </a>
);

export default WhatsAppFAB;
