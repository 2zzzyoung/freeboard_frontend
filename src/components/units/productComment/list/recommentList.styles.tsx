import styled from "@emotion/styled";

export const CommentListBox = styled.div`
  width: 100%;
  margin: 25px 0;
  padding-left: 30px;
`;

export const CommentList = styled.div`
  position: relative;
  border-bottom: 1px solid gray;
  padding: 10px 0;
`;

export const WriterDate = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 10px;
`;

export const Writer = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #111;
  margin-bottom: 0;
`;

export const Date = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: gray;
  margin-bottom: 0;
`;

export const CommentContents = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #111;
`;

export const UpdateDel = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 10px;
  right: 0;
`;

export const CommentBtn = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #f7d3df;
  font-size: 14px;
  font-weight: 400;
  color: gray;
  cursor: pointer;
`;
