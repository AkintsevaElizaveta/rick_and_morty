import * as Styles from './styles';

export function Pagination({ currentPage, setCurrentPage }) {

  return (
    <Styles.PaginationWrap>
      <Styles.Button onClick={() => setCurrentPage(1)}>
        <p>1</p>
      </Styles.Button>

      <Styles.Button disabled={currentPage === 1} onClick={() => setCurrentPage(--currentPage)}>
        <p>-</p>
      </Styles.Button>

      <Styles.CurrentPageInput value={currentPage} onChange={(e) => setCurrentPage(e.target.value)} />

      <Styles.Button disabled={currentPage === 42} onClick={() => setCurrentPage(++currentPage)}>
        <p>+</p>
      </Styles.Button>

      <Styles.Button onClick={() => setCurrentPage(42)}>
        <p>42</p>
      </Styles.Button>
    </Styles.PaginationWrap>

  );
}
