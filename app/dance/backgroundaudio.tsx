"use client";

import { useEffect, useRef } from "react";

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; 

      audioRef.current.play().catch((err) => {
        console.warn("AutoPlay bloqué par le navigateur :", err);
      });
    }
  }, []);

  return (
    <audio ref={audioRef} src="/songs/jonasblakewood-dance-pop.mp3" loop autoPlay />
  );
}