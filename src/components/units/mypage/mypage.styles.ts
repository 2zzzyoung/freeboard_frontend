import styled from "@emotion/styled";

export const MyPageWrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const MyInfo = styled.div`
  width: 600px;
  margin: 0 auto;
  border: 1px solid #111;
  padding: 30px;
`;

export const MyImg = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 40px;
  border-radius: 50%;
  border: 1px solid lightgray;
`;

export const MyNicName = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #111;
  text-align: center;
`;

export const MyPoint = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: blue;
  text-align: center;
`;

export const TabMenuList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 100px 0;
`;

export const TabMenu = styled.li`
  width: 33.3%;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 400;
  color: #111;
  text-align: center;
  list-style: none;
  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px 1.25%;
  cursor: pointer;
`;
