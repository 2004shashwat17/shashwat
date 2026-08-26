import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { videos, type Video } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';

export function ProductVideos() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  return (
    <Section id="content" eyebrow="Content & Building in Public" heading="Product Videos">
      <p className="reveal text-muted mb-8 max-w-2xl">
        Watch me build \u2014 product demos, walkthroughs, and videos from my product-building journey.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, i) => (
          <Reveal key={video.id} delay={i * 80}>
            <VideoCard video={video} onClick={() => setActiveVideo(video)} />
          </Reveal>
        ))}
      </div>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div className="max-w-3xl w-full premium-card p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{activeVideo.title}</h3>
              <button onClick={() => setActiveVideo(null)} className="text-muted hover:text-base">
                <Play size={20} className="rotate-90" />
              </button>
            </div>
            <div className="aspect-video bg-subtle rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mx-auto mb-3">
                  <Play size={24} />
                </div>
                <p className="text-sm text-subtle">{activeVideo.url}</p>
              </div>
            </div>
            <p className="text-sm text-muted">{activeVideo.description}</p>
            <a
              href={activeVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent"
            >
              Open original
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      )}
    </Section>
  );
}

function VideoCard({ video, onClick }: { video: Video; onClick: () => void }) {
  return (
    <div className="premium-card overflow-hidden cursor-pointer group" onClick={onClick}>
      {/* Thumbnail */}
      <div className="aspect-video bg-subtle flex items-center justify-center relative">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all">
          <Play size={20} className="ml-0.5" />
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant="accent">{video.platform}</Badge>
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold mb-1 group-hover:text-accent transition-colors">
          {video.title}
        </h3>
        <p className="text-xs text-subtle mb-2 font-mono">{video.date} &bull; {video.product}</p>
        <p className="text-sm text-muted leading-relaxed">{video.description}</p>
      </div>
    </div>
  );
}
