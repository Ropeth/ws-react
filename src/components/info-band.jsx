import worldMap from "../assets/world.png";
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
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-block w-100">
              <div className="news-item">
                <img
                  className="rounded news-image"
                  src="/images/language-of-water.jpg"
                  alt="The Language of Water"
                />
                <div>
                  <h3>
                    The Language of Water describes community water work around
                    the world
                  </h3>
                  <p>All royalties go to the projects.</p>
                  <form
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
                  </form>
                </div>
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
                <div>
                  <h3>
                    The Language of Water wins the Future Water Award for 2025
                    🙂👍🏼
                  </h3>
                  <p>
                    The Future Water Association is a network of Water Industry
                    organisations in the UK, organisations like ARUP OFWAT etc
                    and they 'Shape the future of water through collaboration,
                    innovation and education by having the 'honest
                    conversation'. Just the kind of folk we would like reading
                    the book 🙂🙏🏾
                  </p>
                </div>
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
                <div>
                  <h3>Language of Water Sessions</h3>
                  <p>
                    Starting 22<sup>nd</sup> July 2025
                  </p>
                  <p>Presented by the Jal Sahelis: Friends of Water India.</p>
                  <p>More details soon… </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <a
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
        </a> */}
      </div>
    </>
  );
}
