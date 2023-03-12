import React from 'react';
import * as Styles from './styles';
import { useNavigate } from 'react-router-dom';

export function ItemOfList({ item }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/details?id=${id}`);
  };

  return (
    <Styles.MainContainer
      key={item.id}
      onClick={() => handleClick(item.id)}>
      <Styles.Photo src={item.image} alt={item.name} />

      <div style={{ padding: '0 16px' }}>
        <Styles.Name>{item.name}</Styles.Name>
        <Styles.Species>{item.species}</Styles.Species>
      </div>
    </Styles.MainContainer>
  );
}
