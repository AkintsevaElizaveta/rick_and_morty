import styled from 'styled-components';

export const MainContainer = styled.li`
  display: flex;
  flex-direction: column;
  min-height: 244px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 8px 8px 4px 4px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 5px rgb(79, 173, 197, .5), 0 3px 4px rgba(79, 173, 197, .5), 0 2px 4px rgba(79, 173, 197, .5);
  }

  @media screen and (max-width: 768px) {
    min-height: 308px;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 168px;
  margin-bottom: 14px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;

  @media screen and (max-width: 768px) {
    height: 232px;
  }
`;

export const Name = styled.h6`
  color: #222222;
  margin: 0;
  letter-spacing: 0.15px;
`;

export const Species = styled.p`
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
  font-family: 'Roboto Light', sans-serif;
  font-size: 14px;
`;
