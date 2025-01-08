import { useState, useEffect } from "react";

export default function Main({ dataUrl, intro }) {
  const [thisIntro, setThisIntro] = useState("unset");

  useEffect(() => {
    //const thisIntro = intro.filter((item) => item.page === "africa-literacy");
    //const thisIntro = );
    setThisIntro(dataUrl);
    //setThisIntro(intro.filter((item) => item.page === "africa-literacy");
  }, [dataUrl]);

  return (
    <div className="info" dangerouslySetInnerHTML={{ __html: intro.content }}>
      {/* {thisIntro} */}
      {/* <p>
        <span className="h1-inline">Water School Africa (WSA) </span>is a
        partnership between communities engaged in natural water retention
        practices in their local villages/areas/regions.
      </p>

      <p>
        The overall goal of this Pan African Water School is to stimulate
        community interaction and action to improve an understanding of, and
        boost capacity in sustainable local, community based water resource
        management across Africa.{" "}
        <strong>
          <em>
            And then to share that widely with each other as well as with people
            and communities across the world.
          </em>
        </strong>
      </p>

      <p>
        In countries across the world, small communities are doing pioneering
        work in creating and securing local water sources and reversing the
        adverse impacts of too much water (floods) or too little water
        (droughts). This Water Schools web portal presents their successful
        methods of water retention interventions through their own presentations
        and videos of their successful methods.
      </p>  */}
    </div>
  );
}
