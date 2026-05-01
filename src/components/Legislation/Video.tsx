"use client";

import { useEffect } from "react";
import "lite-youtube-embed/src/lite-yt-embed.css";

export const Video = () => {
  useEffect(() => {
    import("lite-youtube-embed");
  }, []);
  return (
    <lite-youtube videoid="PTQLkMWh8Bo">
      <a href="https://youtube.com/watch?v=PTQLkMWh8Bo" title="Play Video">
        <span>Play Video: Crayon Physics Deluxe - Trailer HD</span>
      </a>
    </lite-youtube>
  );
};
