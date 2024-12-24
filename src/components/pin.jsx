import pin from "../assets/pin.svg";
import Modal from "./modal";

export default function Pin({ project, country, pinId }) {
  // useEffect(() => {
  //   console.log(selectedProject);
  //   $("#modal .modal-body").innerHTML = "gg";
  // }, [selectedProject]);

  function onPinClick(thisProject) {
    //setSelectedProject(thisProject);
  }
  return (
    <>
      <img
        className="map-pin"
        src={pin}
        alt={country}
        title={project.name}
        style={{ top: project.y + "%", left: project.x + "%" }}
        value={{ project }}
        //onClick={(e) => onPinClick(project)}
        //onClick={onPinClick}
        data-toggle="modal"
        data-target={"#" + pinId}
      />
      <Modal id={pinId} project={project} />
    </>
  );
}
