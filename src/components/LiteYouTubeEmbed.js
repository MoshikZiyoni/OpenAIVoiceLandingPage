import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function LiteYouTubeEmbed({
  videoId = 'NUAomkQIMPI',
  title = 'ערן ציפל - שיווק דיגיטלי לעסקים מדגים את Bot 10'
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handlePlayClick = () => {
    setIsLoaded(true);
  };

  return (
    <div className="lite-yt-wrapper">
      <div className="lite-yt-card">
        {!isLoaded ? (
          <div
            className="lite-yt-thumbnail"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
            onClick={handlePlayClick}
            role="button"
            tabIndex={0}
            aria-label={`הפעל סרטון: ${title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePlayClick();
              }
            }}
          >
            <div className="lite-yt-overlay"></div>
            <button className="lite-yt-play-btn" aria-label="נגן">
              <Play size={32} fill="#ffffff" color="#ffffff" style={{ marginLeft: '4px' }} />
            </button>
            <div className="lite-yt-caption">
              <span>{title}</span>
            </div>
          </div>
        ) : (
          <iframe
            className="lite-yt-iframe"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
