import africaMap from "../assets/Africa-brown.svg";
import PinsLayer from "../components/pinsLayer";
export default function Map({ pins, onClick }) {
  return (
    <div className="map">
      <img className="map-background" src={africaMap} alt="Water Schools" />
      <PinsLayer pins={pins} onClick={onClick} />
    </div>
  );
}
