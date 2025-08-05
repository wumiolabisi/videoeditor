"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Chargement dynamique de ReactPlayer pour Next.js
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type CustomVideoPlayerProps = {
  url: string;
  fallbackImage: string;
};

export default function IFramePlayer({ url, fallbackImage }: CustomVideoPlayerProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <Image
        src={fallbackImage}
        alt="Vidéo non disponible"
        width={600}
        height={300}
        className="width-100pc height-100pc object-fit-cover"
      />
    );
  }

  return (
    <ReactPlayer
    className="width-100pc video-height-100pc object-fit-cover"
      src={url}
      width="100%"
      height="100%"
      controls
      onError={() => {
        setHasError(true);
      }}
    />
  );
}
