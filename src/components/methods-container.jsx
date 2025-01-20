import Method from "./method";
import { useEffect } from "react";

export default function MethodsCont({
  projects,
  selectedMethod,
  country,
  thisPage,
}) {
  var filteredProjects = projects.filter(
    (project) => selectedMethod === "All" || project.theme === selectedMethod
  );
  useEffect(() => {}, [thisPage, selectedMethod]);
  filteredProjects = projects.filter(
    (project) => selectedMethod === "All" || project.theme === selectedMethod
  );

  return (
    <>
      <h4>{country}</h4>
      {filteredProjects.length === 0 && <p>No projects found</p>}
      {filteredProjects.map((project, key) => {
        return <Method key={key} project={project} />;
      })}
    </>
  );
}
