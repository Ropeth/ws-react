import pin from "../assets/pin.svg";
import Modal from "./modal";

export default function Pin({
  project,
  country,
  pinId,
  coords,
  map,
  //setCurrentPin
}) {
  const thisMapCoords = coords.filter((item) => item.map === map);
  const londif = thisMapCoords[0].lon2 - thisMapCoords[0].lon1;
  const latdif = thisMapCoords[0].lat2 - thisMapCoords[0].lat1;
  const xdif = thisMapCoords[0].x2 - thisMapCoords[0].x1;
  const ydif = thisMapCoords[0].y2 - thisMapCoords[0].y1;
  const x =
    thisMapCoords[0].x1 +
    xdif * ((project.lon - thisMapCoords[0].lon1) / londif);
  const y =
    thisMapCoords[0].y1 +
    ydif * ((project.lat - thisMapCoords[0].lat1) / latdif);

  function logXy() {
    console.log("calc x", x);
    console.log("calc y", y);
  }
  function handleClick(event) {
    logXy();
    event.target.blur(); //remove focus from pin
  }
  return (
    <>
      <img
        className="map-pin"
        src={pin}
        alt={country}
        title={project.name}
        style={
          project.x && project.y
            ? { left: project.x + "%", top: project.y + "%" }
            : { left: x + "%", top: y + "%" }
        }
        value={{ project }}
        data-toggle="modal"
        data-target={"#" + pinId}
        //onClick={() => setCurrentPin(pinId)}
        //onClick={() => logXy()}
        onClick={handleClick}
      />
      <Modal id={pinId} project={project} />
    </>
  );
}
