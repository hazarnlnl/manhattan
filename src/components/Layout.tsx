import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Layout() {
  const location = useLocation();
  const isProjectView = location.pathname === '/projects';
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
  useEffect(() => {
    if (!isProjectView) return;
    
    const projects = ['social', 'stride', 'mode'];
    
    const handleScroll = () => {
      const viewportTop = 0;
      const viewportBottom = window.innerHeight;
      let activeProject: string | null = null;
      
      for (const project of projects) {
        const projectSection = document.querySelector(`.project-section[data-project="${project}"]`);
        if (projectSection) {
          const rect = projectSection.getBoundingClientRect();
          // Check if any part of the project section is visible in viewport
          if (rect.bottom > viewportTop && rect.top < viewportBottom) {
            activeProject = project;
            break; // Use first visible project
          }
        }
      }
      
      setActiveProject(activeProject);
    };
    
    // Use requestAnimationFrame for smoother updates
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    // Check after a short delay to ensure DOM is ready
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [isProjectView]);
  useEffect(() => {
    const socialMedia: string[] = [
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
    <div className={`container ${isProjectView ? 'project-view' : ''}`}>
      <div className="left-column">
        <div className="brand">
          <Link to="/" className="brand-button">{isProjectView ? 'go back' : 'hazar nl'}</Link>
        </div>
        <div className="projects-section">
          {isProjectView ? (
            <>
              <p><a 
                href="#project-social" 
                className={`project-link ${activeProject === 'social' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('project-social');
                  if (element) {
                    const elementTop = element.getBoundingClientRect().top + window.scrollY;
                    const offset = window.innerHeight / 3; // Position at 1/3 from top for better centering
                    window.scrollTo({ top: elementTop - offset, behavior: 'smooth' });
                  }
                }}
              >social</a></p>
              <p><a 
                href="#project-stride" 
                className={`project-link ${activeProject === 'stride' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('project-stride');
                  if (element) {
                    const elementTop = element.getBoundingClientRect().top + window.scrollY;
                    const offset = window.innerHeight / 3;
                    window.scrollTo({ top: elementTop - offset, behavior: 'smooth' });
                  }
                }}
              >stride</a></p>
              <p><a 
                href="#project-mode" 
                className={`project-link ${activeProject === 'mode' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('project-mode');
                  if (element) {
                    const elementTop = element.getBoundingClientRect().top + window.scrollY;
                    const offset = window.innerHeight / 3;
                    window.scrollTo({ top: elementTop - offset, behavior: 'smooth' });
                  }
                }}
              >mode</a></p>
            </>
          ) : (
            <p><Link to="/projects">see work</Link> <img src="/icon_link2.svg" alt="link" className="link-icon" /></p>
          )}
        </div>

        <div className="contact-section">
          <p>feel free to say hi!</p>
          <p><a href="mailto:hazarnl.garden@gmail.com">mail</a></p>
          <p><a href="https://www.are.na/hazar-nl/channels" target="_blank" rel="noopener noreferrer">are.na</a></p>
          <p><a href="https://twitter.com/hazarnlnl" target="_blank" rel="noopener noreferrer">twitter</a></p>
          <p><a href="https://hazarnlnl.substack.com/" target="_blank" rel="noopener noreferrer">substack</a></p>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;


