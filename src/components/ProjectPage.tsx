import { useNavigate } from 'react-router-dom';
import './ProjectPage.css';

interface ProjectPageProps {
  title: string;
  content: string;
  images: string[];
}

function ProjectPage({ title, content, images }: ProjectPageProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="project-page">
      <div className="container">
        <button className="back-button" onClick={handleBack}>
          <img src="/back_icon2.svg" alt="back" className="back-icon" />
        </button>
        
        <div className="text-content">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        
        <div className="image-grid">
          {images.map((media, index) => {
            const isVideo = media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.mov');
            
            if (isVideo) {
              return (
                <video 
                  key={index} 
                  src={media} 
                  className="project-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              );
            } else {
              return (
                <img 
                  key={index} 
                  src={media} 
                  alt={`${title} image ${index + 1}`}
                  className="project-image"
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;