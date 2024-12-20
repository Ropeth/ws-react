import pin from "../assets/pin.svg";

export default function Pin({ projects, country, onPinClick }) {
  return (
    <>
      {projects.map((project, primaryKey, index) => {
        return (
          <>
            <img
              key={primaryKey + "-" + index}
              className="map-pin"
              src={pin}
              alt={country}
              title={project.name}
              style={{ top: project.y + "%", left: project.x + "%" }}
              onClick={() =>
                onPinClick({
                  country,
                })
              }
            />
          </>
        );
      })}
    </>
  );
}
