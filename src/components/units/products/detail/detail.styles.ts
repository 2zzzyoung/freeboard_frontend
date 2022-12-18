import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding-bottom: 120px;
`;

export const SellerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 20px 50px;
`;

export const SellerName = styled.div`
  font-size: 20px;
`;

export const CreateAt = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

export const ImgContentsWrapper = styled.div`
  display: flex;
`;

export const ImgWrapper = styled.div`
  width: 65%;
  img {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 60%;
  margin-left: 30px;
`;

export const TitleContentsWrapper = styled.div`
  padding-top: 50px;
`;

export const titleWrapper = styled.div`
  font-size: 40px;
  margin-bottom: 25px;
  font-weight: 600;
`;

export const PriceWrapper = styled.div`
  font-size: 30px;
  font-weight: 500;
`;
export const TitleMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(238, 238, 238);
  padding-bottom: 30px;
`;

export const TitleBottomWrapper = styled.div`
  display: flex;
  margin: 25px 0;
`;

export const TextContentsWrapper = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  margin: 10px 0px;
`;

export const TextStyle = styled.div`
  width: 28%;
  color: #999999;
  padding-left: 15px;
  margin-bottom: 20px;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
`;

export const AddressWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Address = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  width: 60%;
  height: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin: 30px 30px;
  gap: 10px;
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 500;
  width: 200px;
  /* height: 30px; */
  background: #005848;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 15px 20px 35px;
  cursor: pointer;
`;

export const MutationBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  cursor: pointer;
`;

export const MutationBtn = styled.button`
  background: #005848;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
`;

export const ImgMapWrapper = styled.div`
  display: flex;
`;

export const MapDiv = styled.div`
  height: 30%;
  margin: 50px 0;
`;

export const CommentBox = styled.div`
  margin-top: 100px;
`;

export const CommentTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #111;
`;
