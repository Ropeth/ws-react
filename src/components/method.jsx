export default function Method({ country, projects }) {
  return (
    <div id="method">
      {projects.map((c, key) => {
        return <p key={key}>{c.theme}</p>;
      })}
    </div>
  );
}
