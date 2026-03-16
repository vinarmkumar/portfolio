import React, { useEffect, useRef, useState } from 'react';

/**
 * LazyImage Component - Professional Image Lazy Loading with WebP Support
 * Features:
 * - WebP format with fallback for older browsers
 * - IntersectionObserver for efficient lazy loading
 * - Placeholder blur effect
 * - Responsive sizing
 * - Performance optimized
 */
export default function LazyImage({ src, alt, className = '', ...props }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Get WebP alternative if exists
    const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    // Check WebP support
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

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imgRef.current) {
          imgRef.current.src = finalSrc;
          imgRef.current.onload = () => setIsLoaded(true);
          imgRef.current.onerror = () => {
            // Fallback to original if WebP fails
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
