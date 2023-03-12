import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styles from './styles';
import { Search } from '../Search/Search';
import logo from '../../asserts/logo.png';
import RmApi from '../../service/rm-service';
import { Pagination } from '../Pagination/Pagination';
import { ListOfChar } from '../ListOfCharacters/ListOfChar';

export function MainPage() {
  const [data, setData] = useState([]);
  const [dataForSearch, setDataForSearch] = useState(
    localStorage.getItem('dataForSearch'),
  );
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem('currentPage')) || 1,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (dataForSearch) {
      localStorage.setItem('dataForSearch', dataForSearch);

      RmApi.getByName(`${dataForSearch}`)
        .then((res) => {
          res.results.sort(function(a, b) {
            if (a.name < b.name) {
              return -1;
            } else if (a.name > b.name) {
              return 1;
            } else {
              return 0;
            }
          });
          setData(res.results);
        })
        .catch(() => console.log('error of search'));
    } else {
      localStorage.setItem('currentPage', currentPage);
      localStorage.setItem('dataForSearch', dataForSearch);

      RmApi.getList(`${currentPage}`)
        .then((res) => {
          res.results.sort(function(a, b) {
            if (a.name < b.name) {
              return -1;
            } else if (a.name > b.name) {
              return 1;
            } else {
              return 0;
            }
          });
          setData(res.results);
        })
        .catch(() => console.log('error'));
    }

  }, [currentPage, dataForSearch]);

  return (
    <Styles.MainWrap>
      <Styles.Logo src={logo} />
      <Search dataForSearch={dataForSearch} setDataForSearch={setDataForSearch} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <ListOfChar data={data} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Styles.MainWrap>
  );
}
