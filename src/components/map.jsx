import PinsLayer from "../components/pinsLayer";
export default function Map({
  dataUrl,
  setPins,
  pins,
  mapImg,
  map,
  //setCurrentPin
}) {
  return (
    <div className="map">
      <img className="map-background" src={mapImg} alt="Water Schools" />
      <PinsLayer
        dataUrl={dataUrl}
        setPins={setPins}
        pins={pins}
        map={map}
        //setCurrentPin={setCurrentPin}
      />
    </div>
  );
}
