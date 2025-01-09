export default function Main({ thisIntro }) {
  return (
    <>
      {thisIntro.map((info) => (
        <div
          className="info"
          key={info.page}
          dangerouslySetInnerHTML={{ __html: info.content }}
        ></div>
      ))}
    </>
  );
}
