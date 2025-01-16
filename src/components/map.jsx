import PinsLayer from "../components/pinsLayer";
export default function Map({
  thisPage,
  setPins,
  pins,
  mapImg,
  map,
  stopVideo,
  //setCurrentPin
}) {
  return (
    <div id="map">
      <img className="map-background" src={mapImg} alt="Water Schools" />
      <PinsLayer
        thisPage={thisPage}
        setPins={setPins}
        pins={pins}
        map={map}
        stopVideo={stopVideo}
        //setCurrentPin={setCurrentPin}
      />
      <div className="map-label">
        <p>Click on the map pins above for more information.</p>
      </div>
    </div>
  );
}
