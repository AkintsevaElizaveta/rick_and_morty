import * as Styles from './styles';
import SearchIcon from '../../asserts/search.svg';

export function Search({ dataForSearch, setDataForSearch }) {
  return (
    <Styles.SearchWrap>
      <Styles.InputIcon src={SearchIcon} />
      <Styles.Input placeholder={'Filter by name...'}
                    value={dataForSearch}
                    onChange={(e) => setDataForSearch(e.target.value)}
      />
    </Styles.SearchWrap>
  );
}
