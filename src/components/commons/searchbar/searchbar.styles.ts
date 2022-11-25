import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 776px;
  height: 52px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #d1a6a5;
  outline: none;
  background: none;
  border-radius: 10px;
`;

export const SearchBtn = styled.button`
  background: white;
  border: none;
  cursor: pointer;
  background: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
`;
