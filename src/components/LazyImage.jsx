import React, { useEffect, useRef, useState } from 'react';

export default function LazyImage({ src, alt, className = '', ...props }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {

    const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      try {
        return canvas.toDataURL('image/webp').includes('webp');
      } catch {
        return false;
      }
    };

    const finalSrc = checkWebPSupport() ? webpSrc : src;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imgRef.current) {
          imgRef.current.src = finalSrc;
          imgRef.current.onload = () => setIsLoaded(true);
          imgRef.current.onerror = () => {

            imgRef.current.src = src;
            setIsLoaded(true);
          };
          observer.unobserve(imgRef.current);
        }
      },
      {
        rootMargin: '50px', // Start loading before entering viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      alt={alt}
      className={`transition-opacity duration-500 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      {...props}
    />
  );
}
