import Header from "./components/header";
import Main from "./components/main";
import Map from "./components/map";
import "./App.css";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Main />
        <Map />
      </div>
      <Footer />
    </>
  );
}

export default App;
