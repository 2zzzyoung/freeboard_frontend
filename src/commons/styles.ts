import styled from "@emotion/styled";

export const BannerWrapper = styled.div`
  .slick-dots {
    bottom: 25px;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #fff;
  }
  .slick-dots li:hover button:before {
    color: black;
    opacity: 0.25;
  }
`;

export const BannerSliderItem = styled.img`
  margin: auto;
  /* width: auto; */
`;
