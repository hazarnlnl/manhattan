import { useEffect, useRef } from 'react';

interface ProjectRouteProps {
  title: string;
  content: string;
  images: string[];
}

function ProjectRoute({ title, content, images }: ProjectRouteProps) {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel as EventListener);
  }, []);

  return (
    <>
      <div className="right-column">
        <p>{title}</p>
        <p>{content}</p>
      </div>

      <div className="bottom-gallery" ref={galleryRef}>
        {images.map((media, index) => {
          const isVideo = media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.mov');
          if (isVideo) {
            return (
              <video key={index} src={media} className="gallery-item" autoPlay loop muted playsInline />
            );
          }
          return (
            <img key={index} src={media} alt={`${title} image ${index + 1}`} className="gallery-item" />
          );
        })}
      </div>
    </>
  );
}

export default ProjectRoute;


