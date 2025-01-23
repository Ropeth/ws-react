import PinsLayer from "../components/pinsLayer";
import { pages } from "../data/pages.json";
import { useParams } from "react-router-dom";

export default function Map({
  //thisPage,
  setPins,
  pins,
  // mapImg,
  // map,
  stopVideo,
  setCurrentPin,
  currentPin,
}) {
  const { slug } = useParams();
  //console.log("slug", slug);
  const page = pages.find((x) => x.slug === slug);
  //console.log("page", page);
  return (
    <div id="map">
      <img className="map-background" src={page.map} alt="Water Schools" />
      <PinsLayer
        thisPage={slug}
        setPins={setPins}
        pins={pins}
        map={page.school}
        stopVideo={stopVideo}
        setCurrentPin={setCurrentPin}
        currentPin={currentPin}
      />
      <div className="map-label">
        <p>Click on the map pins above for more information.</p>
      </div>
    </div>
  );
}
