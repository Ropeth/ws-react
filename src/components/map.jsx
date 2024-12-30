import africaMap from "../assets/Africa-brown.svg";
import PinsLayer from "../components/pinsLayer";
export default function Map({ dataUrl, setPins, pins, setCurrentPin }) {
  return (
    <div className="map">
      <img className="map-background" src={africaMap} alt="Water Schools" />
      <PinsLayer
        dataUrl={dataUrl}
        setPins={setPins}
        pins={pins}
        setCurrentPin={setCurrentPin}
      />
    </div>
  );
}
