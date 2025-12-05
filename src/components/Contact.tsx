import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Calendar, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento.\n\nNome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nTipo de Evento: ${formData.eventType}\nData: ${formData.eventDate}\nMensagem: ${formData.message}`
    );
    
    window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para continuar a conversa.",
    });
  };

  return (
    <section id="contato" className="py-24 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-4">
            Vamos Conversar
          </p>
          <h2 className="section-title mb-4">
            Solicite seu <span className="text-gradient">Orçamento</span>
          </h2>
          <p className="section-subtitle">
            Entre em contato e transforme seu evento em um show inesquecível
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Nome Completo *
                </label>
                <Input
                  required
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  E-mail *
                </label>
                <Input
                  required
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border/50 focus:border-primary"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Telefone/WhatsApp *
                </label>
                <Input
                  required
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Tipo de Evento *
                </label>
                <select
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
                >
                  <option value="">Selecione...</option>
                  <option value="Casamento">Casamento</option>
                  <option value="Corporativo">Evento Corporativo</option>
                  <option value="Aniversário">Aniversário</option>
                  <option value="Churrasco">Churrasco/Confraternização</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">
                Data Prevista do Evento
              </label>
              <Input
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className="bg-background border-border/50 focus:border-primary"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">
                Mensagem
              </label>
              <Textarea
                placeholder="Conte mais sobre seu evento..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border/50 focus:border-primary resize-none"
              />
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full">
              <Send className="w-5 h-5 mr-2" />
              Enviar Solicitação
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-gradient rounded-2xl p-8 border border-border/30">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">WhatsApp</p>
                    <p className="text-foreground font-semibold">(11) 99999-9999</p>
                  </div>
                </a>

                <a
                  href="mailto:contato@romeovanila.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">E-mail</p>
                    <p className="text-foreground font-semibold">contato@romeovanila.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Área de Atendimento</p>
                    <p className="text-foreground font-semibold">São Paulo e Região</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Disponibilidade</p>
                    <p className="text-foreground font-semibold">Consulte agenda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-card border border-border/30 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-card border border-border/30 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-card border border-border/30 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
