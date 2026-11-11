import React, { useState } from 'react';
import { ImageIcon } from 'lucide-react';

interface MediaImageProps {
  src?: string;
  alt: string;
  className?: string;
}

/**
 * Lazy-loaded image that falls back to a neutral placeholder
 * when the file is missing (e.g. before the real photo is added).
 */
export const MediaImage: React.FC<MediaImageProps> = ({ src, alt, className = '' }) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`media-frame media-placeholder ${className}`} role="img" aria-label={`${alt} (image coming soon)`}>
        <ImageIcon size={26} strokeWidth={1.5} />
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <div className={`media-frame ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
    </div>
  );
};
