import styled from 'styled-components';
import { Link } from 'react-router-dom';

type WrapperProps = {
  readonly jc: string;
  readonly fd: string;
};

const PageLink = styled(Link)`
  font-size: 50px;
  text-decoration: none;
  color: #1E1E1E;
  padding: 0 10px;
`;

export const BeerWrapper = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 1.25rem 1.5rem;
  color: #1E1E1E;
  height: 120px;
  margin-bottom: 30px;
`;

const Description = styled.p`
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const FlexDiv = styled.div<WrapperProps>`
  display: flex;
  ${({ jc }) => jc && `justify-content: ${jc};`}
  ${({ fd }) => fd && `flex-direction: ${fd};`}
`;

const FullDiv = styled.div`
  width: 100%;
`;

export const ImageWrapper = styled.div`
  min-width: 70px;
  padding-right: 10px;
  text-align: center;
  
  img {
    height: 120px;
  }
`;

type BeerProps = {
  id: number,
  name: string,
  description: string,
  image_url: string
};

const Beerlist = ({
  id, name, description, image_url,
}: BeerProps) => (
  <BeerWrapper>
    <FlexDiv jc="" fd="">
      <ImageWrapper>
        <img src={image_url} alt="" />
      </ImageWrapper>
      <FullDiv>
        <FlexDiv jc="space-between" fd="">
          <h2>{name}</h2>
          <PageLink to={`/beer/${id}`}>&#8680;</PageLink>
        </FlexDiv>
        <Description>{description}</Description>
      </FullDiv>
    </FlexDiv>
  </BeerWrapper>
);

export default Beerlist;
