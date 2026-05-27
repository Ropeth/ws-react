import PinsLayer from "../components/pinsLayer";
// import { useParams } from "react-router-dom";
import { pages } from "../data/pages.json";

export default function Map({
  pins,
  stopVideo,
  setCurrentPin,
  currentPin,
  coords,
  slug,
}) {
  //var { slug } = useParams();
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
      <div className="under-map">
        <div className="map-label">
          <p>Click on the map pins above for more information</p>
        </div>
        {slug == "india-literacy" && (
          <div className="under-map-section">
            <a
              href="/tribal-women-as-water-leaders"
              className="whole-block-link"
            >
              <h3 style={{ marginBottom: "1em" }}>
                Women grassroots leaders transforming water systems
              </h3>
              <img
                className="rounded"
                src="/images/jal-sahelis-2.jpg"
                alt="Jal Sahelis meeting"
                width="200"
                style={{ marginBottom: "1em" }}
              />
              <p>
                In the quiet, water-scarce landscapes of Rajasthan, a silent
                transformation has begun to unfold – led by the strength and
                determination of the women living there.
              </p>
              <p style={{ textDecoration: "underline", textAlign: "right" }}>
                Read more
              </p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
