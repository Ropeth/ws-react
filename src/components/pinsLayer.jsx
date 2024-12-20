import Pin from "./pin";
import { pins } from "../data/allPins";

const onPinClick = (country) => {
  console.log("pin clicked " + country);
};

export default function PinsLayer() {
  return (
    <div className="pins-layer">
      {pins.map((data, index) => {
        return (
          <Pin
            key={data.country + "-" + index}
            primaryKey={index}
            projects={data.projects}
            country={data.country}
            onPinClick={onPinClick}
          />
        );
      })}
    </div>
  );
}
