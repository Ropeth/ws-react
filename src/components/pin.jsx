import pin from "../assets/pin.svg";
const onPinClick = () => {
  console.log("pin clicked ");
};
export default function Pin({ project, country }) {
  return (
    <>
      <img
        className="map-pin"
        src={pin}
        alt={country}
        title={project.name}
        style={{ top: project.y + "%", left: project.x + "%" }}
        onClick={onPinClick}
      />
    </>
  );
}
