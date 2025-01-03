import Pin from "./pin";

export default function Country({
  projects,
  country,
  setSelectedProject,
  countryId,
  setCurrentPin,
}) {
  return (
    <>
      {projects.map((project, key) => {
        return (
          <Pin
            key={countryId + "-" + key}
            pinId={countryId + "-" + key}
            country={country}
            project={project}
            setSelectedProject={setSelectedProject}
            setCurrentPin={setCurrentPin}
          />
        );
      })}
    </>
  );
}
