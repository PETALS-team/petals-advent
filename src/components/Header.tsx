import petalsLogo from '@/assets/petals-logo.png';

const Header = () => {
  return (
    <header className="relative z-10 py-8 md:py-12 px-4 text-center">
      {/* Logo and heading */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <img 
          src={petalsLogo} 
          alt="PETALS Logo" 
          className="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
        />
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-heading drop-shadow-lg">
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
