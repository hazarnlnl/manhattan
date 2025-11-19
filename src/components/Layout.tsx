import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

function Layout() {
  useEffect(() => {
    const socialMedia: string[] = [
      '/social/icon2.png',
      '/social/item1.mp4',
      '/social/item2.png',
      '/social/item3.png',
      '/social/item4.png'
    ];

    const strideMedia: string[] = [
      '/stride/case_image.png',
      '/stride/project1_img1.png',
      '/stride/project1_img2.png',
      '/stride/project1_img3.png',
      '/stride/project1_img4.png',
      '/stride/project1_img5.png',
      '/stride/project1_img6.png'
    ];

    const modeMedia: string[] = [
      '/mode/1.png',
      '/mode/2.png',
      '/mode/3.png'
    ];

    const disposers: Array<() => void> = [];

    [...socialMedia, ...strideMedia, ...modeMedia].forEach((url) => {
      const isVideo = url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov');
      if (isVideo) {
        const video = document.createElement('video');
        video.src = url;
        video.preload = 'auto';
        video.muted = true;
        // Trigger load without attaching to DOM
        try { video.load(); } catch {}
        disposers.push(() => {
          video.removeAttribute('src');
          try { video.load(); } catch {}
        });
      } else {
        const img = new Image();
        img.decoding = 'async';
        img.loading = 'eager';
        img.src = url;
        disposers.push(() => {
          img.src = '';
        });
      }
    });

    return () => {
      disposers.forEach((dispose) => dispose());
    };
  }, []);

  return (
    <div className="container home-view">
      <Outlet />
    </div>
  );
}

export default Layout;


