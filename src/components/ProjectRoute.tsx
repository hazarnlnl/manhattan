import { Fragment } from 'react';

interface ProjectRouteProps {
  title: string;
  content: string;
  extraContent?: string[];
  date?: string;
  images: string[];
}

function ProjectRoute({ title, content, extraContent, date, images }: ProjectRouteProps) {
  return (
    <Fragment>
      <div className="right-column">
        <h1>{title}</h1>
        <p className="project-date">{date ?? '16 october, 2025'}</p>
        {/* If first media looks like an app icon, show it between date and text */}
        {images && images.length > 0 && /icon/i.test(images[0]) && (
          <img
            src={images[0]}
            alt={`${title} icon`}
            className="project-media is-icon"
          />
        )}
        <p>{content}</p>
        {extraContent && extraContent.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
        {(images || []).slice(images && images.length > 0 && /icon/i.test(images[0]) ? 1 : 0).map((media, index) => {
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


