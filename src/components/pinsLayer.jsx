import Country from "./country";
import { useState, useEffect } from "react";

export default function PinsLayer({
  thisPage,
  setPins,
  pins,
  map,
  stopVideo,
  setCurrentPin,
  currentPin,
}) {
  useEffect(() => {
    //const thisPage = "africa-literacy";
    const dataUrl = "./" + thisPage + ".json";

    // const fetchData = async () => {
    //   const response = await fetch(dataUrl);
    //   const data = await setPins(data.pins);
    // };
    // fetchData();
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setPins(data.pins));
  }, [thisPage]);

  let [coordsUrl, setCoordsUrl] = useState("/coords.json");
  let [coords, setCoords] = useState([]);
  useEffect(() => {
    fetch(coordsUrl)
      .then((response) => response.json())
      .then((data) => setCoords(data.coords));
  }, []);

  return (
    <>
      <div className="pins-layer">
        {pins.map((data, key) => {
          return (
            <Country
              key={key}
              countryId={key}
              projects={data.projects}
              country={data.country}
              coords={coords}
              map={map}
              stopVideo={stopVideo}
              setCurrentPin={setCurrentPin}
              currentPin={currentPin}
            />
          );
        })}
      </div>
    </>
  );
}
