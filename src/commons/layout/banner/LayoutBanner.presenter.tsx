import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToscroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/cat.png" />
        </div>
        <div>
          <SliderItem src="/cat.png" />
        </div>
        <div>
          <SliderItem src="/cat.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
