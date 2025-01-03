import React, { useRef } from "react";

export default function Modal({ id, project }) {
  const videoRef = useRef(null);
  const stopVideo = () => {
    if (videoRef.current) {
      const iframe = videoRef.current;
      iframe.src = project.src;
    }
  };

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
                onClick={stopVideo}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h5 className="modal-title" id="modalLabel">
                {project.name}
              </h5>

              <p dangerouslySetInnerHTML={{ __html: project.intro }}></p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
