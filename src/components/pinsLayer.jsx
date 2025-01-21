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
    const dataUrl = "./" + thisPage + ".json";

    // fetch(dataUrl)
    //   .then((response) => response.json())
    //   .then((data) => setPins(data.pins));
    const controller = new AbortController(); //This code uses an `AbortController` to cancel the fetch request if the component unmounts before the request completes, preventing the error from occurring.
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl, {
          signal: controller.signal,
        });
        const data = await response.json();
        setPins(data.pins);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    };
    fetchData();
  }, [thisPage]);

  let [coordsUrl, setCoordsUrl] = useState("/coords.json");
  let [coords, setCoords] = useState([]);

  useEffect(() => {
    // fetch(coordsUrl)
    //   .then((response) => response.json())
    //   .then((data) => setCoords(data.coords));
    const controller = new AbortController(); //This code uses an `AbortController` to cancel the fetch request if the component unmounts before the request completes, preventing the error from occurring.
    const fetchData = async () => {
      try {
        const response = await fetch(coordsUrl, {
          signal: controller.signal,
        });
        const data = await response.json();
        setCoords(data.coords);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    };
    fetchData();
  }, []);

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
