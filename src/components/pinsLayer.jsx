import Country from "./country";
import { useState, useEffect } from "react";

export default function PinsLayer({
  pins,
  map,
  stopVideo,
  setCurrentPin,
  currentPin,
  coords,
}) {
  return (
    <>
      <div className="pins-layer">
        {coords.length > 0 &&
          pins.map((data, key) => {
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
