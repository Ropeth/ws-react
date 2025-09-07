export default function Row({ thisIntro }) {
  return (
    <>
      <div
        className="info"
        dangerouslySetInnerHTML={{ __html: thisIntro }}
      ></div>
    </>
  );
}
