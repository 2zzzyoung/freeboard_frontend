import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1600px;
  margin: 100px;
`;

export const TopListWrapper = styled.div`
  margin-top: 20px;
`;

export const BestWrapper = styled.div``;

export const SearchContainer = styled.div`
  display: flex;
  padding-bottom: 50px;
  justify-content: space-between;
`;

export const SearchBox = styled.div``;

export const SearchImg = styled.div``;

export const SearchInput = styled.input`
  width: 770px;
  height: 50px;
  border: none;
  background: #f2f2f2;
  border-radius: 10px;
  font-weight: 500;
`;

export const SearchDate = styled.div`
  width: 240px;
  height: 50px;
  border: 1px solid #f2f2f2; ;
`;

export const SearchBtn = styled.button`
  width: 80px;
  font-size: 16px;
  cursor: pointer;
  background-color: #d1a6a5;
  border: none;
  color: white;
  border-radius: 10px;
`;

export const ListWrapper = styled.div`
  border-top: 2px solid gray;
`;

export const Row = styled.div`
  height: 60px;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #568cbd;
`;

export const ColumnNumber = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnTitle = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;
`;
export const TextToken = styled.span`
  color: ${(props) => (props.isMatched ? "#EDCB67" : "")};
`;

export const ColumnWriter = styled.div`
  width: 20%;
  text-align: center;
`;
export const ColumnDate = styled.div`
  width: 10%;
  text-align: center;
`;

export const BottomContainer = styled.div`
  border-top: 2px solid gray;
  padding-top: 20px;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonImage = styled.div``;
export const Button = styled.button`
  width: 100px;
  height: 25px;
  background: white;
  border: 1px solid #f2f2f2;
  cursor: pointer;
`;
