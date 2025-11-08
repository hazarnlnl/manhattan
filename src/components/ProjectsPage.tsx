function ProjectsPage() {
  const renderProject = (title: string, content: string, extraContent: string[] | undefined, date: string | undefined, images: string[]) => {
    return (
      <div key={title} className="project-section" data-project={title}>
        <h1 id={`project-${title}`}>{title}</h1>
        <p className="project-date">{date ?? '16 october, 2025'}</p>
        {/* If first media looks like an app icon, show it between date and text */}
        {images && images.length > 0 && /icon/i.test(images[0]) && (
          <img
            src={images[0]}
            alt={`${title} icon`}
            className="project-media is-icon"
          />
        )}
        {content && <p>{content}</p>}
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
    );
  };

  return (
    <div className="right-column">
      {renderProject(
        "social",
        "A social platform for connecting creators through shared interests and experiences.",
        [
          "This social platform reimagines how creators discover and collaborate with one another by moving beyond superficial metrics like follower counts. Instead, it focuses on the substance that truly matters—shared passions, complementary skills, and aligned creative visions.",
          "Whether you're a photographer seeking a storyteller, a musician looking for a visual artist, or a writer hoping to connect with illustrators, the platform uses intelligent matching based on interests, project goals, and creative philosophies. Members can showcase their work through rich portfolios, participate in interest-based groups, and engage in collaborative challenges that spark organic connections. The emphasis is on fostering genuine relationships that lead to meaningful projects rather than transactional interactions."
        ],
        "12 june 2025",
        ["/social/icon2.png", "/social/tags2.mp4", "/social/pic.png", "/social/Twitter post - 1.png", "/social/Twitter post - 2.png", "/social/Twitter post - 3.png"]
      )}
      {renderProject(
        "stride",
        "Stride is a simple run app that keeps you moving. It trims the noise, tracks only what matters, and helps you build momentum toward your next goal.",
        [
          "Goal-oriented by design—it focuses on progress over perfection, making each run feel clear and intentional."
        ],
        "23 july 2024",
        ["/stride/project1_img1.png", "/stride/case_image.png", "/stride/project1_img2.png", "/stride/project1_img3.png", "/stride/project1_img4.png", "/stride/project1_img5.png"]
      )}
      {renderProject(
        "mode",
        "",
        undefined,
        "23 december 2024",
        ["/mode/1.png", "/mode/2.png", "/mode/3.png"]
      )}
    </div>
  );
}

export default ProjectsPage;
