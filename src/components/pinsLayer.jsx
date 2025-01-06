import Country from "./country";
import { useEffect } from "react";

export default function PinsLayer({
  dataUrl,
  setPins,
  pins,
  //setCurrentPin
}) {
  useEffect(() => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setPins(data.pins));
  }, [dataUrl]);

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
              //setCurrentPin={setCurrentPin}
            />
          );
        })}
      </div>
    </>
  );
}
