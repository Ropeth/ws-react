import Header from "./components/header";
import Main from "./components/main";
import Map from "./components/map";
import "./App.css";
import Footer from "./components/footer";

import { useState, useEffect } from "react";

function App() {
  let [thisPage, setThisPage] = useState("africa-literacy");
  let [pins, setPins] = useState([]);
  let [map, setMap] = useState("Africa"); //used for calculating x and y
  let [mapImg, setMapImg] = useState("./src/assets/Africa-brown.svg");
  let [intros, setIntros] = useState([]);
  let [thisIntro, setThisIntro] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./intros.json");
      const data = await response.json();
      setIntros(data.intros);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setThisIntro(intros.filter((intro) => intro.page === thisPage));
  }, [intros, thisPage]);

  return (
    <>
      <Header setThisPage={setThisPage} setMapImg={setMapImg} setMap={setMap} />
      {/* {currentPin} */}
      <div className="main">
        <Main thisIntro={thisIntro} />
        <Map
          thisPage={thisPage}
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
