import { useState } from 'react';
import { adventDays, AdventDay } from '@/data/adventData';
import AdventDoor from './AdventDoor';
import VideoModal from './VideoModal';

const AdventGrid = () => {
  const [selectedDay, setSelectedDay] = useState<AdventDay | null>(null);

  const handleOpenDoor = (data: AdventDay) => {
    if (data.isReleased) {
      setSelectedDay(data);
    }
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-3 md:gap-4 p-4 md:p-6 lg:p-8">
        {adventDays.map((day) => (
          <AdventDoor
            key={day.day}
            data={day}
            onOpen={handleOpenDoor}
          />
        ))}
      </div>

      {selectedDay && (
        <VideoModal
          data={selectedDay}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default AdventGrid;
