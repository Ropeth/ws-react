import { useState, useEffect } from "react";
import { pages } from "./data/pages.json";
import { useParams } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/main";
import Map from "./components/map";
import MethodsCont from "./components/methods-container";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const { slug } = useParams();
  const page = pages.find((x) => x.slug === slug);
  const [pins, setPins] = useState([]);
  const [currentPin, setCurrentPin] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState("All");
  const coordsUrl = "/coords.json";
  const [coords, setCoords] = useState([]);

  const stopVideo = (videoRef, src) => {
    console.log("Stop video - videoRef", videoRef);
    if (videoRef.current) {
      const iframe = videoRef.current;
      iframe.src = src;
    }
  };

  useEffect(() => {
    //console.log("coordsUrl", coordsUrl);
    const controller = new AbortController(); //This code uses an `AbortController` to cancel the fetch request if the component unmounts before the request completes, preventing the error from occurring.
    const fetchCoords = async () => {
      try {
        const response = await fetch(coordsUrl, {
          signal: controller.signal,
        });
        const data = await response.json();
        setCoords(data.coords);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    };
    fetchCoords();
  }, []);

  useEffect(() => {
    page.map == null && setSelectedMethod("All");
    const dataUrl = "./" + page.json + ".json";
    console.log("page.map", page.map);
    const controller = new AbortController(); //This code uses an `AbortController` to cancel the fetch request if the component unmounts before the request completes, preventing the error from occurring.
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl, {
          signal: controller.signal,
        });
        const data = await response.json();
        setPins(data.pins);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    };
    fetchData();
  }, [slug]);

  return (
    <>
      <Header />

      <div id="main">
        <div id="row1">
          <Main thisIntro={page.content} />
          {page.map != null && (
            <Map
              pins={pins}
              stopVideo={stopVideo}
              currentPin={currentPin}
              setCurrentPin={setCurrentPin}
              coords={coords}
            />
          )}
        </div>
        {page.map == null && (
          <div id="row2">
            <div id="methods-container">
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
                  <option value="Community case study">
                    Community case study
                  </option>
                  <option value="Transforming desert">
                    Transforming desert
                  </option>
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
                    thisPage={slug}
                    projects={data.projects}
                    country={data.country}
                    selectedMethod={selectedMethod}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
