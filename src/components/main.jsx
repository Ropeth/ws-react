import { useState, useEffect } from "react";

export default function Main({ dataUrl, intros }) {
  const [thisIntro, setThisIntro] = useState("unset");

  return (
    <>
      {intros.map((data, key) => {
        return (
          <div
            className="info"
            key={key}
            page={data.page}
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></div>
        );
      })}
    </>
  );
}
