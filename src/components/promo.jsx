import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const promoItems = {
  Home: [
    {
      id: 1,
      title: "ReSCOPE Farmer Exchange Visit",
      url: "https://www.youtube.com/embed/AUgx1aKY8P0?si=rnW-7dTro_9ftItA",
      type: "video",
    },
    {
      id: 2,
      title: "Muonde Song of Purpose",
      url: "https://www.youtube.com/embed/ZMeIlRoN9W4?si=MpqfMta-dmN5zTTL",
      type: "video",
    },
    {
      id: 3,
      title: "How to make wooden log dams?",
      url: "https://www.youtube.com/embed/v7i3ccCxfYE?si=uDagniY5vBmIYIwC",
      type: "video",
    },
    {
      id: 4,
      title: "How to build a rain garden?",
      url: "https://www.youtube.com/embed/ItnQkwFZFPk?si=76XbQ-VNP2EGKTQf",
      type: "video",
    },
    {
      id: 5,
      title: "How to build a rain garden? (2)",
      url: "https://www.youtube.com/embed/KcoO4UnfjYM?si=CAU6snoUabAixZtH",
      type: "video",
    },
  ],
  Africa: [
    {
      id: 1,
      title: "ReSCOPE Farmer Exchange Visit:",
      url: "https://www.youtube.com/embed/AUgx1aKY8P0?si=rnW-7dTro_9ftItA",
      type: "video",
    },
    {
      id: 2,
      title: "Muonde Song of Purpose:",
      url: "https://www.youtube.com/embed/ZMeIlRoN9W4?si=MpqfMta-dmN5zTTL",
      type: "video",
    },
    {
      id: 3,
      title: "RIDEP water hub:",
      url: "https://www.youtube.com/embed/LfkHRIdDkcU?si=0YGKL6oygEJ_x-u4",
      type: "video",
    },
    {
      id: 4,
      title: "ReSCOPE water hub:",
      url: "https://www.youtube.com/embed/zryUR1d7Ta4?si=E7G_rRRVHWJzgoJ-",
      type: "video",
    },
    {
      id: 5,
      title: "ReSCOPE: Haanamoonga Harvesting:",
      url: "https://www.youtube.com/embed/hf6icq9Hl0w?si=ydrPCOMjOhi_HXh7",
      type: "video",
    },
  ],
  India: [
    {
      id: 1,
      title: "Women grassroots leaders transforming water systems",
      image: "/images/jal-sahelis-2.jpg",
      link: "/tribal-women-as-water-leaders",
      type: "news",
      new: true,
    },
    {
      id: 2,
      title: "Water for all",
      url: "https://www.youtube.com/embed/JKXGfyR5_SY?si=6NiS21Fhhf96QB2x",
      type: "video",
    },
    {
      id: 3,
      title: "Johads",
      url: "https://www.youtube.com/embed/MRwavSnUhLQ?si=UsVX1eOHejAULaZ3",
      type: "video",
    },
    {
      id: 4,
      title: "WaterUp Introduction",
      url: "https://www.youtube.com/embed/xQFsqN05eb4?si=gRXJYABBHOjkx0of",
      type: "video",
    },
    {
      id: 5,
      title: "WaterUp Language Neutral Tool",
      url: "https://www.youtube.com/embed/sx_Fre3VUU0?si=U9Co0JNQEmAUayw2",
      type: "video",
    },
    {
      id: 6,
      title: "Parmarth and Water School India",
      url: "https://www.youtube-nocookie.com/embed/CmIe-CMhD94?si=5XKsdroUEvvDjq5w",
      type: "video",
    },
  ],
  Europe: [
    {
      id: 1,
      title: "Water harvesting",
      url: "https://www.youtube.com/embed/ykIm5y3-tac?si=fFKe4jMozCaRKNQG",
      type: "video",
    },
    {
      id: 2,
      title: "How to make wooden log dams?",
      url: "https://www.youtube.com/embed/v7i3ccCxfYE?si=uDagniY5vBmIYIwC",
      type: "video",
    },
    {
      id: 3,
      title: "How to build a rain garden?",
      url: "https://www.youtube.com/embed/ItnQkwFZFPk?si=76XbQ-VNP2EGKTQf",
      type: "video",
    },
    {
      id: 4,
      title: "How to build a rain garden? (2)",
      url: "https://www.youtube.com/embed/KcoO4UnfjYM?si=CAU6snoUabAixZtH",
      type: "video",
    },
  ],
};
const responsive = {
  megaLargeDesktop: {
    breakpoint: { max: 1550, min: 3000 },
    items: 5,
  },
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1550 },
    items: 4,
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
  const itemRef = useRef(null);
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
        {promoItems[school].map((item) =>
          item.type === "video" ? (
            <div key={item.id}>
              <iframe
                className="video"
                src={item.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen=""
                ref={itemRef}
              ></iframe>
            </div>
          ) : (
            <div className="promo-news-item" key={item.id}>
              <img
                className="promo-news-image"
                src={item.image}
                alt={item.title}
              />
              <h3>{item.title}</h3>
              {item.new && <div className="new-tag">NEW</div>}
              <a className="full-div-link" href={item.link}></a>
            </div>
          ),
        )}
      </Carousel>
    </>
  );
}
