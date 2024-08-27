import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./Slide.css";

type SlideType = {
  imgs: string[];
  settings: Setting;
};

type Setting = {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  centerMode?: boolean;
  centerPadding?: string;
  vertical?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  cssEase?: string;
};

export default function Slide({ imgs, settings }: SlideType) {
  return (
    <Slider {...settings}>
      {imgs.map((i, index) => (
        <div key={"slick" + i} id={"img" + index}>
          <img src={i} />
        </div>
      ))}
    </Slider>
  );
}
