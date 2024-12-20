import Country from "./country";
import { pins } from "../data/allPins";

export default function PinsLayer() {
  return (
    <div className="pins-layer">
      {pins.map((data, key) => {
        return (
          <Country key={key} projects={data.projects} country={data.country} />
        );
      })}
    </div>
  );
}
