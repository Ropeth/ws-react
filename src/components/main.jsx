export default function Main({ thisIntro }) {
  return (
    <>
      <div
        className="info"
        dangerouslySetInnerHTML={{ __html: thisIntro }}
      ></div>
    </>
  );
}
