import { useState } from "react";
import Header from "./components/header";
import Info from "./components/info";
import Map from "./components/map";
import "./App.css";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="main">
        <Info />
        <Map />
      </div>
      <Footer />
    </>
  );
}

export default App;
