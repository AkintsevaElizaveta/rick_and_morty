import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import * as Styles from './styles';
import RmApi from '../../service/rm-service';

export function CharacterCard() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [data, setData] = useState(undefined);

  useEffect(() => {
    if (id) {
      RmApi.getOne(`${id}`)
        .then((res) => {
          setData(res);
        })
        .catch(() => console.log('error'));
    }
  }, [id]);

  return (
    <div>
      {data && <Styles.CardWrap>
        <Styles.BackButton onClick={() => navigate(-1)}>
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z' fill='black' />
          </svg>
          GO BACK
        </Styles.BackButton>

        <Styles.CardPhoto src={data.image} />

        <Styles.CardTitle>{data.name}</Styles.CardTitle>

        <Styles.Info>Information</Styles.Info>

        <Styles.CardList>
          <Styles.CardListItem>
            <strong>Gender</strong>
            {data.gender}
          </Styles.CardListItem>

          <Styles.CardListItem>
            <strong>Status</strong>
            {data.status}
          </Styles.CardListItem>

          <Styles.CardListItem>
            <strong>Specie</strong>
            {data.species}
          </Styles.CardListItem>

          <Styles.CardListItem>
            <strong>Origin</strong>
            {data.origin.name}
          </Styles.CardListItem>

          <Styles.CardListItem>
            <strong>Type</strong>
            {data.type || 'Unknown'}
          </Styles.CardListItem>
        </Styles.CardList>
      </Styles.CardWrap>}
    </div>
  );
}
