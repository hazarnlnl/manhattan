import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Layout() {
  const location = useLocation();
  const isProjectView = location.pathname === '/projects';
  const isHomeView = location.pathname === '/';
  useEffect(() => {
    const mediaAssets: string[] = [
      '/pic1.mp4',
      '/pic3.png',
      '/pic4.png',
      '/pic5.png',
      '/pic6.png',
      '/pic7.png',
      '/pic9.png'
    ];

    const disposers: Array<() => void> = [];

    mediaAssets.forEach((url) => {
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


