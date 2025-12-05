import { Button } from "./ui/button";
import { Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 spotlight-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-display uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-up">
            Sertanejo • Shows & Eventos
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Romeo</span>{" "}
            <span className="text-gradient">Vanila</span>
          </h1>

          <p className="text-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up font-light" style={{ animationDelay: "0.2s" }}>
            Voz marcante, presença de palco inesquecível e energia que contagia. 
            Transforme seu evento em um verdadeiro show de emoções.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="animate-pulse-glow" asChild>
              <a href="#contato">Quero Contratar o Show</a>
            </Button>
            <Button variant="outlineGold" size="xl" asChild>
              <a href="#videos" className="flex items-center gap-2">
                <Play size={20} />
                Ver Vídeos
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Shows</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">10+</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Anos</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">100%</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wide">Energia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
