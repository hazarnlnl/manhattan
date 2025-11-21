function ProjectsPage() {
  // Combine all images from all projects
  const allImages = [
    "/pic1.mp4",
    "/pic3.png",
    "/pic4.png",
    "/pic5.png",
    "/pic6.png",
    "/pic7.png",
    "/pic9.png"
  ];

  return (
    <div className="projects-content">
      {allImages.map((media, index) => {
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
            alt={`project image ${index + 1}`}
            className="project-media"
          />
        );
      })}

      <div className="projects-footer">
        <p>spots available for december</p>
        <p><a href="mailto:hazarnl.garden@gmail.com">contact</a></p>
      </div>
    </div>
  );
}

export default ProjectsPage;
