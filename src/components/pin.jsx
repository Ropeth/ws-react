import pin from "../assets/pin.svg";
import Modal from "./modal";

export default function Pin({
  project,
  country,
  pinId,
  //setCurrentPin
}) {
  return (
    <>
      <img
        className="map-pin"
        src={pin}
        alt={country}
        title={project.name}
        style={{ top: project.y + "%", left: project.x + "%" }}
        value={{ project }}
        data-toggle="modal"
        data-target={"#" + pinId}
        //onClick={() => setCurrentPin(pinId)}
      />
      <Modal id={pinId} project={project} />
    </>
  );
}
