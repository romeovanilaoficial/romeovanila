import { Button } from "./ui/button";
import { Play } from "lucide-react";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Show Completo - Casamento",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      duration: "3:45",
    },
    {
      id: 2,
      title: "Evento Corporativo",
      thumbnail: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
      duration: "4:20",
    },
    {
      id: 3,
      title: "Melhores Momentos 2024",
      thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
      duration: "5:12",
    },
  ];

  return (
    <section id="videos" className="py-24 stage-bg relative">
      <div className="absolute inset-0 spotlight-overlay opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-4">
            Em Ação
          </p>
          <h2 className="section-title mb-4">
            <span className="text-gradient">Vídeos</span> ao Vivo
          </h2>
          <p className="section-subtitle">
            Confira a energia e emoção dos shows de Romeo Vanila
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300 gold-glow">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-display text-foreground font-semibold mb-1">
                  {video.title}
                </p>
                <p className="text-muted-foreground text-sm">{video.duration}</p>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-foreground">
                {video.duration}
              </div>
            </div>
          ))}
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
