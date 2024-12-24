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
              <h5 className="modal-title" id="modalLabel">
                {project.name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className="modal-body"
              dangerouslySetInnerHTML={{ __html: project.intro }}
            ></div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}
