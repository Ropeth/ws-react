import pin from "../assets/pin.svg";

export default function Pin({ projects, country }) {
  return (
    <>
      {projects.map((project, key) => {
        return (
          <>
            <img
              key={key}
              className="map-pin"
              src={pin}
              alt={country}
              title={project.name}
              style={{ top: project.y + "%", left: project.x + "%" }}
            />
          </>
        );
      })}
    </>
  );
}
