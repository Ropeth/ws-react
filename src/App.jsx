import Header from "./components/header";
import Main from "./components/main";
import Map from "./components/map";
import MethodsCont from "./components/methods-container";
import { pages } from "./data/pages.json";
import { useParams } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
//import africaBrown from "/src/assets/Africa-brown.svg";

//import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
//console.log(pages);
function App() {
  const { slug } = useParams();
  const page = pages.find((x) => x.slug === slug);
  //console.log("slug", slug);
  //let [thisPage, setThisPage] = useState(page.slug);
  let [pins, setPins] = useState([]);
  // let [map, setMap] = useState("Africa"); //used for calculating x and y
  // let [mapImg, setMapImg] = useState(africaBrown);
  //let [intros, setIntros] = useState([]);
  //let [thisIntro, setThisIntro] = useState([]);
  let [currentPin, setCurrentPin] = useState([]);
  // const [selectedMethod, setSelectedMethod] = useState("All");

  // useEffect(() => {
  //   const controller = new AbortController(); //This code uses an `AbortController` to cancel the fetch request if the component unmounts before the request completes, preventing the error from occurring.
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("./intros.json", {
  //         signal: controller.signal,
  //       });
  //       const data = await response.json();
  //       setIntros(data.intros);
  //     } catch (error) {
  //       if (error.name !== "AbortError") {
  //         console.error("Fetch error:", error);
  //       }
  //     }
  //   };
  //   fetchData();

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  // useEffect(() => {
  //   setThisIntro(intros.filter((intro) => intro.page === page.slug));
  // }, [intros, thisPage]);

  const stopVideo = (videoRef, src) => {
    console.log("videoRef", videoRef);
    if (videoRef.current) {
      const iframe = videoRef.current;
      iframe.src = src;
    }
  };

  return (
    <>
      <Header
      //setThisPage={setThisPage}
      //setMapImg={setMapImg}
      //setMap={setMap}
      //setSelectedMethod={setSelectedMethod}
      />

      <div id="main">
        <Main thisIntro={page.content} />
        <Map
          setPins={setPins}
          pins={pins}
          // mapImg={mapImg}
          // map={map}
          stopVideo={stopVideo}
          currentPin={currentPin}
          setCurrentPin={setCurrentPin}
        />
        {/*
        <div id="methods-container" style={{ display: "none" }}>
          <div>
            <label>
              <strong>Select a method:&nbsp;&nbsp;</strong>
            </label>
            <select
              id="themeSelector"
              value={selectedMethod}
              onChange={(e) => setSelectedMethod(e.target.value)}
            >
              <option value="All">All Methods</option>
              <option value="Water harvesting">Water harvesting</option>
              <option value="Sand dams">Sand dams</option>
              <option value="Water pioneer">Water pioneer</option>
              <option value="Community case study">Community case study</option>
              <option value="Transforming desert">Transforming desert</option>
              <option value="Deep bed farming">Deep bed farming</option>
              <option value="Water harvesting work">
                Water harvesting work
              </option>
              <option value="Reflections on Holding Water in Africa">
                Reflections on Holding Water in Africa
              </option>
              <option value="Water Harvesting">Water Harvesting</option>
              <option value="Wooden log dams">Wooden log dams</option>
            </select>
          </div>
          {pins.map((data, key) => {
            return (
              <MethodsCont
                key={key}
                thisPage={thisPage}
                projects={data.projects}
                country={data.country}
                selectedMethod={selectedMethod}
              />
            );
          })}
        </div>*/}
      </div>
      <Footer />
    </>
  );
}

export default App;
