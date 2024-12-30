import Header from "./components/header";
import Main from "./components/main";
import Map from "./components/map";
import "./App.css";
import Footer from "./components/footer";

import { useState } from "react";

function App() {
  let [dataUrl, setDataUrl] = useState("/africa-literacy.json");
  let [pins, setPins] = useState([]);
  let [currentPin, setCurrentPin] = useState([]);

  return (
    <>
      <Header setDataUrl={setDataUrl} />
      {/* {currentPin} */}
      <div className="main">
        <Main />
        <Map
          dataUrl={dataUrl}
          setPins={setPins}
          pins={pins}
          setCurrentPin={setCurrentPin}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
