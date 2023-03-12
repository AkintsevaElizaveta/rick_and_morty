import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 240px);
  align-items: center;
  gap: 20px;
  font-family: 'Roboto Light',sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  padding: 0;
  margin: 0 0 8px;
  list-style: none;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 240px);
  };

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 240px);
  };
  
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 312px);
  };
`;
