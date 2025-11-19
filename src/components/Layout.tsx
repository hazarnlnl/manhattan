import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Layout() {
  const location = useLocation();
  const isProjectView = location.pathname === '/projects';
  const isHomeView = location.pathname === '/';
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
    <div className={`container ${isProjectView ? 'project-view' : ''} ${isHomeView ? 'home-view' : ''}`}>
      {!isHomeView && (
      <div className="left-column">
        <div className="brand">
          <Link to="/" className="brand-button">{isProjectView ? 'go back' : 'hazar nl'}</Link>
        </div>
        {!isProjectView && (
          <>
            <div className="projects-section">
              <p><Link to="/projects">see work</Link> <img src="/icon_link2.svg" alt="link" className="link-icon" /></p>
            </div>

            <div className="contact-section">
              <p>feel free to say hi!</p>
              <p><a href="mailto:hazarnl.garden@gmail.com">mail</a></p>
              <p><a href="https://www.are.na/hazar-nl/channels" target="_blank" rel="noopener noreferrer">are.na</a></p>
              <p><a href="https://twitter.com/hazarnlnl" target="_blank" rel="noopener noreferrer">twitter</a></p>
              <p><a href="https://hazarnlnl.substack.com/" target="_blank" rel="noopener noreferrer">substack</a></p>
            </div>
          </>
        )}
      </div>
      )}

      <Outlet />
    </div>
  );
}

export default Layout;


