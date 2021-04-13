import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type WrapperProps = {
  readonly isActive: boolean;
};

const activeCss = css`
  background-color: #403C3B;
  color: #FFF;
  pointer-events: none;
`;

const PageLink = styled(Link)<WrapperProps>`
  user-select: none;
  text-decoration: none;
  background-color: #FFF;
  color: #282C34;
  padding: 5px 15px;
  border: 1px solid #000;
  font-size: 20px;
  transition: background-color 0.2s;
  min-height: 22px;
  min-width: 25px;
  text-align: center;
  ${({ isActive }) => isActive && activeCss};

  &:hover {
    background-color: #403C3B;
    color: #FFF;
  }

  &:first-child {
    border-radius: 12px 0 0 12px;
  }

  &:last-child {
    border-radius: 0 12px 12px 0;
  }

  &:first-child, &:last-child {
    padding: 3px 10px;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

type PaginationProps = {
  current: string
};

function createPages(current: number) {
  const arr = [];
  let base;

  if (current <= 4) {
    base = 1;
  } else {
    base = current - 3;
  }

  while (arr.length < 7) {
    arr.push(base += 1);
  }

  return arr;
}

const Pagination = ({ current }: PaginationProps) => {
  const currentPage = parseInt(current);
  const pagesArr = createPages(currentPage);
  const left = currentPage - 1;
  const right = currentPage + 1;

  return (
    <PaginationWrapper>
      <PageLink
        to={`/?page=${left}`}
        isActive={currentPage === 1}
      >
        &#8592;
      </PageLink>
      {
        pagesArr.map(
          (p) => (
            <PageLink
              key={p}
              to={`/?page=${p}`}
              isActive={currentPage === p}
            >
              {p}
            </PageLink>
          ),
        )
      }
      <PageLink
        to={`/?page=${right}`}
        isActive={false}
      >
        &#8594;
      </PageLink>
    </PaginationWrapper>
  );
};

export default Pagination;
