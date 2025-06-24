import worldMap from "../assets/world.png";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Header from "../components/header";

export default function About() {
  return (
    <div id="root">
      <Header />
      <div id="main" className="symmetrical">
        <div className="info">
          <div className="inset">
            <p>
              In countries across the world, small communities are doing
              pioneering work in creating and securing local water sources,
              often reversing the adverse impacts of too much water (floods) or
              too little water (droughts).
            </p>
            <p>
              <em>
                What if more and more communities could learn this water wisdom
                from each other and then take action to hold the water in the
                ground locally?
              </em>
            </p>
            <img src="/images/ws-icon-2.png" />
            <img src="/images/ws-icon-7.png" />
            <p>
              If enough people on the ground know how to and actually hold the
              rain water that falls from the sky, then globally we could begin
              to reverse the impact of global warming and eventually even help
              in cooling the planet.
            </p>
            <p>
              Water Schools are a growing global <strong>movement</strong> of
              people and their communities, without any political bias, colour,
              or colonial echoes, restoring the planet's water cycles back to
              health – at ground level.
            </p>
            <img src="/images/ws-icon-6.png" />
            <img src="/images/ws-icon-3.png" />
            <p>
              A Water School is <strong>a forum</strong> for you and your
              community to come to and learn how to hold water, regenerate your
              local landscape, build ponds, harvest rainwater, plant trees,
              restore soil fertility and stop droughts and floods. If you
              already do that successfully, then it’s a space to help you freely
              share your knowledge and wisdom with other communities – in your
              own country and globally.
            </p>
            <p>
              It's <strong>a school</strong> to learn from the comprehensive and
              traditional knowledge of diverse communities, giving you access to
              a growing body of real, successful, community driven,
              decentralised water retention and water conservation methods from
              across the planet.
            </p>
            <img src="/images/ws-icon-5.png" />
            <img src="/images/ws-icon-4.png" />
            <p>
              <em>
                Find the most suitable method to revive your own local
                catchments and landscape.
              </em>
            </p>
            <p>
              It's a <strong>network</strong> to connect with other
              on-the-ground communities, weaving a net of successful action
              across the planet. Your local water-retention actions can feed
              into increasing global fresh water availability and responding to
              changing climate patterns.
            </p>
            <img src="/images/ws-icon-8.png" />
            <p>
              <strong>
                <em>
                  No more talk. Real people taking real action in partnership
                  with each other.
                </em>
              </strong>
            </p>
            <p>
              <strong>Water Schools will always be free</strong>, with local
              communities sharing their successes generously for people to learn
              from and implement.
            </p>
            <p>
              Selling any of these materials will be a breach of trust and good
              faith with these communities and the planet itself.
            </p>
          </div>

          {/* <p className="extra-space-above">
            <strong>
              <em>
                Just ordinary and extraordinary people harvesting rain water, to
                make a healthy and water rich planet possible.
              </em>
            </strong>
          </p>
          <h1>About</h1>
          <h2>Water Literacy and Water Recharge</h2>
          <Carousel />
          <p>
            In different countries across the world, small communities are doing
            pioneering work in creating and securing local water sources, often
            reversing the adverse impacts of too much water (floods) or too
            little water (droughts).
          </p>
          <p>
            <strong>
              <em>
                What if more and more communities could learn this water wisdom
                from each other and then take action to hold the water in the
                ground locally?
              </em>
            </strong>
          </p>
          <p>
            If enough people on the ground know how to and actually do hold the
            rain water that falls from the sky, then globally we could begin to
            reverse the impact of global warming and eventually even help in
            cooling the planet.
          </p>
          <p>
            These Water Schools are independent forums where communities come
            and share their successful water recharge methods with the rest of
            the world. The focus is twofold:
          </p>

          <ul>
            <li>
              Know what to do <strong>(Water Literacy)</strong>
            </li>
            <li>
              Do it <strong>(Water Recharge Action)</strong>
            </li>
          </ul>
          <img
            src={worldMap}
            className="spaced"
            alt="Water Schools world map"
          />
          <p>
            The Flow Partnership (TFP) is a genuine partnership with the local
            communities of the world, working on the ground with them to
            successfully implement more and more of these small scale, local,
            traditional, as well as modern innovative methods of water retention
            and management in the landscape. It provides the crucible and
            systems for these community voices to be heard widely through these
            Water Schools to present their successful methods of water recharge
            through their own presentations and videos.
            <strong>
              <em>
                This is a platform for the voice of the communities to be heard
                locally and globally.
              </em>
            </strong>
          </p>
          <p>
            <strong>
              The Water Schools will always be free, with local communities
              sharing their successes generously
            </strong>{" "}
            for people to learn from and implement. Selling any of this material
            will be a breach of trust and good faith with these communities and
            the planet itself.
          </p>

          <p>
            So a ground level movement of water literacy and water action, held
            by these diverse communities has begun to spread across the world.
          </p>

          <p>
            <strong>
              <em>
                No more talk. Real people taking real action in partnership with
                each other.
              </em>
            </strong>
          </p> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
