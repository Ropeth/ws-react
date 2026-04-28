import Footer from "../components/footer";
import Header from "../components/header";
import ImageModal from "../components/image-modal";
import { useState } from "react";

export default function JalSahelis() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div id="root">
      <Header />
      <div id="main" className="symmetrical">
        <div className="info">
          <h1>
            Empowering Tribal Women as Water Leaders: Bringing the Jal Sahelis
            to Baran
          </h1>
          <h2>Water School India</h2>
          <div className="inset">
            <img
              className="large-inline"
              src="./images/jal-sahelis-2.jpg"
              alt="Jal Sahelis meeting"
              onClick={() => {
                setSelectedImage("./images/jal-sahelis-2.jpg");
              }}
              style={{ cursor: "pointer" }}
            />
            <p>
              In the quiet, water-scarce landscapes of
              Shahabad/Baran/Rajasthan/India, where every drop of water carries
              the weight of uncertainty, a silent transformation has begun to
              unfold &ndash; led by the strength and determination of the women
              living there.
            </p>

            <p>
              <img
                className="float-left"
                src="./images/jal-sahelis-33.jpg"
                alt="Jal Sahelis meeting in a circle"
                onClick={() => {
                  setSelectedImage("./images/jal-sahelis-33.jpg");
                }}
                style={{ cursor: "pointer" }}
              />
              Years earlier, in the drought-prone region of Bundelkhand,{" "}
              <em>Parmarth Samaj Sevi Sansthan (PSSS)</em> the lead ground
              partners of the <em>ReForesting Baran project</em> and{" "}
              <em>Water School India</em> host, had already sown the seeds of
              change with an innovative and transformative water retention
              program with village women called the <em>Jal Saheli Program</em>{" "}
              (Friends of Water). In villages where water scarcity shaped
              everyday life, Parmarth worked closely with the women there,
              building their awareness, strengthening their voices, and enabling
              them to take charge of water governance. Over time, these{" "}
              <em>Jal Sahelis</em> have emerged as strong grassroots leaders,
              transforming not just water systems, also upending meaningless
              social norms.
            </p>
            <p>
              <img
                className="float-right"
                src="./images/jal-sahelis-29.jpg"
                alt="Jal Sahelis - World Water Day"
                onClick={() => {
                  setSelectedImage("./images/jal-sahelis-29.jpg");
                }}
                style={{ cursor: "pointer" }}
              />{" "}
              The Jal Sahelis became the bridge between the community and the
              system connecting people with government programs, engaging with
              officials, ensuring that water issues are no longer ignored by
              them. Today, these women are not only addressing local water
              challenges but also redefining their roles in society. Working
              alongside community institutions like Pani Panchayats, they are
              building systems that ensure sustainability and collective
              ownership, showing true grassroots leadership in action.
            </p>
            <p>
              And the change is visible: in stronger voices, in confidence that
              is unshaken, and in more united communities. The journey of these
              Jal Sahelis from Bundelkhand to Shahabad is not just expansion of
              a program. It is the spreading of an idea that when women are
              empowered with knowledge, skills, and opportunity, they do not
              just solve problems; they transform entire systems.
            </p>
            <img
              className="large-inline"
              src="./images/jal-sahelis-38.jpg"
              alt="Jal Sahelis"
              onClick={() => {
                setSelectedImage("./images/jal-sahelis-38.jpg");
              }}
              style={{ cursor: "pointer" }}
            />
            <p>
              When the <em>ReForesting Baran</em> project started in the tribal
              villages of Shahabad/ Baran/ Rajasthan/India in 2023, water
              scarcity was not just an environmental issue; it shaped daily
              life. Women walked long distances for water, their voices unheard,
              and decisions about water were rarely in their hands. The Water
              School India started a training program with the Jal Sahelis from
              Bundelkhand in the lead . They came and started with conversations
              &ndash; engaging women, understanding their realities, and gently
              introducing the idea that just as they had done in Bundelkhand,
              they too could lead change in their own villages. For many women,
              this was a new thought.
            </p>
            <p>
              <img
                className="float-left"
                src="./images/jal-sahelis-18.jpg"
                alt="Jal Sahelis training session"
                onClick={() => {
                  setSelectedImage("./images/jal-sahelis-18.jpg");
                }}
                style={{ cursor: "pointer" }}
              />
              A series of trainings, not as lectures, but as shared learning
              experiences were initiated. Women gathered, discussed, questioned,
              and learned together. Through a structured and intensive training
              program that was begun in December 2025 the <em>Jal Saheli</em>{" "}
              program two hundred tribal women from six villages stepped
              forward, ready to learn, to question, and to lead. The trainings
              were not just about techniques, they also learned how to conserve
              water, revive traditional water structures, and adopt
              climate-resilient practices. They understood how government
              schemes could support their efforts. They learned to prepare
              village water security plans, manage water resources, and most
              importantly, raise their voices in governance spaces.
            </p>
            <img
              className="large-inline"
              src="./images/jal-sahelis-8.jpg"
              alt="Jal Sahelis training notes"
              onClick={() => {
                setSelectedImage("./images/jal-sahelis-8.jpg");
              }}
              style={{ cursor: "pointer" }}
            />
            <p>
              <img
                className="float-right"
                src="./images/jal-sahelis-36.jpg"
                alt="Jal Sahelis wearing blue"
                onClick={() => {
                  setSelectedImage("./images/jal-sahelis-36.jpg");
                }}
                style={{ cursor: "pointer" }}
              />
              And something deeper started happening alongside this learning
              &ndash; confidence started showing itself. Women who once
              hesitated to speak anywhere, began participating in Gram Sabhas
              (village meetings). They have now started mobilizing their
              communities, discussing water challenges openly, and working
              together to find solutions. Small yet powerful actions have begun
              to reshape their villages &ndash; rainwater harvesting through{" "}
              <em>bori bandhan</em> (sack dams), repairing handpumps, deepening
              wells, and reviving local water bodies.
            </p>
            <p>
              From Bundelkhand to Shahabad, the Jal Sahelis continue carrying
              forward a movement where every drop of water saved is a symbol of
              resilience, and every woman empowered is a step towards a more
              just and sustainable future.
            </p>
            <img
              className="large-inline"
              src="./images/jal-sahelis-35.jpg"
              alt="Fruit tree"
              onClick={() => {
                setSelectedImage("./images/jal-sahelis-35.jpg");
              }}
              style={{ cursor: "pointer" }}
            />
            <h2>Voices of Change</h2>
            <p>
              The true impact of this initiative is best understood through the
              voices of the women themselves.
            </p>
            <p>
              Jal Saheli Sushila from Gram Goyra: “Through the Jal Saheli
              training, we have realized that we cannot solve our village
              problems alone. We must come together as women, sit together, and
              speak to the government. Now, we have decided that we will move
              forward collectively and raise our voices for our village.”
            </p>
            <p>
              Jal Saheli Kamlesh from Gram Dundwar spoke with quiet
              determination,{" "}
              <em>
                “We have understood that even small efforts can make a big
                difference. We will now work together to conserve rainwater in
                our village through simple methods like bori bandhan, so that
                not a single drop is wasted.”
              </em>
            </p>
            <p>
              Jal Saheli Saroj from Gram Panchayat Sanwada expressed a new sense
              of confidence,{" "}
              <em>
                “We now understand the strength of coming together as women. We
                will organize ourselves, stand united, and put forward our
                demands to the government for our rights.”
              </em>
            </p>
            <img
              className="large-inline"
              src="./images/jal-sahelis-20.jpg"
              alt="Jal Sahelis showing plants they have grown"
              onClick={() => {
                setSelectedImage("./images/jal-sahelis-20.jpg");
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      >
        <img
          src={selectedImage}
          alt="Enlarged"
          style={{ maxWidth: "90vw", maxHeight: "90vh" }}
        />
      </ImageModal>
      <Footer />
    </div>
  );
}
