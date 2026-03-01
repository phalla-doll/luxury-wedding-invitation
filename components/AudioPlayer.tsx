'use client';

import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleFirstInteraction = async () => {
      if (hasInteracted || !audio) return;

      try {
        await audio.play();
        setHasInteracted(true);
        setIsPlaying(true);
        setIsMuted(false);
        audio.muted = false;
      } catch (error) {
        console.log('Auto-play prevented by browser policy:', error);
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
      if (!isPlaying) {
        audio.play().catch(console.error);
        setIsPlaying(true);
      }
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/tiktok_atlascomsono_7384161000481672453_audio.mp3"
        autoPlay
        loop
        muted={isMuted}
        preload="auto"
      />
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
        className="fixed bottom-8 left-8 z-[60] bg-white/80 backdrop-blur-sm shadow-lg rounded-full p-4 hover:bg-white transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 group"
      >
        <div className="relative">
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-[var(--color-golden-bronze)] transition-all duration-300 group-hover:scale-110" />
          ) : (
            <Volume2 className="w-6 h-6 text-[var(--color-golden-bronze)] transition-all duration-300 group-hover:scale-110" />
          )}
          <div className={`absolute inset-0 rounded-full ${!isMuted ? 'animate-ping' : 'hidden'} bg-[var(--color-golden-bronze)]/20`} />
        </div>
      </button>
    </>
  );
}

export default AudioPlayer;