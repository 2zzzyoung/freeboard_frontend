import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  width: 100%;
  padding: 50px 0 24px;
  border-bottom: 1px solid #161616;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: #161616;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -1px;
`;

export const Register = styled.button`
  width: 80px;
  height: 40px;
  background-color: #653f2a;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px 1.25%;
  cursor: pointer;
`;

export const LookProductList = styled.div`
  width: 150px;
  border: 1px solid #111;
  padding: 30px 10px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  background-color: #fff;
`;

export const LookProductListTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #111;
  text-align: center;
`;

export const LookProductImgBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LookProductImg = styled.div`
  width: 100px;
  height: 100px;
  background-position: center;
  background-size: cover;
  margin: 0 auto;
`;
