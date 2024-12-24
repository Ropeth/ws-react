import Country from "./country";
import { pins } from "../data/allPins";
import { useState, useEffect } from "react";

export default function PinsLayer() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="pins-layer">
      {pins.map((data, key) => {
        return (
          <Country
            key={key}
            countryId={key}
            projects={data.projects}
            country={data.country}
            setSelectedProject={setSelectedProject}
          />
        );
      })}
    </div>
  );
}
