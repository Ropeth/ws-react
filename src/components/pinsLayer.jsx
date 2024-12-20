import Pin from "./pin";

import { pins } from "../data/allPins";

export default function PinsLayer() {
  return (
    <div className="pins-layer">
      {pins.map((data, key) => {
        return (
          <Pin key={key} projects={data.projects} country={data.country} />
        );
      })}
    </div>
  );
}
