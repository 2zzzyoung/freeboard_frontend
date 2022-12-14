import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 152px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
`;

export const InnerLogo = styled.div`
  cursor: pointer;
`;

export const InnerButton = styled.button`
  margin: 10px;
  color: grey;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
`;

export const PointText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: red;
`;

export const BasketNum = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  font-size: 10px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  position: absolute;
  top: -7px;
  right: -8px;
  z-index: 2;
`;
