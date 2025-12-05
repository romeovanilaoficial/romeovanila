import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511952473711?text=Olá! Gostaria de solicitar um orçamento para um show."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[hsl(142_70%_45%)] text-foreground font-display font-bold uppercase tracking-wide px-5 py-4 rounded-full shadow-lg hover:bg-[hsl(142_70%_40%)] hover:scale-105 transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm">Orçamento via WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
