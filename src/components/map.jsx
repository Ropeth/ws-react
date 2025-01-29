import PinsLayer from "../components/pinsLayer";
import { pages } from "../data/pages.json";
import { useParams } from "react-router-dom";

export default function Map({
  pins,
  stopVideo,
  setCurrentPin,
  currentPin,
  coords
}) {
  const { slug } = useParams();
  const page = pages.find((x) => x.slug === slug);
  return (
    <div id="map">
      <img className="map-background" src={page.map} alt="Water Schools" />
      <PinsLayer
        pins={pins}
        map={page.school}
        stopVideo={stopVideo}
        setCurrentPin={setCurrentPin}
        currentPin={currentPin}
        coords={coords}
      />
      <div className="map-label">
        <p>Click on the map pins above for more information.</p>
      </div>
    </div>
  );
}
