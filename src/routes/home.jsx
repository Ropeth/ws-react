import { useParams } from "react-router-dom";
import { pages } from "../data/pages.json";
import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Promo from "../components/promo";
import InfoBand from "../components/info-band";

import Map from "../components/map";

export default function Home() {
  var { slug } = useParams();
  slug = "world-literacy";

  const page = pages.find((x) => x.slug === slug);
  const [pins, setPins] = useState([]);
  const [currentPin, setCurrentPin] = useState([]);
  const coordsUrl = "/coords.json";
  const [selectedMethod, setSelectedMethod] = useState("All");
  const [coords, setCoords] = useState([]);

  const stopVideo = (videoRef, src) => {
    console.log("Stop video - videoRef", videoRef);
    if (videoRef.current) {
      const iframe = videoRef.current;
      iframe.src = src;
    }
  };

  useEffect(() => {
    console.log("coordsUrl", coordsUrl);
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
    const dataUrl = "./" + page.json + "-data.json";
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
    <div id="root">
      <Header />
      {/* <Promo school="Africa" /> */}
      <InfoBand />
      {/* <Carousel /> */}
      <div id="main" className="symmetrical">
        <div className="info home">
          <h1 className="sr-only">Welcome to Water Schools</h1>
          <h2 className="center">Water is at the Centre of climate change</h2>
          <p className="center">
            41% of land on the planet has become desertified and this figure is
            only going upwards.
          </p>
          <h2 className="center">
            Local communitites are at the centre of the solution
          </h2>
          <p className="center">
            When we work in collaboration with local communities, harnessing
            their wisdom and knowledge, we can quickly reverse some of the worst
            effects of climate change at scale.
          </p>
          <p className="center">
            Water Schools amplify their voice and wisdom of water harvesting,
            spread the solutions and enable water retention action at scale.
          </p>
          <Map
            pins={pins}
            stopVideo={stopVideo}
            currentPin={currentPin}
            setCurrentPin={setCurrentPin}
            coords={coords}
            slug={slug}
          />
          {/* <img
            src={worldMap}
            className="spaced"
            alt="Water Schools world map"
            /> */}
          <p>
            <em>
              A ground level movement of water literacy and water action spread
              by these diverse communities has begun across the world. Water
              Schools are independent forums where local communities, farmers,
              individuals and anyone who is interested comes to share or learn
              successful water recharge methods from each other.
            </em>
          </p>
          <p>The focus is twofold:</p>
          <ol type="a">
            <li>
              <strong>Water Literacy:</strong> Setting up of the Water Schools
              (online and location-specific) to enable a community driven
              learning and exchange of water management and addressing of local
              water Issues.
            </li>
            <li>
              <strong>Water Action:</strong> Implementation of local
              water-holding features and methods to recharge those landscapes
              and communities.
            </li>
          </ol>
          <p>
            <strong>
              <em>
                Just ordinary and extraordinary people harvesting rainwater, to
                make a healthy and water rich planet possible.
              </em>
            </strong>
          </p>
        </div>
      </div>
      <Promo school="Home" />
      <Footer />
    </div>
  );
}
