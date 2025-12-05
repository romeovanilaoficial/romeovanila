const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-primary">
              ROMEO VANILA
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Romeo Vanila. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              YouTube
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
