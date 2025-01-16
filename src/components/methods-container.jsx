import Method from "./method";

export default function MethodsCont({ country, projects }) {
  return (
    <>
      {projects.map((c, key) => {
        return <Method key={key} projects={projects} />;
      })}
    </>
  );
}
