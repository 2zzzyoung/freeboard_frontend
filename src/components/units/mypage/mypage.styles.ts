import styled from "@emotion/styled";

export const MyPageWrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1600px;
  margin: 0 auto;
`;

export const MyInfo = styled.div`
  width: 600px;
  margin: 0 auto;
  border: 15px dotted #007261;
  border-radius: 10px;
  padding: 30px;
  margin-top: 10%;
`;

export const MyImg = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 40px;
  border-radius: 50%;
  border: 1px solid lightgray;
  background-image: url("/Writer.png");
  background-size: cover;
`;

export const MyName = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #111;
  text-align: center;
`;

export const MyPoint = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: hotpink;
  text-align: center;
`;

export const TabMenuList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 100px 0;
  justify-content: space-around;
`;

export const TabMenu = styled.li`
  width: 20%;
  border-radius: 10px;
  border: 3px dashed hotpink;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 500;
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
