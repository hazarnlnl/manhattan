import { Fragment } from 'react';

interface ProjectRouteProps {
  title: string;
  content: string;
  extraContent?: string[];
  images: string[];
}

function ProjectRoute({ title, content, extraContent, images }: ProjectRouteProps) {
  return (
    <Fragment>
      <div className="right-column">
        <h1>{title}</h1>
        <p className="project-date">16 october, 2025</p>
        <p>{content}</p>
        {extraContent && extraContent.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
        {images.map((media, index) => {
          const isVideo = media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.mov');
          if (isVideo) {
            return (
              <video
                key={index}
                src={media}
                className="project-media"
                autoPlay
                loop
                muted
                playsInline
              />
            );
          }
          return (
            <img
              key={index}
              src={media}
              alt={`${title} image ${index + 1}`}
              className="project-media"
            />
          );
        })}
      </div>
    </Fragment>
  );
}

export default ProjectRoute;


