import worldMap from "../assets/world.png";
import Footer from "../components/footer";
import Header from "../components/header";

export default function History() {
  return (
    <div id="root">
      <Header />
      <div id="main" className="symmetrical">
        <div className="info">
          <h1>History &amp; Present</h1>
          <div className="inset">
            <p>
              The Water Schools strand envisioned by{" "}
              <a href="https://www.theflowpartnership.org/" target="_blank">
                The Flow Partnership
              </a>{" "}
              was launched together along with{" "}
              <a
                href="https://www.theflowpartnership.org/water-up"
                target="_blank"
              >
                ARUP
              </a>{" "}
              in 2018 at the House of Lords UK. You can read about the Water Up
              and Water School project that was established together in 2018
              here:
            </p>
            <h2>WaterUp &ndash; Water School</h2>
            <p>
              Water Up was about piloting innovative digital tools to catalyse
              widespread water resources management and to enable their
              availability as open source through the Water Schools.
            </p>
            <a
              href="https://www.theflowpartnership.org/water-up"
              target="_blank"
              className="feature"
            >
              <img src="./images/water-up-website.jpg" />
            </a>
            <p>
              Water Schools are about spreading that local wisdom and water
              literacy through various elements such as farmers presenting
              online sessions, creation of local water hubs, a local water
              holding competition and future water financing for local
              communities world wide.
            </p>
            <p>
              In line with delivering the UN Sustainable Development Goals (many
              of which get delivered with the return of water in the landscape),
              the focus is on SDG6: Clean Water and Sanitation for All.
            </p>
            <p>
              These ideas were further worked on by ARUP and TFP in a proposal
              called 'Planting Water', along with international community water
              retention experts like{" "}
              <a
                href="https://siwi.org/latest/the-water-man-of-india-receives-stockholm-water-prize/"
                target="_blank"
              >
                Rajendra Singh
              </a>
              , winner of the 2015 Stockholm Water Prize and{" "}
              <a href="https://www.waterholistic.com/" target="_blank">
                Michal Kravcik
              </a>{" "}
              of Water Holistic. Many conversations around the global water
              schools and how to make them truly effective for communities and
              by communities were held. The issue we wanted to address was also
              increasing the water recharge of whole catchments to make a dent
              in the droughts and floods on the planet. It was agreed that while
              there are many big global organizations in the space of water, it
              would be best to retain the Water Schools as a simple vehicle for
              ground level communities to access and use easily. Of the
              communities by the communities, for the communities.
            </p>
            <p>
              Which meant that Water Schools keep their feet firmly on the
              ground <strong>with just two unwavering aims:</strong>
            </p>
            <ol>
              <li>
                learn and teach water holding within the communities and by the
                communities
              </li>
              <li>
                enable communities, through various mechanisms, to actually hold
                as much water as they can in the ground and their landscapes.
              </li>
            </ol>
            <p>
              Today Water School India (WSI), Water School Africa (WSA) are
              strong and effective in their communities and Water School South
              America (WSSA) , Water School Europe (WSE), Water School Middle
              East (WSME) are in the pipeline..
            </p>
            <p>
              <em>
                And it was decided to keep them free to use since the owners of
                this knowledge are the communities themselves who share their
                wisdom generously and freely.
              </em>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
