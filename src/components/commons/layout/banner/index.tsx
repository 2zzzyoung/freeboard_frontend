import * as S from "../../../../commons/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <S.BannerWrapper>
      <Slider {...settings}>
        <div>
          <S.BannerSliderItem src="/1.jpg" />
        </div>
        <div>
          <S.BannerSliderItem src="/2.jpg" />
        </div>
        <div>
          <S.BannerSliderItem src="/3.jpg" />
        </div>
      </Slider>
    </S.BannerWrapper>
  );
}
