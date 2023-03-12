import React from 'react';
import { ItemOfList } from '../ItemOfList/ItemOfList';
import * as Styles from './styles';

export function ListOfChar({ data }) {
  return (
    <Styles.List>
      {data.map(item => (
        <ItemOfList item={item} />
      ))}
    </Styles.List>
  );
}