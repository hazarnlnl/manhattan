function ProjectsPage() {
  // Combine all images from all projects
  const allImages = [
    "/social/item1.mp4",
    "/social/item2.png",
    "/social/item3.png",
    "/social/item4.png",
    "/stride/project1_img1.png",
    "/stride/case_image.png",
    "/stride/project1_img2.png",
    "/stride/project1_img3.png",
    "/stride/project1_img4.png",
    "/stride/project1_img5.png",
    "/mode/1.png",
    "/mode/2.png",
    "/mode/3.png"
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
    </div>
  );
}

export default ProjectsPage;
