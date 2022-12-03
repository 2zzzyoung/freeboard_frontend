import styled from "@emotion/styled";

export const MainContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LineContainer = styled.div`
  width: 800px;
  height: 30px;
  border-bottom: 1px solid black;
`;

export const InputContainer = styled.div``;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InputBox = styled.input`
  width: 280px;
  height: 44px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  margin-left: 20px;
`;

export const BtnWrapper = styled.div`
  width: 800px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const JoinBtn = styled.button`
  width: 260px;
  height: 60px;
  background-color: #00362a;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
`;
