import styled from "styled-components";

export const PaginationWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  height: 20px;
  width: 27px;
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Roboto Light', sans-serif;
  font-size: 14px;
  background: #F2F2F7;
  border: none;
  border-radius: 4px;
  transition: 500ms;
  cursor: pointer;
  
  & > p {
    margin: 0;
  }
  
  &:disabled {
    color: #F2F2F7;
  }

  &:hover {
    background: #4FADC57F;
    box-shadow: 0 1px 5px rgba(9, 243, 30, 0.8), 0 3px 4px rgba(66, 245, 6, 0.8), 0 2px 4px rgba(49, 183, 4, 0.5);
  }

  @media screen and (max-width: 768px) {
    height: 40px;
    width: 54px;
  }  
`;

export const CurrentPageInput = styled.input`
  width: 30px;
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Roboto Light', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  outline: none;

  @media screen and (max-width: 768px) {
    width: 60px;
    padding: 9px 0;
  }
`;
