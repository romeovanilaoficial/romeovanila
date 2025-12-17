import { Button } from "./ui/button";

const Videos = () => {
  return (
    <section id="videos" className="py-24 stage-bg relative">
      <div className="absolute inset-0 spotlight-overlay opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-4">
            Em Ação
          </p>
          <h2 className="section-title mb-4">
            <span className="text-gradient">Vídeos</span> Autorais
          </h2>
          <p className="section-subtitle">
            Confira a energia e emoção dos shows de Romeo Vanila
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden gold-glow">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/F9HArasIp5A"
                title="Romeo Vanila - Show ao Vivo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden gold-glow">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/vxv3vrPMIiw"
                title="Romeo Vanila - Show ao Vivo 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden gold-glow">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/sRwexysEwIw"
                title="Romeo Vanila - Show ao Vivo 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a href="#contato">Solicitar Orçamento</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Videos;
