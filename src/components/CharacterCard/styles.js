import styled from 'styled-components';

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

export const CardPhoto = styled.img`
  height: 300px;
  margin-bottom: 16px;
  border: 5px solid #F2F2F7;
  border-radius: 50%;
  
  @media screen and (max-width: 768px) {
    height: 150px;
    margin-bottom: 34px;
  }
`;

export const CardTitle = styled.p`
  color: #081F32;
  margin: 0 0 48px;
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  line-height: 56px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

export const Info = styled.h6`
  color: #8E8E93;
  margin: 0 0 57px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;

  @media screen and (max-width: 368px) {
   align-self: flex-start;
  }
`;

export const CardList = styled.ul`
  list-style: none;
  width: 413px;
  padding: 0;

  @media screen and (max-width: 768px) {
    width: 313px;
  }
`;

export const CardListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 9px 16px;
  color: #6E798C;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
  
  & > strong {
    color: #081F32;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: flex-start;
  margin-bottom: 32px;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  background: none;
  border: none;
  border-radius: 8px;
  transition: 500ms;
  cursor: pointer;

  &:hover {
    background: #4FADC57F;
    box-shadow: 0 1px 5px rgba(9, 243, 30, 0.8), 0 3px 4px rgba(66, 245, 6, 0.8), 0 2px 4px rgba(49, 183, 4, 0.5);
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 78px;
  }
`;
