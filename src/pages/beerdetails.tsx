import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { BeerWrapper, ImageWrapper } from './beerlist';
import { useFetch } from '../api';

type BeerProps = {
  id: number,
  name: string,
  tagline: string,
  ibu: number,
  abv: number,
  description: string,
  image_url: string
};

type ParamTypes = {
  id: string
};

const BackLink = styled.a`
  color: #FFF;
  padding: 20px;
  margin-bottom: 15px;
  text-decoration: none;
  font-size: 40px;
  align-self: flex-start;

  &:hover {
    cursor: pointer;
  }
`;

const Beer = styled(BeerWrapper)`
  width: 100%;
  height: auto;
  display: flex;

  h5 {
    margin: 5px 0;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgWrapper = styled(ImageWrapper)`
  min-width: 130px;
  padding-top: 20px;

  img {
    height: 250px;
  }
`;

const Beerdetails = () => {
  const { id } = useParams<ParamTypes>();
  const url = `https://api.punkapi.com/v2/beers/${id}`;
  const { status, data } = useFetch<BeerProps[]>(url);

  const history = useHistory();

  return (
    <>
      {status === 'fetched' ? data?.map(
        (b) => (
          <>
            <BackLink onClick={() => history.goBack()}>&#8678;</BackLink>
            <Beer>
              <ImgWrapper>
                <img src={b.image_url} alt="" />
              </ImgWrapper>
              <FlexDiv>
                <h2>
                  {b.name}
                  {' '}
                  -
                  <small>{b.tagline}</small>
                </h2>
                <h5>
                  International Bitterness Units:
                  {b.ibu}
                </h5>
                <h5>
                  Alcohol by Volume:
                  {b.abv}
                </h5>
                <p>{b.description}</p>
              </FlexDiv>
            </Beer>
          </>
        ),
      ) : 'Loading...'}
    </>
  );
};

export default Beerdetails;
