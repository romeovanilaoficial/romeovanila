import { Guitar, Laugh, Users, Flame, Volume2, Star } from "lucide-react";

const Differentials = () => {
  const features = [
    {
      icon: Guitar,
      title: "Técnica Avançada no Violão",
      description: "Manobras impressionantes com acordes invertidos e solos que arrancam aplausos. Uma verdadeira aula de virtuosismo.",
    },
    {
      icon: Volume2,
      title: "Efeitos Sonoros ao Vivo",
      description: "Arranjos exclusivos e efeitos que elevam cada música a outro patamar, criando uma atmosfera única.",
    },
    {
      icon: Laugh,
      title: "Humor no Palco",
      description: "Momentos de descontração que aproximam o artista do público, tornando o show leve e divertido.",
    },
    {
      icon: Users,
      title: "Interação Intensa",
      description: "O público não assiste, participa! Romeo transforma cada pessoa em parte do espetáculo.",
    },
    {
      icon: Flame,
      title: "Fogos Indoor",
      description: "Efeitos especiais com fogos indoor disponíveis para eventos que permitem, criando momentos épicos.",
    },
    {
      icon: Star,
      title: "Repertório Completo",
      description: "Dos clássicos sertanejos aos hits do momento, um repertório que agrada todas as gerações.",
    },
  ];

  return (
    <section id="diferenciais" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-4">
            Por Que Escolher
          </p>
          <h2 className="section-title mb-4">
            Diferenciais do <span className="text-gradient">Show</span>
          </h2>
          <p className="section-subtitle">
            Cada detalhe pensado para transformar seu evento em um espetáculo memorável
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-background/50 border border-border/30 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
