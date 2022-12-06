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
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px 1.25%;
`;
