import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Fernanda & Lucas",
      event: "Casamento",
      text: "O Romeo transformou nosso casamento em um espetáculo! A energia dele contagiou todos os convidados. Momentos inesquecíveis que vamos guardar para sempre.",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      event: "Evento Corporativo",
      text: "Contratamos para nossa confraternização de fim de ano e foi um sucesso absoluto. Profissional, pontual e extremamente talentoso. Recomendo demais!",
      rating: 5,
    },
    {
      name: "Ana Paula",
      event: "Aniversário de 40 anos",
      text: "Que voz! Que presença de palco! O Romeo fez minha festa virar o assunto de todos os meus amigos. Valeu cada centavo investido.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 stage-bg relative overflow-hidden">
      <div className="absolute inset-0 spotlight-overlay opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-display uppercase tracking-[0.2em] text-sm mb-4">
            O Que Dizem
          </p>
          <h2 className="section-title mb-4">
            <span className="text-gradient">Depoimentos</span>
          </h2>
          <p className="section-subtitle">
            A satisfação de quem já viveu a experiência Romeo Vanila
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative card-gradient rounded-2xl p-8 border border-border/30 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/30 pt-4">
                <p className="font-display font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-primary text-sm">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
