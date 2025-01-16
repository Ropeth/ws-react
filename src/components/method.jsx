import { useRef } from "react";

export default function Method({ projects }) {
  const videoRef = useRef(null);
  return (
    <div id="method">
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p dangerouslySetInnerHTML={{ __html: project.intro }}></p>
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
          <p>{project.theme}</p>
          <p>{project.publish}</p>
        </div>
      ))}
    </div>
  );
}
