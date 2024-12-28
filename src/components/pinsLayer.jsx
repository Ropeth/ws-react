import Country from "./country";
import { useState, useEffect } from "react";

export default function PinsLayer() {
  let [pins, setPins] = useState([]);
  let [dataUrl, setDataUrl] = useState(
    "http://localhost:5173/africa-literacy.json"
  );

  useEffect(() => {
    //fetch("http://localhost:5173/africa-literacy.json")
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setPins(data.pins));
  }, [dataUrl]);
  const changeData = () => {
    setDataUrl("http://localhost:5173/india-literacy.json");
  };
  return (
    <>
      <button onClick={changeData}>Load JSON</button>
      <div className="pins-layer">
        {pins.map((data, key) => {
          return (
            <Country
              key={key}
              countryId={key}
              projects={data.projects}
              country={data.country}
            />
          );
        })}
      </div>
    </>
  );
}
