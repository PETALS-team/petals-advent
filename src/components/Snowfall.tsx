import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  fontSize: string;
  opacity: number;
}

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${8 + Math.random() * 12}s`,
      animationDelay: `${Math.random() * 5}s`,
      fontSize: `${6 + Math.random() * 10}px`,
      opacity: 0.2 + Math.random() * 0.4,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snowfall">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            fontSize: flake.fontSize,
            opacity: flake.opacity,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
