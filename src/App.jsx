import Header from "./components/header";
import Main from "./components/main";
import Map from "./components/map";
import "./App.css";
import Footer from "./components/footer";

import { useState } from "react";

function App() {
  let [dataUrl, setDataUrl] = useState(
    "http://localhost:5173/africa-literacy.json"
  );
  let [pins, setPins] = useState([]);
  const changeData = () => {
    setDataUrl("http://localhost:5173/india-literacy.json");
  };
  return (
    <>
      <Header setDataUrl={setDataUrl} />
      <button onClick={changeData}>Load JSON</button>
      <div className="main">
        <Main />
        <Map dataUrl={dataUrl} setPins={setPins} pins={pins} />
      </div>
      <Footer />
    </>
  );
}

export default App;
