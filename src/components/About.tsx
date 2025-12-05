import { Music, Mic2, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 stage-bg relative">
      <div className="absolute inset-0 spotlight-overlay opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-4">
            Conheça o Artista
          </p>
          <h2 className="section-title mb-8">
            <span className="text-gradient">Romeo Vanila</span>
          </h2>
          
          <p className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-8">
            Com uma voz forte e marcante que ecoa as influências de 
            <span className="text-primary font-semibold"> Bruno & Marrone</span>, 
            <span className="text-primary font-semibold"> Cristiano Araújo</span> e 
            <span className="text-primary font-semibold"> Gabriel Diniz</span>, 
            Romeo Vanila é sinônimo de emoção e energia no palco.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Carismático e performático, Romeo entrega muito mais que música: 
            ele cria momentos. Com seu sorriso contagiante e interação intensa com o público, 
            cada show é uma experiência única que fica gravada na memória de quem assiste.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Mic2, title: "Voz Marcante", desc: "Timbre único e potente" },
              { icon: Music, title: "Sertanejo Raiz", desc: "Clássicos e sucessos" },
              { icon: Heart, title: "Carisma", desc: "Conexão com o público" },
              { icon: Sparkles, title: "Performance", desc: "Show inesquecível" },
            ].map((item, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 border border-border/30 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
