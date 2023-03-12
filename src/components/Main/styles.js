import styled from 'styled-components';

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1040px;
  margin: 86px auto;
`;

export const Logo = styled.img`
  display: block;
  margin: 0 auto 16px;

  @media screen and (max-width: 768px) {
    width: 312px;
  };
`;