import Pin from "./pin";

export default function Country({
  projects,
  country,
  setSelectedProject,
  countryId,
  coords,
  map,
  stopVideo,
  setCurrentPin,
  currentPin,
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
            coords={coords}
            map={map}
            stopVideo={stopVideo}
            setCurrentPin={setCurrentPin}
            currentPin={currentPin}
          />
        );
      })}
    </>
  );
}
