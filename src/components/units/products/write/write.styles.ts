import { CheckCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  border-top: 2px solid black;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(220, 219, 228);
  padding: 32px 0;
  align-items: center;
`;

export const ProductInfo = styled.div`
  width: 20%;
  font-size: 18px;
`;

export const MainForm = styled.form`
  width: 1200px;
`;

export const ProductTitleWrapper = styled.div`
  display: flex;
  height: 150px;
  border-bottom: 1px solid rgb(220, 219, 228);
  padding: 32px 0;
  align-items: center;
`;

export const ProductContentsWrapper = styled.div`
  display: flex;
  height: 350px;
  border-bottom: 1px solid rgb(220, 219, 228);
  align-items: center;
`;

export const ProductTitleInput = styled.input`
  width: 75%;
  height: 50px;
  padding: 10px;
  border: 1px solid #055948;
  outline: none;
`;

export const ProductTitleCount = styled.div`
  margin-left: 24px;
`;

export const SellerInput = styled.input`
  width: 20%;
  border: 1px solid rgb(245, 126, 0);
  height: 50px;
  padding: 10px;
  outline: none;
`;
export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;

export const AddressWrapper = styled.div`
  display: flex;
  height: 140px;
  border-bottom: 1px solid rgb(220, 219, 228);
  padding: 32px 0;
  align-items: center;
`;

export const AddressBtn = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid #055948;
  background: none;
  cursor: pointer;
`;

export const AddressBtnWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  height: 140px;
  padding: 20px 0;
  justify-content: space-between;
`;

export const RemarksInput = styled.input`
  width: 75%;
  border: 1px solid #055948;
  height: 50px;
  padding: 10px;
  outline: none;
`;

export const AddressInput = styled.input`
  width: 75%;
  height: 40px;
  border: 1px solid #055948;
`;

export const ConditionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductLabel = styled.label`
  margin: 0 10px;
`;

export const OutLineStyle = styled(CheckCircleOutlined)`
  margin-left: 10px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
`;

export const PriceInput = styled.input`
  width: 40%;
  height: 40px;
  border: 1px solid #055948;
  margin-right: 5px;
  outline: none;
`;

export const ContentsArea = styled.textarea`
  border: 1px solid #055948;
  width: 75%;
  outline: none;
`;

export const TagInput = styled.input`
  outline: none;
  border: 1px solid #055948;
  height: 50px;
  width: 75%;
`;

export const CountInput = styled.input`
  border: 1px solid #055948;
  height: 50px;
  width: 30%;
  margin-right: 10px;
`;

export const EnrollBtn = styled.button`
  font-size: 15px;
  font-weight: 500;
  background-color: #055948;
  color: white;
  border: none;
  width: 15%;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
`;

export const EnrollBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const LabelContainer = styled.div`
  display: flex;
`;

export const ImgBtn = styled.label`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin-right: 15px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const ImgInput = styled.input`
  display: none;
`;

export const ErrorMsg = styled.div`
  margin-left: 10px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
`;

export const AddressInputWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const LatInput = styled.input`
  width: 10%;
  margin: 0 10px;
`;

export const LngInput = styled.input`
  width: 10%;
`;
