export interface AdventDay {
  day: number;
  youtubeUrl: string;
  youtubeId: string;
  instagramUrl: string;
  tiktokUrl: string;
  isReleased: boolean;
}

// Extract YouTube video ID from shorts URL
const extractYoutubeId = (url: string): string => {
  const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : '';
};

const youtubeLinks = [
  "https://youtube.com/shorts/UKbhaJLZqMc?feature=share",
  "https://youtube.com/shorts/E_0b43MDLyY?feature=share",
  "https://youtube.com/shorts/5sES41wwkgQ?feature=share",
  "https://youtube.com/shorts/3j9xGOFzOBU?feature=share",
  "https://youtube.com/shorts/0BrXC2H9TZ8?feature=share",
  "https://youtube.com/shorts/_-FIQeIcJIE?feature=share",
  "https://youtube.com/shorts/ZIik6OG6wPM?feature=share",
  "https://youtube.com/shorts/fMN0bWMHbDo?feature=share",
  "https://youtube.com/shorts/ws7KTgJiu_0?feature=share",
  "https://youtube.com/shorts/18M6kUV4pU4?feature=share",
  "https://youtube.com/shorts/JLVOQQH_UzI?feature=share",
  "https://youtube.com/shorts/nI35x7VXFMM?feature=share",
  "https://youtube.com/shorts/nI35x7VXFMM?feature=share",
  "https://youtube.com/shorts/GkqAoIEby7M?feature=share",
  "https://youtube.com/shorts/Y7v6_8mLf-A?feature=share",
  "https://youtube.com/shorts/Y7v6_8mLf-A?feature=share",
  "https://youtube.com/shorts/VNBCTBTkcS8?feature=share",
  "https://youtube.com/shorts/WSN-L2KYw7Y?feature=share",
  "https://youtube.com/shorts/YnHCHJhOiL0?feature=share",
  "https://youtube.com/shorts/yAklrE8WGkk?feature=share",
  "https://youtube.com/shorts/BunVbJUvAUI?feature=share",
];

export const adventDays: AdventDay[] = Array.from({ length: 24 }, (_, i) => {
  const day = i + 1;
  const hasVideo = day <= youtubeLinks.length;
  const youtubeUrl = hasVideo ? youtubeLinks[i] : '';
  
  return {
    day,
    youtubeUrl,
    youtubeId: hasVideo ? extractYoutubeId(youtubeUrl) : '',
    instagramUrl: hasVideo ? `https://instagram.com/petals_placeholder_day${day}` : '',
    tiktokUrl: hasVideo ? `https://tiktok.com/@petals_placeholder_day${day}` : '',
    isReleased: hasVideo,
  };
});
