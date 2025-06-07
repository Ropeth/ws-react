import Footer from "../components/footer";
import Header from "../components/header";
import Promo from "../components/promo";

export default function Home() {
  return (
    <div id="root">
      <Header />
      {/* <Promo school="Africa" /> */}
      <Promo school="Home" />
      <div id="main">
        <div className="info home">
          <h1>Welcome to Water Schools</h1>
          <p>
            Water has no colour and gives life to all EQUALLY. The single
            largest way to restore the water cycles of our planet is through the
            myriad communities living on the planet and the wisdom of water
            retention they hold within them. The Water Schools amplify{" "}
            <strong>their voice</strong> in bringing the planet back to balance.
          </p>
          <div className="inset">
            <img src="/images/ws-icon-2.png" />
            <p>
              This is <strong>a space</strong> for you and your community to
              learn how to hold water, stop droughts and floods and if you
              already do that successfully, then to help you freely share your
              knowledge and wisdom with other communities.
            </p>
            <p>
              It's <strong>a school</strong> to learn from the comprehensive and
              traditional knowledge of diverse communities, giving you access to
              a growing body of real, successful, community driven,
              decentralised water retention and water conservation methods from
              across the planet. Find the most suitable method to revive your
              own local catchments and landscape.
            </p>
            <img src="/images/ws-icon-6.png" />
            <img src="/images/ws-icon-5.png" />
            <p>
              It's a <strong>network</strong> to connect with other
              on-the-ground communities, weaving a net of successful action
              across the planet. Your local water retention actions can feed
              into global water availability and changing climate patterns.
            </p>
            <p>
              This is a growing global <strong>movement</strong> of people and
              their communities, without any political bias, colour, or colonial
              echoes, restoring the planet's water cycles back to health.
            </p>
            <img src="/images/ws-icon-8.png" />
          </div>

          <p className="extra-space-above">
            <strong>
              <em>
                Just ordinary and extraordinary people harvesting rain water, to
                make a healthy and water rich planet possible.
              </em>
            </strong>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
