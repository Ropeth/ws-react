import { useRef } from "react";

export default function Method({ project }) {
  const videoRef = useRef(null);

  return (
    <>
      <div>
        <div className="method">
          <div className="proj-header">
            <h5>{project.name}</h5>
            <p>{project.publish}</p>
            <p className="project-theme">{project.theme}</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: project.intro }}></div>
          {project.src && (
            <iframe
              className="video"
              src={project.src}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen=""
              ref={videoRef}
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
}
