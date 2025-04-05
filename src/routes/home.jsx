import Footer from "../components/footer";
import Header from "../components/header";
import Promo from "../components/promo";

export default function Home() {
  return (
    <div id="root">
      <Header />
      <Promo school="Africa" />
      <div id="main">
        <div className="info contact">
          <h2>Welcome to the Water Schools platform</h2>
          <p>
            <strong>Water Schools</strong> is a platform to learn comprehensive
            knowledge of diverse communities spread all across the world to
            conserve water, recharge aquifers and revive catchments &
            landscapes.
          </p>
          <p>
            <strong>Water Schools</strong> gives you access to an array of
            successful community driven & managed, decentralised water
            conservation methods. Language-neutral tools will help you find the
            most suitable method to revive your own catchment and landscape.
            (FREE to access for all.
          </p>
          <p>
            <strong>Water Schools</strong> helps you visualise how global trends
            in water availability, climate patterns and crop yields connect
            together practically. Interactive catchment maps will be available
            online and offline as a unique open resource tool for anyone across
            the world to access.
          </p>
          <p>
            <strong>Water Schools</strong> fills the gap between academic
            research and data on the ground with a wave of community endeavour
            globally, rejuvenating our landscapes and bringing the carbon and
            water cycles back into harmony and balance.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
