import { useEffect } from 'react';
import { X } from 'lucide-react';
import { AdventDay } from '@/data/adventData';
import SocialLinks from './SocialLinks';

interface VideoModalProps {
  data: AdventDay;
  onClose: () => void;
}

const VideoModal = ({ data, onClose }: VideoModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-display text-xl text-gradient-gold">
            Day {data.day}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Video embed - Portrait mode for shorts */}
        <div className="relative bg-black" style={{ paddingTop: '177.78%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${data.youtubeId}?rel=0`}
            title={`PETALS Advent Day ${data.day}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Social Links */}
        <div className="p-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3 text-center">
            Also available on
          </p>
          <SocialLinks 
            instagram={data.instagramUrl}
            tiktok={data.tiktokUrl}
            youtube={data.youtubeUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
