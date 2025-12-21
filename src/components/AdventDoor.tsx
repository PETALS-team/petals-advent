import { useState } from 'react';
import { AdventDay } from '@/data/adventData';
import { Snowflake, Lock } from 'lucide-react';

interface AdventDoorProps {
  data: AdventDay;
  onOpen: (data: AdventDay) => void;
}

const AdventDoor = ({ data, onOpen }: AdventDoorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        if (data.isReleased) {
          onOpen(data);
        }
      }, 400);
    } else if (data.isReleased) {
      onOpen(data);
    }
  };

  return (
    <div
      className={`advent-door aspect-square ${isOpen ? 'door-open' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`Day ${data.day}${!data.isReleased ? ' - Not yet available' : ''}`}
    >
      {/* Back of door (revealed content) */}
      <div className="door-back">
        {data.isReleased ? (
          <div className="flex flex-col items-center gap-2">
            <Snowflake className="w-8 h-8 text-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Click to watch</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Lock className="w-6 h-6 text-muted-foreground" />
            <span className="text-xs text-muted-foreground text-center leading-tight">
              Too soon!<br />
              Come back on<br />
              <span className="text-primary font-semibold">Day {data.day}</span>
            </span>
          </div>
        )}
      </div>

      {/* Front of door */}
      <div className="door-front">
        <span className="door-number font-display">{data.day}</span>
        
        {/* Decorative elements */}
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gold/30" />
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-frost/30" />
      </div>
    </div>
  );
};

export default AdventDoor;
