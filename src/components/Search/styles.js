import styled from "styled-components";

export const SearchWrap = styled.div`
  display: flex;
  padding: 16px;
  align-self: stretch;
  margin-bottom: 31px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

export const InputIcon = styled.img`
  margin-right: 12px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;