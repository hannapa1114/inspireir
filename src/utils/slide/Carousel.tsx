import { useEffect, useState } from "preact/hooks";
import "./Carousel.css";

const Carousel = () => {
  const images = [
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/wellness/Pool.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/wellness/InroomDining.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/wellness/VSPA.png",
    "https://webdevfiles.s3.ap-northeast-2.amazonaws.com/inspireir.jp/stay/wellness/FitnessCenter.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth] = useState(window.innerWidth);
  const [adjustWidth, setAdjustWidth] = useState(260);

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    console.log(windowWidth);
    if (windowWidth <= 390) setAdjustWidth(240);
    else if (windowWidth <= 375) setAdjustWidth(230);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * adjustWidth}px)` }}
      >
        {images.map((src) => (
          <img src={src} alt="carousel" className="carousel-img" />
        ))}
      </div>
      <div onClick={showNextImage} className="carousel-button"></div>
    </div>
  );
};

export default Carousel;
