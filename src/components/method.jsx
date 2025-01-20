import { useRef } from "react";

export default function Method({ projects, selectedMethod }) {
  const videoRef = useRef(null);
  const filteredProjects = projects.filter(
    (project) => selectedMethod === "All" || project.theme === selectedMethod
  );
  return (
    <>
      <div>
        {filteredProjects.map((project, index) => (
          //selectedMethod === "All" || project.theme === selectedMethod ? (
          <div key={index} className="method">
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
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p>
          <br />
          There are currently no <strong>{selectedMethod}</strong> projects
        </p>
      )}
    </>
  );
}
