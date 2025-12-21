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

const instagramLinks = [
  "https://www.instagram.com/reel/DRtjDjMimxR/",
  "https://www.instagram.com/reel/DRwLPygD70i/",
  "https://www.instagram.com/reel/DRyv6eZiU-N/",
  "https://www.instagram.com/reel/DR1UtCBjp-X/",
  "https://www.instagram.com/reel/DR3_6bqkoS-/",
  "https://www.instagram.com/reel/DR6ktT9iqu6/",
  "https://www.instagram.com/reel/DR9Jf-uDlqc/",
  "https://www.instagram.com/reel/DR_uTG7goxf/",
  "https://www.instagram.com/reel/DSCTK9kk4AV/",
  "https://www.instagram.com/reel/DSEuMypj2jC/",
  "https://www.instagram.com/reel/DSHcru1ggLq/",
  "https://www.instagram.com/reel/DSKBeqOiQXQ/",
  "https://www.instagram.com/reel/DSMmRdMDaeI/",
  "https://www.instagram.com/reel/DSPLEQZjR4Z/",
  "https://www.instagram.com/reel/DSRv80NCE_t/",
  "https://www.instagram.com/reel/DSUUp1GDRcy/",
  "https://www.instagram.com/reel/DSW5cqyEgf9/",
  "https://www.instagram.com/reel/DSZeP0bk2I0/",
  "https://www.instagram.com/reel/DScDCuRCvYY/",
  "https://www.instagram.com/reel/DSe5CqQlU66/",
];

const tiktokLinks = [
  "https://vm.tiktok.com/ZNR2U33ap/",
  "https://vm.tiktok.com/ZNR2ySAdh/",
  "https://vm.tiktok.com/ZNR2yMdtX/",
  "https://vm.tiktok.com/ZNR2yJDUh/",
  "https://vm.tiktok.com/ZNR2yNRw4/",
  "https://vm.tiktok.com/ZNR2U3fjw/",
  "https://vm.tiktok.com/ZNR2yk2fS/",
  "https://vm.tiktok.com/ZNR2yk3pD/",
  "https://vm.tiktok.com/ZNR2yhKyb/",
  "https://vm.tiktok.com/ZNR2yYqgF/",
  "https://vm.tiktok.com/ZNR2yLYqN/",
  "https://vm.tiktok.com/ZNR2ySHLF/",
  "https://vm.tiktok.com/ZNR2UoWu4/",
  "https://vm.tiktok.com/ZNR2y2m5M/",
  "https://vm.tiktok.com/ZNR2y26W1/",
  "https://vm.tiktok.com/ZNR2UTpbK/",
  "https://vm.tiktok.com/ZNR2yjGao/",
  "https://vm.tiktok.com/ZNR2yNopR/",
  "https://vm.tiktok.com/ZNR2UEeyE/",
  "https://vm.tiktok.com/ZNR2y1MnT/",
  "https://vm.tiktok.com/ZNR2yYFYM/",
];

export const adventDays: AdventDay[] = Array.from({ length: 24 }, (_, i) => {
  const day = i + 1;
  const hasVideo = day <= youtubeLinks.length;
  const youtubeUrl = hasVideo ? youtubeLinks[i] : '';
  const instagramUrl = hasVideo && day <= instagramLinks.length ? instagramLinks[i] : '';
  const tiktokUrl = hasVideo && day <= tiktokLinks.length ? tiktokLinks[i] : '';
  
  return {
    day,
    youtubeUrl,
    youtubeId: hasVideo ? extractYoutubeId(youtubeUrl) : '',
    instagramUrl,
    tiktokUrl,
    isReleased: hasVideo,
  };
});
