import { useRef } from "react";

export default function Modal({ id, project, stopVideo }) {
  const videoRef = useRef(null);
  return (
    <>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-date">{project.publish}</p>
              <button
                id="stop"
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => stopVideo(videoRef, project.src)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h5 className="modal-title" id="modalLabel">
                {project.name}
              </h5>
              <h6 className="modal-subtitle">{project.theme}</h6>

              <p dangerouslySetInnerHTML={{ __html: project.intro }}></p>
              {project.link && (
                <a href={project.link} target="_blank">
                  <p>Visit website</p>
                </a>
              )}
            </div>
            <div className="modal-footer">
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
              {project.presentation && (
                <a
                  href={project.presentation}
                  target="_blank"
                  className="pres"
                  title="Download the presentation"
                ></a>
              )}
              {project.pic && (
                <img src={project.pic} alt={project.name} width="100%" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
