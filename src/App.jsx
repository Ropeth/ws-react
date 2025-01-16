import Header from "./components/header";
import Main from "./components/main";
import Map from "./components/map";
import MethodsCont from "./components/methods-container";
import "./App.css";
import Footer from "./components/footer";
import africaBrown from "/src/assets/Africa-brown.svg";

import { useState, useEffect } from "react";

function App() {
  let [thisPage, setThisPage] = useState("africa-literacy");
  let [pins, setPins] = useState([]);
  let [map, setMap] = useState("Africa"); //used for calculating x and y
  let [mapImg, setMapImg] = useState(africaBrown);
  let [intros, setIntros] = useState([]);
  let [thisIntro, setThisIntro] = useState([]);

  useEffect(() => {
    const controller = new AbortController(); //This code uses an `AbortController` to cancel the fetch request if the component unmounts before the request completes, preventing the error from occurring.
    const fetchData = async () => {
      try {
        const response = await fetch("./intros.json", {
          signal: controller.signal,
        });
        const data = await response.json();
        setIntros(data.intros);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    setThisIntro(intros.filter((intro) => intro.page === thisPage));
  }, [intros, thisPage]);

  const stopVideo = (videoRef, src) => {
    console.log("videoRef", videoRef);
    if (videoRef.current) {
      const iframe = videoRef.current;
      iframe.src = src;
    }
  };

  return (
    <>
      <Header setThisPage={setThisPage} setMapImg={setMapImg} setMap={setMap} />
      {/* {currentPin} */}
      <div id="main">
        <Main thisIntro={thisIntro} />
        <Map
          thisPage={thisPage}
          setPins={setPins}
          pins={pins}
          mapImg={mapImg}
          map={map}
          stopVideo={stopVideo}
          //setCurrentPin={setCurrentPin}
        />
        <div id="methods-container" style={{ display: "none" }}>
          {pins.map((data, key) => {
            return (
              <MethodsCont
                key={key}
                countryId={key}
                projects={data.projects}
                country={data.country}
                map={map}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
