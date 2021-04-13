import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Beer from './beerlist';
import Pagination from '../components/pagination';
import { useFetch } from '../api';

const Wrapper = styled.div`
  width: 100%;
  min-height: 70vh;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  input {
    padding: 10px;
    border-radius: 12px;
  }

  button {
    padding: 10px 15px;
  }
`;

type BeerProps = {
  id: number,
  name: string,
  description: string,
  image_url: string
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Beers = () => {
  const [search, setSearch] = useState('');
  const [searchURL, setSearchURL] = useState('');

  useEffect(() => {
    if (search) {
      setSearchURL(`https://api.punkapi.com/v2/beers?per_page=3&beer_name=${search}`);
    } else {
      setSearchURL('');
    }
  }, [search]);

  const query = useQuery();
  const page = query.get('page') || '1';
  const url = searchURL || `https://api.punkapi.com/v2/beers?per_page=3&page=${page}`;
  const { status, data } = useFetch<BeerProps[]>(url);

  return (
    <>
      <Wrapper>
        <FlexDiv>
          <div>
            <input
              type="text"
              placeholder="Search beers..."
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)}
            />
          </div>
        </FlexDiv>

        {status === 'fetched' && !data?.length && (
          'No result.'
        )}
        {status === 'fetched' ? data?.map(
          (b) => (
            <Beer
              key={b.id}
              id={b.id}
              name={b.name}
              description={b.description}
              image_url={b.image_url}
            />
          ),
        ) : 'Loading...'}
        {status === 'fetched' && !searchURL && (
          <Pagination current={page} />
        )}
      </Wrapper>
    </>
  );
};

export default Beers;
