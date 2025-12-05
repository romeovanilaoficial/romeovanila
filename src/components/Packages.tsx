import { Button } from "./ui/button";
import { Building2, Heart, PartyPopper, Users } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      icon: Building2,
      title: "Corporativo",
      description: "Confraternizações, convenções, lançamentos de produtos e festas de fim de ano.",
      features: ["Show personalizado", "Repertório sob medida", "Interação com a equipe", "Duração flexível"],
      highlighted: false,
    },
    {
      icon: Heart,
      title: "Casamentos",
      description: "O momento mais especial da sua vida merece uma trilha sonora inesquecível.",
      features: ["Cerimônia + Festa", "Primeira dança especial", "Homenagens personalizadas", "Fogos indoor*"],
      highlighted: true,
    },
    {
      icon: PartyPopper,
      title: "Aniversários",
      description: "Transforme sua festa em um verdadeiro show que todos vão lembrar para sempre.",
      features: ["Shows de 1h a 3h", "Repertório variado", "Interação com aniversariante", "Surpresas no palco"],
      highlighted: false,
    },
    {
      icon: Users,
      title: "Eventos Sociais",
      description: "Churrascos, confraternizações, feiras e eventos privados com muita animação.",
      features: ["Formato intimista", "Voz e violão", "Set list personalizado", "Ambiente descontraído"],
      highlighted: false,
    },
  ];

  return (
    <section id="pacotes" className="py-24 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-4">
            Escolha o Seu
          </p>
          <h2 className="section-title mb-4">
            Tipos de <span className="text-gradient">Evento</span>
          </h2>
          <p className="section-subtitle">
            Shows personalizados para cada ocasião especial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 ${
                pkg.highlighted
                  ? "bg-gradient-to-b from-primary/20 to-background border-2 border-primary gold-glow"
                  : "bg-background border border-border/30 hover:border-primary/50"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-display font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Mais Pedido
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                pkg.highlighted ? "bg-primary/30" : "bg-primary/10"
              }`}>
                <pkg.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {pkg.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {pkg.description}
              </p>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.highlighted ? "hero" : "outlineGold"}
                className="w-full"
                asChild
              >
                <a href="#contato">Solicitar Orçamento</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          * Fogos indoor disponíveis quando permitido pelo local do evento
        </p>
      </div>
    </section>
  );
};

export default Packages;
