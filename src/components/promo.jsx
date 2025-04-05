import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const promoVids = {
  Africa: [
    {
      id: 1,
      title: "ReSCOPE Farmer Exchange Visit:",
      url: "https://www.youtube.com/embed/AUgx1aKY8P0?si=rnW-7dTro_9ftItA",
    },
    {
      id: 2,
      title: "Muonde Song of Purpose:",
      url: "https://www.youtube.com/embed/ZMeIlRoN9W4?si=MpqfMta-dmN5zTTL",
    },
    {
      id: 3,
      title: "RIDEP water hub:",
      url: "https://www.youtube.com/embed/LfkHRIdDkcU?si=0YGKL6oygEJ_x-u4",
    },
    {
      id: 4,
      title: "ReSCOPE water hub:",
      url: "https://www.youtube.com/embed/zryUR1d7Ta4?si=E7G_rRRVHWJzgoJ-",
    },
    {
      id: 5,
      title: "ReSCOPE: Haanamoonga Harvesting:",
      url: "https://www.youtube.com/embed/hf6icq9Hl0w?si=ydrPCOMjOhi_HXh7",
    },
  ],
  India: [
    {
      id: 1,
      title: "India 1",
      url: "https://www.youtube.com/embed/AUgx1aKY8P0?si=rnW-7dTro_9ftItA",
    },
    {
      id: 2,
      title: "India 2",
      url: "https://www.youtube.com/embed/ZMeIlRoN9W4?si=MpqfMta-dmN5zTTL",
    },
  ],
  Europe: [
    {
      id: 1,
      title: "Europe 1",
      url: "https://www.youtube.com/embed/AUgx1aKY8P0?si=rnW-7dTro_9ftItA",
    },
  ],
};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1550 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1550, min: 1250 },
    items: 3,
  },
  tablet3: {
    breakpoint: { max: 1250, min: 940 },
    items: 2,
  },
  tablet2: {
    breakpoint: { max: 940, min: 705 },
    items: 1.2,
  },
  tablet1: {
    breakpoint: { max: 705, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 575 },
    items: 0.8,
  },
  smaller: {
    breakpoint: { max: 575, min: 0 },
    items: 0.3,
  },
};
export default function Promo({ school }) {
  const videoRef = useRef(null);
  //   // Ensure school is a string and log it for debugging
  //   const schoolKey = String(school);
  //   console.log("School:", schoolKey);

  //   // Check if the school key exists in promoVids
  //   if (!promoVids[schoolKey]) {
  //     console.error(`No videos found for school: ${schoolKey}`);
  //     return null;
  //   }
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        //autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        centerMode={true}
      >
        {promoVids[school].map((vid) => (
          <div key={vid.id}>
            <iframe
              className="video"
              src={vid.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen=""
              ref={videoRef}
            ></iframe>
          </div>
        ))}
      </Carousel>
    </>
  );
}
