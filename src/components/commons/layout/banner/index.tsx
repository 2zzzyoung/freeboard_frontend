import * as S from "../../../../commons/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.BannerWrapper>
      <Slider {...settings}>
        <div>
          <S.BannerSliderItem src="/DogMarket.jpg" />
        </div>
        <div>
          <S.BannerSliderItem src="/DogMarket2.png" />
        </div>
        <div>
          <S.BannerSliderItem src="/DogMarket3.jpg" />
        </div>
      </Slider>
    </S.BannerWrapper>
  );
}
