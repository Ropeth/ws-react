import Pin from "./pin";

export default function Country({ projects, country }) {
  return (
    <>
      {projects.map((project, key) => {
        return (
          <Pin key={country + "-" + key} country={country} project={project} />
        );
      })}
    </>
  );
}
