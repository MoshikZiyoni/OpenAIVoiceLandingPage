import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Flame } from 'lucide-react';

export default function HeroAudioPlayer({ audioSrc, onPlayTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const waveBars = [
    12, 24, 18, 32, 28, 14, 20, 36, 42, 30,
    22, 16, 28, 38, 44, 32, 20, 26, 34, 18,
    24, 30, 40, 35, 22, 16, 28, 32, 20, 14
  ];

  const syncDuration = () => {
    const audio = audioRef.current;
    if (audio && audio.duration && !isNaN(audio.duration) && audio.duration !== Infinity) {
      setDuration(audio.duration);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.readyState >= 1 && audio.duration) {
      syncDuration();
    }

    const handleLoadedMetadata = () => syncDuration();
    const handleCanPlay = () => syncDuration();
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (!duration && audio.duration) syncDuration();
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioSrc, duration]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
        if (onPlayTrack) onPlayTrack('eran_voice_clone');
      }).catch((err) => {
        console.error('Audio play error:', err);
      });
    }
  };

  const handleWaveClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !duration) return;
    // RTL: clicking from right
    const clickX = rect.right - e.clientX;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = ratio * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="hero-audio-card" dir="rtl">
      <div className="hero-audio-header">
        <div className="hero-audio-badge">
          <Flame size={15} className="hero-badge-flame" />
          <span>הקלטת הדגל הבלעדית</span>
        </div>
        <span className="hero-audio-tag">Voice Cloning 100%</span>
      </div>

      <div className="hero-audio-title-row">
        <h3 className="hero-audio-title">
          👑 שמעו הדגמה חיה: שכפול הקול של ערן בשיחת סינון לידים ואפיון משכנתא בזמן אמת
        </h3>
      </div>
      <p className="hero-audio-desc">
        שיחה יוצאת אמיתית של הבוט שמסנן ליד, מזהה שאלות, מבצע סימולציית אפיון משכנתא מותאמת אישית וסוגר פגישה ביומן – בלי שום תחושה רובוטית.
      </p>

      <div className="hero-audio-player-box">
        <button
          type="button"
          className={`hero-audio-play-btn ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          aria-label={isPlaying ? 'השהה הקלטה' : 'נגן הקלטה'}
        >
          {isPlaying ? (
            <Pause size={24} fill="#0b0f19" color="#0b0f19" />
          ) : (
            <Play size={24} fill="#0b0f19" color="#0b0f19" style={{ marginRight: '3px' }} />
          )}
        </button>

        <div className="hero-audio-controls">
          <div
            className="hero-waveform-container"
            onClick={handleWaveClick}
            title="לחץ לקפיצה בשיחה"
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {waveBars.map((h, i) => {
              const barProgress = (i / waveBars.length) * 100;
              const isActive = barProgress <= progressPercent;
              return (
                <div
                  key={i}
                  className={`hero-wave-bar ${isActive ? 'active' : ''} ${isPlaying ? 'animating' : ''}`}
                  style={{
                    height: `${h}px`,
                    animationDelay: `${(i % 5) * 0.15}s`
                  }}
                />
              );
            })}
          </div>

          <div className="hero-audio-progress-bar-bg" onClick={handleWaveClick}>
            <div
              className="hero-audio-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="hero-audio-time-row">
            <span>{formatTime(currentTime)}</span>
            <span className="hero-audio-time-total">
              {duration > 0 ? formatTime(duration) : '0:34'}
            </span>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
        onLoadedMetadata={syncDuration}
        onCanPlay={syncDuration}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
        onPlay={() => {
          setIsPlaying(true);
          if (onPlayTrack) onPlayTrack('eran_voice_clone');
        }}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}
