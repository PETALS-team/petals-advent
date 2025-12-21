import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import AdventGrid from '@/components/AdventGrid';
import Snowfall from '@/components/Snowfall';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PETALS Advent - 24 Days of Team Health Prompts</title>
        <meta 
          name="description" 
          content="Discover 24 daily video prompts to grow your team health using the PETALS framework. Open a new door each day for insights on building stronger teams." 
        />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        <Snowfall />
        
        <div className="relative z-10">
          <Header />
          <main>
            <AdventGrid />
          </main>
          
          {/* Footer */}
          <footer className="py-8 px-4 text-center border-t border-border/30 mt-8">
            <p className="text-muted-foreground text-sm">
              © 2024 PETALS Framework. Building healthier teams together.
            </p>
            <a 
              href="#" 
              className="inline-block mt-2 text-primary hover:text-primary/80 text-sm transition-colors"
            >
              Register for the PETALS App →
            </a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Index;
