export default function Modal({ id, project }) {
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
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
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
                  allowFullScreen=""
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
