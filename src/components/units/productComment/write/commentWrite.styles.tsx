import styled from "@emotion/styled";

export const CommentWriteBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const CommentTextarea = styled.textarea`
  width: 90%;
  height: 120px;
  resize: none;
  padding: 12px;
`;

export const CommentSubmit = styled.button`
  width: 80px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background: #005848;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
`;
