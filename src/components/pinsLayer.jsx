import Country from "./country";
import { useState, useEffect } from "react";

export default function PinsLayer({
  thisPage,
  setPins,
  pins,
  map,
  //setCurrentPin
}) {
  useEffect(() => {
    //const thisPage = "africa-literacy";
    const dataUrl = "./" + thisPage + ".json";
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
              //setCurrentPin={setCurrentPin}
            />
          );
        })}
      </div>
    </>
  );
}
