export default function InfoBand() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel infoband slide"
        data-bs-ride="carousel"
      >
        {/* <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
        </ol> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-block w-100">
              <div className="news-item">
                <a
                  href="https://www.amazon.co.uk/Language-Water-Ancient-Techniques-Community/dp/1957869194"
                  target="_blank"
                >
                  <img
                    className="rounded news-image"
                    style={{ maxHeight: 95 + "%" }}
                    src="/images/language-of-water.jpg"
                    alt="The Language of Water"
                  />
                </a>
                <h3>
                  The Language of Water:{" "}
                  <em>
                    <span className="light">
                      Ancient Techniques and Community Stories for a Water
                      Secure Future
                    </span>
                  </em>
                </h3>
                <p>
                  Going beyond simply addressing climate change, The Language of
                  Water shows us how to actively change the climate by learning
                  from communities around the world and their traditional
                  relationships with water.{" "}
                </p>
                <a
                  href="https://www.amazon.co.uk/Language-Water-Ancient-Techniques-Community/dp/1957869194"
                  target="_blank"
                >
                  Click here to purchase from Amazon.co.uk
                </a>
                {/* <p>All royalties go to the projects.</p> */}
                {/* <form
                  action="https://www.paypal.com/ncp/payment/GGXAZVKLY9BN4"
                  method="post"
                  target="_blank"
                  className="paypal-form"
                >
                  <input
                    className="pp-GGXAZVKLY9BN4"
                    type="submit"
                    value="Buy Now"
                  />
                  <img
                    src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
                    alt="cards"
                  />
                  <section>
                    {" "}
                    Powered by{" "}
                    <img
                      src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
                      alt="paypal"
                      className="paypal-image"
                    />
                  </section>
                </form> */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100">
              <div className="news-item">
                <img
                  className="rounded news-image"
                  src="/images/book-award.jpg"
                  alt="The Language of Water"
                />
                <h3>
                  The Language of Water wins the Future Water Award for 2025
                </h3>
                <p>
                  The Future Water Association is a network of Water Industry
                  organisations in the UK, organisations like ARUP OFWAT etc and
                  they 'Shape the future of water through collaboration,
                  innovation and education by having the 'honest conversation'.
                  Just the kind of folk we would like reading the book.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100">
              <div className="news-item">
                <img
                  className="rounded news-image"
                  src="/images/jal-sahelis.png"
                  alt="Jal Sahelis"
                />
                <h2>Language of Water Web Sessions</h2>
                <p>
                  Coming soon <a href="/contact">Contact us to attend.</a>
                </p>
                <h3>
                  Inaugural session presented by the Jal Sahelis: Friends of
                  Water India.
                </h3>
                <p>
                  <a
                    href="https://www.unicef.org/india/stories/jal-sahelis-lead-water-conservation-efforts-rajasthan"
                    target="_blank"
                  >
                    Click here to read Unicef's article about the Jal Sahelis.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
