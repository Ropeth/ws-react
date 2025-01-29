import { useEffect } from "react";
import Method from "./method";

export default function MethodsCont({
  projects,
  selectedMethod,
  country,
  thisPage,
}) {
  var filteredProjects = projects.filter(
    (project) => selectedMethod === "All" || project.theme === selectedMethod
  );
  useEffect(() => {
    filteredProjects = projects.filter(
      (project) => selectedMethod === "All" || project.theme === selectedMethod
    );
  }, [thisPage, selectedMethod]);

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
