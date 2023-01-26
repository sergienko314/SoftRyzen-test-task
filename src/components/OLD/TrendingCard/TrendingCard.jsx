import { Wrapper, Img } from './TrendingCard.styles';

const TrendingCard = ({ img, alt }) => {
  return (
    <>
      <Wrapper>
        <Img src={img} alt={alt} />
      </Wrapper>
    </>
  );
};

export default TrendingCard;
