"use client";

import React from 'react';
import { GlassCard } from "@/components/ui/GlassCard";
import { Play, ExternalLink } from 'lucide-react';

const videos = [
  {
    type: 'youtube',
    id: 'Azjt1044Ues',
    title: 'Medical Production - Sample 1',
  },
  {
    type: 'youtube',
    id: 'kPL6iRweoBs',
    title: 'Medical Production - Sample 2',
  },
  // Adding placeholders for Facebook Reels since they are better handled via direct links or specific embeds
  {
    type: 'facebook',
    url: 'https://www.facebook.com/share/r/1Bwo5Qw8mk/',
    title: 'Success Story Reel 1',
  },
  {
    type: 'facebook',
    url: 'https://www.facebook.com/share/r/1Cm2SGjCph/',
    title: 'Success Story Reel 2',
  },
  {
    type: 'facebook',
    url: 'https://www.facebook.com/share/r/17d3U5d3qk/',
    title: 'Clinical Excellence Reel',
  }
];

export const VideoGallery = () => {
  return (
    <div id="video-gallery" className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        {videos.filter(v => v.type === 'youtube').map((video, i) => (
          <GlassCard key={i} className="overflow-hidden p-0 group">
            <div className="aspect-video relative">
               <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4 text-right">
              <h4 className="text-[#F0F1FF] font-bold text-lg">{video.title}</h4>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {videos.filter(v => v.type === 'facebook').map((video, i) => (
          <GlassCard key={i} className="p-6 group hover:border-[#5B5EFF]/50 transition-all cursor-pointer">
             <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#5B5EFF]/10 flex items-center justify-center text-[#5B5EFF] group-hover:bg-[#5B5EFF] group-hover:text-white transition-all">
                   <Play size={32} />
                </div>
                <div className="text-center">
                   <h4 className="text-[#F0F1FF] font-bold mb-2">{video.title}</h4>
                   <p className="text-[#9496C0] text-xs">شاهد على فيسبوك ريلز</p>
                </div>
                <a 
                  href={video.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#5B5EFF] text-xs font-bold uppercase tracking-widest mt-2"
                >
                  عرض الفيديو <ExternalLink size={12} />
                </a>
             </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
