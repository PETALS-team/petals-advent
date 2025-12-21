import { Flower2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 py-8 md:py-12 px-4 text-center">
      {/* Logo placeholder */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <Flower2 className="w-10 h-10 md:w-12 md:h-12 text-primary" />
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold">
          PETALS Advent
        </h1>
      </div>
      
      <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        24 days of prompts to grow your team health
      </p>
      
      <a 
        href="https://petals.team/advent" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-muted-foreground text-sm mt-2 hover:text-primary transition-colors inline-block"
      >
        Powered by the PETALS Framework
      </a>

      {/* Decorative frost line */}
      <div className="mt-8 max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-frost/30 to-transparent" />
    </header>
  );
};

export default Header;
