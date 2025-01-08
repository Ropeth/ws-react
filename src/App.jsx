import Header from "./components/header";
import Main from "./components/main";
import Map from "./components/map";
import "./App.css";
import Footer from "./components/footer";

import { useState, useEffect } from "react";

function App() {
  let [dataUrl, setDataUrl] = useState("/africa-literacy.json");
  let [pins, setPins] = useState([]);
  let [map, setMap] = useState("Africa");
  let [mapImg, setMapImg] = useState("./src/assets/Africa-brown.svg");

  let [intros, setIntros] = useState([]);
  useEffect(() => {
    fetch("./intros.json")
      .then((response) => response.json())
      .then((data) => setIntros(data.intros));
  }, []);

  return (
    <>
      <Header setDataUrl={setDataUrl} setMapImg={setMapImg} setMap={setMap} />
      {/* {currentPin} */}
      <div className="main">
        <Main dataUrl={dataUrl} intros={intros} />
        <Map
          dataUrl={dataUrl}
          setPins={setPins}
          pins={pins}
          mapImg={mapImg}
          map={map}
          //setCurrentPin={setCurrentPin}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
