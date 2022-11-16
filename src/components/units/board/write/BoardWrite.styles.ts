import styled from "@emotion/styled";
import { IEnrollBtnProps } from "./BoardWrite.types";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* box-sizing: border-box; */
`;

export const MainWrapper = styled.div`
  width: 1200px;
  height: 1847px;
  margin: 100px;
  padding-top: 80px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
`;

export const TopInputContainer = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  padding-bottom: 40px;
`;

export const WriterContainer = styled.div`
  /* display: flex; */
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const PasswordContainer = styled.div``;

// export const Password = styled.div`
//   font-size: 16px;
//   font-weight: 500;
// `;

export const Input1 = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const Input2 = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Middle = styled.div`
  margin-bottom: 30px;
`;

export const Middle2 = styled.div`
  margin-bottom: 20px;
`;

export const Input3 = styled.input`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
`;

export const Input4 = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const ZipBtn = styled.button`
  width: 124px;
  height: 52px;
  background-color: #000000;
  color: white;
  margin-left: 15px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;

export const Address1 = styled.div`
  margin-bottom: 30px;
`;

export const Address2 = styled.div`
  margin-bottom: 40px;
`;

export const Youtube = styled.div`
  margin-bottom: 40px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Pick = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const UploadBtn = styled.button`
  background-color: #dbdbdb;
  width: 78px;
  height: 78px;
  border: none;
  cursor: pointer;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: row;
`;

export const Box2 = styled.div`
  display: flex;
  align-items: baseline;
  gap: 15px;
`;

export const EnrollBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 52px;
  background: ${(props: IEnrollBtnProps) =>
    props.isActive ? "#ffd600" : "default"};
  border: none;
  margin-top: 50px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 400px;
  cursor: pointer;
`;

export const Error = styled.div`
  font-size: 13px;
  color: red;
  padding-top: 10px;
`;
