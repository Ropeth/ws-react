import Method from "./method";

export default function MethodsCont({ projects, selectedMethod }) {
  return (
    <>
      {projects.map((c, key) => {
        return (
          <Method
            key={key}
            projects={projects}
            selectedMethod={selectedMethod}
          />
        );
      })}
    </>
  );
}
