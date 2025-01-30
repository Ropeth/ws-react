import PinsLayer from "../components/pinsLayer";
import { useParams } from "react-router-dom";
import { pages } from "../data/pages.json";

export default function Map({
  pins,
  stopVideo,
  setCurrentPin,
  currentPin,
  coords,
}) {
  var { slug } = useParams();
  if (slug == undefined) {
    slug = "africa-literacy";
  }
  const page = pages.find((x) => x.slug === slug);

  const src = "/maps/" + page.map;
  return (
    <div id="map">
      <img className="map-background" src={src} alt="Water Schools" />
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
